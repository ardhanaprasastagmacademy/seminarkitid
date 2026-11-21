# SEO-STRATEGY.md: Website Seminarkit (Souvenir Kantor)

Strategi SEO, AEO (Answer Engine Optimization), dan GEO (Generative Engine Optimization) untuk website seminarkit. Dokumen ini dipakai bersama `PRD.md` dan `DESIGN.md`.

| Item | Keterangan |
|---|---|
| Brand | seminarkit |
| Bidang | Souvenir kantor, seminar kit, merchandise korporat |
| Stack | Astro (SSR), Bootstrap, Supabase |
| Pasar | Indonesia, bahasa Indonesia (`id-ID`) |
| Konversi utama | Klik tombol WhatsApp (082232730246) dan pengiriman form kontak |
| Tanggal dokumen | 21 November 2026 |

---

## 0. Catatan Penting tentang Data Volume

Dokumen ini **tidak memuat angka volume pencarian bulanan**, karena angka resmi hanya tersedia dari alat seperti Google Keyword Planner, Semrush, atau Ahrefs, dan saya tidak punya akses ke alat tersebut. Menulis angka tanpa sumber akan menyesatkan.

Sebagai gantinya, daftar kata kunci disusun dari dua sumber:

1. Istilah yang dipakai vendor dan marketplace souvenir di Indonesia (judul produk, kategori, dan landing page pesaing). Istilah yang dipakai banyak penjual biasanya menandakan istilah yang dicari pembeli.
2. Pola pencarian umum untuk produk custom B2B: kata inti + "custom logo", "murah", "paket", "grosir", dan nama kota.

Kolom **Perkiraan permintaan** memakai tiga tingkat (Tinggi, Sedang, Rendah). Itu perkiraan relatif, bukan data. **Langkah validasi di Bagian 2 wajib dijalankan** sebelum kata kunci dikunci ke halaman. Jika hasil validasi berbeda dari tabel di sini, ikuti hasil validasi.

---

## 1. Tujuan dan KPI

| Tujuan | Indikator | Target 6 bulan (acuan awal) |
|---|---|---|
| Muncul untuk kata kunci inti | Posisi rata-rata kata kunci inti di Google Search Console | 10 besar untuk 5 kata kunci inti |
| Menambah trafik organik | Klik organik per bulan (GSC) | Naik bertahap tiap bulan, tetapkan baseline di bulan pertama |
| Menghasilkan permintaan | Klik tombol WhatsApp dan form kontak dari trafik organik | Tetapkan baseline di bulan pertama, target naik 20 persen per kuartal |
| Cakupan indeks | Halaman terindeks sesuai sitemap | 95 persen atau lebih |
| Kualitas teknis | Core Web Vitals dan PageSpeed mobile | Hijau pada semua halaman utama, skor 90 ke atas |

Angka target hanya acuan awal. Setelah 4 sampai 8 minggu data GSC terkumpul, ganti dengan target berbasis data.

---

## 2. Cara Validasi Kata Kunci (Wajib)

| Langkah | Alat | Yang dicek |
|---|---|---|
| 1 | Google Keyword Planner (gratis dengan akun Google Ads) | Rentang volume bulanan dan tingkat persaingan untuk setiap kata kunci di Bagian 4 |
| 2 | Google Trends (wilayah Indonesia, 12 bulan) | Musim naik-turun, misalnya menjelang akhir tahun (hampers) dan musim seminar |
| 3 | Google Autocomplete dan "Orang juga bertanya" | Variasi pertanyaan nyata untuk judul artikel dan FAQ |
| 4 | Pencarian saran di Tokopedia dan Shopee | Istilah produk yang dipakai pembeli |
| 5 | Cari kata kunci inti di Google, lihat 10 hasil teratas | Jenis halaman yang menang (marketplace, vendor, blog) dan seberapa kuat pesaing |
| 6 | Google Search Console (setelah situs hidup) | Kueri yang benar-benar menampilkan situs, jadikan dasar optimasi lanjutan |

Cara menetapkan prioritas setelah mendapat data:

```
Skor prioritas = Volume x Kecocokan produk x Niat beli  /  Kesulitan
```

- **Kecocokan produk:** apakah seminarkit benar-benar menjual atau bisa membuat barangnya.
- **Niat beli:** transaksional lebih tinggi daripada informasional.
- **Kesulitan:** makin banyak marketplace dan situs besar di 10 besar, makin sulit.

---

## 3. Lanskap Persaingan

Hal yang terlihat dari hasil pencarian untuk istilah seminar kit dan souvenir kantor:

- Hasil didominasi **marketplace** (Tokopedia, Shopee) dan **direktori B2B** (Indotrading). Halaman mereka kuat untuk kata kunci pendek seperti "seminar kit" dan "souvenir kantor".
- Vendor souvenir yang punya website sendiri memakai **landing page khusus per paket**, misalnya halaman paket seminar kit, dan menambah publikasi artikel serta pemberitaan.
- Isi paket seminar kit yang umum: tas (backpack, handbag, tote), notebook A5, pulpen, tumbler, flashdisk, lanyard dan id card holder, kaos atau polo, pouch, payung.
- Banyak listing menumpuk banyak kata kunci dalam satu judul (misalnya "souvenir kantor / seminar kit / hampers corporate / farewell gift"). Itu pola marketplace. **Website sendiri tidak perlu meniru** karena justru terlihat spam.

**Implikasi strategi**

1. Jangan hanya mengejar kata kunci pendek yang dikuasai marketplace. Bangun dari **long-tail** (custom logo, paket, kebutuhan acara tertentu, kota) yang lebih mudah dimenangkan.
2. Buat **halaman kategori dan landing page per paket seminar kit**, bukan hanya satu halaman produk umum.
3. Gunakan **konten blog** yang menjawab pertanyaan panitia acara. Marketplace jarang kuat di sisi ini.
4. Gunakan **sinyal lokal dan kepercayaan** (alamat, Google Business Profile, galeri hasil kerja, testimoni) yang tidak dimiliki halaman marketplace biasa.

---

## 4. Riset Kata Kunci

Keterangan kolom:

- **Permintaan (perkiraan):** Tinggi, Sedang, Rendah. Belum terverifikasi.
- **Intent:** I = informasional, K = komersial (membandingkan), T = transaksional (siap beli).
- **Prioritas:** P1 digarap pertama, P2 berikutnya, P3 pelengkap.

### 4.1 Kata kunci inti (kluster A)

| Kata kunci | Permintaan (perkiraan) | Intent | Halaman target | Prioritas |
|---|---|---|---|---|
| souvenir kantor | Tinggi | K, T | Beranda | P1 |
| seminar kit | Tinggi | K, T | Halaman produk (kategori) | P1 |
| souvenir seminar | Tinggi | K, T | Beranda dan produk | P1 |
| paket seminar kit | Tinggi | T | Landing paket seminar kit | P1 |
| seminar kit custom | Tinggi | T | Landing paket seminar kit | P1 |
| seminar kit murah | Tinggi | T | Landing paket seminar kit | P1 |
| souvenir kantor custom logo | Sedang sampai Tinggi | T | Produk | P1 |
| goodie bag seminar | Sedang | K, T | Produk (kategori tas) | P2 |
| merchandise kantor | Sedang | K | Produk | P2 |
| souvenir perusahaan | Sedang | K, T | Beranda, tentang | P2 |
| hampers corporate | Sedang sampai Tinggi (musiman) | T | Hanya jika seminarkit menjual hampers | P3 |

### 4.2 Kata kunci produk (kluster B)

Sesuaikan dengan produk yang benar-benar dijual dan tersedia di database.

| Kata kunci | Permintaan (perkiraan) | Intent | Halaman target | Prioritas |
|---|---|---|---|---|
| tumbler custom logo | Tinggi | T | Detail produk tumbler | P1 |
| notebook custom logo / blocknote custom | Sedang sampai Tinggi | T | Detail produk notebook | P1 |
| pulpen custom logo / pulpen promosi | Tinggi | T | Detail produk pulpen | P1 |
| tas seminar / tas seminar kit | Sedang sampai Tinggi | T | Detail produk tas | P1 |
| tote bag custom / handbag seminar | Tinggi | T | Detail produk tas | P2 |
| lanyard dan id card custom | Sedang | T | Detail produk lanyard | P2 |
| flashdisk custom / flashdisk grafir | Sedang | T | Detail produk flashdisk | P2 |
| payung custom logo | Sedang | T | Detail produk payung | P2 |
| kaos polo custom seminar | Sedang | T | Detail produk kaos | P3 |
| pouch custom / clutch seminar | Sedang | T | Detail produk pouch | P3 |
| mug custom, powerbank custom | Sedang | T | Detail produk (jika ada) | P3 |

### 4.3 Kata pengubah (modifier) transaksional

Gabungkan dengan kata kunci inti dan produk untuk membentuk long-tail. Pengubah ini biasanya menandai niat beli.

| Pengubah | Contoh gabungan |
|---|---|
| murah | seminar kit murah, souvenir kantor murah |
| custom logo / custom nama | souvenir kantor custom logo |
| grosir / partai | tumbler custom grosir |
| paket | paket seminar kit lengkap |
| harga | harga seminar kit, harga tumbler custom |
| minimal order | seminar kit minimal order 50 |
| eksklusif / premium | souvenir kantor premium |
| terdekat / di [kota] | souvenir kantor Malang |
| pesan / beli / jual | jual seminar kit |
| vendor / supplier / produsen | vendor seminar kit |

### 4.4 Kata kunci lokal (kluster C)

Gunakan **hanya kota yang benar-benar bisa dilayani**. Contoh pola (ganti sesuai area layanan seminarkit):

| Pola | Contoh | Halaman target | Prioritas |
|---|---|---|---|
| souvenir kantor [kota] | souvenir kantor Malang | Beranda dan halaman lokal | P1 |
| seminar kit [kota] | seminar kit Malang | Landing paket + halaman lokal | P1 |
| vendor souvenir [kota] | vendor souvenir seminar Surabaya | Halaman lokal | P2 |
| souvenir seminar [kota] | souvenir seminar Jawa Timur | Halaman lokal | P2 |
| pengiriman seluruh Indonesia | seminar kit kirim ke Jakarta | Halaman tentang atau FAQ | P3 |

Satu halaman lokal hanya dibuat jika isinya benar-benar berbeda (contoh proyek di kota itu, estimasi pengiriman, testimoni lokal). Halaman kota yang hanya menukar nama kota dianggap konten tipis.

### 4.5 Kata kunci berbasis acara (kluster D)

| Kata kunci | Permintaan (perkiraan) | Intent | Prioritas |
|---|---|---|---|
| souvenir seminar nasional | Sedang | K, T | P1 |
| souvenir workshop / pelatihan | Sedang | K, T | P2 |
| souvenir rapat kerja / rakernas | Sedang | K, T | P2 |
| souvenir gathering kantor | Sedang | K, T | P2 |
| souvenir ulang tahun perusahaan | Sedang | K, T | P2 |
| welcome kit karyawan baru | Rendah sampai Sedang | K, T | P3 |
| farewell gift / kado perpisahan kantor | Sedang | K, T | P3 |
| souvenir seminar mahasiswa / kampus | Sedang | K, T | P2 |
| souvenir acara pemerintah / dinas | Sedang | K, T | P3 |

### 4.6 Kata kunci informasional (kluster E, untuk blog dan AEO)

| Kata kunci / pertanyaan | Intent | Prioritas |
|---|---|---|
| seminar kit adalah | I | P1 |
| isi seminar kit apa saja | I | P1 |
| contoh seminar kit | I | P1 |
| ide souvenir seminar yang berguna | I | P1 |
| cara memilih souvenir kantor | I, K | P1 |
| anggaran seminar kit per peserta | I | P2 |
| souvenir kantor yang bermanfaat | I | P2 |
| perbedaan seminar kit dan goodie bag | I | P2 |
| bahan tumbler yang bagus untuk souvenir | I, K | P3 |
| cara memesan souvenir custom logo | I | P2 |
| berapa minimal order souvenir custom | I | P2 |
| tren souvenir kantor | I | P3 |

---

## 5. Pemetaan Kata Kunci ke Halaman

Aturan utama: **satu kata kunci utama = satu halaman.** Dua halaman tidak boleh menargetkan kata kunci utama yang sama (kanibalisasi).

| Halaman | URL | Kata kunci utama | Kata kunci pendukung |
|---|---|---|---|
| Beranda | `/` | souvenir kantor | souvenir seminar, souvenir perusahaan, merchandise kantor, [kota] |
| Produk (semua) | `/produk` | seminar kit | paket seminar kit, souvenir kantor custom logo |
| Landing paket | `/produk/paket-seminar-kit` | paket seminar kit | seminar kit custom, seminar kit murah |
| Detail produk | `/produk/[slug]` | [produk] custom logo | harga [produk], [produk] grosir |
| Galeri | `/galeri` | contoh souvenir kantor | contoh seminar kit, hasil produksi |
| Tentang | `/tentang` | vendor souvenir kantor | produsen seminar kit, [brand] |
| Blog | `/blog` | tips souvenir kantor | ide souvenir seminar |
| Detail blog | `/blog/[slug]` | sesuai artikel (Bagian 8) | variasi pertanyaan |
| Kontak | `/kontak` | pesan seminar kit | hubungi seminarkit, alamat |

Jika `paket-seminar-kit` dibuat, tambahkan di PRD sebagai halaman kategori atau gunakan filter kategori pada `/produk` dengan URL yang bisa diindeks (`/produk/kategori/paket-seminar-kit`).

---

## 6. Optimasi On-Page

### 6.1 Rumus meta

| Elemen | Aturan | Panjang |
|---|---|---|
| Title | Kata kunci utama di depan, lalu pembeda, lalu brand | Maksimal sekitar 60 karakter |
| Meta description | Manfaat, kata kunci utama, ajakan bertindak | 140 sampai 155 karakter |
| H1 | Satu per halaman, memuat kata kunci utama secara natural | Jelas dan spesifik |
| URL | Huruf kecil, kata dipisah tanda hubung, tanpa tanggal | Pendek |
| Alt gambar | Deskripsikan isi foto, sisipkan kata kunci hanya bila relevan | Satu kalimat pendek |

### 6.2 Contoh per halaman

**Beranda**
- Title: `Souvenir Kantor & Seminar Kit Custom Logo | seminarkit`
- Meta: `Pesan souvenir kantor dan paket seminar kit custom logo. Pilihan tumbler, notebook, tas, dan pulpen untuk seminar, workshop, dan acara perusahaan. Konsultasi via WhatsApp.`
- H1: `Souvenir kantor dan seminar kit custom untuk acara perusahaan Anda`

**Produk**
- Title: `Paket Seminar Kit & Souvenir Kantor Custom | seminarkit`
- Meta: `Lihat katalog seminar kit dan souvenir kantor lengkap dengan harga. Bisa custom logo, minimal order fleksibel. Pesan langsung via WhatsApp.`

**Detail produk (templat)**
- Title: `[Nama Produk] Custom Logo, Harga Mulai Rp[harga] | seminarkit`
- Meta: `[Nama Produk] custom logo untuk souvenir kantor dan seminar. [1 keunggulan]. Harga Rp[harga], pesan lewat WhatsApp.`
- Isi: deskripsi 150 kata atau lebih yang unik, spesifikasi (bahan, ukuran, metode cetak), minimal order, estimasi waktu produksi, foto asli, produk terkait.

**Detail blog (templat)**
- Title: `[Judul artikel dengan kata kunci] | seminarkit` (judul cukup 50 sampai 60 karakter)
- Meta description diisi dari kolom `meta_description` di database (PRD).

### 6.3 Struktur konten halaman

- Hierarki heading rapi: satu H1, H2 untuk bagian utama, H3 untuk sub-bagian.
- Paragraf pembuka berisi jawaban langsung (lihat Bagian 9).
- Tautan internal: produk ke artikel terkait, artikel ke produk yang dibahas, beranda ke kategori utama.
- Teks tautan deskriptif, bukan "klik di sini".
- Harga ditampilkan di halaman (sudah ada di desain card). Harga yang terlihat membantu pencarian transaksional.
- Hindari mengulang kata kunci secara dipaksakan. Tulis untuk manusia dulu.

### 6.4 Struktur URL

```
/                              
/tentang
/produk
/produk/[slug]
/produk/kategori/[kategori]     (jika kategori dibuat)
/galeri
/blog
/blog/[slug]
/kontak
```

Slug stabil. Jika slug berubah, buat pengalihan 301 dari slug lama.

---

## 7. Strategi Konten

### 7.1 Prinsip

1. Setiap artikel menjawab **satu pertanyaan spesifik** yang ditanyakan panitia acara atau HRD.
2. Setiap artikel menaut ke minimal **dua produk** atau landing paket yang relevan.
3. Artikel pendukung menaut ke **artikel pilar** dan sebaliknya (topic cluster).
4. Gunakan foto asli hasil produksi, bukan foto stok generik.
5. Perbarui artikel pilar minimal setahun sekali dan tampilkan tanggal diperbarui.

### 7.2 Artikel pilar dan pendukung (usulan 14 artikel)

| No | Judul kerja | Kata kunci utama | Jenis | Menaut ke |
|---|---|---|---|---|
| 1 | Seminar Kit Adalah: Pengertian, Isi, dan Cara Memilihnya (pilar) | seminar kit adalah | Pilar | Landing paket seminar kit |
| 2 | Isi Seminar Kit yang Bermanfaat untuk Peserta | isi seminar kit | Pendukung | Produk notebook, pulpen, tas |
| 3 | 15 Contoh Seminar Kit untuk Seminar, Workshop, dan Pelatihan | contoh seminar kit | Pendukung | Galeri, produk |
| 4 | Ide Souvenir Seminar yang Dipakai, Bukan Disimpan di Laci | ide souvenir seminar | Pendukung | Produk |
| 5 | Cara Memilih Souvenir Kantor Sesuai Anggaran dan Tujuan Acara (pilar) | cara memilih souvenir kantor | Pilar | Beranda, produk |
| 6 | Berapa Anggaran Seminar Kit per Peserta? | anggaran seminar kit | Pendukung | Landing paket |
| 7 | Seminar Kit vs Goodie Bag: Mana yang Cocok untuk Acara Anda | seminar kit vs goodie bag | Pendukung | Produk tas |
| 8 | Panduan Memesan Souvenir Custom Logo dari Desain sampai Kirim | cara memesan souvenir custom logo | Pendukung | Kontak |
| 9 | Minimal Order Souvenir Custom: Apa yang Perlu Diketahui | minimal order souvenir custom | Pendukung | Kontak, FAQ |
| 10 | Tumbler Custom untuk Souvenir Kantor: Bahan, Ukuran, dan Metode Cetak | tumbler custom souvenir | Pendukung | Detail tumbler |
| 11 | Souvenir untuk Rapat Kerja dan Gathering Kantor | souvenir rapat kerja | Pendukung | Produk |
| 12 | Welcome Kit Karyawan Baru: Isi dan Contohnya | welcome kit karyawan | Pendukung | Produk |
| 13 | Souvenir Kantor Menjelang Akhir Tahun: Panduan Waktu Pemesanan | souvenir akhir tahun kantor | Musiman | Produk |
| 14 | Tren Souvenir Kantor yang Banyak Dipilih Perusahaan | tren souvenir kantor | Pendukung | Beranda |

### 7.3 Templat artikel

```
Judul (H1): memuat kata kunci utama
Paragraf pembuka: jawaban langsung 40 sampai 60 kata
Daftar isi (tautan anchor)
H2: bagian utama (3 sampai 6)
  - paragraf pendek, daftar, atau tabel
  - foto asli dengan alt deskriptif
H2: Pertanyaan yang sering diajukan (3 sampai 5 tanya-jawab)
H2: Penutup dengan CTA (WhatsApp)
Penulis, tanggal terbit, tanggal diperbarui
Artikel terkait dan tautan ke produk
```

Panjang artikel: cukup untuk menjawab tuntas. Umumnya 900 sampai 1.800 kata untuk artikel pilar dan 600 sampai 1.000 kata untuk pendukung.

### 7.4 Kalender konten (3 bulan pertama)

| Bulan | Fokus | Artikel |
|---|---|---|
| 1 | Fondasi kluster inti | No 1, 2, 3, 5 |
| 2 | Kluster transaksional dan harga | No 4, 6, 8, 9 |
| 3 | Kluster acara dan musiman | No 7, 10, 11, 13 |

Terbitkan 1 sampai 2 artikel per minggu bila memungkinkan. Konsistensi lebih penting daripada jumlah.

### 7.5 Konten musiman

| Periode | Peluang |
|---|---|
| Kuartal 4 | Souvenir dan hampers akhir tahun, pesanan untuk acara tahun baru dan HUT perusahaan |
| Awal tahun | Seminar dan pelatihan tahunan, welcome kit rekrutmen |
| Menjelang hari raya | Parsel dan hampers perusahaan (jika produk tersedia) |
| Sepanjang tahun | Seminar nasional kampus, workshop, rapat kerja |

Siapkan dan terbitkan artikel musiman **4 sampai 8 minggu sebelum** puncak pencarian agar sempat diindeks.

---

## 8. SEO Teknis (Astro)

### 8.1 Rendering dan indeks

- Gunakan **SSR** untuk `/produk`, `/produk/[slug]`, `/blog`, `/blog/[slug]`, dan `/galeri` agar konten dari database sudah ada di HTML pertama. Jangan mengandalkan konten yang baru dimuat lewat JavaScript di klien untuk halaman yang ingin diindeks.
- Halaman `/admin/*` memakai `<meta name="robots" content="noindex, nofollow">` dan diblokir di `robots.txt`.
- Produk berstatus nonaktif dan artikel draft harus mengembalikan **404** (bukan konten kosong).

### 8.2 File dan tag wajib

| Item | Spesifikasi |
|---|---|
| `sitemap.xml` | Dinamis dari database: semua halaman publik, produk aktif, artikel terbit, dengan `lastmod` |
| `robots.txt` | Izinkan semua halaman publik, blokir `/admin`, cantumkan lokasi sitemap |
| Canonical | `<link rel="canonical">` pada setiap halaman, tanpa parameter pelacakan |
| Bahasa | `<html lang="id">` dan `og:locale="id_ID"` |
| Open Graph dan Twitter Card | Judul, deskripsi, gambar 1200 x 630 px |
| Favicon dan manifest | Tersedia |
| Pengalihan | 301 dari versi `http`, `www`, dan slug lama ke URL kanonik |
| Halaman 404 | Status HTTP 404 yang benar, berisi tautan ke produk dan beranda |

### 8.3 Performa (Core Web Vitals)

| Metrik | Target |
|---|---|
| LCP | Di bawah 2,5 detik |
| INP | Di bawah 200 ms |
| CLS | Di bawah 0,1 |

Tindakan:

- Gambar WebP, ukuran sesuai tampilan, atribut `width` dan `height`, `loading="lazy"` kecuali gambar hero (gunakan `fetchpriority="high"`).
- Gambar dari Supabase Storage dikecilkan sebelum disimpan (batas 2 MB sudah ada di PRD) atau gunakan transformasi gambar.
- Muat hanya bobot font yang dipakai, `font-display: swap`.
- Tunda JavaScript yang tidak penting. Lightbox dan bubble WhatsApp dimuat setelah interaksi atau saat idle.
- Cache data publik di edge atau gunakan `Cache-Control` yang sesuai untuk halaman SSR.

### 8.4 Pagination dan filter

- Daftar produk dan blog yang banyak dibagi per halaman dengan URL bersih (`/blog?halaman=2` atau `/blog/halaman/2`), setiap halaman punya canonical sendiri.
- Filter produk yang tidak bernilai pencarian (urutan, rentang harga) diberi `noindex` atau tidak membuat URL baru yang terindeks.
- Filter kategori yang bernilai pencarian (misalnya kategori tumbler) boleh diindeks dengan konten unik.

### 8.5 Data terstruktur (JSON-LD)

| Halaman | Skema |
|---|---|
| Semua halaman | `Organization` atau `LocalBusiness`, `WebSite`, `BreadcrumbList` |
| Detail produk | `Product` dengan `Offer` (harga, mata uang IDR, ketersediaan) |
| Detail blog | `Article` atau `BlogPosting` (penulis, tanggal terbit, tanggal diperbarui, gambar) |
| FAQ | `FAQPage` |
| Kontak | `ContactPoint` di dalam `Organization` |

Catatan: Google saat ini membatasi tampilan hasil kaya (rich result) FAQ hanya untuk situs otoritatif tertentu. Skema `FAQPage` tetap berguna untuk memperjelas isi halaman bagi mesin pencari dan mesin jawab. Tampilan rich result tidak dijamin.

**Contoh `Organization` (global)**

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "seminarkit",
  "url": "https://DOMAIN-ANDA",
  "logo": "https://DOMAIN-ANDA/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+6282232730246",
    "contactType": "customer service",
    "areaServed": "ID",
    "availableLanguage": "id"
  }
}
```

Jika seminarkit punya toko atau kantor fisik, ganti dengan `LocalBusiness` dan tambahkan `address`, `openingHours`, dan `geo`.

**Contoh `Product` (halaman detail)**

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Tumbler Custom Logo",
  "image": ["https://DOMAIN-ANDA/img/tumbler-1.webp"],
  "description": "Tumbler stainless custom logo untuk souvenir kantor dan seminar.",
  "brand": { "@type": "Brand", "name": "seminarkit" },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "IDR",
    "price": "45000",
    "availability": "https://schema.org/InStock",
    "url": "https://DOMAIN-ANDA/produk/tumbler-custom-logo"
  }
}
```

Isi `price` dari kolom `price` di database. Jangan menandai skema `Review` atau `AggregateRating` kecuali ulasan itu benar-benar ada dan tampil di halaman.

**Contoh `FAQPage`**

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Berapa minimal order seminar kit?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Tulis jawaban sesuai kebijakan seminarkit, misalnya minimal 50 paket."
    }
  }]
}
```

Isi teks FAQ di JSON-LD harus **sama** dengan teks yang terlihat di halaman.

---

## 9. AEO dan GEO

Mesin jawab (Google AI Overviews, ChatGPT, Perplexity, dan sejenisnya) cenderung mengutip halaman yang menjawab pertanyaan secara langsung dan jelas.

### 9.1 Praktik penulisan

1. **Jawaban di awal.** Setiap halaman dan artikel dibuka dengan jawaban 40 sampai 60 kata. Contoh: "Seminar kit adalah paket perlengkapan yang dibagikan kepada peserta seminar, biasanya berisi tas, buku catatan, pulpen, dan souvenir lain yang bisa dicetak logo penyelenggara."
2. **Definisi tegas.** Gunakan kalimat berpola "X adalah ..." untuk istilah inti.
3. **Format mudah diekstrak.** Gunakan daftar bernomor, tabel perbandingan, dan sub-judul berbentuk pertanyaan.
4. **Fakta spesifik.** Cantumkan bahan, ukuran, metode cetak, minimal order, estimasi produksi, dan rentang harga. Angka yang jelas lebih mudah dikutip.
5. **Konsistensi entitas.** Nama brand "seminarkit", alamat, nomor telepon, dan deskripsi usaha ditulis seragam di website, Google Business Profile, media sosial, dan direktori.
6. **Tanggal diperbarui.** Tampilkan tanggal pembaruan dan perbarui isi bila harga atau ketentuan berubah.
7. **Halaman FAQ nyata.** Gunakan pertanyaan yang benar-benar masuk dari pelanggan lewat WhatsApp dan form kontak.

### 9.2 Pertanyaan yang perlu dijawab (untuk FAQ beranda, produk, dan blog)

- Apa itu seminar kit dan apa isinya?
- Berapa minimal order seminar kit dan souvenir custom?
- Berapa lama waktu produksi?
- Apakah bisa custom logo dan desain sendiri? Format file apa yang diterima?
- Bagaimana cara pemesanan dan pembayaran?
- Apakah ada contoh produk (sampel) sebelum memesan dalam jumlah besar?
- Apakah melayani pengiriman ke luar kota?
- Berapa kisaran harga seminar kit per paket?

### 9.3 Sinyal kepercayaan (E-E-A-T)

- Halaman tentang yang jelas: siapa seminarkit, sejak kapan, apa yang dikerjakan.
- Galeri **foto hasil produksi asli** dan klien nyata.
- Testimoni dengan nama dan instansi (dengan izin).
- Kontak yang bisa diverifikasi: nomor WhatsApp, alamat, jam kerja.
- Nama penulis pada artikel dan keterangan keahlian singkat.

---

## 10. SEO Lokal dan Off-Page

### 10.1 Google Business Profile

- Buat dan verifikasi profil bisnis (kategori utama misalnya "Toko Souvenir" atau "Pemasok Barang Promosi", sesuaikan dengan pilihan yang tersedia).
- Isi alamat, jam kerja, nomor WhatsApp, tautan website, foto produk, dan deskripsi.
- Unggah foto baru secara rutin dan minta ulasan dari pelanggan nyata.
- Nama, alamat, dan telepon (NAP) harus **identik** dengan yang ada di website.

### 10.2 Direktori dan profil pendukung

| Platform | Tujuan |
|---|---|
| Tokopedia, Shopee | Menjaring pembeli di marketplace dan memperkuat sinyal merek (arahkan pembeli B2B besar ke website) |
| Indotrading dan direktori B2B | Backlink dan visibilitas pembeli korporat |
| Instagram dan TikTok | Bukti sosial, konten produksi, tautan ke website |
| LinkedIn halaman perusahaan | Menjangkau HRD dan panitia acara perusahaan |
| Direktori bisnis lokal | Kutipan (citation) dengan NAP konsisten |

### 10.3 Backlink yang sehat

- Kerja sama dengan event organizer, kampus, dan komunitas: tautan dari halaman kegiatan atau sponsor.
- Publikasi studi kasus (misalnya "Seminar kit untuk seminar nasional [nama acara]") dan minta tautan dari klien.
- Rilis berita atau liputan media lokal untuk proyek yang menarik.
- Hindari membeli tautan, jaringan blog privat, dan komentar spam. Itu berisiko penalti.

---

## 11. Pengukuran

| Alat | Fungsi |
|---|---|
| Google Search Console | Kueri, klik, impresi, posisi, cakupan indeks, Core Web Vitals. Daftarkan properti domain dan kirim sitemap |
| Google Analytics 4 | Trafik, sumber, perilaku |
| Bing Webmaster Tools | Pelengkap (juga memengaruhi sebagian mesin jawab) |
| PageSpeed Insights | Pemantauan performa |

**Event yang dilacak di GA4**

| Event | Pemicu |
|---|---|
| `click_whatsapp` | Klik tombol WhatsApp melayang, tombol Pesan via WA pada card, dan tombol di CTA |
| `generate_lead` | Form kontak berhasil terkirim |
| `view_product` | Pembukaan halaman detail produk |
| `click_detail_produk` | Klik tombol Detail Produk |

Sertakan parameter nama produk dan halaman asal agar tahu halaman dan produk mana yang menghasilkan permintaan.

**Ritme evaluasi**

- Mingguan: cek cakupan indeks dan error di GSC.
- Bulanan: laporan klik, impresi, posisi, konversi per kluster kata kunci. Perbarui halaman yang impresinya tinggi tetapi klik rendah (perbaiki title dan meta).
- Kuartalan: ulang riset kata kunci, tambah artikel pada celah baru, perbarui artikel lama.

---

## 12. Rencana 90 Hari

| Minggu | Pekerjaan |
|---|---|
| 1 sampai 2 | Validasi kata kunci (Bagian 2), kunci pemetaan halaman, siapkan sitemap, robots, canonical, JSON-LD dasar |
| 2 sampai 3 | Tulis ulang teks beranda, produk, tentang, dan kontak sesuai Bagian 6. Isi semua produk dengan deskripsi unik, harga, dan alt gambar |
| 3 sampai 4 | Buat landing paket seminar kit. Pasang GSC, GA4, dan pelacakan WhatsApp. Verifikasi Google Business Profile |
| 5 sampai 8 | Terbitkan artikel bulan 1 dan 2 (Bagian 7.4). Tambah FAQ nyata. Kumpulkan testimoni dan foto hasil produksi |
| 9 sampai 12 | Terbitkan artikel bulan 3. Bangun backlink awal (direktori, kolaborasi). Evaluasi data GSC pertama, sesuaikan prioritas kata kunci |

---

## 13. Daftar Periksa

### Sebelum rilis
- [ ] Kata kunci tervalidasi di Keyword Planner dan pemetaan halaman final.
- [ ] Setiap halaman punya title, meta description, H1, dan canonical unik.
- [ ] Produk dan artikel dirender di sisi server dan punya URL sendiri.
- [ ] `sitemap.xml` dan `robots.txt` aktif, `/admin` diberi noindex.
- [ ] JSON-LD `Organization`, `WebSite`, `BreadcrumbList`, `Product`, `Article`, dan `FAQPage` lolos uji di Rich Results Test.
- [ ] Semua gambar punya `alt`, `width`, `height`, dan format WebP.
- [ ] PageSpeed mobile 90 ke atas, Core Web Vitals hijau.
- [ ] Pelacakan klik WhatsApp dan pengiriman form berjalan.
- [ ] Halaman 404 mengembalikan status 404.

### Setelah rilis
- [ ] Sitemap dikirim ke GSC dan Bing Webmaster Tools.
- [ ] Google Business Profile terverifikasi, NAP konsisten.
- [ ] Artikel pertama terbit dan terindeks.
- [ ] Laporan GSC dan GA4 pertama dibuat di akhir bulan pertama.

---

## 14. Hal yang Dihindari

- Menumpuk kata kunci pada title, deskripsi, atau footer.
- Menduplikasi deskripsi produk dari marketplace atau pesaing.
- Membuat puluhan halaman kota yang isinya sama.
- Memakai teks tersembunyi, tautan berbayar, atau jaringan backlink.
- Memakai konten buatan mesin tanpa penyuntingan dan fakta asli (harga, bahan, minimal order).
- Menandai ulasan atau rating di JSON-LD yang tidak ada di halaman.
- Mengganti slug tanpa pengalihan 301.
