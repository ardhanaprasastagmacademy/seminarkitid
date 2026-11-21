-- Skema Database PostgreSQL untuk Supabase - seminarkit (Souvenir Kantor)
-- Sesuai PRD.md Bagian 10 & 11

-- 1. Tabel Produk (products)
CREATE TABLE IF NOT EXISTS public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  price NUMERIC NOT NULL DEFAULT 0,
  short_description TEXT NOT NULL,
  description TEXT NOT NULL,
  main_image TEXT NOT NULL,
  images TEXT[] DEFAULT '{}',
  is_featured BOOLEAN NOT NULL DEFAULT FALSE,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Tabel Galeri (gallery)
CREATE TABLE IF NOT EXISTS public.gallery (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url TEXT NOT NULL,
  alt_text TEXT NOT NULL,
  is_featured BOOLEAN NOT NULL DEFAULT FALSE,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. Tabel Blog (posts)
CREATE TABLE IF NOT EXISTS public.posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  cover_image TEXT,
  author TEXT NOT NULL DEFAULT 'Tim seminarkit',
  meta_title TEXT,
  meta_description TEXT,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4. Tabel Pesan Masuk (messages)
CREATE TABLE IF NOT EXISTS public.messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'baru' CHECK (status IN ('baru', 'dibaca')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 5. Tabel Testimoni (testimonials)
CREATE TABLE IF NOT EXISTS public.testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  position TEXT NOT NULL,
  company TEXT NOT NULL,
  content TEXT NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  sort_order INT NOT NULL DEFAULT 0
);

-- 6. Tabel FAQ (faqs)
CREATE TABLE IF NOT EXISTS public.faqs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  sort_order INT NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT TRUE
);

-- Indexing untuk Kecepatan Query
CREATE INDEX IF NOT EXISTS idx_products_slug ON public.products(slug);
CREATE INDEX IF NOT EXISTS idx_products_active ON public.products(is_active);
CREATE INDEX IF NOT EXISTS idx_posts_slug ON public.posts(slug);
CREATE INDEX IF NOT EXISTS idx_posts_status ON public.posts(status);
CREATE INDEX IF NOT EXISTS idx_messages_status ON public.messages(status);

-- ============================================================================
-- KEAMANAN DAN ROW LEVEL SECURITY (RLS)
-- ============================================================================

ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;

-- Products RLS
CREATE POLICY "Publik dapat membaca produk aktif"
  ON public.products FOR SELECT
  USING (is_active = TRUE);

CREATE POLICY "Admin memiliki akses penuh pada produk"
  ON public.products FOR ALL
  TO authenticated
  USING (TRUE)
  WITH CHECK (TRUE);

-- Gallery RLS
CREATE POLICY "Publik dapat membaca galeri"
  ON public.gallery FOR SELECT
  USING (TRUE);

CREATE POLICY "Admin memiliki akses penuh pada galeri"
  ON public.gallery FOR ALL
  TO authenticated
  USING (TRUE)
  WITH CHECK (TRUE);

-- Posts RLS
CREATE POLICY "Publik hanya dapat membaca posting terbit"
  ON public.posts FOR SELECT
  USING (status = 'published');

CREATE POLICY "Admin memiliki akses penuh pada posting"
  ON public.posts FOR ALL
  TO authenticated
  USING (TRUE)
  WITH CHECK (TRUE);

-- Messages RLS
CREATE POLICY "Publik hanya dapat mengirim pesan"
  ON public.messages FOR INSERT
  WITH CHECK (TRUE);

CREATE POLICY "Admin memiliki akses penuh pada pesan masuk"
  ON public.messages FOR ALL
  TO authenticated
  USING (TRUE)
  WITH CHECK (TRUE);

-- Testimonials & FAQs RLS
CREATE POLICY "Publik dapat membaca testimoni aktif"
  ON public.testimonials FOR SELECT
  USING (is_active = TRUE);

CREATE POLICY "Admin memiliki akses penuh pada testimoni"
  ON public.testimonials FOR ALL
  TO authenticated
  USING (TRUE)
  WITH CHECK (TRUE);

CREATE POLICY "Publik dapat membaca faq aktif"
  ON public.faqs FOR SELECT
  USING (is_active = TRUE);

CREATE POLICY "Admin memiliki akses penuh pada faq"
  ON public.faqs FOR ALL
  TO authenticated
  USING (TRUE)
  WITH CHECK (TRUE);

-- Storage Bucket setup (Jalankan di Supabase Dashboard Storage jika diperlukan)
-- Bucket: 'seminarkit-media' (Public)
