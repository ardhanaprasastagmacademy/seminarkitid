# Panduan Menghubungkan Website Seminarkit ke Database Supabase

Panduan langkah demi langkah untuk mengkoneksikan website **seminarkit** ke basis data **Supabase PostgreSQL**, sistem autentikasi, serta penyimpanan media storage.

---

## 1. Arsitektur Basis Data

Website seminarkit menggunakan arsitektur **Astro SSR (Server-Side Rendering)** yang terhubung langsung dengan Supabase. Website ini dilengkapi fitur **Dual-Mode**:
- **Mode Lokal / Fallback:** Jika variabel Supabase belum diisi di `.env`, website tetap berjalan menggunakan data tiruan (mock data) di memori agar website langsung bisa diuji tanpa hambatan.
- **Mode Live Supabase:** Begitu kredensial Supabase dimasukkan ke file `.env`, website otomatis beralih membaca dan menulis ke server Supabase Anda secara langsung.

Tabel yang digunakan sesuai [PRD.md](file:///c:/PROJECT/seminarkitid/PRD.md):
1. `products` — Data produk dan paket seminar kit
2. `gallery` — Foto hasil produksi dan portofolio
3. `posts` — Artikel blog edukasi dan strategi SEO
4. `messages` — Pesan masuk dari formulir kontak publik
5. `testimonials` — Kutipan ulasan klien korporat
6. `faqs` — Tanya jawab seputar pemesanan dan pengiriman

---

## 2. Langkah 1: Membuat Proyek di Supabase

1. Buka browser dan masuk ke [https://supabase.com](https://supabase.com).
2. Masuk (Sign In) menggunakan akun GitHub atau akun email Anda.
3. Di halaman dashboard organisasi, klik tombol **New Project**.
4. Isi formulir pembuatan proyek:
   - **Name:** `seminarkit-db` (atau nama lain yang Anda inginkan)
   - **Database Password:** Buat kata sandi yang kuat dan simpan di tempat aman.
   - **Region:** Pilih wilayah terdekat dengan target pengunjung, disarankan **Singapore (ap-southeast-1)**.
   - **Pricing Plan:** Pilih **Free Plan** (sudah mencakup kebutuhan awal).
5. Klik **Create new project** dan tunggu sekitar 1-2 menit hingga proses inisialisasi selesai.

---

## 3. Langkah 2: Menjalankan Skrip Struktur Tabel (`schema.sql`)

Setelah proyek Supabase aktif, Anda perlu membuat struktur tabel, indeks pencarian, serta aturan keamanan baris (Row Level Security / RLS).

1. Di menu sidebar kiri dashboard Supabase, klik ikon **SQL Editor**.
2. Klik tombol **New Query**.
3. Buka berkas [supabase/schema.sql](file:///c:/PROJECT/seminarkitid/supabase/schema.sql) di komputer Anda, salin seluruh isinya, dan tempelkan ke editor SQL Supabase.
4. Klik tombol **Run** (atau tekan tombol pintas `Ctrl + Enter`).
5. Pastikan muncul notifikasi **"Success. No rows returned"**.
6. Anda dapat memverifikasi tabel telah terbuat dengan mengklik menu **Table Editor** di sidebar kiri. Pastikan keenam tabel (`products`, `gallery`, `posts`, `messages`, `testimonials`, `faqs`) telah muncul.

---

## 4. Langkah 3: Mengisi Data Awal (`seed.sql`)

Agar katalog produk, galeri, blog pilar, testimoni, dan FAQ langsung memiliki isi awal yang lengkap dan ramah SEO:

1. Di menu **SQL Editor**, buat query baru dengan mengklik tanda tambah (**+**) di samping tab query.
2. Buka berkas [supabase/seed.sql](file:///c:/PROJECT/seminarkitid/supabase/seed.sql), salin seluruh isinya, dan tempelkan ke editor SQL Supabase.
3. Klik tombol **Run**.
4. Pastikan data berhasil masuk ke tabel masing-masing.

---

## 5. Langkah 4: Membuat Storage Bucket untuk Foto (`seminarkit-media`)

Storage bucket digunakan untuk menyimpan foto produk dan foto galeri yang diunggah melalui panel admin.

1. Di sidebar kiri Supabase, klik menu **Storage**.
2. Klik tombol **New bucket**.
3. Isi konfigurasi bucket:
   - **Bucket name:** `seminarkit-media` *(wajib persis nama ini sesuai spesifikasi PRD)*.
   - **Public bucket:** **Aktifkan (ON)** toggle ini agar foto dapat diakses dan ditampilkan di website publik tanpa memerlukan token sementara.
4. Klik **Save**.

---

## 6. Langkah 5: Mengambil Kunci API Supabase

Untuk menghubungkan aplikasi website ke proyek Supabase:

1. Di sidebar kiri Supabase, klik ikon roda gigi **Project Settings**.
2. Pilih submenu **API** (di bawah menu Configuration).
3. Cari dan salin nilai-nilai berikut:
   - **Project URL:** Contoh: `https://abcdefghijklm.supabase.co`
   - **anon / public key:** Kunci token panjang berawalan `eyJhbGciOi...`
   - **service_role key:** Kunci rahasia admin (simpan dengan aman).

---

## 7. Langkah 6: Konfigurasi di Lingkungan Lokal (`.env`)

1. Pada folder utama proyek Anda (`c:\PROJECT\seminarkitid\`), buat file baru bernama `.env`.
2. Anda bisa menduplikasi dari template [.env.example](file:///c:/PROJECT/seminarkitid/.env.example).
3. Isi nilai kunci yang telah Anda salin pada Langkah 5:

```env
# URL & Kunci API Supabase
PUBLIC_SUPABASE_URL=https://abcdefghijklm.supabase.co
PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Akun Admin Default Website
ADMIN_EMAIL=admin@seminarkit.id
ADMIN_PASSWORD=adminseminarkit2026
```

4. Simpan file `.env`. (Pastikan file `.env` tidak di-commit ke Git; file ini sudah terdaftar di `.gitignore`).

---

## 8. Langkah 7: Mendaftarkan Akun Pengguna Admin (Supabase Auth)

Untuk mengelola konten website melalui Supabase Auth:

1. Di sidebar kiri Supabase, klik menu **Authentication**.
2. Masuk ke tab **Users**.
3. Klik tombol **Add user** > **Create user**.
4. Masukkan kredensial:
   - **Email:** `admin@seminarkit.id` (atau email admin pilihan Anda)
   - **Password:** Masukkan kata sandi admin Anda
   - **Auto Confirm User:** Centang opsi ini agar akun langsung aktif tanpa perlu konfirmasi email.
5. Klik **Create user**.

---

## 9. Langkah 8: Menguji Koneksi Database

Setelah file `.env` terisi, jalankan server Astro untuk menguji koneksi:

1. Jika server dev sedang berjalan di latar belakang, matikan dan jalankan kembali agar variabel `.env` terbaca:
   ```powershell
   astro dev stop
   astro dev --background
   ```
2. Buka browser dan akses alamat website:
   - Beranda: `http://localhost:4321/`
   - Katalog Produk: `http://localhost:4321/produk`
   - Kontak: `http://localhost:4321/kontak`
3. **Uji Pengiriman Form Kontak:**
   - Isi form kontak di `http://localhost:4321/kontak` dan klik **Kirim Pesan**.
   - Buka menu **Table Editor** > tabel `messages` di dashboard Supabase.
   - Pesan baru Anda akan langsung muncul di baris tabel!
4. **Uji Panel Admin:**
   - Buka `http://localhost:4321/admin/login`.
   - Masukkan email dan kata sandi admin Anda.
   - Masuk ke menu **Pesan Masuk** (`http://localhost:4321/admin/pesan`), Anda akan melihat pesan yang baru saja dikirimkan.

---

## 10. Langkah 9: Konfigurasi di Hosting Vercel (Produksi)

Ketika Anda siap merilis website ke Vercel:

1. Masuk ke dashboard [https://vercel.com](https://vercel.com).
2. Buka proyek website seminarkit Anda.
3. Buka menu **Settings** > **Environment Variables**.
4. Tambahkan ketiga variabel kunci yang sama seperti di file `.env`:
   - `PUBLIC_SUPABASE_URL`
   - `PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
5. Lakukan **Redeploy** pada proyek Vercel Anda agar sistem build membaca kredensial database tersebut.

---

## 11. Bantuan Pemecahan Masalah (Troubleshooting)

| Masalah | Kemungkinan Penyebab | Solusi |
|---|---|---|
| Produk tidak tampil / status kosong | URL atau Anon Key di `.env` salah | Periksa kembali apakah `PUBLIC_SUPABASE_URL` diawali `https://` dan tidak ada spasi di awal/akhir kunci. |
| Form pesan gagal terkirim (Error 401/403) | RLS belum diaktifkan atau salah aturan | Jalankan ulang bagian RLS di [supabase/schema.sql](file:///c:/PROJECT/seminarkitid/supabase/schema.sql) pada tabel `messages`. |
| Gambar tidak muncul setelah upload | Bucket belum disetel Public | Buka menu **Storage** > `seminarkit-media` > klik **Configuration** > aktifkan **Public Bucket**. |
| Variabel `.env` tidak terbaca | Server belum direstart | Jalankan `astro dev stop` lalu `astro dev --background`. |
