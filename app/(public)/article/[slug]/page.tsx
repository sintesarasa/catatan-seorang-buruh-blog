import { ArticleContent } from "@/components/public/article-content";
import { ArticleHeader } from "@/components/public/article-header";
import { ArticleComments } from "@/components/public/article-comments";
import { RelatedArticles } from "@/components/public/related-articles";
import { Sidebar } from "@/components/public/sidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ArticlePage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch the article data based on the slug
  const article = {
    title: "Perjuangan Buruh di Era Digital: Tantangan dan Harapan",
    slug: params.slug,
    excerpt: "Bagaimana teknologi mengubah lanskap perjuangan buruh di Indonesia",
    content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p>
    <p>Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p>
    <h2>Subtopik Penting</h2>
    <p>Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p>
    <blockquote>Perjuangan buruh adalah perjuangan kemanusiaan yang tidak pernah usai.</blockquote>
    <p>Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p>`,
    featuredImage: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc",
    publishedAt: "2023-05-01",
    updatedAt: "2023-05-10",
    author: {
      name: "Ahmad Dahlan",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    categories: [
      { name: "Buruh Digital", slug: "buruh-digital" },
      { name: "Teknologi", slug: "teknologi" }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/">
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali ke Beranda
        </Button>
      </Link>
      
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ArticleHeader article={article} />
          <ArticleContent content={article.content} />
          <ArticleComments slug={article.slug} />
          <RelatedArticles currentSlug={article.slug} />
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
