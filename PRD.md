# PRD: Website Seminarkit (Souvenir Kantor)

| Item | Keterangan |
|---|---|
| Brand | seminarkit |
| Bidang usaha | Souvenir kantor (seminar kit, merchandise korporat) |
| Versi dokumen | 1.0 |
| Framework | Astro |
| Frontend | Bootstrap 5 (HTML), CSS kustom, JavaScript |
| Database & admin | Supabase (PostgreSQL, Auth, Storage) |
| Hosting | Vercel |
| Kontak WhatsApp | 082232730246 (format tautan: `https://wa.me/6282232730246`) |

---

## 1. Ringkasan

Seminarkit adalah website company profile sekaligus katalog souvenir kantor. Pengunjung dapat melihat produk beserta harga, melihat galeri, membaca blog, lalu memesan lewat WhatsApp atau mengirim pesan lewat form kontak. Seluruh konten utama (produk, galeri, blog) dan pesan masuk dikelola lewat panel admin yang terhubung ke database, sehingga pemilik bisa memperbarui isi website tanpa mengubah kode.

## 2. Tujuan

1. Menampilkan produk seminarkit secara profesional dan mudah dipahami calon pembeli korporat.
2. Mengarahkan pengunjung ke aksi: pesan lewat WhatsApp atau kirim pesan lewat form.
3. Memungkinkan admin mengelola produk, galeri, blog, dan pesan masuk secara mandiri.
4. Meraih trafik organik lewat struktur SEO, AEO, dan GEO yang rapi.
5. Memuat cepat di perangkat mobile.

### Indikator keberhasilan

- Admin dapat menambah, mengubah, dan menghapus produk, foto galeri, dan artikel blog tanpa menyentuh kode.
- Pesan dari form kontak tersimpan di database dan tampil di dashboard admin.
- Skor PageSpeed mobile 90 ke atas pada halaman beranda dan produk.
- Setiap produk dan artikel memiliki URL sendiri yang bisa diindeks Google.

## 3. Target Pengguna

| Pengguna | Kebutuhan |
|---|---|
| Pengunjung (HRD, panitia seminar, instansi, perusahaan, event organizer) | Melihat produk dan harga, menilai kredibilitas, memesan cepat lewat WhatsApp |
| Admin (pemilik atau staf seminarkit) | Mengelola produk, galeri, blog, testimoni, FAQ, dan membaca pesan masuk |

## 4. Ruang Lingkup

### Termasuk

- Website publik: beranda, tentang, produk, galeri, blog, kontak.
- Halaman pendukung: detail produk, detail blog, halaman 404.
- Panel admin: login, dashboard, kelola produk, galeri, blog, pesan masuk, serta testimoni dan FAQ.
- Integrasi database untuk semua konten dinamis dan form kontak.
- Tombol WhatsApp melayang dan tombol kembali ke atas.
- SEO teknis: meta tag, Open Graph, JSON-LD, sitemap, robots.txt.

### Tidak termasuk

- Keranjang belanja, checkout, dan pembayaran online.
- Akun pelanggan atau login pengunjung.
- Sistem multi-bahasa.
- Integrasi ekspedisi.

## 5. Arsitektur dan Teknologi

| Lapisan | Pilihan | Alasan |
|---|---|---|
| Framework | Astro (mode SSR dengan adapter Vercel) | Halaman produk dan blog yang datanya berubah dari database tetap dirender di server sehingga ramah SEO |
| UI | Bootstrap 5 (HTML), CSS kustom berbasis custom property, JavaScript vanilla | Ringan dan mudah dirawat |
| Database | Supabase PostgreSQL | Relasional, ada RLS, gratis untuk skala awal |
| Autentikasi admin | Supabase Auth (email dan password) | Tanpa membangun sistem login sendiri |
| Penyimpanan gambar | Supabase Storage (bucket `seminarkit-media`) | Upload gambar langsung dari panel admin |
| Deploy | Vercel | Terintegrasi dengan Astro |

> Catatan: pilihan Supabase adalah asumsi. Struktur tabel di bawah tetap bisa diterapkan ke database lain bila diperlukan.

### Catatan implementasi Astro

- Konten yang disuntik lewat JavaScript setelah halaman dimuat (misalnya galeri di sisi klien) memakai selector `:global()` pada CSS yang di-scope Astro.
- Kelas animasi `reveal` tidak dipasang pada elemen hasil injeksi asinkron, karena elemen tersebut bisa tidak pernah terlihat.
- Kunci `anon` Supabase hanya untuk operasi baca publik dan insert pesan. Operasi admin dilindungi RLS dan sesi login.

## 6. Peta Situs

```
/                       Beranda
/tentang                Tentang
/produk                 Daftar produk
/produk/[slug]          Detail produk
/galeri                 Galeri
/blog                   Daftar blog
/blog/[slug]            Detail blog
/kontak                 Kontak
/404                    Halaman tidak ditemukan

/admin/login            Login admin
/admin                  Dashboard
/admin/produk           Kelola produk
/admin/galeri           Kelola galeri
/admin/blog             Kelola blog
/admin/pesan            Pesan masuk
/admin/testimoni        Kelola testimoni
/admin/faq              Kelola FAQ
```

## 7. Komponen Global

| Komponen | Spesifikasi |
|---|---|
| Navbar | Logo seminarkit, menu: Beranda, Tentang, Produk, Galeri, Blog, Kontak. Menu aktif ditandai. Di mobile berupa sidebar |
| Footer | Logo, deskripsi singkat, tautan cepat, kontak (telepon, WhatsApp, email, alamat), jam kerja, sosial media, hak cipta |
| Tombol WhatsApp melayang | Tetap di pojok layar, membuka WhatsApp dengan pesan awal otomatis |
| Tombol kembali ke atas | Muncul setelah pengunjung menggulir ke bawah |
| Page banner | Judul halaman dan deskripsi singkat, dipakai di semua halaman selain beranda |
| Breadcrumb | Dipakai di semua halaman selain beranda, mengikuti jalur halaman |
| Tombol pesan WA | Tautan `wa.me` dengan teks otomatis yang memuat nama produk |

## 8. Spesifikasi Halaman Publik

### 8.1 Beranda (`/`)

| No | Section | Isi |
|---|---|---|
| 1 | Hero | Headline, subheadline, tombol utama (Lihat Produk) dan tombol sekunder (Pesan via WhatsApp), gambar utama |
| 2 | Tentang | Pengenalan singkat seminarkit, gambar pendukung, tautan ke halaman Tentang |
| 3 | Kenapa Pilih Kami | 4 sampai 6 poin keunggulan dengan judul dan deskripsi singkat |
| 4 | Produk | Card produk unggulan dari database. Setiap card: foto, nama, **harga**, deskripsi singkat, tombol **Detail Produk**, tombol **Pesan via WA**. Tautan Lihat Semua Produk |
| 5 | Galeri | Foto dinamis dari database (misalnya 6 sampai 8 foto terbaru), foto bisa diklik untuk diperbesar, tautan ke halaman Galeri |
| 6 | Testimoni | Kutipan, nama, jabatan, dan instansi pelanggan, diambil dari database |
| 7 | FAQ | Accordion pertanyaan dan jawaban, diambil dari database |
| 8 | CTA | Ajakan konsultasi dan pemesanan, tombol WhatsApp dan tombol ke halaman Kontak |

### 8.2 Tentang (`/tentang`)

| No | Section | Isi |
|---|---|---|
| 1 | Page banner + breadcrumb | Beranda > Tentang |
| 2 | Tentang | Profil seminarkit, cerita singkat, jenis produk yang ditawarkan, gambar |
| 3 | Keunggulan | Daftar keunggulan dalam grid card |
| 4 | CTA | Ajakan menghubungi dan memesan |

### 8.3 Produk (`/produk`)

| No | Section | Isi |
|---|---|---|
| 1 | Page banner + breadcrumb | Beranda > Produk |
| 2 | Produk | Grid card produk **dinamis dari database**: foto, nama, harga, deskripsi singkat, tombol Detail Produk, tombol Pesan via WA. Hanya produk berstatus aktif yang tampil |
| 3 | CTA | Ajakan konsultasi untuk pesanan custom atau jumlah besar |

**Detail produk (`/produk/[slug]`)**

- Breadcrumb: Beranda > Produk > Nama Produk.
- Galeri foto produk (satu foto utama dan beberapa foto pendukung).
- Nama, harga, deskripsi lengkap, spesifikasi.
- Tombol Pesan via WA dengan nama produk pada teks otomatis.
- Produk terkait.
- CTA.

### 8.4 Galeri (`/galeri`)

| No | Section | Isi |
|---|---|---|
| 1 | Page banner + breadcrumb | Beranda > Galeri |
| 2 | Galeri | Grid foto **dinamis dari database**, bisa diklik untuk dilihat lebih besar (lightbox), lazy loading |

### 8.5 Blog (`/blog`)

| No | Section | Isi |
|---|---|---|
| 1 | Page banner + breadcrumb | Beranda > Blog |
| 2 | Blog | Grid card artikel **dinamis dari database**: gambar, judul, ringkasan, tanggal, tautan baca selengkapnya |

**Detail blog (`/blog/[slug]`)**

- Breadcrumb: Beranda > Blog > Judul Artikel.
- Judul, tanggal terbit, penulis, gambar utama, isi artikel.
- Meta title dan meta description tersendiri.
- Artikel terkait.
- Tautan internal ke halaman produk bila relevan.

### 8.6 Kontak (`/kontak`)

| No | Section | Isi |
|---|---|---|
| 1 | Page banner + breadcrumb | Beranda > Kontak |
| 2 | Kontak | Info kontak (alamat, telepon, WhatsApp, email, jam kerja) dan **form pesan** |

**Form kontak**

| Field | Tipe | Validasi |
|---|---|---|
| Nama | teks | wajib |
| Email | email | wajib, format email |
| Nomor telepon / WA | teks | wajib, angka |
| Subjek | teks | opsional |
| Pesan | textarea | wajib, minimal 10 karakter |

Alur: pengunjung mengisi form, data divalidasi di sisi klien dan server, disimpan ke tabel `messages` dengan status `baru`, lalu pengunjung melihat notifikasi sukses. Perlindungan spam memakai honeypot dan pembatasan frekuensi kirim.

## 9. Panel Admin

Seluruh halaman `/admin/*` (kecuali login) hanya bisa diakses setelah login. Halaman admin diberi `noindex`.

| Modul | Fungsi |
|---|---|
| Login | Email dan password lewat Supabase Auth, logout, sesi otomatis berakhir |
| Dashboard | Ringkasan jumlah produk, foto galeri, artikel, pesan baru, dan daftar pesan terbaru |
| Produk | Tambah, ubah, hapus; upload foto utama dan foto pendukung; atur nama, slug, harga, deskripsi singkat, deskripsi lengkap, status aktif atau nonaktif, tandai unggulan di beranda, urutan tampil |
| Galeri | Upload banyak foto sekaligus, hapus foto, atur urutan, tandai tampil di beranda |
| Blog | Tambah, ubah, hapus artikel; judul, slug, ringkasan, isi, gambar utama, penulis, tanggal terbit, meta title, meta description, status draft atau terbit |
| Pesan masuk | Daftar pesan, buka detail, tandai sudah dibaca, hapus, tombol balas lewat WhatsApp atau email |
| Testimoni | Tambah, ubah, hapus, aktif atau nonaktif |
| FAQ | Tambah, ubah, hapus, atur urutan |

## 10. Model Data

### `products`
| Kolom | Tipe | Keterangan |
|---|---|---|
| id | uuid (PK) | |
| name | text | nama produk |
| slug | text (unik) | untuk URL |
| price | numeric | harga dalam rupiah |
| short_description | text | untuk card |
| description | text | untuk halaman detail |
| main_image | text | URL Storage |
| images | text[] | foto pendukung |
| is_featured | boolean | tampil di beranda |
| is_active | boolean | tampil di publik |
| sort_order | int | urutan |
| created_at | timestamptz | |

### `gallery`
| Kolom | Tipe | Keterangan |
|---|---|---|
| id | uuid (PK) | |
| image_url | text | URL Storage |
| alt_text | text | teks alternatif untuk SEO dan aksesibilitas |
| is_featured | boolean | tampil di beranda |
| sort_order | int | |
| created_at | timestamptz | |

### `posts`
| Kolom | Tipe | Keterangan |
|---|---|---|
| id | uuid (PK) | |
| title | text | |
| slug | text (unik) | |
| excerpt | text | ringkasan untuk card |
| content | text | isi artikel |
| cover_image | text | |
| author | text | |
| meta_title | text | |
| meta_description | text | |
| status | text | `draft` atau `published` |
| published_at | timestamptz | |
| created_at | timestamptz | |

### `messages`
| Kolom | Tipe | Keterangan |
|---|---|---|
| id | uuid (PK) | |
| name | text | |
| email | text | |
| phone | text | |
| subject | text | |
| message | text | |
| status | text | `baru`, `dibaca` |
| created_at | timestamptz | |

### `testimonials`
| Kolom | Tipe | Keterangan |
|---|---|---|
| id | uuid (PK) | |
| name | text | |
| position | text | jabatan |
| company | text | instansi |
| content | text | |
| is_active | boolean | |
| sort_order | int | |

### `faqs`
| Kolom | Tipe | Keterangan |
|---|---|---|
| id | uuid (PK) | |
| question | text | |
| answer | text | |
| sort_order | int | |
| is_active | boolean | |

## 11. Keamanan dan Hak Akses (RLS)

| Tabel | Pengunjung (anon) | Admin (authenticated) |
|---|---|---|
| products, gallery, testimonials, faqs | Baca data aktif saja | Baca, tambah, ubah, hapus |
| posts | Baca yang berstatus `published` | Baca, tambah, ubah, hapus |
| messages | Hanya **insert** | Baca, ubah status, hapus |
| Storage `seminarkit-media` | Baca | Upload dan hapus |

Ketentuan tambahan:

- RLS aktif di semua tabel.
- Validasi input di sisi klien dan server; keluaran konten di-escape agar aman dari XSS.
- Batas ukuran dan tipe file upload (jpg, png, webp; maksimal 2 MB per foto).
- Kunci rahasia disimpan di environment variable Vercel, tidak masuk repositori.

## 12. SEO, AEO, dan GEO

- Satu `<h1>` per halaman, hierarki heading rapi, URL deskriptif berbahasa Indonesia.
- `title` dan `meta description` unik per halaman; Open Graph dan Twitter Card.
- Data terstruktur JSON-LD: `Organization` atau `LocalBusiness`, `WebSite`, `BreadcrumbList`, `Product`, `Article`, `FAQPage`.
- `sitemap.xml` dinamis yang memuat produk dan artikel, serta `robots.txt`.
- Atribut `alt` wajib untuk setiap gambar produk dan galeri.
- Konten FAQ ditulis ringkas dan langsung menjawab, agar mudah dikutip mesin jawab (AEO dan GEO).
- Canonical URL pada semua halaman publik.

## 13. Kebutuhan Non-Fungsional

| Aspek | Target |
|---|---|
| Performa | PageSpeed mobile 90 ke atas, gambar format WebP, lazy loading, ukuran dan dimensi gambar ditentukan untuk mencegah layout shift |
| Responsif | Mobile first; diuji di lebar 360, 768, 1024, dan 1440 px |
| Aksesibilitas | Kontras warna memadai, navigasi keyboard, `alt` pada gambar, label pada form |
| Kompatibilitas | Chrome, Safari, Firefox, dan Edge versi terbaru |
| Keandalan | Halaman memiliki status kosong (belum ada produk, galeri, atau artikel) dan status gagal memuat data |
| Perawatan | Kode berstruktur komponen, token CSS terpusat, konfigurasi lewat environment variable |

## 14. Struktur Proyek (usulan)

```
seminarkit/
├─ public/
│  ├─ favicon.svg
│  └─ robots.txt
├─ src/
│  ├─ components/
│  │  ├─ Navbar.astro
│  │  ├─ Footer.astro
│  │  ├─ PageBanner.astro
│  │  ├─ Breadcrumb.astro
│  │  ├─ ProductCard.astro
│  │  ├─ PostCard.astro
│  │  ├─ GalleryGrid.astro
│  │  ├─ Testimonials.astro
│  │  ├─ Faq.astro
│  │  ├─ Cta.astro
│  │  └─ WhatsAppFloat.astro
│  ├─ layouts/
│  │  ├─ BaseLayout.astro
│  │  └─ AdminLayout.astro
│  ├─ lib/
│  │  ├─ supabase.js
│  │  └─ whatsapp.js
│  ├─ pages/
│  │  ├─ index.astro
│  │  ├─ tentang.astro
│  │  ├─ produk/index.astro
│  │  ├─ produk/[slug].astro
│  │  ├─ galeri.astro
│  │  ├─ blog/index.astro
│  │  ├─ blog/[slug].astro
│  │  ├─ kontak.astro
│  │  ├─ 404.astro
│  │  ├─ sitemap.xml.js
│  │  └─ admin/
│  │     ├─ login.astro
│  │     ├─ index.astro
│  │     ├─ produk.astro
│  │     ├─ galeri.astro
│  │     ├─ blog.astro
│  │     ├─ pesan.astro
│  │     ├─ testimoni.astro
│  │     └─ faq.astro
│  └─ styles/
│     ├─ tokens.css
│     └─ main.css
├─ astro.config.mjs
├─ .env.example
└─ package.json
```

## 15. Tahapan Pengerjaan

| Tahap | Pekerjaan |
|---|---|
| 1. Persiapan | Inisialisasi Astro, pasang Bootstrap, token CSS, layout dasar, navbar, footer |
| 2. Database | Buat proyek Supabase, tabel, RLS, bucket Storage, data contoh |
| 3. Halaman publik statis | Beranda, tentang, kontak (tampilan) |
| 4. Halaman dinamis | Produk, detail produk, galeri, blog, detail blog, testimoni, FAQ dari database |
| 5. Form kontak | Validasi, penyimpanan ke `messages`, anti-spam |
| 6. Panel admin | Login, dashboard, CRUD produk, galeri, blog, testimoni, FAQ, pesan masuk |
| 7. SEO dan performa | Meta, JSON-LD, sitemap, optimasi gambar, uji PageSpeed |
| 8. Pengujian dan rilis | Uji responsif dan fungsional, deploy ke Vercel, sambungkan domain |

## 16. Kriteria Penerimaan

- [ ] Semua halaman publik tampil sesuai spesifikasi dan responsif.
- [ ] Beranda memuat hero, tentang, kenapa pilih kami, produk, galeri, testimoni, FAQ, dan CTA.
- [ ] Halaman selain beranda memiliki page banner dan breadcrumb.
- [ ] Card produk menampilkan harga, deskripsi singkat, tombol detail produk, dan tombol pesan via WA.
- [ ] Produk, galeri, dan blog tampil dari database dan berubah setelah admin mengubahnya.
- [ ] Form kontak menyimpan pesan ke database dan pesan terlihat di `/admin/pesan`.
- [ ] Admin dapat login, mengelola produk, galeri, blog, testimoni, FAQ, dan membaca pesan.
- [ ] Pengunjung tanpa login tidak bisa mengakses `/admin` maupun mengubah data.
- [ ] Tombol WhatsApp mengarah ke 082232730246 dengan pesan awal yang sesuai.
- [ ] Meta tag, JSON-LD, sitemap, dan robots.txt tersedia.
- [ ] Skor PageSpeed mobile 90 ke atas pada beranda dan halaman produk.

## 17. Pertanyaan Terbuka

1. Apakah database yang dipakai Supabase seperti asumsi di dokumen ini?
2. Berapa jumlah admin yang akan login (satu akun atau beberapa)?
3. Apakah harga produk ditampilkan sebagai harga tetap, harga mulai dari, atau berdasarkan jumlah pesanan?
4. Apakah perlu notifikasi ke email atau WhatsApp admin saat ada pesan baru?
5. Apakah perlu halaman detail untuk setiap foto galeri, atau cukup lightbox?
6. Arah visual (warna, tipografi, gaya) akan dituangkan di DESIGN.md terpisah.
