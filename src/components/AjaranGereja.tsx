import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AjaranGereja = () => {
  const teachings = [
    {
      title: "Sakramen Baptis",
      description: "Sakramen inisiasi pertama yang menandai kelahiran baru dalam kehidupan Kristen dan menjadi anggota Gereja Katolik."
    },
    {
      title: "Sakramen Krisma", 
      description: "Sakramen yang menyempurnakan baptis dan memberikan kekuatan Roh Kudus untuk menjadi saksi Kristus."
    },
    {
      title: "Sakramen Ekaristi",
      description: "Sakramen yang merupakan puncak dan sumber kehidupan Kristen, di mana kita menerima Tubuh dan Darah Kristus."
    },
    {
      title: "Sakramen Pengakuan Dosa",
      description: "Sakramen rekonsiliasi yang memberikan pengampunan dosa dan memulihkan hubungan dengan Allah dan Gereja."
    },
    {
      title: "Sakramen Pernikahan",
      description: "Sakramen yang menyatukan pria dan wanita dalam ikatan cinta yang kudus dan tak terpisahkan."
    },
    {
      title: "Sakramen Tahbisan",
      description: "Sakramen yang memberikan kuasa untuk melayani umat Allah sebagai diakon, imam, atau uskup."
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Ajaran Gereja
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mengenal lebih dalam ajaran-ajaran fundamental Gereja Katolik yang menjadi dasar kehidupan beriman kita.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachings.map((teaching, index) => (
            <Card key={index} className="border-border/50 hover:shadow-hope transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-primary text-xl">
                  {teaching.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {teaching.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AjaranGereja;