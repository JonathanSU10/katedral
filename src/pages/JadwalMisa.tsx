import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const JadwalMisa = () => {
  const schedules = [
    {
      day: "Senin",
      times: ["05.45 WIB"],
      location: "Gereja Katedral"
    },
    {
      day: "Selasa",
      times: ["05.45 WIB"],
      location: "Gereja Katedral"
    },
    {
      day: "Rabu",
      times: ["18.00 WIB"],
      location: "Gereja Katedral"
    },
    {
      day: "Kamis",
      times: ["18.00 WIB"],
      location: "Gereja Katedral"
    },
    {
      day: "Jumat",
      times: ["18.00 WIB"],
      location: "Gereja Katedral"
    },
    {
      day: "Sabtu",
      times: ["18.00 WIB"],
      location: "Gereja Katedral"
    },
    {
      day: "Minggu",
      times: ["07.00 WIB", "18.00 WIB"],
      location: "Gereja Katedral"
    }
  ];

  const specialSchedules = [
    {
      name: "Misa Hari Raya",
      description: "Jadwal khusus pada hari raya besar Gereja",
      time: "Sesuai jadwal liturgi"
    },
    {
      name: "Adorasi",
      description: "Perayaan penyembahan kepada Tuhan",
      time: "Setiap hari Jumat, 18.30 WIB"
    },
    {
      name: "Doa Rosario",
      description: "Perayaan doa Rosario bersama umat",
      time: "Setiap hari Sabtu, 17.00 WIB"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Jadwal Misa</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Jadwal misa rutin mingguan dan kegiatan liturgi khusus di Gereja Katedral Santa Maria Palembang
            </p>
          </div>

          {/* Lokasi dan Jam Misa */}
          <Card className="mb-12 border-border/50 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <MapPin className="h-6 w-6" />
                Lokasi dan Jam Misa
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Alamat Gereja</h3>
                <p className="text-muted-foreground">
                  Jl. Dr. Sutomo No.4, Talang Semut, Kec. Bukit Kecil, Kota Palembang, Sumatera Selatan 30121
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Hari</th>
                      <th className="text-left py-3 px-4">Jam</th>
                      <th className="text-left py-3 px-4">Lokasi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedules.map((schedule, index) => (
                      <tr key={index} className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4 font-medium">{schedule.day}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{schedule.times.join(", ")}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">{schedule.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Jadwal Khusus */}
          <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Jadwal Kegiatan Khusus</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {specialSchedules.map((schedule, index) => (
                  <div key={index} className="border border-border/50 rounded-lg p-6 hover:shadow-hope transition-all">
                    <h3 className="text-xl font-semibold mb-2 text-primary">{schedule.name}</h3>
                    <p className="text-muted-foreground mb-4">{schedule.description}</p>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{schedule.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JadwalMisa;