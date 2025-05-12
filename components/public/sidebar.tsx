import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Sidebar() {
  // Mock data - would be fetched from API in a real app
  const categories = [
    { id: 1, name: "Analisis", count: 12, slug: "analisis" },
    { id: 2, name: "Opini", count: 8, slug: "opini" },
    { id: 3, name: "Pengalaman", count: 15, slug: "pengalaman" },
    { id: 4, name: "Edukasi", count: 10, slug: "edukasi" },
    { id: 5, name: "Berita", count: 7, slug: "berita" },
  ];

  const popularPosts = [
    {
      id: 1,
      title: "Perjuangan Buruh di Era Digital",
      date: "12 Agustus 2023",
      slug: "perjuangan-buruh-era-digital",
    },
    {
      id: 2,
      title: "Solidaritas Antar Pekerja: Kunci Gerakan Buruh",
      date: "5 Juli 2023",
      slug: "solidaritas-antar-pekerja",
    },
    {
      id: 3,
      title: "Upah Minimum dan Kesejahteraan Buruh",
      date: "20 Juni 2023",
      slug: "upah-minimum-kesejahteraan-buruh",
    },
  ];

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Pencarian</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex space-x-2">
            <Input placeholder="Cari artikel..." />
            <Button type="submit">Cari</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Kategori</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Link key={category.id} href={`/kategori/${category.slug}`}>
                <Badge variant="outline" className="cursor-pointer">
                  {category.name} ({category.count})
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Artikel Populer</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {popularPosts.map((post) => (
              <div key={post.id} className="border-b pb-4 last:border-0 last:pb-0">
                <Link href={`/artikel/${post.slug}`} className="font-medium hover:underline">
                  {post.title}
                </Link>
                <p className="mt-1 text-xs text-muted-foreground">{post.date}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Berlangganan</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-sm text-muted-foreground">
            Dapatkan artikel terbaru langsung ke email Anda.
          </p>
          <form className="space-y-2">
            <Input placeholder="Email Anda" type="email" />
            <Button className="w-full">Berlangganan</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
