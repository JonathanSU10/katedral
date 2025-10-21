import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AjaranGereja from "@/components/AjaranGereja";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import ApiService from "@/services/apiService";

interface Announcement {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

const Index = () => {
  const breadcrumbItems = [
    { name: "Beranda" }
  ];

  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const data = await ApiService.getAnnouncements();
        // Take only the first 3 announcements for the homepage
        setAnnouncements(data.slice(0, 3));
      } catch (error) {
        console.error("Failed to fetch announcements:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        
        {/* Pengumuman Terbaru Section */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-primary">Pengumuman Terbaru</h2>
              <Button variant="outline" asChild>
                <Link to="/pengumuman">Lihat Semua</Link>
              </Button>
            </div>
            
            {loading ? (
              <div className="flex justify-center items-center h-48">
                <p className="text-muted-foreground">Memuat pengumuman...</p>
              </div>
            ) : announcements.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">Belum ada pengumuman</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {announcements.map((announcement) => (
                  <Card key={announcement.id} className="border-border/50 hover:shadow-hope transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-primary text-lg line-clamp-2">
                        {announcement.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(announcement.created_at).toLocaleDateString('id-ID')}</span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {announcement.content.substring(0, 100)}...
                      </p>
                      <Button variant="link" className="p-0 h-auto" asChild>
                        <Link to={`/pengumuman/${announcement.id}`}>Baca selengkapnya</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
        
        {/* Tombol Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Akses Cepat</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Temukan informasi penting dengan mudah melalui tombol di bawah ini
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Button size="lg" className="bg-gradient-gold text-gold-foreground hover:shadow-gold font-semibold px-8 py-6 text-lg transform transition-all duration-300 hover:scale-105" asChild>
                <Link to="/jadwal-misa">
                  <Clock className="mr-2 h-5 w-5" />
                  Jadwal Misa
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg" asChild>
                <Link to="/kontak">
                  <Calendar className="mr-2 h-5 w-5" />
                  Kontak Gereja
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        <AjaranGereja />
      </main>
      <Footer />
    </div>
  );
};

export default Index;