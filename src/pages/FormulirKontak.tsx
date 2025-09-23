import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Breadcrumb from "@/components/Breadcrumb";

const contactSchema = z.object({
  name: z.string().min(1, "Nama harus diisi"),
  email: z.string().email("Email tidak valid").min(1, "Email harus diisi"),
  subject: z.string().min(1, "Subjek harus diisi"),
  message: z.string().min(10, "Pesan harus minimal 10 karakter")
});

type ContactFormData = z.infer<typeof contactSchema>;

const FormulirKontak = () => {
  const breadcrumbItems = [
    { name: "Beranda", path: "/" },
    { name: "Formulir Kontak" }
  ];

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    // In a real application, you would send this data to your backend
    alert("Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.");
    reset();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Formulir Kontak</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Kirim pesan kepada kami melalui formulir kontak di bawah ini
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Informasi Kontak */}
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Informasi Kontak</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Alamat</h3>
                <p className="text-muted-foreground">
                  Jl. Dr. Sutomo No.4<br />
                  Talang Semut, Kec. Bukit Kecil<br />
                  Kota Palembang, Sumatera Selatan 30121
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Telepon</h3>
                <p className="text-muted-foreground">(0711) 351 234</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-muted-foreground">info@katedralpalembang.org</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Jam Operasional</h3>
                <div className="text-muted-foreground">
                  <p>Senin - Jumat: 08.00 - 17.00 WIB</p>
                  <p>Sabtu: 08.00 - 15.00 WIB</p>
                  <p>Minggu: Sesuai jadwal misa</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Formulir Kontak */}
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Kirim Pesan</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Nama Lengkap</label>
                <Input 
                  id="name" 
                  placeholder="Masukkan nama Anda" 
                  {...register("name")} 
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Masukkan email Anda" 
                  {...register("email")} 
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subjek</label>
                <Input 
                  id="subject" 
                  placeholder="Masukkan subjek pesan" 
                  {...register("subject")} 
                  className={errors.subject ? "border-red-500" : ""}
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Pesan</label>
                <Textarea 
                  id="message" 
                  placeholder="Tulis pesan Anda di sini..." 
                  rows={5} 
                  {...register("message")} 
                  className={errors.message ? "border-red-500" : ""}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <Button type="submit" className="w-full">
                Kirim Pesan
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FormulirKontak;