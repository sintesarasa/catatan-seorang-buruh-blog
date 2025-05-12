import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function FeaturedPosts() {
  // Mock data - would be fetched from API in a real app
  const featuredPosts = [
    {
      id: 1,
      title: "Perjuangan Buruh di Era Digital",
      excerpt: "Bagaimana teknologi mengubah lanskap perjuangan buruh di Indonesia dan tantangan yang dihadapi.",
      date: "12 Agustus 2023",
      category: "Analisis",
      slug: "perjuangan-buruh-era-digital",
    },
    {
      id: 2,
      title: "Solidaritas Antar Pekerja: Kunci Gerakan Buruh",
      excerpt: "Pentingnya membangun solidaritas antar pekerja dalam memperjuangkan hak-hak buruh.",
      date: "5 Juli 2023",
      category: "Opini",
      slug: "solidaritas-antar-pekerja",
    },
    {
      id: 3,
      title: "Upah Minimum dan Kesejahteraan Buruh",
      excerpt: "Analisis kritis tentang kebijakan upah minimum dan dampaknya terhadap kesejahteraan buruh.",
      date: "20 Juni 2023",
      category: "Analisis",
      slug: "upah-minimum-kesejahteraan-buruh",
    },
  ];

  return (
    <section className="mb-12">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-playfair text-2xl font-bold">Tulisan Pilihan</h2>
        <Link href="/kategori" className="text-sm font-medium hover:underline">
          Lihat Semua
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <CardHeader className="p-0">
              <div className="aspect-video w-full bg-muted"></div>
            </CardHeader>
            <CardContent className="p-4">
              <Badge variant="secondary" className="mb-2">
                {post.category}
              </Badge>
              <CardTitle className="font-playfair mb-2 line-clamp-2 text-xl">
                <Link href={`/artikel/${post.slug}`}>{post.title}</Link>
              </CardTitle>
              <p className="line-clamp-3 text-sm text-muted-foreground">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0 text-sm text-muted-foreground">
              {post.date}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
