# Website Portofolio Profesional - Ariq Abdillah

Website portofolio modern, responsif, dan elegan untuk **Ariq Abdillah (Financial & Business Data Analyst)**.

---

## 📁 Struktur Direktori
```text
portfolio-ariq/
├── index.html            # Halaman utama portofolio lengkap & interaktif
├── assets/
│   ├── profile.jpg       # Foto profil resmi Ariq Abdillah
│   └── (opsional CV.pdf) # Tempat meletakkan file PDF CV jika ingin diunduh langsung
└── README.md             # Dokumentasi petunjuk penggunaan & panduan deploy
```

---

## 🌟 Fitur Utama Website
1. **Desain Modern Executive Fintech:**
   - Tema gelap premium (*Dark Mode*) sebagai bawaan dengan tombol pengalih tema terang (*Light Mode*).
   - Glassmorphism, tipografi Plus Jakarta Sans, dan ikon modern dari Lucide Icons.
2. **5 Showcase Proyek Lengkap dengan Modal Interaktif:**
   - **CrediTech:** Analisis Risiko Default Kartu Kredit (Python Scikit-learn + Dashboard Tableau).
   - **OCA Telkom (BI):** Unified Cross-Channel Messaging Performance Dashboard (SQL BigQuery + Tableau).
   - **OCA Telkom (Featured Deck):** Active User Behavior & Segmentation Analysis (🏆 *Terpilih untuk Pitching*).
   - **RevoBank:** Segmentasi Pengguna Kartu Kredit dengan K-Means Clustering (Machine Learning Rp 4.57T).
   - **Mitra PT Prima Indo Sentosa:** Project Admin & Site Coordinator (Arus Kas, Payroll, & Otomasi Excel).
3. **Verifikasi Sertifikat Langsung:**
   - Terhubung langsung ke URL verifikasi resmi RevoU (`NDA24-2026-06-031` & `FSDA-2026-03-38664224539`).
4. **Interaksi Cepat Kontak:**
   - Form pesan cepat terintegrasi langsung ke WhatsApp (+6283866672738).
   - Tombol salin email satu klik dengan toast notification.
   - Tombol unduh / cetak ringkasan CV langsung.

---

## 🚀 Cara Menjalankan Website Secara Lokal

Anda dapat membuka file `index.html` langsung di browser mana pun (Google Chrome, Microsoft Edge, Safari, dll):
1. Buka folder `portfolio-ariq` di Finder / File Explorer.
2. Klik dua kali pada file `index.html`.
3. Atau jalankan local web server jika Anda menggunakan terminal:
   ```bash
   cd /Users/nurulauliasaputri/.gemini/antigravity/scratch/portfolio-ariq
   npx serve .
   ```

---

## 🌐 Cara Publikasi / Deploy Gratis ke Internet

Website ini menggunakan arsitektur statis murni (*vanilla HTML + Tailwind CSS + JavaScript*), sehingga dapat di-hosting secara gratis selamanya:

### 1. Vercel / Netlify (Paling Mudah & Otomatis)
- Buat repositori baru di GitHub (misal: `portfolio-ariq`), lalu upload isi folder ini.
- Buka [vercel.com](https://vercel.com) atau [netlify.com](https://netlify.com), klik **"Import Project"** dari GitHub.
- Website langsung aktif dengan domain gratis seperti `ariq-abdillah.vercel.app` dalam 1 menit!

### 2. GitHub Pages
- Buka repositori GitHub Anda -> Masuk ke menu **Settings** -> **Pages**.
- Pilih branch `main` / `root` -> Simpan.
- Website Anda akan aktif di `https://<username>.github.io/<nama-repo>/`.

---

## 📝 Tips Pembaruan Mandiri:
1. **Menambahkan Link Video Pitching:**
   Jika rekaman video presentasi sudah siap (YouTube / Loom / Google Drive), buka `index.html` dan cari fungsi `openPitchVideoInfo()`, lalu ganti aksi tombolnya dengan membuka tautan video Anda.
2. **Menambahkan File PDF CV:**
   Simpan file PDF CV Anda di folder `assets/CV_Ariq_Abdillah.pdf`. Pada tombol download di `index.html`, ubah `onclick="downloadCVSummary()"` menjadi `<a href="assets/CV_Ariq_Abdillah.pdf" download ...>`.
