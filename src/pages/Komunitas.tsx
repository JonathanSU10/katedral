import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Heart, BookOpen, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Komunitas = () => {
  const communityGroups = [
    {
      name: "Paroki",
      description: "Komunitas umat dewasa yang aktif dalam kehidupan liturgi dan pelayanan gereja",
      icon: Users
    },
    {
      name: "Orang Muda",
      description: "Komunitas pemuda yang berfokus pada pembinaan iman dan pelayanan sosial",
      icon: Heart
    },
    {
      name: "Remaja",
      description: "Komunitas remaja yang memperdalam iman melalui kegiatan yang sesuai usia",
      icon: BookOpen
    },
    {
      name: "Anak-anak",
      description: "Komunitas anak-anak yang belajar tentang iman melalui cara yang menyenangkan",
      icon: Calendar
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Komunitas Gereja</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Berbagai komunitas yang ada di Gereja Katedral Santa Maria Palembang untuk memperdalam iman dan persekutuan umat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {communityGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <Card key={index} className="border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-hope transition-all">
                  <CardHeader>
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-primary">{group.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{group.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Kehidupan Komunitas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Setiap komunitas di Gereja Katedral Santa Maria memiliki kehidupan yang aktif dengan berbagai kegiatan 
                yang bertujuan untuk memperdalam iman, membangun persekutuan, dan melayani sesama.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link to="/isi-kegiatan" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-auto">
                  Lihat Isi Kegiatan
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Komunitas;