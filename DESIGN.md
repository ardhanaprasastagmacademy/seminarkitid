# DESIGN.md: Website Seminarkit

Panduan visual untuk website seminarkit (souvenir kantor). Dokumen ini dipakai bersama `PRD.md`. Stack: Astro, Bootstrap 5, CSS kustom, JavaScript vanilla.

---

## 1. Arah Desain

**Kesan yang dituju:** premium, tenang, rapi, tepercaya. Seperti katalog cetak untuk klien korporat, bukan template landing page.

**Prinsip**

1. **Dua warna utama:** darkslategrey sebagai warna struktur dan darkkhaki sebagai warna aksen. Sisanya netral hangat.
2. **Tipografi yang bekerja.** Hierarki dibangun dari ukuran, bobot, dan jarak, bukan dari dekorasi.
3. **Garis tipis, bukan bayangan tebal.** Pemisah memakai garis 1 px, sudut hampir lurus.
4. **Tanpa ikon hiasan.** Penekanan dibuat lewat angka, garis, dan teks.
5. **Ruang kosong yang lega.** Padding section besar, isi tidak dijejalkan.
6. **Konsisten.** Satu gaya tombol, satu gaya kartu, satu ritme jarak di seluruh halaman.

### Pantangan (supaya tidak terlihat "AI slop")

- Tidak ada emoji di antarmuka.
- Tidak ada ikon panah pada tombol, tautan, kartu, slider, maupun tombol back to top.
- Tidak ada ikon di dalam lingkaran berwarna di atas judul fitur.
- Tidak ada gradien ungu-biru, glassmorphism, blur kaca, atau efek glow neon.
- Tidak ada bayangan tebal berlapis dan sudut sangat membulat (pill) pada kartu.
- Tidak ada animasi memantul, berputar, atau muncul berlebihan.
- Tidak ada headline generik seperti "Solusi Terbaik untuk Kebutuhan Anda". Teks ditulis spesifik untuk produk seminarkit.
- Tidak menempelkan semua teks rata tengah. Pakai komposisi dua kolom dan rata kiri pada konten utama.

---

## 2. Warna

### Palet inti

| Token | Nama | Hex | Fungsi |
|---|---|---|---|
| `--slate` | darkslategrey | `#2F4F4F` | Navbar, footer, section gelap, tombol utama |
| `--slate-deep` | slate pekat | `#1F3636` | Teks utama, hover tombol, latar CTA |
| `--slate-soft` | slate lembut | `#4A6868` | Teks sekunder pada latar terang, garis pada latar gelap |
| `--khaki` | darkkhaki | `#BDB76B` | Aksen: garis, penanda, tombol sekunder pada latar gelap |
| `--khaki-deep` | khaki tua | `#6E6A2A` | Teks aksen dan tautan pada latar terang |
| `--khaki-tint` | khaki muda | `#F4F2E3` | Latar section selang-seling |
| `--paper` | kertas | `#FBFAF5` | Latar halaman utama |
| `--white` | putih | `#FFFFFF` | Teks pada latar gelap, latar kartu |
| `--line` | garis | `#DAD7C2` | Garis pemisah pada latar terang |

### Aturan pemakaian

- Proporsi kasar: 60% `--paper` dan `--khaki-tint`, 25% `--slate` dan `--slate-deep`, 15% `--khaki`.
- `--khaki` **tidak dipakai sebagai warna teks pada latar terang** (kontras hanya sekitar 2:1). Pada latar terang gunakan `--khaki-deep`.
- `--khaki` dipakai sebagai teks hanya di atas `--slate-deep` untuk teks besar atau tebal.
- Teks putih di atas `--slate` kontrasnya sekitar 8,9:1, aman untuk semua ukuran.
- Teks `--slate-deep` di atas `--khaki` kontrasnya sekitar 6:1, aman untuk tombol.

### Pasangan warna yang disetujui

| Latar | Teks | Dipakai untuk |
|---|---|---|
| `--paper` | `--slate-deep` | Isi halaman |
| `--khaki-tint` | `--slate-deep` | Section selang-seling |
| `--slate` | `--white` | Navbar, footer, banner |
| `--slate-deep` | `--white`, judul `--khaki` | CTA, testimoni |
| `--khaki` | `--slate-deep` | Tombol sekunder, label |

---

## 3. Token CSS

Letakkan di `src/styles/tokens.css`. Nilai Bootstrap ditimpa lewat variabel `--bs-*` sehingga komponen Bootstrap ikut mengikuti palet.

```css
:root {
  /* Warna */
  --slate: #2F4F4F;
  --slate-deep: #1F3636;
  --slate-soft: #4A6868;
  --khaki: #BDB76B;
  --khaki-deep: #6E6A2A;
  --khaki-tint: #F4F2E3;
  --paper: #FBFAF5;
  --white: #FFFFFF;
  --line: #DAD7C2;

  /* Tipografi */
  --font-display: "Cormorant Garamond", Georgia, "Times New Roman", serif;
  --font-body: "Manrope", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;

  /* Jarak (kelipatan 8) */
  --space-1: 0.5rem;
  --space-2: 1rem;
  --space-3: 1.5rem;
  --space-4: 2rem;
  --space-5: 3rem;
  --space-6: 4.5rem;
  --space-7: 6.5rem;

  /* Bentuk */
  --radius: 2px;
  --border: 1px solid var(--line);

  /* Gerak */
  --ease: cubic-bezier(0.2, 0.6, 0.2, 1);
  --t-fast: 160ms;
  --t-base: 280ms;

  /* Tata letak */
  --container: 1200px;
  --navbar-h: 76px;

  /* Timpa Bootstrap */
  --bs-body-font-family: var(--font-body);
  --bs-body-color: var(--slate-deep);
  --bs-body-bg: var(--paper);
  --bs-link-color: var(--khaki-deep);
  --bs-link-hover-color: var(--slate-deep);
  --bs-border-color: var(--line);
  --bs-border-radius: var(--radius);
}

html { scroll-behavior: smooth; }
body { font-family: var(--font-body); background: var(--paper); color: var(--slate-deep); }
```

---

## 4. Tipografi

| Peran | Font | Catatan |
|---|---|---|
| Judul (display) | **Cormorant Garamond** 500 / 600 | Memberi kesan editorial dan premium |
| Isi dan antarmuka | **Manrope** 400 / 500 / 600 / 700 | Bersih dan mudah dibaca di layar kecil |

Muat lewat Google Fonts dengan `display=swap` dan sertakan fallback seperti pada token. Hanya muat bobot yang dipakai agar PageSpeed terjaga.

### Skala

| Elemen | Mobile | Desktop | Bobot | Tinggi baris | Letter-spacing |
|---|---|---|---|---|---|
| H1 (hero) | 2.5rem | 4.25rem | 600 | 1.05 | -0.01em |
| H2 (judul section) | 2rem | 3rem | 600 | 1.12 | -0.005em |
| H3 (judul card, sub) | 1.5rem | 1.75rem | 600 | 1.2 | 0 |
| Eyebrow (label kecil) | 0.75rem | 0.8rem | 700 | 1.4 | 0.14em, huruf kapital |
| Isi | 1rem | 1.0625rem | 400 | 1.7 | 0 |
| Teks kecil | 0.875rem | 0.875rem | 400 | 1.6 | 0 |

- Judul memakai `--font-display`. Isi, tombol, navbar, dan form memakai `--font-body`.
- Lebar baris isi maksimal sekitar 65 karakter (`max-width: 62ch`).
- Harga produk memakai `--font-display`, bobot 600, agar terasa seperti label harga pada katalog.

---

## 5. Tata Letak dan Jarak

- Container: maksimal 1200 px, padding sisi 20 px (mobile) dan 32 px (desktop).
- Padding vertikal section: `--space-6` (mobile) dan `--space-7` (desktop).
- Section berselang-seling latar `--paper` dan `--khaki-tint`, dipisah garis 1 px bila warnanya sama.
- Grid memakai Bootstrap 12 kolom. Jarak antar-kolom (`gutter`) 24 px, galeri 8 px.
- Komposisi: gunakan rasio tidak simetris (misalnya 5/7) untuk hero dan tentang, bukan semua kolom sama besar.

### Breakpoint (Bootstrap)

| Nama | Lebar |
|---|---|
| sm | 576 px |
| md | 768 px |
| lg | 992 px |
| xl | 1200 px |

---

## 6. Komponen

### 6.1 Navbar

| Properti | Nilai |
|---|---|
| Latar | `--slate` |
| Tinggi | `--navbar-h` (76 px), tetap saat digulir (sticky) |
| Logo | Teks "seminarkit" dalam `--font-display`, putih, atau logo versi putih |
| Teks menu | Putih, `--font-body`, 0.9375rem, bobot 500 |
| **Penanda halaman aktif** | **Bobot 700 saja.** Tidak ada garis bawah, outline, kotak, atau perubahan warna |
| Hover | Bobot 700 saja, mengikuti perilaku penanda aktif |
| Garis bawah navbar | 1 px `--slate-soft` |

**Mencegah lebar menu bergeser saat menjadi bold.** Setiap tautan menyimpan salinan tak terlihat dari teksnya dalam bobot 700 untuk memesan lebar:

```html
<a class="nav-link" href="/produk" data-text="Produk">Produk</a>
```

```css
.navbar { background: var(--slate); border-bottom: 1px solid var(--slate-soft); }
.navbar .nav-link {
  color: var(--white);
  font-weight: 500;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 1rem;
  transition: font-weight var(--t-fast) var(--ease);
}
.navbar .nav-link::after {
  content: attr(data-text);
  font-weight: 700;
  height: 0;
  visibility: hidden;
  overflow: hidden;
  user-select: none;
  pointer-events: none;
}
.navbar .nav-link:hover,
.navbar .nav-link.active { color: var(--white); font-weight: 700; }
.navbar .nav-link:focus-visible { outline: 2px solid var(--khaki); outline-offset: 4px; }
```

> Fokus keyboard tetap memakai outline khaki demi aksesibilitas. Aturan "tanpa outline" berlaku untuk penanda halaman aktif, bukan untuk fokus keyboard.

**Mobile (di bawah 992 px):** menu berupa sidebar (Bootstrap `offcanvas` dari sisi kanan), latar `--slate`, tautan tersusun vertikal dengan ukuran 1.125rem dan jarak 20 px, tombol WhatsApp teks di bagian bawah sidebar. Tombol pembuka berupa teks **"Menu"** dan penutup berupa teks **"Tutup"**, tanpa ikon hamburger maupun tanda silang.

### 6.2 Tombol

Semua tombol hanya berisi teks. Tidak ada ikon, panah, maupun emoji.

| Varian | Latar | Teks | Border | Hover |
|---|---|---|---|---|
| Utama (latar terang) | `--slate` | putih | `--slate` | latar `--slate-deep` |
| Utama (latar gelap) | `--khaki` | `--slate-deep` | `--khaki` | latar putih, teks `--slate-deep` |
| Garis (outline) | transparan | `--slate-deep` | 1 px `--slate-deep` | latar `--slate-deep`, teks putih |
| Garis (latar gelap) | transparan | putih | 1 px putih | latar putih, teks `--slate-deep` |
| Tautan teks | tanpa latar | `--slate-deep` | garis bawah 1 px | garis bawah menebal menjadi 2 px |

```css
.btn-sk {
  display: inline-block;
  padding: 0.875rem 1.75rem;
  font: 600 0.8125rem/1 var(--font-body);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: 1px solid var(--slate);
  border-radius: var(--radius);
  background: var(--slate);
  color: var(--white);
  transition: background var(--t-base) var(--ease), color var(--t-base) var(--ease), border-color var(--t-base) var(--ease);
}
.btn-sk:hover { background: var(--slate-deep); border-color: var(--slate-deep); color: var(--white); }
.btn-sk:focus-visible { outline: 2px solid var(--khaki-deep); outline-offset: 3px; }
```

Label tombol harus spesifik: "Lihat Katalog", "Pesan via WhatsApp", "Detail Produk", "Kirim Pesan". Hindari label generik seperti "Klik Di Sini".

### 6.3 Pop up WhatsApp melayang dan tombol back to top

Kedua elemen tampil di **semua halaman publik**, tersusun vertikal di pojok kanan bawah. **Back to top berada di atas WhatsApp.**

```
                       [ Atas ]       <- back to top
                  [ Chat WhatsApp ]   <- WhatsApp
```

| Properti | WhatsApp melayang | Back to top |
|---|---|---|
| Posisi | `position: fixed; right: 20px; bottom: 20px` | `position: fixed; right: 20px; bottom: 84px` |
| Bentuk | Persegi panjang, radius 2 px | Persegi, 56 x 56 px, radius 2 px |
| Latar | `--khaki` | `--slate` |
| Teks | `--slate-deep`, "Chat WhatsApp", 700, 0.8125rem, huruf kapital | Putih, "Atas", 700, 0.75rem, huruf kapital |
| Border | 1 px `--slate-deep` | 1 px `--slate-soft` |
| Tinggi | 56 px | 56 px |
| Z-index | 1040 | 1040 |
| Hover | latar `--slate-deep`, teks `--khaki` | latar `--slate-deep` |
| Tanpa ikon | ya | **ya, tanpa panah** |

Perilaku:

- Tombol WhatsApp selalu tampil. Klik membuka `https://wa.me/6282232730246?text=...` di tab baru. Teks awal: "Halo seminarkit, saya ingin bertanya tentang produk souvenir kantor."
- Pada halaman detail produk, teks awal memuat nama produk.
- **Bubble sapaan (pop up):** setelah 6 detik, muncul kartu kecil di atas tombol WhatsApp berisi teks "Butuh souvenir untuk acara kantor? Kami siap bantu." dengan tautan teks **"Tutup"**. Muncul sekali per sesi (`sessionStorage`) dan tidak muncul lagi setelah ditutup. Jangan menutupi tombol back to top: bubble berada di sisi kiri tombol, bukan di atasnya.
- Back to top tersembunyi (`opacity: 0; pointer-events: none`) sampai halaman digulir lebih dari 400 px, lalu muncul dengan transisi 280 ms. Klik menggulir halus ke atas.
- Di mobile, ukuran tombol dikecilkan menjadi 48 px dan jarak ke tepi 14 px. Pastikan tidak menutupi tombol atau isi form.
- Penanda status pada WhatsApp (jika dipakai) berupa titik kecil 8 px berwarna `--slate`, bukan ikon.

```css
.float-wa, .float-top {
  position: fixed; right: 20px; z-index: 1040;
  display: flex; align-items: center; justify-content: center;
  height: 56px; border-radius: var(--radius);
  font: 700 0.75rem/1 var(--font-body);
  letter-spacing: 0.1em; text-transform: uppercase;
  transition: background var(--t-base) var(--ease), color var(--t-base) var(--ease), opacity var(--t-base) var(--ease);
}
.float-wa  { bottom: 20px; padding: 0 1.25rem; background: var(--khaki); color: var(--slate-deep); border: 1px solid var(--slate-deep); }
.float-wa:hover { background: var(--slate-deep); color: var(--khaki); }
.float-top { bottom: 84px; width: 56px; background: var(--slate); color: var(--white); border: 1px solid var(--slate-soft); opacity: 0; pointer-events: none; }
.float-top.is-visible { opacity: 1; pointer-events: auto; }
.float-top:hover { background: var(--slate-deep); }
@media (max-width: 575.98px) {
  .float-wa, .float-top { right: 14px; height: 48px; }
  .float-wa { bottom: 14px; }
  .float-top { bottom: 72px; width: 48px; }
}
```

### 6.4 Page banner dan breadcrumb

Dipakai di semua halaman selain beranda.

| Elemen | Spesifikasi |
|---|---|
| Latar banner | `--slate`, dengan garis 1 px `--khaki` di bagian bawah |
| Tinggi | 220 px (mobile), 300 px (desktop) |
| Eyebrow | Nama bagian dalam `--khaki`, huruf kapital |
| Judul | H1 putih dalam `--font-display` |
| Deskripsi | Putih 80% opasitas, satu kalimat |
| Gambar latar | Opsional: foto produk dengan lapisan `--slate-deep` 85%. Tanpa gradien |
| Breadcrumb | Teks 0.875rem, pemisah berupa garis miring `/`, halaman aktif bobot 700, tautan sebelumnya putih 75% |

Breadcrumb diletakkan di dalam banner, di atas judul, sehingga satu blok dengan banner.

### 6.5 Hero (beranda)

- Dua kolom 7/5. Kiri: eyebrow "Souvenir Kantor", H1 spesifik, paragraf maksimal 2 kalimat, dua tombol (utama dan garis). Kanan: satu foto produk besar dengan rasio 4:5.
- Latar `--paper`. Satu blok persegi `--khaki-tint` bergeser di belakang foto sebagai komposisi, tanpa bayangan.
- Di bawah tombol: tiga angka ringkas (misalnya jumlah klien, tahun berpengalaman, jenis produk) dengan garis pemisah vertikal 1 px. Angka dalam `--font-display`.
- Tinggi hero minimal 80 vh di desktop. Di mobile, foto di bawah teks.

### 6.6 Section tentang

- Dua kolom: foto di satu sisi, teks di sisi lain.
- Eyebrow, H2, dua paragraf, tautan teks "Selengkapnya".
- Garis vertikal tipis `--khaki` di samping judul sebagai penanda, lebar 3 px, tinggi mengikuti blok judul.

### 6.7 Section kenapa pilih kami dan keunggulan

Tidak memakai ikon. Penanda berupa **angka besar** dalam `--font-display`.

```
01                02                03
Judul             Judul             Judul
Deskripsi         Deskripsi         Deskripsi
singkat.          singkat.          singkat.
```

- Grid 3 kolom (desktop), 1 kolom (mobile). Maksimal 6 poin.
- Angka: 3rem, `--khaki-deep` pada latar terang atau `--khaki` pada latar gelap.
- Setiap poin dibatasi garis atas 1 px `--line`. Tanpa kotak, tanpa bayangan.

### 6.8 Card produk

| Elemen | Spesifikasi |
|---|---|
| Latar | `--white`, border 1 px `--line`, radius 2 px, tanpa bayangan |
| Foto | Rasio 4:5, `object-fit: cover`, `loading="lazy"`, zoom halus 1.03x saat hover (400 ms) |
| Nama | H3 `--font-display`, 1.5rem |
| Deskripsi singkat | 0.9375rem, maksimal 2 baris (`line-clamp`) |
| Harga | `--font-display` 1.5rem bobot 600, `--slate-deep`. Format "Rp 25.000" |
| Tombol | Dua tombol sejajar: **Detail Produk** (garis) dan **Pesan via WA** (utama) |
| Hover kartu | Border berubah ke `--slate`, transisi 280 ms |

- Padding isi kartu 24 px. Jarak antar-kartu 24 px.
- Grid: 1 kolom (mobile), 2 kolom (md), 3 kolom (lg). Halaman produk boleh 4 kolom di xl.
- Label "Unggulan" (bila ada) berupa teks kecil huruf kapital dengan latar `--khaki` di pojok kiri atas foto.

### 6.9 Galeri

- Grid seragam, jarak antar-foto 8 px, rasio 1:1 atau 4:3 konsisten dalam satu grid.
- Beranda: 6 sampai 8 foto (grid 3 kolom desktop, 2 kolom mobile). Halaman galeri: semua foto dengan lazy loading.
- Hover: lapisan `--slate-deep` 35%, tanpa ikon kaca pembesar.
- Klik membuka lightbox: latar `--slate-deep` 95%, foto di tengah, tombol teks **"Tutup"** di kanan atas, tombol teks **"Sebelumnya"** dan **"Berikutnya"** di sisi bawah, tanpa panah. Navigasi juga bisa dengan tombol keyboard kiri dan kanan serta Esc.
- Foto tanpa keterangan tampil. Teks `alt` tetap wajib diisi dari database.

### 6.10 Testimoni

- Latar `--slate-deep`, teks putih.
- Satu kutipan besar dalam `--font-display` (1.75 sampai 2.25rem), tanda kutip tipografis dalam `--khaki`.
- Nama dalam bobot 700, jabatan dan instansi dalam putih 70%.
- Jika lebih dari satu: grid 2 kolom, atau pergantian otomatis dengan penanda berupa nomor "1 / 3" dan tombol teks "Sebelumnya" dan "Berikutnya". Tanpa titik indikator warna-warni.

### 6.11 FAQ

- Memakai accordion Bootstrap. Ikon chevron bawaan **dihilangkan**.
- Penanda buka-tutup berupa tanda tambah dan kurang yang digambar dengan dua garis CSS (pseudo-element), bukan karakter emoji atau ikon.
- Pertanyaan dalam `--font-body` 1.0625rem bobot 600. Jawaban 0.9375rem.
- Setiap item dipisah garis 1 px `--line`. Tanpa kotak dan bayangan. Item aktif berjudul `--khaki-deep`.

```css
.accordion-button::after { background-image: none; content: none; }
.accordion-button { position: relative; padding-right: 3rem; background: transparent; box-shadow: none; }
.accordion-button .sk-plus { position: absolute; right: 1rem; top: 50%; width: 14px; height: 14px; }
.accordion-button .sk-plus::before,
.accordion-button .sk-plus::after { content: ""; position: absolute; background: var(--slate-deep); }
.accordion-button .sk-plus::before { left: 0; right: 0; top: 6px; height: 2px; }
.accordion-button .sk-plus::after  { top: 0; bottom: 0; left: 6px; width: 2px; transition: transform var(--t-base) var(--ease); }
.accordion-button:not(.collapsed) .sk-plus::after { transform: scaleY(0); }
```

### 6.12 CTA

- Latar `--slate-deep`, satu garis 1 px `--khaki` di atas.
- Dua kolom: kiri H2 putih dan satu kalimat pendukung, kanan dua tombol (khaki dan garis putih).
- Teks spesifik, misalnya menyebut pesanan custom, jumlah besar, atau kebutuhan seminar.

### 6.13 Blog

**Card blog**

- Latar putih, border 1 px `--line`, foto rasio 16:10.
- Tanggal dalam eyebrow, judul H3 (maksimal 2 baris), ringkasan (maksimal 3 baris), tautan teks "Baca Artikel".
- Grid 1 / 2 / 3 kolom.

**Detail artikel**

- Lebar isi 720 px, rata kiri. Judul H1 `--font-display`, meta (penulis dan tanggal) dalam teks kecil.
- Gambar utama selebar container. Sub-judul H2 bergaya H3 agar proporsional.
- Tautan di dalam artikel `--khaki-deep` bergaris bawah.
- Daftar isi dan artikel terkait di sisi kanan (desktop), di bawah artikel (mobile).

### 6.14 Form kontak

| Elemen | Spesifikasi |
|---|---|
| Layout | Dua kolom: info kontak di kiri, form di kanan |
| Info kontak | Label eyebrow, nilai dalam teks isi, dipisah garis 1 px |
| Input | Latar putih, border 1 px `--line`, radius 2 px, tinggi 52 px, padding 16 px |
| Label | Di atas input, 0.8125rem, bobot 700, huruf kapital, letter-spacing 0.08em |
| Fokus | Border `--slate`, ring 3 px `--khaki` 35% |
| Error | Border `#8C2F2F`, pesan dalam teks 0.8125rem `#8C2F2F` di bawah field |
| Sukses | Blok `--khaki-tint` dengan border kiri 3 px `--khaki-deep`, teks konfirmasi |
| Tombol kirim | Utama, lebar penuh di mobile |

Warna error dan sukses tidak memakai merah dan hijau terang bawaan agar tetap selaras dengan palet.

### 6.15 Footer

- Latar `--slate`, teks putih 80%.
- Empat kolom: brand dan deskripsi singkat, tautan cepat, kontak (alamat, telepon, WhatsApp, email, jam kerja), sosial media (teks, bukan ikon).
- Judul kolom: eyebrow `--khaki`.
- Garis 1 px `--slate-soft` memisahkan baris hak cipta di bagian bawah.
- Tautan hover: garis bawah 1 px.

### 6.16 Halaman 404

- Latar `--paper`. Angka "404" sangat besar dalam `--font-display` berwarna `--khaki`, satu kalimat penjelasan, dua tombol: "Kembali ke Beranda" dan "Lihat Produk".

---

## 7. Panel Admin

Panel admin mengikuti palet yang sama, dengan tampilan lebih padat dan fungsional.

| Elemen | Spesifikasi |
|---|---|
| Sidebar | Lebar 240 px, latar `--slate`, teks putih. Menu aktif ditandai **bobot 700** seperti navbar publik |
| Topbar | Latar putih, garis bawah 1 px `--line`, nama admin dan tombol teks "Keluar" |
| Latar konten | `--khaki-tint` |
| Kartu ringkasan | Latar putih, border 1 px `--line`, angka besar dalam `--font-display`, label eyebrow |
| Tabel | Header latar `--slate`, teks putih; baris dipisah garis tipis; baris hover `--khaki-tint` |
| Status | Teks kecil bergaris: "Aktif", "Nonaktif", "Draft", "Terbit", "Baru", "Dibaca". Latar `--khaki-tint` dengan border 1 px, tanpa warna mencolok |
| Aksi baris | Tautan teks "Ubah" dan "Hapus", bukan ikon |
| Konfirmasi hapus | Modal dengan teks jelas dan tombol "Batal" dan "Hapus" |
| Upload gambar | Area putus-putus berisi teks "Pilih gambar atau seret ke sini", pratinjau miniatur, batas jpg/png/webp maksimal 2 MB |
| Login | Satu kolom 420 px di tengah, latar `--slate`, kartu putih, tombol utama |

Halaman admin tidak diindeks (`noindex`).

---

## 8. Gambar dan Fotografi

- Foto produk: latar netral (putih, krem, atau abu hangat), pencahayaan lembut, sudut konsisten.
- Hindari foto stok generik berisi orang bersalaman atau ilustrasi 3D bergaya AI.
- Format WebP, kompres hingga ukuran wajar, tentukan `width` dan `height` untuk mencegah layout shift.
- Rasio: produk 4:5, hero 4:5, blog 16:10, galeri 1:1 atau 4:3 (satu per grid).
- Semua gambar wajib memiliki `alt` deskriptif.
- Jika foto belum tersedia, gunakan blok `--khaki-tint` dengan teks "Foto segera hadir", bukan gambar placeholder berwarna.

---

## 9. Gerak dan Interaksi

| Interaksi | Spesifikasi |
|---|---|
| Transisi umum | 160 sampai 280 ms, easing `--ease` |
| Muncul saat digulir | Naik 12 px dan memudar, 400 ms, sekali saja, hanya untuk elemen statis |
| Hover kartu | Border berubah warna, foto zoom 1.03x |
| Hover tombol | Perubahan warna latar dan teks |
| Navbar sticky | Tidak berubah tinggi saat digulir |
| `prefers-reduced-motion` | Semua animasi dimatikan, scroll halus dinonaktifkan |

> **Catatan Astro:** kelas animasi `reveal` jangan dipasang pada elemen yang disuntik secara asinkron dari database (kartu produk, galeri, blog). Elemen itu bisa tidak pernah terlihat. Gunakan CSS `:global()` untuk gaya elemen hasil injeksi.

---

## 10. Responsif

| Area | Mobile (di bawah 768 px) | Desktop |
|---|---|---|
| Navbar | Teks "Menu" membuka sidebar offcanvas | Menu horizontal |
| Hero | Satu kolom, teks lalu foto | Dua kolom 7/5 |
| Produk | 1 kolom | 3 sampai 4 kolom |
| Galeri | 2 kolom | 3 sampai 4 kolom |
| Kenapa pilih kami | 1 kolom | 3 kolom |
| Kontak | Info di atas, form di bawah | Dua kolom |
| Tombol melayang | 48 px, jarak 14 px | 56 px, jarak 20 px |

Target sentuh minimal 44 x 44 px. Uji di lebar 360, 768, 1024, dan 1440 px.

---

## 11. Aksesibilitas

- Kontras teks minimal 4,5:1 (lihat aturan pemakaian warna).
- Fokus keyboard terlihat pada semua elemen interaktif (outline 2 px `--khaki` pada latar gelap atau `--khaki-deep` pada latar terang).
- Tombol melayang memiliki `aria-label`, misalnya "Chat WhatsApp seminarkit" dan "Kembali ke atas".
- Lightbox dan sidebar mengunci fokus saat terbuka dan bisa ditutup dengan Esc.
- Form: setiap field punya `label`, pesan error terhubung lewat `aria-describedby`.
- Tombol berlabel teks sehingga tidak bergantung pada ikon untuk dipahami.

---

## 12. Struktur Berkas CSS

```
src/styles/
├─ tokens.css       Variabel warna, tipografi, jarak
├─ base.css         Reset ringan, tipografi dasar, tautan
├─ bootstrap-override.css   Timpaan komponen Bootstrap
├─ components.css   Navbar, tombol, kartu, banner, FAQ, form, footer
├─ floating.css     WhatsApp melayang dan back to top
├─ admin.css        Gaya panel admin
└─ main.css         Mengimpor semuanya sesuai urutan
```

---

## 13. Daftar Periksa Sebelum Rilis

- [ ] Hanya dua warna utama (darkslategrey dan darkkhaki) ditambah netral hangat yang terdaftar di token.
- [ ] Navbar `#2F4F4F`, teks putih, penanda halaman aktif hanya bold dan lebar menu tidak bergeser.
- [ ] Sidebar mobile berfungsi dan tombolnya berupa teks.
- [ ] Pop up WhatsApp melayang dan back to top tampil di semua halaman publik, back to top berada di atas WhatsApp.
- [ ] Tidak ada ikon panah, emoji, atau ikon dekoratif di seluruh antarmuka.
- [ ] Tidak ada gradien, glassmorphism, atau bayangan berlebihan.
- [ ] Kartu produk memuat foto, nama, harga, deskripsi singkat, tombol Detail Produk dan Pesan via WA.
- [ ] FAQ memakai penanda tambah-kurang dari CSS, tanpa chevron.
- [ ] Teks `--khaki` tidak dipakai di atas latar terang.
- [ ] Semua gambar punya `alt`, `width`, dan `height`.
- [ ] Animasi mengikuti `prefers-reduced-motion`.
- [ ] Skor PageSpeed mobile 90 ke atas.
