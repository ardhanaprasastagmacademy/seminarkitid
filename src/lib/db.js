import { supabase, supabaseAdmin, isSupabaseConfigured } from './supabase.js';

// In-Memory Fallback State (Digunakan bila Supabase belum dihubungkan)
const fallbackData = {
  products: [
    {
      id: "a1b2c3d4-0001-4000-8000-000000000001",
      name: "Paket Seminar Kit Eksklusif",
      slug: "paket-seminar-kit-eksklusif",
      price: 125000,
      short_description: "Kombinasi notebook hardcover kulit sintetis A5, tumbler stainless 500ml, pulpen metal grafir, dan pouch kanvas premium.",
      description: "Paket Seminar Kit Eksklusif dirancang khusus untuk memenuhi standar acara korporat, konferensi internasional, dan rapat kerja penting. Setiap paket dikemas rapi dalam hardbox eksklusif berlogo instansi Anda. Menggunakan bahan berkualitas tinggi yang tidak hanya tampil elegan, namun juga awet digunakan jangka panjang oleh peserta.",
      main_image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80"
      ],
      is_featured: true,
      is_active: true,
      sort_order: 1,
      created_at: new Date().toISOString()
    },
    {
      id: "a1b2c3d4-0002-4000-8000-000000000002",
      name: "Tumbler Stainless Custom Logo",
      slug: "tumbler-stainless-custom-logo",
      price: 48000,
      short_description: "Tumbler vacuum flask tahan suhu panas dan dingin hingga 12 jam dengan cetak logo grafir laser presisi.",
      description: "Tumbler stainless steel 304 food-grade berkapasitas 500 ml dengan teknologi insulasi vakum ganda. Sangat cocok sebagai souvenir kantor sehari-hari yang bermanfaat dan menjaga hidrasi peserta. Logo perusahaan digrafir permanen menggunakan mesin laser serat presisi tinggi.",
      main_image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80"
      ],
      is_featured: true,
      is_active: true,
      sort_order: 2,
      created_at: new Date().toISOString()
    }
  ],
  gallery: [],
  posts: [],
  testimonials: [],
  faqs: [],
  messages: []
};

// Data Access Methods (Universal Support: Supabase OR Fallback)

export async function getProducts({ featuredOnly = false, activeOnly = true } = {}) {
  const client = supabaseAdmin || supabase;
  if (isSupabaseConfigured && client) {
    let query = client.from('products').select('*').order('sort_order', { ascending: true });
    if (activeOnly) query = query.eq('is_active', true);
    if (featuredOnly) query = query.eq('is_featured', true);
    const { data, error } = await query;
    if (!error && data) return data;
  }
  return fallbackData.products.filter(p => {
    if (activeOnly && !p.is_active) return false;
    if (featuredOnly && !p.is_featured) return false;
    return true;
  }).sort((a, b) => a.sort_order - b.sort_order);
}

export async function getProductBySlug(slug) {
  const client = supabaseAdmin || supabase;
  if (isSupabaseConfigured && client) {
    const { data, error } = await client.from('products').select('*').eq('slug', slug).single();
    if (!error && data) return data;
  }
  return fallbackData.products.find(p => p.slug === slug && p.is_active) || null;
}

export async function getGallery({ featuredOnly = false } = {}) {
  const client = supabaseAdmin || supabase;
  if (isSupabaseConfigured && client) {
    let query = client.from('gallery').select('*').order('sort_order', { ascending: true });
    if (featuredOnly) query = query.eq('is_featured', true);
    const { data, error } = await query;
    if (!error && data) return data;
  }
  return fallbackData.gallery.filter(g => {
    if (featuredOnly && !g.is_featured) return false;
    return true;
  }).sort((a, b) => a.sort_order - b.sort_order);
}

export async function getPosts({ publishedOnly = true } = {}) {
  const client = supabaseAdmin || supabase;
  if (isSupabaseConfigured && client) {
    let query = client.from('posts').select('*').order('published_at', { ascending: false });
    if (publishedOnly) query = query.eq('status', 'published');
    const { data, error } = await query;
    if (!error && data) return data;
  }
  return fallbackData.posts.filter(p => {
    if (publishedOnly && p.status !== 'published') return false;
    return true;
  }).sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());
}

export async function getPostBySlug(slug) {
  const client = supabaseAdmin || supabase;
  if (isSupabaseConfigured && client) {
    const { data, error } = await client.from('posts').select('*').eq('slug', slug).single();
    if (!error && data) return data;
  }
  return fallbackData.posts.find(p => p.slug === slug && p.status === 'published') || null;
}

export async function getTestimonials({ activeOnly = true } = {}) {
  const client = supabaseAdmin || supabase;
  if (isSupabaseConfigured && client) {
    let query = client.from('testimonials').select('*').order('sort_order', { ascending: true });
    if (activeOnly) query = query.eq('is_active', true);
    const { data, error } = await query;
    if (!error && data) return data;
  }
  return fallbackData.testimonials.filter(t => !activeOnly || t.is_active).sort((a, b) => a.sort_order - b.sort_order);
}

export async function getFaqs({ activeOnly = true } = {}) {
  const client = supabaseAdmin || supabase;
  if (isSupabaseConfigured && client) {
    let query = client.from('faqs').select('*').order('sort_order', { ascending: true });
    if (activeOnly) query = query.eq('is_active', true);
    const { data, error } = await query;
    if (!error && data) return data;
  }
  return fallbackData.faqs.filter(f => !activeOnly || f.is_active).sort((a, b) => a.sort_order - b.sort_order);
}

export async function createMessage({ name, email, phone, subject = "", message }) {
  const newMsg = {
    name,
    email,
    phone,
    subject: subject || "Pesan dari Form Kontak Website",
    message,
    status: 'baru'
  };

  const client = supabaseAdmin || supabase;
  if (isSupabaseConfigured && client) {
    const { data, error } = await client.from('messages').insert([newMsg]).select().single();
    if (!error && data) return data;
    if (error) console.error("Error creating message in Supabase:", error);
  }

  const fallbackMsg = { ...newMsg, id: `msg-${Date.now()}`, created_at: new Date().toISOString() };
  fallbackData.messages.unshift(fallbackMsg);
  return fallbackMsg;
}

export async function getMessages() {
  const client = supabaseAdmin || supabase;
  if (isSupabaseConfigured && client) {
    const { data, error } = await client.from('messages').select('*').order('created_at', { ascending: false });
    if (!error && data) return data;
  }
  return fallbackData.messages.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
}

export async function getAdminStats() {
  const [products, gallery, posts, messages] = await Promise.all([
    getProducts({ activeOnly: false }),
    getGallery(),
    getPosts({ publishedOnly: false }),
    getMessages()
  ]);

  const newMessagesCount = messages.filter(m => m.status === 'baru').length;

  return {
    productCount: products.length,
    galleryCount: gallery.length,
    postCount: posts.length,
    messageCount: messages.length,
    newMessagesCount,
    recentMessages: messages.slice(0, 5)
  };
}

// Admin Mutators (Menggunakan supabaseAdmin agar melewati batasan RLS pada server)

export async function updateMessageStatus(id, status) {
  const client = supabaseAdmin || supabase;
  if (isSupabaseConfigured && client) {
    const { error } = await client.from('messages').update({ status }).eq('id', id);
    if (error) throw new Error(error.message);
  }
  const msg = fallbackData.messages.find(m => m.id === id);
  if (msg) msg.status = status;
  return true;
}

export async function deleteMessage(id) {
  const client = supabaseAdmin || supabase;
  if (isSupabaseConfigured && client) {
    const { error } = await client.from('messages').delete().eq('id', id);
    if (error) throw new Error(error.message);
  }
  fallbackData.messages = fallbackData.messages.filter(m => m.id !== id);
  return true;
}

export async function saveProduct(product) {
  const client = supabaseAdmin || supabase;
  const payload = {
    name: product.name,
    slug: product.slug,
    price: Number(product.price) || 0,
    short_description: product.short_description || '',
    description: product.description || '',
    main_image: product.main_image || '',
    images: Array.isArray(product.images) ? product.images : (product.images ? [product.images] : []),
    is_featured: Boolean(product.is_featured),
    is_active: product.is_active !== false,
    sort_order: Number(product.sort_order) || 0
  };

  if (isSupabaseConfigured && client) {
    if (product.id) {
      const { data, error } = await client.from('products').update(payload).eq('id', product.id).select().single();
      if (error) throw new Error(error.message);
      return data;
    } else {
      const { data, error } = await client.from('products').insert([payload]).select().single();
      if (error) throw new Error(error.message);
      return data;
    }
  }

  // Fallback
  if (!product.id) {
    const newProd = { ...payload, id: `prod-${Date.now()}`, created_at: new Date().toISOString() };
    fallbackData.products.push(newProd);
    return newProd;
  } else {
    const idx = fallbackData.products.findIndex(p => p.id === product.id);
    if (idx !== -1) fallbackData.products[idx] = { ...fallbackData.products[idx], ...payload };
    return fallbackData.products[idx];
  }
}

export async function deleteProduct(id) {
  const client = supabaseAdmin || supabase;
  if (isSupabaseConfigured && client) {
    const { error } = await client.from('products').delete().eq('id', id);
    if (error) throw new Error(error.message);
  }
  fallbackData.products = fallbackData.products.filter(p => p.id !== id);
  return true;
}

export async function saveGalleryItem(item) {
  const client = supabaseAdmin || supabase;
  const payload = {
    image_url: item.image_url,
    alt_text: item.alt_text,
    is_featured: Boolean(item.is_featured),
    sort_order: Number(item.sort_order) || 0
  };

  if (isSupabaseConfigured && client) {
    if (item.id) {
      const { data, error } = await client.from('gallery').update(payload).eq('id', item.id).select().single();
      if (error) throw new Error(error.message);
      return data;
    } else {
      const { data, error } = await client.from('gallery').insert([payload]).select().single();
      if (error) throw new Error(error.message);
      return data;
    }
  }

  if (!item.id) {
    const newItem = { ...payload, id: `gal-${Date.now()}`, created_at: new Date().toISOString() };
    fallbackData.gallery.push(newItem);
    return newItem;
  } else {
    const idx = fallbackData.gallery.findIndex(g => g.id === item.id);
    if (idx !== -1) fallbackData.gallery[idx] = { ...fallbackData.gallery[idx], ...payload };
    return fallbackData.gallery[idx];
  }
}

export async function deleteGalleryItem(id) {
  const client = supabaseAdmin || supabase;
  if (isSupabaseConfigured && client) {
    const { error } = await client.from('gallery').delete().eq('id', id);
    if (error) throw new Error(error.message);
  }
  fallbackData.gallery = fallbackData.gallery.filter(g => g.id !== id);
  return true;
}

export async function savePost(post) {
  const client = supabaseAdmin || supabase;
  const payload = {
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt || '',
    content: post.content || '',
    cover_image: post.cover_image || '',
    author: post.author || 'Tim Redaksi seminarkit',
    meta_title: post.meta_title || null,
    meta_description: post.meta_description || null,
    status: post.status || 'draft',
    published_at: post.status === 'published' ? (post.published_at || new Date().toISOString()) : null
  };

  if (isSupabaseConfigured && client) {
    if (post.id) {
      const { data, error } = await client.from('posts').update(payload).eq('id', post.id).select().single();
      if (error) throw new Error(error.message);
      return data;
    } else {
      const { data, error } = await client.from('posts').insert([payload]).select().single();
      if (error) throw new Error(error.message);
      return data;
    }
  }

  if (!post.id) {
    const newPost = { ...payload, id: `post-${Date.now()}`, created_at: new Date().toISOString() };
    fallbackData.posts.push(newPost);
    return newPost;
  } else {
    const idx = fallbackData.posts.findIndex(p => p.id === post.id);
    if (idx !== -1) fallbackData.posts[idx] = { ...fallbackData.posts[idx], ...payload };
    return fallbackData.posts[idx];
  }
}

export async function deletePost(id) {
  const client = supabaseAdmin || supabase;
  if (isSupabaseConfigured && client) {
    const { error } = await client.from('posts').delete().eq('id', id);
    if (error) throw new Error(error.message);
  }
  fallbackData.posts = fallbackData.posts.filter(p => p.id !== id);
  return true;
}

export async function saveTestimonial(testimonial) {
  const client = supabaseAdmin || supabase;
  const payload = {
    name: testimonial.name,
    position: testimonial.position,
    company: testimonial.company,
    content: testimonial.content,
    is_active: Boolean(testimonial.is_active),
    sort_order: Number(testimonial.sort_order) || 0
  };

  if (isSupabaseConfigured && client) {
    if (testimonial.id) {
      const { data, error } = await client.from('testimonials').update(payload).eq('id', testimonial.id).select().single();
      if (error) throw new Error(error.message);
      return data;
    } else {
      const { data, error } = await client.from('testimonials').insert([payload]).select().single();
      if (error) throw new Error(error.message);
      return data;
    }
  }

  if (!testimonial.id) {
    const newTesti = { ...payload, id: `testi-${Date.now()}` };
    fallbackData.testimonials.push(newTesti);
    return newTesti;
  } else {
    const idx = fallbackData.testimonials.findIndex(t => t.id === testimonial.id);
    if (idx !== -1) fallbackData.testimonials[idx] = { ...fallbackData.testimonials[idx], ...payload };
    return fallbackData.testimonials[idx];
  }
}

export async function deleteTestimonial(id) {
  const client = supabaseAdmin || supabase;
  if (isSupabaseConfigured && client) {
    const { error } = await client.from('testimonials').delete().eq('id', id);
    if (error) throw new Error(error.message);
  }
  fallbackData.testimonials = fallbackData.testimonials.filter(t => t.id !== id);
  return true;
}

export async function saveFaq(faq) {
  const client = supabaseAdmin || supabase;
  const payload = {
    question: faq.question,
    answer: faq.answer,
    is_active: Boolean(faq.is_active),
    sort_order: Number(faq.sort_order) || 0
  };

  if (isSupabaseConfigured && client) {
    if (faq.id) {
      const { data, error } = await client.from('faqs').update(payload).eq('id', faq.id).select().single();
      if (error) throw new Error(error.message);
      return data;
    } else {
      const { data, error } = await client.from('faqs').insert([payload]).select().single();
      if (error) throw new Error(error.message);
      return data;
    }
  }

  if (!faq.id) {
    const newFaq = { ...payload, id: `faq-${Date.now()}` };
    fallbackData.faqs.push(newFaq);
    return newFaq;
  } else {
    const idx = fallbackData.faqs.findIndex(f => f.id === faq.id);
    if (idx !== -1) fallbackData.faqs[idx] = { ...fallbackData.faqs[idx], ...payload };
    return fallbackData.faqs[idx];
  }
}

export async function deleteFaq(id) {
  const client = supabaseAdmin || supabase;
  if (isSupabaseConfigured && client) {
    const { error } = await client.from('faqs').delete().eq('id', id);
    if (error) throw new Error(error.message);
  }
  fallbackData.faqs = fallbackData.faqs.filter(f => f.id !== id);
  return true;
}
