import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

const Announcements = () => {
  const breadcrumbItems = [
    { name: "Beranda", path: "/" },
    { name: "Pengumuman" }
  ];

  const announcements = [
    {
      id: 1,
      title: "Perayaan Natal 2024",
      date: "2024-12-24",
      time: "19.00 WIB",
      content: "Gereja akan menyelenggarakan perayaan Natal pada malam tahun baru 2024. Acara akan dimulai pada pukul 19.00 WIB dengan misa kudus diikuti dengan perayaan bersama umat. Mari kita rayakan kelahiran Tuhan Yesus Kristus dengan penuh sukacita dan damai sejahtera.",
      category: "Kegiatan"
    },
    {
      id: 2,
      title: "Retret Pra-Natal",
      date: "2024-12-20",
      time: "07.00 WIB - 17.00 WIB",
      content: "Dalam rangka menyambut perayaan Natal, gereja akan mengadakan retret Pra-Natal selama satu hari pada tanggal 20 Desember 2024. Retret ini terbuka untuk semua umat yang ingin mempersiapkan hati dalam menyambut kelahiran Tuhan Yesus Kristus.",
      category: "Kegiatan"
    },
    {
      id: 3,
      title: "Pembaharuan Jadwal Misa Minggu",
      date: "2024-12-01",
      time: "Mulai 1 Desember 2024",
      content: "Terhitung mulai tanggal 1 Desember 2024, jadwal misa minggu akan mengalami perubahan. Misa pagi akan dimulai pada pukul 07.00 WIB dan misa sore pada pukul 18.00 WIB. Mohon perhatian dan kerjasama dari seluruh umat.",
      category: "Pengumuman"
    },
    {
      id: 4,
      title: "Baksos Natal 2024",
      date: "2024-12-25",
      time: "09.00 WIB - 15.00 WIB",
      content: "Gereja akan mengadakan bakti sosial Natal 2024 dalam bentuk pembagian sembako kepada saudara-saudari kita yang membutuhkan. Kegiatan ini akan dilaksanakan pada tanggal 25 Desember 2024 pukul 09.00 WIB - 15.00 WIB di halaman gereja. Mari kita wujudkan kasih Kristus dengan membantu sesama.",
      category: "Kegiatan"
    },
    {
      id: 5,
      title: "Pendaftaran OMK 2025",
      date: "2024-11-15",
      time: "Sampai 30 November 2024",
      content: "Dibuka pendaftaran anggota baru Orang Muda Katolik (OMK) tahun 2025. Bagi para pemuda yang berusia antara 15-35 tahun dan ingin terlibat dalam kegiatan gereja, silakan mendaftar di sekretariat OMK sampai dengan tanggal 30 November 2024.",
      category: "Kegiatan"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Pengumuman Gereja</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Pengumuman terbaru dan kegiatan dari Gereja Katedral Santa Maria Palembang
        </p>
      </div>

      <div className="space-y-6">
        {announcements.map((announcement) => (
          <Card key={announcement.id} className="border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-hope transition-all">
            <CardHeader>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <CardTitle className="text-xl text-primary">{announcement.title}</CardTitle>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{announcement.date}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{announcement.time}</span>
                  </div>
                </div>
              </div>
              <div>
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-secondary text-secondary-foreground">
                  {announcement.category}
                </span>
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
    </div>
  );
};

export default Announcements;