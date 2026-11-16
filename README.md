# SILAMAS

**Sistem Informasi Pendataan Masjid di Kecamatan Palu Timur Berbasis Web**

## Deskripsi
SILAMAS merupakan aplikasi berbasis web yang digunakan untuk membantu pendataan dan penyajian informasi masjid di Kecamatan Palu Timur.

## Teknologi yang Digunakan
- React
- TypeScript
- Node.js
- Express
- Vite

## Persiapan dan Instalasi

Pastikan Node.js dan npm sudah terpasang.

1. Clone repository:
   ```bash
   git clone https://github.com/Nadyasyahara/Tugas-RPL.git
   ```

2. Masuk ke folder proyek:
   ```bash
   cd Tugas-RPL
   ```

3. Instal dependensi:
   ```bash
   npm install
   ```

## Menjalankan Aplikasi

Jalankan aplikasi menggunakan perintah:

```bash
npm run dev
```

## Pengujian dan Build

Perintah yang digunakan:

```bash
npm run lint
npm test
npm run build
```

## Continuous Integration (CI)

Proyek ini menggunakan GitHub Actions untuk menjalankan proses Continuous Integration secara otomatis ketika terdapat push atau pull request ke branch `main`.

Tahapan pipeline:
1. Mengambil kode proyek.
2. Menyiapkan Node.js.
3. Menginstal dependensi.
4. Memeriksa kode TypeScript.
5. Menjalankan pengujian.
6. Melakukan build aplikasi.

File workflow berada di:

.github/workflows/ci.yml

## Repository

https://github.com/Nadyasyahara/Tugas-RPL.git