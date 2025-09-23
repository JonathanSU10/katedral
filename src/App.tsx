import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Import all the new pages
import SejarahSingkatGereja from "./pages/SejarahSingkatGereja";
import SambutanRomoParoki from "./pages/SambutanRomoParoki";
import SambutanUskup from "./pages/SambutanUskup";
import SambutanPengurusGereja from "./pages/SambutanPengurusGereja";
import FasilitasGereja from "./pages/FasilitasGereja";
import JadwalMisa from "./pages/JadwalMisa";
import JadwalKegiatanKategorial from "./pages/JadwalKegiatanKategorial";
import AjaranGereja from "./components/AjaranGereja";
import IsiKegiatan from "./pages/IsiKegiatan";
import FormulirKrisma from "./pages/FormulirKrisma";
import FormulirKatakumen from "./pages/FormulirKatakumen";
import Announcements from "./pages/Announcements";
import Contact from "./pages/Contact";
import FormulirKontak from "./pages/FormulirKontak";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Profil Routes */}
          <Route path="/sejarah-singkat-gereja" element={<SejarahSingkatGereja />} />
          <Route path="/sambutan-romo-paroki" element={<SambutanRomoParoki />} />
          <Route path="/sambutan-uskup" element={<SambutanUskup />} />
          <Route path="/sambutan-pengurus-gereja" element={<SambutanPengurusGereja />} />
          <Route path="/fasilitas-gereja" element={<FasilitasGereja />} />
          
          {/* Jadwal Routes */}
          <Route path="/jadwal-misa" element={<JadwalMisa />} />
          <Route path="/jadwal-kegiatan-kategorial" element={<JadwalKegiatanKategorial />} />
          
          {/* Ajaran Gereja */}
          <Route path="/ajaran-gereja" element={<AjaranGereja />} />
          
          {/* Komunitas Gereja Routes */}
          <Route path="/isi-kegiatan" element={<IsiKegiatan />} />
          <Route path="/formulir-krisma" element={<FormulirKrisma />} />
          <Route path="/formulir-katakumen" element={<FormulirKatakumen />} />
          
          {/* Other Routes */}
          <Route path="/pengumuman" element={<Announcements />} />
          <Route path="/kontak" element={<Contact />} />
          <Route path="/formulir-kontak" element={<FormulirKontak />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;