import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SambutanUskup = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Sambutan Bapak Uskup</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sambutan dari Bapak Uskup Keuskupan Agung Palembang
            </p>
          </div>

          <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Sambutan Bapak Uskup</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                <div className="flex-shrink-0">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48 flex items-center justify-center">
                    <span className="text-gray-500">Foto Bapak Uskup</span>
                  </div>
                </div>
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold mb-4">Uskup Agung Palembang</h3>
                  <p className="font-bold text-primary">+Mgr. Robertus Rubiyatmoko, SVD</p>
                </div>
              </div>
              
              <div className="prose max-w-none">
                <p className="italic mb-4">
                  "Saudara-saudari sekalian, dalam damai Tuhan kita sambut dengan sukacita kehadiran 
                  website resmi Gereja Katedral Santa Maria Palembang. Website ini menjadi sarana 
                  komunikasi dan informasi yang sangat penting dalam era digital saat ini."
                </p>
                
                <p className="mb-4">
                  Gereja Katedral Santa Maria merupakan jantung keuskupan kita, tempat kita berkumpul 
                  sebagai umat Allah untuk memuji dan menyembah Tuhan Yang Maha Esa. Melalui website ini, 
                  saya berharap dapat mempererat tali persaudaraan antara para pastor, petugas liturgi, 
                  dan seluruh umat beriman.
                </p>
                
                <p className="mb-4">
                  Di tengah perkembangan zaman yang begitu pesat, kita dituntut untuk terus berinovasi 
                  dalam pelayanan pastoral. Website ini merupakan salah satu wujud nyata dari semangat 
                  tersebut, agar informasi tentang kegiatan gereja, jadwal misa, pengumuman penting, 
                  dan berita gerejawi dapat dengan mudah diakses oleh seluruh umat.
                </p>
                
                <p className="mb-4">
                  Saya mengajak seluruh umat untuk terus aktif dalam kehidupan gerejawi, baik melalui 
                  partisipasi dalam liturgi, kegiatan komunitas kategorial, maupun pelayanan sosial. 
                  Marilah kita bersama-sama membangun Gereja yang hidup, berkembang, dan mewartakan 
                  Injil Kristus dalam konteks kekinian.
                </p>
                
                <p>
                  Semoga website ini menjadi berkat bagi kita semua, dan semoga kasih karunia Tuhan 
                  Yesus Kristus, kasih Allah Bapa, dan persekutuan Roh Kudus senantiasa menyertai 
                  perjalanan iman kita. Tuhan memberkati kita semua.
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

export default SambutanUskup;