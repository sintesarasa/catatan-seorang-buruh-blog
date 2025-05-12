import Sidebar from "@/components/public/sidebar";
import Giscus from "@giscus/react";

export default function ArticlePage({ params }: { params: { slug: string } }) {
  return (
    <main className="bg-krem text-black font-serif">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <article className="col-span-2">
          <h1 className="text-4xl font-playfair text-maroon mb-4">Judul Artikel</h1>
          <p className="text-sm text-muted-foreground mb-4">Last updated: 12 May 2025</p>
          <div className="prose prose-lg">
            <p>Konten artikel akan ditampilkan di sini...</p>
          </div>
        </article>
        <aside>
          <Sidebar />
        </aside>
      </div>
      <div className="container mx-auto px-4 py-8">
        <Giscus
          repo="username/repo"
          repoId="repo-id"
          category="General"
          categoryId="category-id"
          mapping="pathname"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="light"
          lang="id"
        />
      </div>
    </main>
  );
}
