import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";

export function FeaturedPosts() {
  // Mock data - would be fetched from API in a real app
  const featuredPosts = [
    {
      id: 1,
      title: "Perjuangan Buruh di Era Digital",
      excerpt: "Bagaimana teknologi mengubah lanskap perjuangan buruh di Indonesia dan tantangan yang dihadapi.",
      date: "12 Agustus 2023",
      category: "Politik",
      slug: "perjuangan-buruh-era-digital",
      icon: "fileText"
    },
    {
      id: 2,
      title: "Solidaritas Antar Pekerja: Kunci Gerakan Buruh",
      excerpt: "Pentingnya membangun solidaritas antar pekerja dalam memperjuangkan hak-hak buruh.",
      date: "5 Juli 2023",
      category: "Keseharian",
      slug: "solidaritas-antar-pekerja",
      icon: "users"
    },
  ];

  return (
    <section className="mb-12">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {featuredPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden border-2 hover:border-maroon/30 transition-all">
            <div className="p-6">
              <div className="mb-4 flex items-center">
                <div className="mr-3 rounded-full bg-maroon/10 p-2 text-maroon">
                  {post.icon === "fileText" && <Icons.fileText className="h-5 w-5" />}
                  {post.icon === "users" && <Icons.users className="h-5 w-5" />}
                </div>
                <Badge variant="secondary" className="text-xs">
                  {post.category}
                </Badge>
              </div>
              <CardTitle className="font-playfair mb-3 text-2xl font-bold">
                <Link href={`/artikel/${post.slug}`}>{post.title}</Link>
              </CardTitle>
              <p className="mb-4 line-clamp-2 text-muted-foreground">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">{post.date}</p>
                <Link 
                  href={`/artikel/${post.slug}`}
                  className="text-maroon hover:text-maroon/80 font-medium text-sm inline-flex items-center"
                >
                  Baca Selengkapnya
                  <Icons.arrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
