import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const katakumenSchema = z.object({
  fullName: z.string().min(1, "Nama lengkap harus diisi"),
  birthPlace: z.string().min(1, "Tempat lahir harus diisi"),
  birthDate: z.string().min(1, "Tanggal lahir harus diisi"),
  address: z.string().min(1, "Alamat harus diisi"),
  phone: z.string().min(1, "Nomor telepon harus diisi"),
  email: z.string().email("Email tidak valid").min(1, "Email harus diisi"),
  religion: z.string().min(1, "Agama saat ini harus diisi"),
  reason: z.string().min(10, "Alasan tertarik menjadi Katolik harus diisi minimal 10 karakter"),
  sponsor: z.string().optional()
});

type KatakumenFormData = z.infer<typeof katakumenSchema>;

const FormulirKatakumen = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<KatakumenFormData>({
    resolver: zodResolver(katakumenSchema)
  });

  const onSubmit = (data: KatakumenFormData) => {
    console.log(data);
    // In a real application, you would send this data to your backend
    alert("Formulir Anda telah terkirim! Kami akan segera menghubungi Anda.");
    reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Formulir Kegiatan Katakumen</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Formulir pendaftaran untuk mengikuti kegiatan katakumen di Gereja Katedral Santa Maria Palembang
            </p>
          </div>

          <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Formulir Pendaftaran Katakumen</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium mb-2">Nama Lengkap</label>
                    <Input 
                      id="fullName" 
                      placeholder="Masukkan nama lengkap Anda" 
                      {...register("fullName")} 
                      className={errors.fullName ? "border-red-500" : ""}
                    />
                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="birthPlace" className="block text-sm font-medium mb-2">Tempat Lahir</label>
                    <Input 
                      id="birthPlace" 
                      placeholder="Masukkan tempat lahir Anda" 
                      {...register("birthPlace")} 
                      className={errors.birthPlace ? "border-red-500" : ""}
                    />
                    {errors.birthPlace && <p className="text-red-500 text-sm mt-1">{errors.birthPlace.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="birthDate" className="block text-sm font-medium mb-2">Tanggal Lahir</label>
                    <Input 
                      id="birthDate" 
                      type="date" 
                      {...register("birthDate")} 
                      className={errors.birthDate ? "border-red-500" : ""}
                    />
                    {errors.birthDate && <p className="text-red-500 text-sm mt-1">{errors.birthDate.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Nomor Telepon</label>
                    <Input 
                      id="phone" 
                      placeholder="Masukkan nomor telepon Anda" 
                      {...register("phone")} 
                      className={errors.phone ? "border-red-500" : ""}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium mb-2">Alamat Lengkap</label>
                    <Textarea 
                      id="address" 
                      placeholder="Masukkan alamat lengkap Anda" 
                      rows={3} 
                      {...register("address")} 
                      className={errors.address ? "border-red-500" : ""}
                    />
                    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
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
                    <label htmlFor="religion" className="block text-sm font-medium mb-2">Agama Saat Ini</label>
                    <Input 
                      id="religion" 
                      placeholder="Masukkan agama Anda saat ini" 
                      {...register("religion")} 
                      className={errors.religion ? "border-red-500" : ""}
                    />
                    {errors.religion && <p className="text-red-500 text-sm mt-1">{errors.religion.message}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="reason" className="block text-sm font-medium mb-2">Alasan Tertarik Menjadi Katolik</label>
                    <Textarea 
                      id="reason" 
                      placeholder="Jelaskan alasan Anda tertarik menjadi Katolik..." 
                      rows={4} 
                      {...register("reason")} 
                      className={errors.reason ? "border-red-500" : ""}
                    />
                    {errors.reason && <p className="text-red-500 text-sm mt-1">{errors.reason.message}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="sponsor" className="block text-sm font-medium mb-2">Nama Sponsor (Jika Ada)</label>
                    <Input 
                      id="sponsor" 
                      placeholder="Masukkan nama sponsor Anda (jika ada)" 
                      {...register("sponsor")} 
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full">
                  Kirim Formulir
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FormulirKatakumen;