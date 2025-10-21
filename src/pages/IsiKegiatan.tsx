import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const IsiKegiatan = () => {
  const activities = [
    {
      name: "Perayaan Ekaristi",
      description: "Perayaan Misa harian dan mingguan sebagai puncak dan sumber kehidupan Kristiani",
      frequency: "Harian dan Mingguan"
    },
    {
      name: "Doa Rosario",
      description: "Perayaan doa Rosario bersama umat setiap hari Sabtu",
      frequency: "Mingguan"
    },
    {
      name: "Adorasi",
      description: "Perayaan penyembahan kepada Tuhan setiap hari Jumat malam",
      frequency: "Mingguan"
    },
    {
      name: "Katekese",
      description: "Pembinaan iman bagi calon baptis, komuni pertama, dan krisma",
      frequency: "Bulanan"
    },
    {
      name: "Retret Rohani",
      description: "Kegiatan retret untuk memperdalam hubungan dengan Tuhan",
      frequency: "Triwulanan"
    },
    {
      name: "Pelayanan Sosial",
      description: "Kegiatan bakti sosial untuk membantu sesama yang membutuhkan",
      frequency: "Bulanan"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Isi Kegiatan</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kegiatan-kegiatan yang diselenggarakan di Gereja Katedral Santa Maria Palembang
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <Card key={index} className="border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-hope transition-all">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{activity.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{activity.description}</p>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{activity.frequency}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 border-border/50 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <Heart className="h-6 w-6" />
                Nilai-nilai Kegiatan Gereja
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-primary/5 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-2">Liturgi</h3>
                  <p className="text-muted-foreground">
                    Memelihara dan memperdalam hubungan dengan Tuhan melalui perayaan liturgi yang hidup.
                  </p>
                </div>
                <div className="text-center p-6 bg-primary/5 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-2">Komunitas</h3>
                  <p className="text-muted-foreground">
                    Membangun persekutuan yang kuat di antara sesama umat dalam kasih Kristus.
                  </p>
                </div>
                <div className="text-center p-6 bg-primary/5 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-2">Pelayanan</h3>
                  <p className="text-muted-foreground">
                    Melayani sesama dengan kasih Kristus, terutama mereka yang lemah dan membutuhkan.
                  </p>
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

export default IsiKegiatan;