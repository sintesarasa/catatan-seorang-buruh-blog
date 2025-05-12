import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export function Sidebar() {
  // Mock data - would be fetched from API in a real app
  const categories = [
    { id: 1, name: "Keseharian", count: 15, slug: "keseharian" },
    { id: 2, name: "Politik", count: 12, slug: "politik" },
    { id: 3, name: "Edukasi", count: 10, slug: "edukasi" },
    { id: 4, name: "Opini", count: 8, slug: "opini" },
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
    {
      id: 4,
      title: "Perempuan dalam Gerakan Buruh",
      date: "15 Mei 2023",
      slug: "perempuan-gerakan-buruh",
    },
  ];

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Tentang Blog</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Catatan Seorang Buruh</span> adalah ruang refleksi dan berbagi pengalaman dari perspektif pekerja. 
            Blog ini bertujuan untuk memberikan suara kepada para buruh dan membangun kesadaran kolektif tentang 
            realitas kehidupan pekerja di Indonesia.
          </p>
          <Button variant="link" className="p-0 mt-2 h-auto text-maroon" asChild>
            <Link href="/about" className="inline-flex items-center">
              Tentang Kami
              <Icons.arrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Kategori</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.id} className="flex items-center justify-between">
                <Link 
                  href={`/kategori/${category.slug}`} 
                  className="hover:text-maroon transition-colors flex items-center"
                >
                  <span className="mr-2 h-2 w-2 rounded-full bg-maroon/60"></span>
                  {category.name}
                </Link>
                <Badge variant="outline" className="text-xs font-normal">
                  {category.count}
                </Badge>
              </li>
            ))}
          </ul>
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
                <Link href={`/artikel/${post.slug}`} className="font-medium hover:text-maroon transition-colors line-clamp-2">
                  {post.title}
                </Link>
                <p className="mt-1 text-xs flex items-center text-muted-foreground">
                  <Icons.calendar className="mr-1 h-3 w-3" />
                  {post.date}
                </p>
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
            <Button className="w-full bg-maroon hover:bg-maroon/90">Langganan</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
