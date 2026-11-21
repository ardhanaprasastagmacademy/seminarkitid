import { saveFaq, deleteFaq } from '../../../lib/db.js';

export async function POST({ request }) {
  try {
    const data = await request.json();
    const item = await saveFaq(data);
    return new Response(JSON.stringify({ success: true, data: item }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

export async function DELETE({ request }) {
  try {
    const data = await request.json();
    await deleteFaq(data.id);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
