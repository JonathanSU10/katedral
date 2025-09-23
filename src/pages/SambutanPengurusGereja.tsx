import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Breadcrumb from "@/components/Breadcrumb";

const SambutanPengurusGereja = () => {
  const breadcrumbItems = [
    { name: "Beranda", path: "/" },
    { name: "Profil", path: "#" },
    { name: "Sambutan Pengurus Gereja" }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Sambutan Pengurus Gereja</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Sambutan dari Para Pengurus Gereja Katedral Santa Maria Palembang
        </p>
      </div>

      <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">Sambutan Pengurus Gereja</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none">
            <p className="italic mb-4">
              "Saudara-saudari sekalian, dengan rendah hati kami para pengurus gereja menyambut 
              kehadiran website resmi Gereja Katedral Santa Maria Palembang. Website ini menjadi 
              wujud nyata dari komitmen kami dalam melayani umat dengan lebih baik."
            </p>
            
            <p className="mb-4">
              Sebagai pengurus gereja, kami memiliki tanggung jawab besar dalam mengelola segala 
              aspek kehidupan gerejawi, mulai dari administrasi, keuangan, fasilitas, hingga 
              koordinasi berbagai kegiatan pastoral dan sosial. Kami berusaha mewujudkan pelayanan 
              yang transparan, efektif, dan efisien demi kemajuan Gereja.
            </p>
            
            <p className="mb-4">
              Melalui website ini, kami berharap dapat memberikan informasi yang akurat dan 
              terkini kepada seluruh umat tentang kegiatan gereja, jadwal ibadat, pengumuman 
              penting, serta laporan pertanggungjawaban pengurus gereja. Kami juga berharap 
              website ini dapat menjadi sarana komunikasi dua arah antara pengurus dan umat.
            </p>
            
            <p className="mb-4">
              Kami menyadari bahwa dalam melayani umat yang beragam, kami tidak bisa bekerja 
              sendiri. Dukungan, doa, dan partisipasi aktif dari seluruh umat sangat kami 
              butuhkan. Marilah kita bersama-sama membangun Gereja yang hidup dan mewartakan 
              Injil Kristus dalam konteks kekinian.
            </p>
            
            <p>
              Semoga pelayanan kami dapat menjadi berkat bagi seluruh umat, dan semoga kasih 
              karunia Tuhan Yesus Kristus, kasih Allah Bapa, dan persekutuan Roh Kudus 
              senantiasa menyertai perjalanan iman kita. Tuhan memberkati kita semua.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SambutanPengurusGereja;