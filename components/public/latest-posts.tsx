import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

export function LatestPosts() {
  // Mock data - would be fetched from API in a real app
  const latestPosts = [
    {
      id: 1,
      title: "Pengalaman Pertama Menjadi Buruh Pabrik",
      excerpt: "Cerita pengalaman pertama bekerja di pabrik dan pelajaran yang didapat dari sana.",
      date: "2 Agustus 2023",
      category: "Keseharian",
      slug: "pengalaman-pertama-buruh-pabrik",
      image: "/placeholder-image-1.jpg"
    },
    {
      id: 2,
      title: "Kesehatan dan Keselamatan Kerja: Hak yang Sering Terabaikan",
      excerpt: "Pentingnya K3 di tempat kerja dan bagaimana memperjuangkannya.",
      date: "28 Juli 2023",
      category: "Keseharian",
      slug: "kesehatan-keselamatan-kerja",
      image: "/placeholder-image-2.jpg"
    },
    {
      id: 3,
      title: "Serikat Pekerja: Mengapa Penting?",
      excerpt: "Peran serikat pekerja dalam memperjuangkan hak-hak buruh dan mengapa kita perlu bergabung.",
      date: "15 Juli 2023",
      category: "Politik",
      slug: "serikat-pekerja-mengapa-penting",
      image: "/placeholder-image-3.jpg"
    },
    {
      id: 4,
      title: "Diskriminasi Gender di Tempat Kerja",
      excerpt: "Pengalaman dan analisis tentang diskriminasi gender yang masih terjadi di lingkungan kerja.",
      date: "10 Juli 2023",
      category: "Politik",
      slug: "diskriminasi-gender-tempat-kerja",
      image: "/placeholder-image-4.jpg"
    },
    {
      id: 5,
      title: "Outsourcing dan Dampaknya Terhadap Buruh",
      excerpt: "Analisis kritis tentang sistem outsourcing dan bagaimana sistem ini mempengaruhi kesejahteraan buruh.",
      date: "1 Juli 2023",
      category: "Politik",
      slug: "outsourcing-dampak-terhadap-buruh",
      image: "/placeholder-image-5.jpg"
    },
  ];

  // Categories for filter buttons
  const categories = [
    { name: "Semua", value: "all" },
    { name: "Keseharian", value: "keseharian" },
    { name: "Politik", value: "politik" },
    { name: "Edukasi", value: "edukasi" },
  ];

  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-playfair text-2xl font-bold">Artikel Terbaru</h2>
        <Link href="/artikel" className="text-sm font-medium hover:underline">
          Lihat Semua
        </Link>
      </div>
      
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button 
            key={category.value} 
            variant={category.value === "all" ? "default" : "outline"}
            size="sm"
            className={category.value === "all" ? "bg-maroon hover:bg-maroon/90" : ""}
          >
            {category.name}
          </Button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {latestPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden flex flex-col h-full">
            <div className="aspect-video w-full bg-muted relative">
              <div className="absolute top-3 left-3">
                <Badge variant="secondary" className="bg-maroon/90 text-white hover:bg-maroon">
                  {post.category}
                </Badge>
              </div>
            </div>
            <CardContent className="p-5 flex-grow">
              <CardTitle className="font-playfair mb-2 line-clamp-2 text-xl">
                <Link href={`/artikel/${post.slug}`}>{post.title}</Link>
              </CardTitle>
              <p className="line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="p-5 pt-0 text-sm text-muted-foreground flex justify-between items-center border-t mt-auto">
              <div className="flex items-center text-xs">
                <Icons.calendar className="mr-1 h-3 w-3" />
                {post.date}
              </div>
              <Link 
                href={`/artikel/${post.slug}`}
                className="text-maroon hover:text-maroon/80 font-medium text-xs inline-flex items-center"
              >
                Baca
                <Icons.chevronRight className="ml-1 h-3 w-3" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
