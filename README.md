# Website Gereja Katedral Santa Maria Palembang

## Deskripsi Project

Website resmi Gereja Katedral Santa Maria Palembang yang dibangun dengan React, TypeScript, dan Tailwind CSS. Website ini menyediakan informasi tentang gereja, jadwal misa, ajaran Katolik, dan kontak untuk umat.

## Fitur Utama

- **Navigasi Responsif**: Header dengan menu dropdown untuk ajaran gereja
- **Hero Section**: Tampilan utama dengan gambar katedral dan informasi sejarah
- **Ajaran Gereja**: Section khusus untuk 6 sakramen utama Gereja Katolik
- **Footer Informatif**: Kontak, alamat, dan jadwal misa lengkap
- **Desain Liturgis**: Menggunakan warna-warna simbolis Gereja Katolik (ungu, putih, hijau, merah, emas)

## Teknologi

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS dengan design system kustom
- **Build Tool**: Vite
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router DOM

## Instalasi dan Penggunaan

```bash
# Clone repository
git clone <repository-url>

# Navigate to project directory
cd gereja-katedral-website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Struktur Warna Liturgis

Website menggunakan skema warna yang sesuai dengan tradisi Gereja Katolik:

- **Ungu (Primary)**: Pertobatan dan kerendahan hati
- **Putih/Krem (Secondary)**: Kemurnian, sukacita, dan kemenangan
- **Hijau (Hope)**: Harapan dan pembaharuan
- **Merah (Accent)**: Kasih dan pengorbanan
- **Emas (Gold)**: Elemen sakral dan liturgis

## Customization

Untuk mengubah konten website:

1. **Informasi Gereja**: Edit `src/components/Hero.tsx`
2. **Ajaran Gereja**: Modify array di `src/components/AjaranGereja.tsx`
3. **Kontak & Jadwal**: Update `src/components/Footer.tsx`
4. **Navigasi**: Customize `src/components/Header.tsx`

## Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## License

This project is developed for Gereja Katedral Santa Maria Palembang.

---

Untuk dokumentasi lengkap, lihat file `DOCUMENTATION.md`.
