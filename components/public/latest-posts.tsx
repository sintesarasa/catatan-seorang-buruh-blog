import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function LatestPosts() {
  // Mock data - would be fetched from API in a real app
  const latestPosts = [
    {
      id: 1,
      title: "Pengalaman Pertama Menjadi Buruh Pabrik",
      excerpt: "Cerita pengalaman pertama bekerja di pabrik dan pelajaran yang didapat dari sana.",
      date: "2 Agustus 2023",
      category: "Pengalaman",
      slug: "pengalaman-pertama-buruh-pabrik",
    },
    {
      id: 2,
      title: "Kesehatan dan Keselamatan Kerja: Hak yang Sering Terabaikan",
      excerpt: "Pentingnya K3 di tempat kerja dan bagaimana memperjuangkannya.",
      date: "28 Juli 2023",
      category: "Edukasi",
      slug: "kesehatan-keselamatan-kerja",
    },
    {
      id: 3,
      title: "Serikat Pekerja: Mengapa Penting?",
      excerpt: "Peran serikat pekerja dalam memperjuangkan hak-hak buruh dan mengapa kita perlu bergabung.",
      date: "15 Juli 2023",
      category: "Edukasi",
      slug: "serikat-pekerja-mengapa-penting",
    },
    {
      id: 4,
      title: "Diskriminasi Gender di Tempat Kerja",
      excerpt: "Pengalaman dan analisis tentang diskriminasi gender yang masih terjadi di lingkungan kerja.",
      date: "10 Juli 2023",
      category: "Analisis",
      slug: "diskriminasi-gender-tempat-kerja",
    },
    {
      id: 5,
      title: "Outsourcing dan Dampaknya Terhadap Buruh",
      excerpt: "Analisis kritis tentang sistem outsourcing dan bagaimana sistem ini mempengaruhi kesejahteraan buruh.",
      date: "1 Juli 2023",
      category: "Analisis",
      slug: "outsourcing-dampak-terhadap-buruh",
    },
  ];

  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-playfair text-2xl font-bold">Tulisan Terbaru</h2>
        <Link href="/artikel" className="text-sm font-medium hover:underline">
          Lihat Semua
        </Link>
      </div>
      <div className="space-y-6">
        {latestPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="aspect-video w-full bg-muted md:aspect-square"></div>
              <div className="md:col-span-2">
                <CardContent className="p-4">
                  <Badge variant="secondary" className="mb-2">
                    {post.category}
                  </Badge>
                  <CardTitle className="font-playfair mb-2 line-clamp-2 text-xl">
                    <Link href={`/artikel/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                  <p className="line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0 text-sm text-muted-foreground">
                  {post.date}
                </CardFooter>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
