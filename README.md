# Website Gereja Katedral Santa Maria Palembang

## Deskripsi Project

Website resmi Gereja Katedral Santa Maria Palembang yang dibangun dengan React, TypeScript, dan Tailwind CSS. Website ini menyediakan informasi tentang gereja, jadwal misa, ajaran Katolik, dan kontak untuk umat.

## Fitur Utama

- **Navigasi Responsif**: Header dengan menu dropdown untuk ajaran gereja
- **Hero Section**: Tampilan utama dengan gambar katedral dan informasi sejarah
- **Ajaran Gereja**: Section khusus untuk 6 sakramen utama Gereja Katolik
- **Footer Informatif**: Kontak, alamat, dan jadwal misa lengkap
- **Desain Liturgis**: Menggunakan warna-warna simbolis Gereja Katolik (ungu, putih, hijau, merah, emas)
- **Admin Dashboard**: Sistem manajemen pengumuman dengan autentikasi

## Teknologi

- **Frontend**: React 18 + TypeScript
- **Backend**: Node.js + Express + PostgreSQL
- **Styling**: Tailwind CSS dengan design system kustom
- **Build Tool**: Vite
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router DOM

## Instalasi dan Penggunaan

### Frontend

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

### Backend

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Setup database (see DATABASE_SETUP.md for details)
# Update .env file with your database credentials

# Initialize database
npm run init-db

# Start development server
npm run dev

# Build for production
npm start
```

## Struktur Warna Liturgis

Website menggunakan skema warna yang sesuai dengan tradisi Gereja Katolik:

- **Ungu (Primary)**: Pertobatan dan kerendahan hati
- **Putih/Krem (Secondary)**: Kemurnian, sukacita, dan kemenangan
- **Hijau (Hope)**: Harapan dan pembaharuan
- **Merah (Accent)**: Kasih dan pengorbanan
- **Emas (Gold)**: Elemen sakral dan liturgis

## Admin Dashboard

Website dilengkapi dengan sistem admin untuk mengelola pengumuman:

- **Login**: `/admin/login` (Username: admin, Password: katedral2025)
- **Dashboard**: `/admin/dashboard`
- **Fitur**: Buat, edit, dan hapus pengumuman

## Customization

Untuk mengubah konten website:

1. **Informasi Gereja**: Edit `src/components/Hero.tsx`
2. **Ajaran Gereja**: Modify array di `src/components/AjaranGereja.tsx`
3. **Kontak & Jadwal**: Update `src/components/Footer.tsx`
4. **Navigasi**: Customize `src/components/Header.tsx`
5. **Pengumuman**: Kelola melalui Admin Dashboard

## Database Setup

Lihat file `DATABASE_SETUP.md` untuk instruksi lengkap setup database PostgreSQL.

## Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## License

This project is developed for Gereja Katedral Santa Maria Palembang.

---

Untuk dokumentasi lengkap, lihat file `DOCUMENTATION.md`.