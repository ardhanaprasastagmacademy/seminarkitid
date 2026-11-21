import { createMessage } from '../../lib/db.js';

export async function POST({ request }) {
  try {
    const data = await request.json();
    const { name, email, phone, subject, message, _gotcha } = data;

    if (_gotcha) {
      return new Response(JSON.stringify({ success: true, message: "Pesan terkirim." }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    if (!name || !email || !phone || !message) {
      return new Response(JSON.stringify({ success: false, error: "Semua kolom wajib diisi." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const saved = await createMessage({ name, email, phone, subject, message });

    return new Response(JSON.stringify({ success: true, data: saved }), {
      status: 201,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: "Gagal menyimpan pesan." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
