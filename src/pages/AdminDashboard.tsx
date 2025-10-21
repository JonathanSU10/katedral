import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { BarChart, Users, Calendar, Mail, LogOut, Plus, Edit, Trash } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "@/components/ui/use-toast";

interface Announcement {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

const AdminDashboard = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [newAnnouncement, setNewAnnouncement] = useState({ title: "", content: "" });
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editData, setEditData] = useState({ title: "", content: "" });
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin/login");
    } else {
      fetchAnnouncements();
    }
  }, [navigate]);

  const fetchAnnouncements = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch("http://localhost:5000/api/announcements", {
        headers: {
          "x-auth-token": token || "",
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        setAnnouncements(data);
      }
    } catch (error) {
      console.error("Error fetching announcements:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  const handleCreateAnnouncement = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch("http://localhost:5000/api/announcements", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token || "",
        },
        body: JSON.stringify(newAnnouncement),
      });

      if (response.ok) {
        toast({
          title: "Sukses",
          description: "Pengumuman berhasil dibuat.",
        });
        setNewAnnouncement({ title: "", content: "" });
        fetchAnnouncements();
      } else {
        const data = await response.json();
        toast({
          title: "Error",
          description: data.msg || "Gagal membuat pengumuman.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Terjadi kesalahan saat membuat pengumuman.",
        variant: "destructive",
      });
    }
  };

  const handleUpdateAnnouncement = async (id: number) => {
    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(`http://localhost:5000/api/announcements/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token || "",
        },
        body: JSON.stringify(editData),
      });

      if (response.ok) {
        toast({
          title: "Sukses",
          description: "Pengumuman berhasil diperbarui.",
        });
        setEditingId(null);
        fetchAnnouncements();
      } else {
        const data = await response.json();
        toast({
          title: "Error",
          description: data.msg || "Gagal memperbarui pengumuman.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Terjadi kesalahan saat memperbarui pengumuman.",
        variant: "destructive",
      });
    }
  };

  const handleDeleteAnnouncement = async (id: number) => {
    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(`http://localhost:5000/api/announcements/${id}`, {
        method: "DELETE",
        headers: {
          "x-auth-token": token || "",
        },
      });

      if (response.ok) {
        toast({
          title: "Sukses",
          description: "Pengumuman berhasil dihapus.",
        });
        fetchAnnouncements();
      } else {
        const data = await response.json();
        toast({
          title: "Error",
          description: data.msg || "Gagal menghapus pengumuman.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Terjadi kesalahan saat menghapus pengumuman.",
        variant: "destructive",
      });
    }
  };

  // Mock data for dashboard stats
  const stats = [
    { title: "Pesan Kontak", value: "24", icon: Mail, color: "bg-blue-500" },
    { title: "Jadwal Misa", value: "7", icon: Calendar, color: "bg-green-500" },
    { title: "Anggota Komunitas", value: "150", icon: Users, color: "bg-purple-500" },
    { title: "Kegiatan", value: "12", icon: Calendar, color: "bg-orange-500" },
  ];

  const recentActivities = [
    { id: 1, title: "Pesan baru dari Maria Susanti", time: "2 jam yang lalu" },
    { id: 2, title: "Jadwal misa diperbarui", time: "1 hari yang lalu" },
    { id: 3, title: "Pendaftaran katekumen baru", time: "2 hari yang lalu" },
    { id: 4, title: "Pengumuman baru diposting", time: "3 hari yang lalu" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-primary">Dashboard Admin</h1>
              <p className="text-muted-foreground">Selamat datang di panel administrasi Gereja Katedral Santa Maria</p>
            </div>
            <Button onClick={handleLogout} variant="outline" className="flex items-center gap-2">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="border-border/50 bg-card/80 backdrop-blur-sm">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                    <div className={`p-2 rounded-full ${stat.color}`}>
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Announcements Management */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Create Announcement Form */}
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  Buat Pengumuman Baru
                </CardTitle>
                <CardDescription>Tambahkan pengumuman terbaru untuk jemaat</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCreateAnnouncement} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="title" className="text-sm font-medium">Judul</label>
                    <Input
                      id="title"
                      value={newAnnouncement.title}
                      onChange={(e) => setNewAnnouncement({...newAnnouncement, title: e.target.value})}
                      placeholder="Masukkan judul pengumuman"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="content" className="text-sm font-medium">Isi Pengumuman</label>
                    <Textarea
                      id="content"
                      value={newAnnouncement.content}
                      onChange={(e) => setNewAnnouncement({...newAnnouncement, content: e.target.value})}
                      placeholder="Masukkan isi pengumuman"
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Buat Pengumuman
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Announcements List */}
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="h-5 w-5" />
                  Daftar Pengumuman
                </CardTitle>
                <CardDescription>Kelola pengumuman yang sudah dibuat</CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <p className="text-center text-muted-foreground">Memuat pengumuman...</p>
                ) : announcements.length === 0 ? (
                  <p className="text-center text-muted-foreground">Belum ada pengumuman</p>
                ) : (
                  <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                    {announcements.map((announcement) => (
                      <div key={announcement.id} className="p-4 border rounded-lg bg-muted/50">
                        {editingId === announcement.id ? (
                          <div className="space-y-3">
                            <Input
                              value={editData.title}
                              onChange={(e) => setEditData({...editData, title: e.target.value})}
                              placeholder="Judul"
                            />
                            <Textarea
                              value={editData.content}
                              onChange={(e) => setEditData({...editData, content: e.target.value})}
                              placeholder="Isi pengumuman"
                              rows={3}
                            />
                            <div className="flex gap-2">
                              <Button size="sm" onClick={() => handleUpdateAnnouncement(announcement.id)}>
                                Simpan
                              </Button>
                              <Button size="sm" variant="outline" onClick={() => setEditingId(null)}>
                                Batal
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <>
                            <h3 className="font-bold">{announcement.title}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{announcement.content}</p>
                            <div className="flex justify-between items-center mt-2">
                              <span className="text-xs text-muted-foreground">
                                {new Date(announcement.created_at).toLocaleDateString('id-ID')}
                              </span>
                              <div className="flex gap-2">
                                <Button 
                                  size="sm" 
                                  variant="outline" 
                                  onClick={() => {
                                    setEditingId(announcement.id);
                                    setEditData({ title: announcement.title, content: announcement.content });
                                  }}
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="outline" 
                                  onClick={() => handleDeleteAnnouncement(announcement.id)}
                                >
                                  <Trash className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Recent Activities and Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="h-5 w-5" />
                  Aktivitas Terbaru
                </CardTitle>
                <CardDescription>Ringkasan aktivitas terkini di gereja</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-medium">{activity.title}</p>
                        <p className="text-sm text-muted-foreground">{activity.time}</p>
                      </div>
                      <Button variant="ghost" size="sm">Lihat</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Aksi Cepat</CardTitle>
                <CardDescription>Tindakan administrasi yang sering digunakan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="h-20 flex flex-col gap-2">
                    <Mail className="h-5 w-5" />
                    <span>Kelola Pesan</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>Jadwal Misa</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col gap-2">
                    <Users className="h-5 w-5" />
                    <span>Komunitas</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col gap-2">
                    <BarChart className="h-5 w-5" />
                    <span>Laporan</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;