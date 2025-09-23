# Dokumentasi Website Gereja Katedral Santa Maria Palembang

## Gambaran Umum

Website ini adalah platform digital resmi untuk Gereja Katedral Santa Maria Palembang yang dibangun dengan teknologi modern untuk melayani umat dan memberikan informasi gereja secara online.

## Teknologi yang Digunakan

- **Frontend Framework**: React 18 dengan TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS dengan sistem desain kustom
- **UI Components**: Shadcn/ui dengan komponen yang disesuaikan
- **Routing**: React Router DOM
- **State Management**: TanStack Query
- **Icons**: Lucide React

## Struktur Project

```
src/
├── components/
│   ├── ui/              # Komponen UI dasar (button, card, dll)
│   ├── Header.tsx       # Navigasi utama website
│   ├── Hero.tsx         # Section hero dengan gambar katedral
│   ├── AjaranGereja.tsx # Section informasi ajaran gereja
│   └── Footer.tsx       # Footer dengan informasi kontak
├── pages/
│   ├── Index.tsx        # Halaman utama
│   └── NotFound.tsx     # Halaman 404
├── assets/
│   └── cathedral-hero.jpg  # Gambar hero katedral
├── hooks/               # Custom React hooks
├── lib/                 # Utilitas dan helper functions
└── index.css           # Global styles dan design system
```

## Sistem Desain

Website menggunakan skema warna liturgis Katolik yang simbolis:

### Warna Utama
- **Ungu (Primary)**: `hsl(270 50% 40%)` - Pertobatan dan kerendahan hati
- **Putih/Krem (Secondary)**: `hsl(45 20% 95%)` - Kemurnian, sukacita, kemenangan
- **Hijau (Hope)**: `hsl(120 40% 35%)` - Harapan dan pembaharuan
- **Merah (Accent)**: `hsl(0 70% 50%)` - Kasih dan pengorbanan
- **Emas (Gold)**: `hsl(45 90% 55%)` - Elemen sakral dan liturgis

### Gradien
- `gradient-sacred`: Gradien ungu untuk elemen sakral
- `gradient-hope`: Gradien hijau untuk elemen harapan
- `gradient-love`: Gradien merah untuk elemen kasih
- `gradient-gold`: Gradien emas untuk elemen liturgis

### Shadow Effects
- `shadow-sacred`: Bayangan ungu untuk depth
- `shadow-hope`: Bayangan hijau
- `shadow-love`: Bayangan merah
- `shadow-gold`: Bayangan emas

## Fitur Utama

### 1. Navigasi Header
- Logo gereja dengan ikon
- Menu navigasi: Beranda, Jadwal, Ajaran Gereja, Pengumuman, Tentang
- Dropdown menu untuk "Ajaran Gereja" dengan sub-menu sakramen

### 2. Hero Section
- Gambar latar belakang katedral yang indah
- Judul utama gereja
- Deskripsi sejarah singkat
- Call-to-action button "Selengkapnya"

### 3. Section Ajaran Gereja
- Grid card untuk menampilkan 6 sakramen utama
- Hover effects dan animasi
- Desain card yang responsif

### 4. Footer Informatif
- Alamat lengkap gereja
- Informasi kontak (telepon, email)
- Jadwal misa lengkap
- Informasi tentang gereja

## Responsivitas

Website dirancang mobile-first dengan breakpoint:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## Panduan Pengembangan

### Menjalankan Project Secara Lokal

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build
```

### Menambah Halaman Baru

1. Buat file component baru di folder `src/pages/`
2. Tambahkan route di `src/App.tsx`
3. Update navigasi di `src/components/Header.tsx`

### Mengubah Warna

Semua warna didefinisikan di `src/index.css` dalam format HSL. Untuk mengubah skema warna:

1. Edit variabel CSS di bagian `:root`
2. Pastikan menggunakan format HSL yang benar
3. Update gradient dan shadow sesuai kebutuhan

### Menambah Komponen UI

Gunakan Shadcn/ui untuk komponen dasar:
```bash
# Contoh menambah komponen baru
npx shadcn-ui@latest add dialog
```

## Optimasi SEO

Website sudah dilengkapi dengan:
- Meta title dan description yang SEO-friendly
- Semantic HTML structure
- Proper heading hierarchy (H1, H2, H3)
- Alt text untuk gambar
- Responsive design
- Clean URL structure

## Maintenance

### Update Konten
- **Jadwal Misa**: Edit di `src/components/Footer.tsx`
- **Informasi Kontak**: Edit di `src/components/Footer.tsx`
- **Teks Hero**: Edit di `src/components/Hero.tsx`
- **Ajaran Gereja**: Edit array `teachings` di `src/components/AjaranGereja.tsx`

### Update Gambar
- Gambar hero tersimpan di `src/assets/cathedral-hero.jpg`
- Untuk mengganti, replace file dengan nama yang sama
- Atau update import di `src/components/Hero.tsx`

## Security & Performance

- Menggunakan TypeScript untuk type safety
- Lazy loading untuk gambar
- Optimized build dengan Vite
- CSS-in-JS dengan Tailwind untuk performa optimal
- Component-based architecture untuk maintainability

## Browser Support

Website mendukung browser modern:
- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## Deployment

Website dapat di-deploy ke berbagai platform:
- **Recommended**: Vercel, Netlify
- **Alternative**: GitHub Pages, AWS S3

## Troubleshooting

### Masalah Warna Tidak Muncul
- Pastikan semua warna di `index.css` dalam format HSL
- Check import Tailwind CSS di `main.tsx`

### Build Error
- Jalankan `npm run build` untuk melihat error detail
- Pastikan semua import sudah benar
- Check TypeScript errors
<<<<<<< HEAD
=======

## Kontak Developer

Untuk pertanyaan teknis atau maintenance, hubungi tim development melalui channel yang tersedia di platform Lovable.

>>>>>>> 4e70097b3062ad4deb31d49a32d924e90c57dd35
---

*Dokumentasi ini akan terus diperbarui seiring dengan pengembangan fitur baru.*