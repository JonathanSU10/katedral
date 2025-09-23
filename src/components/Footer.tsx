import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Alamat */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">Alamat</h3>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
              <p className="text-sm leading-relaxed">
                Jl. Dr. Sutomo No.4<br />
                Talang Semut, Kec. Bukit Kecil<br />
                Kota Palembang, Sumatera Selatan 30121
              </p>
            </div>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold" />
                <span className="text-sm">(0711) 351 234</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold" />
                <span className="text-sm">info@katedralpalembang.org</span>
              </div>
            </div>
          </div>

          {/* Jadwal Misa */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">Jadwal Misa</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-gold" />
                <span>Misa Harian (Senin - Selasa): 05.45 WIB</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-gold" />
                <span>Misa Harian (Rabu - Jumat): 18.00 WIB</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-gold" />
                <span>Misa Sabtu: 18.00 WIB</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-gold" />
                <span>Misa Minggu: 07.00 WIB & 18.00 WIB</span>
              </div>
            </div>
          </div>

          {/* Tentang */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">Gereja Katedral</h3>
            <p className="text-sm leading-relaxed">
              Gereja Katedral Santa Maria Palembang adalah pusat keuskupan 
              yang melayani umat Katolik di wilayah Sumatera Selatan sejak tahun 1924.
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            © 2024 Gereja Katedral Santa Maria Palembang. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;