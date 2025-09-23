import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

const Contact = () => {
  const breadcrumbItems = [
    { name: "Beranda", path: "/" },
    { name: "Kontak" }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Kontak Gereja</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Hubungi kami untuk informasi lebih lanjut
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
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-primary/10 rounded-full">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Alamat</h3>
                  <p className="text-muted-foreground">
                    Jl. Dr. Sutomo No.4<br />
                    Talang Semut, Kec. Bukit Kecil<br />
                    Kota Palembang, Sumatera Selatan 30121
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-primary/10 rounded-full">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Telepon</h3>
                  <p className="text-muted-foreground">(0711) 351 234</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-primary/10 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">info@katedralpalembang.org</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-primary/10 rounded-full">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Jam Operasional</h3>
                  <div className="text-muted-foreground">
                    <p>Senin - Jumat: 08.00 - 17.00 WIB</p>
                    <p>Sabtu: 08.00 - 15.00 WIB</p>
                    <p>Minggu: Sesuai jadwal misa</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Button asChild className="w-full">
                  <Link to="/formulir-kontak">Kirim Pesan Melalui Formulir</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Peta Lokasi */}
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Lokasi Gereja</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Peta lokasi Gereja Katedral Santa Maria Palembang</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;