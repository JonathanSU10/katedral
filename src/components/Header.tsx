import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import crossLogo from "@/assets/cross-logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Menu items for dropdowns
  const profilItems = [
    { name: "Sejarah Singkat Gereja", path: "/sejarah-singkat-gereja" },
    { name: "Sambutan Romo Paroki", path: "/sambutan-romo-paroki" },
    { name: "Sambutan Bapak Uskup", path: "/sambutan-uskup" },
    { name: "Struktur Pengurus Gereja", path: "/sambutan-pengurus-gereja" },
    { name: "Fasilitas Gereja", path: "/fasilitas-gereja" }
  ];

  const jadwalItems = [
    { name: "Jadwal Misa", path: "/jadwal-misa" },
    { name: "Jadwal Kegiatan Kategorial", path: "/jadwal-kegiatan-kategorial" }
  ];

  const komunitasItems = [
    { name: "Komunitas", path: "/komunitas" },
    { name: "Isi Kegiatan", path: "/isi-kegiatan" }
    // Formulir items have been moved to formulirItems
  ];

  const formulirItems = [
    { name: "Formulir Kontak", path: "/formulir-kontak" },
    { name: "Formulir Kegiatan Krisma", path: "/formulir-krisma" },
    { name: "Formulir Kegiatan Katakumen", path: "/formulir-katakumen" }
  ];

  const kontakItems = [
    { name: "Nomor Telepon / Email / Alamat", path: "/kontak" },
    { name: "Admin Login", path: "/admin/login" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <div className="h-10 w-10 rounded-lg bg-gradient-sacred flex items-center justify-center shadow-sacred p-2">
            <img src={crossLogo} alt="Cross Logo" className="h-full w-full object-contain filter brightness-0 invert" />
          </div>
          <h1 className="hidden sm:block text-xl font-bold text-primary">
            Gereja Katedral Santa Maria Palembang
          </h1>
          <h1 className="sm:hidden text-lg font-bold text-primary">
            Katedral Santa Maria
          </h1>
        </div>

        {/* Navigation */}
        <nav className="ml-auto flex items-center space-x-6">
          <Button variant="ghost" className="text-primary hover:text-accent hover:bg-secondary/50" asChild>
            <Link to="/">Beranda</Link>
          </Button>
          
          {/* Profil Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className="text-primary hover:text-accent hover:bg-secondary/50 flex items-center gap-1"
              >
                Profil
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 bg-card border-border shadow-sacred">
              {profilItems.map((item) => (
                <DropdownMenuItem 
                  key={item.name}
                  className="cursor-pointer hover:bg-secondary focus:bg-secondary text-card-foreground"
                  asChild
                >
                  <Link to={item.path}>{item.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* Jadwal Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className="text-primary hover:text-accent hover:bg-secondary/50 flex items-center gap-1"
              >
                Jadwal
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 bg-card border-border shadow-sacred">
              {jadwalItems.map((item) => (
                <DropdownMenuItem 
                  key={item.name}
                  className="cursor-pointer hover:bg-secondary focus:bg-secondary text-card-foreground"
                  asChild
                >
                  <Link to={item.path}>{item.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Ajaran Gereja */}
          <Button variant="ghost" className="text-primary hover:text-accent hover:bg-secondary/50" asChild>
            <Link to="/ajaran-gereja">Ajaran Gereja</Link>
          </Button>

          {/* Komunitas Gereja Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className="text-primary hover:text-accent hover:bg-secondary/50 flex items-center gap-1"
              >
                Komunitas Gereja
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 bg-card border-border shadow-sacred">
              {komunitasItems.map((item) => (
                <DropdownMenuItem 
                  key={item.name}
                  className="cursor-pointer hover:bg-secondary focus:bg-secondary text-card-foreground"
                  asChild
                >
                  <Link to={item.path}>{item.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Pengumuman */}
          <Button variant="ghost" className="text-primary hover:text-accent hover:bg-secondary/50" asChild>
            <Link to="/pengumuman">Pengumuman</Link>
          </Button>
          
          {/* Formulir Dropdown - Now contains all form items */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className="text-primary hover:text-accent hover:bg-secondary/50 flex items-center gap-1"
              >
                Formulir
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 bg-card border-border shadow-sacred">
              {formulirItems.map((item) => (
                <DropdownMenuItem 
                  key={item.name}
                  className="cursor-pointer hover:bg-secondary focus:bg-secondary text-card-foreground"
                  asChild
                >
                  <Link to={item.path}>{item.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* Kontak Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className="text-primary hover:text-accent hover:bg-secondary/50 flex items-center gap-1"
              >
                Kontak
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 bg-card border-border shadow-sacred">
              {kontakItems.map((item) => (
                <DropdownMenuItem 
                  key={item.name}
                  className="cursor-pointer hover:bg-secondary focus:bg-secondary text-card-foreground"
                  asChild
                >
                  <Link to={item.path}>{item.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
};

export default Header;