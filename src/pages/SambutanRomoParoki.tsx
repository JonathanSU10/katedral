import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Breadcrumb from "@/components/Breadcrumb";

const SambutanRomoParoki = () => {
  const breadcrumbItems = [
    { name: "Beranda", path: "/" },
    { name: "Profil", path: "#" },
    { name: "Sambutan Romo Paroki" }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Sambutan Romo Paroki</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Sambutan dari Romo Paroki Gereja Katedral Santa Maria Palembang
        </p>
      </div>

      <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">Sambutan Romo Paroki</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
            <div className="flex-shrink-0">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48 flex items-center justify-center">
                <span className="text-gray-500">Foto Romo Paroki</span>
              </div>
            </div>
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4">Romo Paroki</h3>
              <p className="font-bold text-primary">Romo Dr. Petrus Susanto, Pr.</p>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <p className="italic mb-4">
              "Saudara-saudari sekalian, selamat datang di website resmi Gereja Katedral Santa Maria Palembang. 
              Sebagai romo paroki, saya merasa sangat berbahagia bisa melayani umat Tuhan di wilayah ini."
            </p>
            
            <p className="mb-4">
              Gereja Katedral Santa Maria bukan hanya sebuah bangunan megah, tetapi rumah bagi keluarga besar umat 
              Katolik di Palembang. Kami berkomitmen untuk terus membangun komunitas yang penuh kasih, kepedulian, 
              dan pelayanan bagi sesama.
            </p>
            
            <p className="mb-4">
              Dalam era digital ini, website ini kami hadirkan sebagai sarana komunikasi dan informasi bagi seluruh 
              umat. Melalui media ini, kami berharap dapat lebih dekat dengan Anda dan terus memperbarui informasi 
              mengenai kegiatan-kegiatan gereja.
            </p>
            
            <p className="mb-4">
              Marilah kita terus bersama-sama membangun Gereja yang hidup dan mewartakan Injil Kristus dalam konteks 
              kekinian. Website ini menjadi sarana untuk mempererat tali persaudaraan antara para pastor, petugas 
              liturgi, dan seluruh umat beriman.
            </p>
            
            <p>
              Semoga kasih karunia Tuhan Yesus Kristus, kasih Allah Bapa, dan persekutuan Roh Kudus senantiasa 
              menyertai perjalanan iman kita. Tuhan memberkati kita semua.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SambutanRomoParoki;