import { getProducts, getPosts } from '../lib/db.js';

export async function GET() {
  const baseUrl = "https://seminarkit.id";

  const staticPages = [
    { url: "", priority: "1.0", changefreq: "weekly" },
    { url: "/tentang", priority: "0.8", changefreq: "monthly" },
    { url: "/produk", priority: "0.9", changefreq: "weekly" },
    { url: "/galeri", priority: "0.8", changefreq: "weekly" },
    { url: "/blog", priority: "0.8", changefreq: "weekly" },
    { url: "/kontak", priority: "0.7", changefreq: "monthly" }
  ];

  const [products, posts] = await Promise.all([
    getProducts({ activeOnly: true }),
    getPosts({ publishedOnly: true })
  ]);

  const productUrls = products.map((p) => ({
    url: `/produk/${p.slug}`,
    priority: "0.85",
    changefreq: "weekly",
    lastmod: p.created_at ? new Date(p.created_at).toISOString().split('T')[0] : undefined
  }));

  const postUrls = posts.map((post) => ({
    url: `/blog/${post.slug}`,
    priority: "0.75",
    changefreq: "monthly",
    lastmod: post.published_at ? new Date(post.published_at).toISOString().split('T')[0] : undefined
  }));

  const allUrls = [...staticPages, ...productUrls, ...postUrls];
  const today = new Date().toISOString().split('T')[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (item) => `  <url>
    <loc>${baseUrl}${item.url}</loc>
    <lastmod>${item.lastmod || today}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600"
    }
  });
}
