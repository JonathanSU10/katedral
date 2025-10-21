import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SejarahSingkatGereja = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Sejarah Singkat Gereja</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mengenal sejarah panjang Gereja Katedral Santa Maria Palembang
            </p>
          </div>

          <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Awal Berdirinya Gereja</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                <p className="mb-4">
                  Gereja Katedral Santa Maria Palembang memiliki sejarah yang kaya dan panjang. Berdiri sejak tahun 1924, 
                  gereja ini merupakan pusat keuskupan yang melayani umat Katolik di wilayah Sumatera Selatan.
                </p>
                <p className="mb-4">
                  Pada tahun 1924, Vatikan mendirikan wilayah gerejawi bagian Selatan yaitu Prefektur Apostolik Bengkulu 
                  yang pelayanannya meliputi Palembang, Jambi, Bengkulu. Vatikan mempercayakan reksa pastoran di wilayah 
                  ini kepada para imam Hati Kudus Yesus (SCJ).
                </p>
                <p>
                  Seiring perkembangan waktu, wilayah ini berkembang menjadi Keuskupan Agung Palembang yang melayani 
                  ribuan umat Katolik di seluruh Sumatera Selatan. Gereja Katedral Santa Maria menjadi simbol spiritual 
                  dan pusat perayaan liturgi bagi umat.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Perkembangan Gereja</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <p className="mb-4">
                    Sejak awal berdiri, Gereja Katedral Santa Maria mengalami berbagai tahap perkembangan. 
                    Dari sekadar bangunan sederhana menjadi pusat liturgi dan pelayanan yang megah seperti saat ini.
                  </p>
                  <p>
                    Pembangunan gedung katedral yang megah dimulai pada tahun 1950-an dan selesai pada tahun 1960-an. 
                    Arsitektur bergaya modern dengan sentuhan tradisional Katolik menjadikan gereja ini landmark 
                    penting di kota Palembang.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Peran dalam Masyarakat</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <p className="mb-4">
                    Selain sebagai tempat ibadah, Gereja Katedral Santa Maria juga memainkan peran penting 
                    dalam masyarakat Palembang. Banyak kegiatan sosial, pendidikan, dan pelayanan yang dilakukan 
                    oleh gereja ini.
                  </p>
                  <p>
                    Gereja ini menjadi pusat kegiatan keuskupan dan tempat berkumpulnya umat Katolik di 
                    Sumatera Selatan. Keberadaannya memberikan warna dalam keberagaman spiritual masyarakat Palembang.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SejarahSingkatGereja;