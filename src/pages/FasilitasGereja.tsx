import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FasilitasGereja = () => {
  const facilities = [
    {
      name: "Gedung Gereja Utama",
      description: "Gedung katedral utama dengan kapasitas 1000 orang, dilengkapi dengan sistem pendingin udara dan akustik yang baik untuk liturgi.",
      features: ["Kapasitas 1000 orang", "Sistem pendingin udara", "Akustik terbaik", "Akses difabel"]
    },
    {
      name: "Gereja Kecil (Kapela)",
      description: "Gereja kecil yang digunakan untuk misa harian dan kegiatan kecil dengan kapasitas 200 orang.",
      features: ["Kapasitas 200 orang", "Digunakan untuk misa harian", "Ruangan intim", "Akses mudah"]
    },
    {
      name: "Ruang Katekese",
      description: "Ruang khusus untuk pembinaan iman anak-anak, remaja, dan calon baptis serta kegiatan pembelajaran agama.",
      features: ["Kapasitas 150 orang", "Fasilitas multimedia", "Papan tulis interaktif", "Perpustakaan kecil"]
    },
    {
      name: "Aula Serba Guna",
      description: "Aula besar yang dapat digunakan untuk berbagai kegiatan paroki seperti pertemuan, acara sosial, dan resepsi pernikahan.",
      features: ["Kapasitas 300 orang", "Dekorasi fleksibel", "Peralatan audio", "Dapur kecil"]
    },
    {
      name: "Ruang Pastor",
      description: "Ruang khusus untuk para pastor tinggal dan bekerja, dilengkapi dengan ruang kerja dan tempat istirahat.",
      features: ["3 kamar pastor", "Ruang kerja", "Area istirahat", "Ruang makan bersama"]
    },
    {
      name: "Taman Gereja",
      description: "Area terbuka hijau di sekitar gereja yang digunakan untuk kegiatan komunitas dan sebagai tempat meditasi.",
      features: ["Area hijau 500 m²", "Bangku taman", "Patung Maria", "Area meditasi"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Fasilitas Gereja</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fasilitas yang tersedia di Gereja Katedral Santa Maria Palembang untuk mendukung ibadah dan kegiatan umat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <Card key={index} className="border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-hope transition-all">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{facility.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{facility.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Fasilitas:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {facility.features.map((feature, idx) => (
                        <li key={idx} className="text-sm">{feature}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 border-border/50 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Fasilitas Tambahan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Parkir</h3>
                  <p className="text-muted-foreground mb-4">
                    Area parkir yang luas dengan kapasitas 200 kendaraan, dilengkapi dengan area parkir khusus 
                    untuk difabel dan motor.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Parkir mobil: 150 slot</li>
                    <li>Parkir motor: 50 slot</li>
                    <li>Parkir difabel: 5 slot</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Aksesibilitas</h3>
                  <p className="text-muted-foreground">
                    Gereja dilengkapi dengan fasilitas ramah difabel termasuk jalur kursi roda, 
                    toilet khusus, dan lift untuk akses ke lantai atas.
                  </p>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Alamat Gereja</h4>
                    <p className="text-muted-foreground">
                      Jl. Dr. Sutomo No.4, Talang Semut, Kec. Bukit Kecil, Kota Palembang, Sumatera Selatan 30121
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FasilitasGereja;