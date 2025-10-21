import { Button } from "@/components/ui/button";
import cathedralHero from "@/assets/logo.jpg";

const Hero = () => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cathedralHero})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          Gereja Katedral Santa Maria Palembang
        </h1>
        
        <p className="text-lg md:text-xl mb-8 leading-relaxed drop-shadow-md max-w-3xl mx-auto">
          Pada tahun 1924 Vatikan mendirikan wilayah gerejawi bagian Selatan yaitu Prefektur Apostolik Bengkulu yang pelayanannya meliputi Palembang, Jambi, Bengkulu. Vatikan mempercayakan reksa pastoran di wilayah ini kepada para imam Hati Kudus Yesus (SCJ).
        </p>
        
        <Button 
          size="lg" 
          className="bg-gradient-gold text-gold-foreground hover:shadow-gold font-semibold px-8 py-6 text-lg transform transition-all duration-300 hover:scale-105"
        >
          Selengkapnya
        </Button>
      </div>
    </section>
  );
};

export default Hero;