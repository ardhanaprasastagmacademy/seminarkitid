/**
 * WhatsApp Helper Utilities
 * Nomor Resmi: 082232730246 (Format: 6282232730246)
 */

export const WA_PHONE_NUMBER = "6282232730246";
export const WA_DISPLAY_NUMBER = "0822-3273-0246";

export function getWhatsAppUrl(customText) {
  const defaultText = "Halo seminarkit, saya ingin bertanya tentang produk souvenir kantor.";
  const text = customText || defaultText;
  return `https://wa.me/${WA_PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function getProductWhatsAppUrl(productName, price) {
  const priceText = price ? ` (Rp ${Number(price).toLocaleString("id-ID")})` : "";
  const message = `Halo seminarkit, saya tertarik memesan souvenir custom ${productName}${priceText}. Mohon informasi ketersediaan, minimal order, dan waktu produksi.`;
  return getWhatsAppUrl(message);
}

export function getConsultationWhatsAppUrl(eventName = "") {
  const detail = eventName ? ` untuk ${eventName}` : "";
  const message = `Halo seminarkit, saya ingin konsultasi paket seminar kit custom${detail} untuk kebutuhan acara kantor kami.`;
  return getWhatsAppUrl(message);
}
