import fs from 'fs';
import path from 'path';
import { supabaseAdmin, isSupabaseConfigured } from '../../../lib/supabase.js';

export async function POST({ request }) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file || typeof file === 'string') {
      return new Response(JSON.stringify({ success: false, error: 'Tidak ada berkas yang dipilih.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validasi ukuran berkas (Maksimal 2 MB sesuai PRD Bagian 11)
    const MAX_SIZE = 2 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      return new Response(JSON.stringify({ success: false, error: 'Ukuran foto terlalu besar. Maksimal 2 MB.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validasi tipe berkas (jpg, png, webp)
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      return new Response(JSON.stringify({ success: false, error: 'Format berkas tidak didukung. Gunakan JPG, PNG, atau WebP.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const ext = path.extname(file.name) || '.webp';
    const cleanBase = path.basename(file.name, ext).replace(/[^a-zA-Z0-9_-]/g, '_');
    const filename = `${Date.now()}-${cleanBase}${ext}`;

    // 1. Simpan ke Supabase Storage jika dikonfigurasi
    if (isSupabaseConfigured && supabaseAdmin) {
      const { data, error } = await supabaseAdmin.storage
        .from('seminarkit-media')
        .upload(filename, buffer, {
          contentType: file.type,
          upsert: true
        });

      if (error) {
        console.error('Supabase Storage upload error:', error);
        throw new Error(error.message);
      }

      const { data: pubData } = supabaseAdmin.storage
        .from('seminarkit-media')
        .getPublicUrl(filename);

      return new Response(JSON.stringify({ success: true, url: pubData.publicUrl }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 2. Fallback Lokal jika Supabase belum aktif
    const uploadDir = path.resolve('public/uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filePath = path.join(uploadDir, filename);
    fs.writeFileSync(filePath, buffer);

    return new Response(JSON.stringify({ success: true, url: `/uploads/${filename}` }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Upload handler error:', err);
    return new Response(JSON.stringify({ success: false, error: err.message || 'Gagal mengunggah foto.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
