import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ajaranItems = [
    "Sakramen",
    "Sakramen Baptis", 
    "Sakramen Krisma",
    "Sakramen Ekaristi",
    "Sakramen Pengakuan Dosa",
    "Sakramen Tahbisan",
    "Sakramen Pernikahan",
    "Sakramen Pengurapan"
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <div className="h-10 w-10 rounded-lg bg-gradient-sacred flex items-center justify-center shadow-sacred">
            <span className="text-primary-foreground font-bold text-lg">⛪</span>
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
          <Button variant="ghost" className="text-primary hover:text-accent">
            Beranda
          </Button>
          
          <Button variant="ghost" className="text-primary hover:text-accent">
            Jadwal
          </Button>

          {/* Ajaran Gereja Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className="text-primary hover:text-accent flex items-center gap-1"
              >
                Ajaran Gereja
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-card border-border shadow-sacred">
              {ajaranItems.map((item) => (
                <DropdownMenuItem 
                  key={item}
                  className="cursor-pointer hover:bg-secondary focus:bg-secondary text-card-foreground"
                >
                  {item}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" className="text-primary hover:text-accent">
            Pengumuman
          </Button>
          
          <Button variant="ghost" className="text-primary hover:text-accent">
            Tentang
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;