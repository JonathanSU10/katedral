import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ApiService from "@/services/apiService";

interface Announcement {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

const Announcements = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const data = await ApiService.getAnnouncements();
        setAnnouncements(data);
      } catch (error) {
        console.error("Failed to fetch announcements:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-lg text-muted-foreground">Memuat pengumuman...</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Pengumuman Gereja</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pengumuman terbaru dan kegiatan dari Gereja Katedral Santa Maria Palembang
            </p>
          </div>

          {announcements.length === 0 ? (
            <div className="text-center py-12">
              <div className="bg-muted/50 rounded-lg p-8 max-w-md mx-auto">
                <h3 className="text-xl font-semibold mb-2">Belum Ada Pengumuman</h3>
                <p className="text-muted-foreground">
                  Saat ini belum ada pengumuman. Silakan periksa kembali nanti untuk informasi terbaru.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {announcements.map((announcement) => (
                <Card key={announcement.id} className="border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-hope transition-all">
                  <CardHeader>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <CardTitle className="text-xl text-primary">{announcement.title}</CardTitle>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(announcement.created_at).toLocaleDateString('id-ID')}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {announcement.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Announcements;