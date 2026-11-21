-- ============================================================================
-- Data Awal (Seed Data) untuk seminarkit (Souvenir Kantor)
-- Jalankan di SQL Editor Supabase setelah menjalankan schema.sql
-- ============================================================================

-- 1. Seed Produk (products)
INSERT INTO public.products (id, name, slug, price, short_description, description, main_image, images, is_featured, is_active, sort_order)
VALUES
(
  'a1b2c3d4-0001-4000-8000-000000000001',
  'Paket Seminar Kit Eksklusif',
  'paket-seminar-kit-eksklusif',
  125000,
  'Kombinasi notebook hardcover kulit sintetis A5, tumbler stainless 500ml, pulpen metal grafir, dan pouch kanvas premium.',
  'Paket Seminar Kit Eksklusif dirancang khusus untuk memenuhi standar acara korporat, konferensi internasional, dan rapat kerja penting. Setiap paket dikemas rapi dalam hardbox eksklusif berlogo instansi Anda. Menggunakan bahan berkualitas tinggi yang tidak hanya tampil elegan, namun juga awet digunakan jangka panjang oleh peserta.',
  'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
  ARRAY[
    'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80'
  ],
  TRUE,
  TRUE,
  1
),
(
  'a1b2c3d4-0002-4000-8000-000000000002',
  'Tumbler Stainless Custom Logo',
  'tumbler-stainless-custom-logo',
  48000,
  'Tumbler vacuum flask tahan suhu panas dan dingin hingga 12 jam dengan cetak logo grafir laser presisi.',
  'Tumbler stainless steel 304 food-grade berkapasitas 500 ml dengan teknologi insulasi vakum ganda. Sangat cocok sebagai souvenir kantor sehari-hari yang bermanfaat dan menjaga hidrasi peserta. Logo perusahaan digrafir permanen menggunakan mesin laser serat presisi tinggi.',
  'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80',
  ARRAY[
    'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=800&q=80'
  ],
  TRUE,
  TRUE,
  2
),
(
  'a1b2c3d4-0003-4000-8000-000000000003',
  'Notebook Hardcover Kulit A5',
  'notebook-hardcover-kulit-a5',
  35000,
  'Buku catatan hardcover berlapis kulit sintetis mewah dengan opsi emboss logo deboss atau hotprint foil emas.',
  'Notebook A5 premium dengan cover kulit sintetis bertekstur halus. Dilengkapi tali karet pengikat, pita pembatas buku, serta kantong selipan di cover belakang. Kertas bagian dalam bookpaper tebal berwarna krem yang nyaman untuk menulis.',
  'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=80',
  ARRAY[
    'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80'
  ],
  TRUE,
  TRUE,
  3
),
(
  'a1b2c3d4-0004-4000-8000-000000000004',
  'Tas Seminar Goodie Bag Canvas',
  'tas-seminar-goodie-bag-canvas',
  28000,
  'Tote bag kanvas tebal 12 oz dengan ritsleting kuat dan cetak sablon presisi untuk seminar dan rapat.',
  'Tas seminar kanvas premium yang ramah lingkungan dan kuat menampung beban laptop, modul seminar, dan tumbler. Jahitan ganda di bagian tali menjamin kekuatan tas saat dipakai mobilitas tinggi.',
  'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
  ARRAY[
    'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
  ],
  TRUE,
  TRUE,
  4
),
(
  'a1b2c3d4-0005-4000-8000-000000000005',
  'Pulpen Metal Promosi Grafir',
  'pulpen-metal-promosi-grafir',
  15000,
  'Pulpen metal berbobot mantap dengan mekanisme putar dan sentuhan grafir nama atau logo perusahaan.',
  'Pulpen metal promosi dengan refill gel kualitas tinggi yang lancar saat digunakan menandatangani dokumen. Bodi metal kokoh dengan balutan cat matte elegan memberikan kesan bonafit untuk instansi Anda.',
  'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80',
  ARRAY[
    'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80'
  ],
  TRUE,
  TRUE,
  5
),
(
  'a1b2c3d4-0006-4000-8000-000000000006',
  'Lanyard & ID Card Holder Kulit',
  'lanyard-id-card-holder-kulit',
  32000,
  'Tali id card kain tisu cetak sublim full colour dipadukan dengan tempat kartu bahan kulit sintetis elegan.',
  'Set lanyard eksklusif untuk identitas panitia, peserta seminar, maupun karyawan tetap. Tali bahan tisu halus tidak gatal di leher, dipadu holder kulit 2 slot kartu yang profesional.',
  'https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=800&q=80',
  ARRAY[
    'https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=800&q=80'
  ],
  FALSE,
  TRUE,
  6
)
ON CONFLICT (slug) DO NOTHING;

-- 2. Seed Galeri (gallery)
INSERT INTO public.gallery (id, image_url, alt_text, is_featured, sort_order)
VALUES
(
  'b1b2c3d4-0001-4000-8000-000000000001',
  'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
  'Paket seminar kit eksklusif notebook dan tumbler custom logo',
  TRUE,
  1
),
(
  'b1b2c3d4-0002-4000-8000-000000000002',
  'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80',
  'Produksi tumbler stainless hitam grafir laser logo instansi',
  TRUE,
  2
),
(
  'b1b2c3d4-0003-4000-8000-000000000003',
  'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=80',
  'Buku agenda catatan kulit sintetis emboss logo korporat',
  TRUE,
  3
),
(
  'b1b2c3d4-0004-4000-8000-000000000004',
  'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
  'Goodie bag tote bag kanvas sablon presisi untuk seminar nasional',
  TRUE,
  4
),
(
  'b1b2c3d4-0005-4000-8000-000000000005',
  'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80',
  'Pulpen metal promosi grafir nama peserta konferensi',
  TRUE,
  5
),
(
  'b1b2c3d4-0006-4000-8000-000000000006',
  'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80',
  'Kemasan hardbox souvenir kantor pesanan BUMN',
  TRUE,
  6
)
ON CONFLICT DO NOTHING;

-- 3. Seed Artikel Blog (posts)
INSERT INTO public.posts (id, title, slug, excerpt, content, cover_image, author, meta_title, meta_description, status, published_at)
VALUES
(
  'c1b2c3d4-0001-4000-8000-000000000001',
  'Seminar Kit Adalah: Pengertian, Isi, dan Cara Memilihnya',
  'seminar-kit-adalah',
  'Pahami apa itu seminar kit, fungsi strategisnya untuk branding korporat, komponen yang wajib ada, serta panduan memilih vendor terpercaya.',
  '<p class="lead-text"><strong>Seminar kit adalah</strong> paket perlengkapan yang dibagikan kepada peserta seminar, workshop, atau pelatihan kerja, biasanya berisi tas, buku catatan, pulpen, tumbler, dan souvenir pendukung yang dicetak dengan logo penyelenggara acara.</p><h2>Fungsi Strategis Seminar Kit bagi Perusahaan</h2><p>Bagi instansi pemerintah maupun korporasi, seminar kit bukan sekadar cenderamata seremonial. Perlengkapan ini memiliki fungsi ganda: mendukung kelancaran kegiatan belajar selama acara berlangsung, sekaligus menjadi media pengingat merek (brand recall) yang bertahan lama setelah kegiatan selesai.</p><h2>Komponen Wajib dalam Satu Paket Seminar Kit</h2><p>Paket seminar kit yang fungsional setidaknya memuat 4 pilar item utama: buku catatan, instrumen tulis, wadah tas, dan item penambah nilai seperti tumbler atau flashdisk.</p>',
  'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80',
  'Tim Redaksi seminarkit',
  'Seminar Kit Adalah: Pengertian, Isi, dan Cara Memilihnya | seminarkit',
  'Seminar kit adalah paket perlengkapan acara kantor berisi tas, notebook, dan pulpen custom logo. Simak panduan lengkap memilih paket seminar kit terbaik.',
  'published',
  NOW()
),
(
  'c1b2c3d4-0002-4000-8000-000000000002',
  'Isi Seminar Kit yang Bermanfaat untuk Peserta Acara Kantor',
  'isi-seminar-kit-yang-bermanfaat',
  'Hindari souvenir yang berakhir di tempat sampah. Ini 5 pilihan isi seminar kit fungsional yang benar-benar dipakai peserta dan bernilai tinggi.',
  '<p class="lead-text">Menentukan isi seminar kit sering kali membingungkan panitia. Memilih barang yang tepat akan meninggalkan impresi positif dan rasa hormat yang mendalam dari setiap peserta yang hadir.</p><h2>1. Tumbler Stainless Steel Food Grade</h2><p>Membawa botol minum pribadi kini menjadi kebiasaan profesional modern. Tumbler stainless SUS 304 dengan grafir laser logo instansi Anda akan dipakai berulang kali di kantor maupun saat perjalanan dinas.</p><h2>2. Notebook Hardcover Berjilid Rapi</h2><p>Kertas berkualitas dengan cover kulit sintetis memberikan kesan eksklusif yang membedakan acara Anda dari seminar biasa.</p>',
  'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1200&q=80',
  'Tim Redaksi seminarkit',
  'Isi Seminar Kit yang Bermanfaat untuk Peserta Acara Kantor | seminarkit',
  'Ketahui 5 isi seminar kit yang fungsional dan disukai peserta kantor: tumbler stainless, buku agenda kulit, hingga pulpen metal grafir.',
  'published',
  NOW()
)
ON CONFLICT (slug) DO NOTHING;

-- 4. Seed Testimoni (testimonials)
INSERT INTO public.testimonials (id, name, position, company, content, is_active, sort_order)
VALUES
(
  'd1b2c3d4-0001-4000-8000-000000000001',
  'Ratna Dewi, S.E.',
  'HR & General Affair Senior Specialist',
  'PT Telkom Akses Regional V',
  'Seminar kit dari seminarkit sangat rapi dan presisi. Kualitas tumbler dan buku catatan kulitnya di atas ekspektasi manajemen kami. Pesanan 350 paket selesai tepat waktu sebelum hari H Rakernas.',
  TRUE,
  1
),
(
  'd1b2c3d4-0002-4000-8000-000000000002',
  'Dimas Prasetyo, S.Kom.',
  'Ketua Panitia Simposium Nasional',
  'Ikatan Alumni Perguruan Tinggi Negeri',
  'Proses pemesanan via WhatsApp sangat tanggap. Tim desain membantu pembuatan mockup hingga fix, dan hasil grafir laser di pulpen metal sangat tajam dan presisi.',
  TRUE,
  2
),
(
  'd1b2c3d4-0003-4000-8000-000000000003',
  'Siti Nurhaliza, M.M.',
  'Corporate Communication Manager',
  'Bank Daerah Jawa Timur',
  'Sangat direkomendasikan untuk vendor souvenir korporat. Tim seminarkit komunikatif, transparan soal progres produksi, serta pengemasan kardusnya rapi dan aman.',
  TRUE,
  3
)
ON CONFLICT DO NOTHING;

-- 5. Seed FAQ (faqs)
INSERT INTO public.faqs (id, question, answer, sort_order, is_active)
VALUES
(
  'e1b2c3d4-0001-4000-8000-000000000001',
  'Apa itu seminar kit dan apa saja isinya?',
  'Seminar kit adalah satu paket perlengkapan yang dibagikan kepada peserta kegiatan seperti seminar, pelatihan, atau rapat kerja. Isinya umumnya berupa tas (tote bag atau pouch), buku catatan (notebook), pulpen promosi, tumbler, serta tanda pengenal (id card/lanyard) yang dicetak seragam dengan logo instansi penyelenggara.',
  1,
  TRUE
),
(
  'e1b2c3d4-0002-4000-8000-000000000002',
  'Berapa minimal order pemesanan souvenir di seminarkit?',
  'Minimal order (MOQ) untuk paket seminar kit lengkap adalah 30 paket. Untuk pemesanan produk satuan seperti tumbler atau tas goodie bag, minimal pemesanan mulai dari 50 pcs. Kami juga melayani pesanan partai besar di atas 1.000 pcs dengan penawaran harga grosir khusus.',
  2,
  TRUE
),
(
  'e1b2c3d4-0003-4000-8000-000000000003',
  'Berapa lama estimasi waktu proses produksi?',
  'Waktu pengerjaan standar berkisar antara 5 hingga 10 hari kerja setelah desain mockup disetujui (ACC) dan uang muka diterima. Untuk pesanan mendesak (express order), silakan konsultasikan jadwal acara Anda langsung dengan admin kami via WhatsApp.',
  3,
  TRUE
),
(
  'e1b2c3d4-0004-4000-8000-000000000004',
  'Apakah bisa cetak custom logo dan desain sendiri?',
  'Ya, seluruh produk kami dapat dicetak custom dengan logo, nama acara, maupun nama peserta. Kami mendukung metode cetak grafir laser, sablon presisi, cetak UV flatbed, bordir, serta deboss/hotprint emas. Format file yang disarankan adalah file vektor (PDF, AI, CDR, atau PNG resolusi tinggi tanpa latar).',
  4,
  TRUE
),
(
  'e1b2c3d4-0005-4000-8000-000000000005',
  'Bagaimana cara pemesanan dan mekanisme pembayarannya?',
  'Pemesanan dimulai dengan konsultasi kebutuhan via WhatsApp atau form kontak website. Tim kami akan mengirimkan invoice penawaran resmi dan visual mockup. Setelah kesepakatan, pemesan membayarkan DP sebesar 50%, proses produksi berjalan, dan pelunasan dilakukan saat pesanan siap dikirim.',
  5,
  TRUE
),
(
  'e1b2c3d4-0006-4000-8000-000000000006',
  'Apakah melayani pengiriman seminar kit ke luar kota di seluruh Indonesia?',
  'Tentu saja. Kami bekerja sama dengan berbagai ekspedisi kargo darat, laut, dan udara terpercaya (seperti JNE Trucking, Dakota Cargo, Indah Cargo, Baraka, dll.) untuk menjamin ongkos kirim tetap ekonomis dan barang tiba aman tepat waktu di seluruh Indonesia.',
  6,
  TRUE
)
ON CONFLICT DO NOTHING;
