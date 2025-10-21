import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const JadwalKegiatanKategorial = () => {
  const groups = [
    {
      name: "Orang Muda Katolik (OMK)",
      description: "Komunitas umat muda Katolik usia 15-35 tahun",
      schedule: "Minggu, 16.00-18.00 WIB",
      location: "Ruang Katekese"
    },
    {
      name: "Wanita Katolik",
      description: "Komunitas wanita Katolik dewasa",
      schedule: "Sabtu, 10.00-12.00 WIB",
      location: "Aula Serba Guna"
    },
    {
      name: "Pria Katolik",
      description: "Komunitas pria Katolik dewasa",
      schedule: "Sabtu, 14.00-16.00 WIB",
      location: "Aula Serba Guna"
    },
    {
      name: "Anak-anak",
      description: "Pembinaan iman untuk anak-anak",
      schedule: "Minggu, 09.00-11.00 WIB",
      location: "Ruang Katekese"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Jadwal Kegiatan Kategorial</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Jadwal kegiatan untuk berbagai kelompok kategorial di Gereja Katedral Santa Maria Palembang
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {groups.map((group, index) => (
              <Card key={index} className="border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center gap-2">
                    <Users className="h-6 w-6" />
                    {group.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none">
                    <p className="text-muted-foreground mb-4">{group.description}</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-muted-foreground" />
                        <span>{group.schedule}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-muted-foreground" />
                        <span>{group.location}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 border-border/50 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Informasi Tambahan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                <p className="text-muted-foreground">
                  Jadwal kegiatan kategorial dapat berubah sesuai dengan kebutuhan dan kondisi. 
                  Untuk informasi terkini, silakan menghubungi kontak masing-masing kelompok kategorial 
                  atau menghubungi sekretariat gereja.
                </p>
                <p className="text-muted-foreground mt-4">
                  Kami mengundang semua umat untuk berpartisipasi aktif dalam kegiatan kategorial 
                  sesuai dengan minat dan panggilan mereka. Partisipasi aktif dalam komunitas kategorial 
                  merupakan salah satu cara untuk memperdalam iman dan membangun persekutuan antarumat.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JadwalKegiatanKategorial;