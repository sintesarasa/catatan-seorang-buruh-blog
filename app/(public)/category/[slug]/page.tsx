import { CategoryHeader } from "@/components/public/category-header";
import { PostList } from "@/components/public/post-list";
import { Sidebar } from "@/components/public/sidebar";
import { Pagination } from "@/components/ui/pagination";

export default function CategoryPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch category data and posts based on the slug
  const category = {
    name: "Buruh Digital",
    slug: params.slug,
    description: "Artikel-artikel tentang kehidupan dan perjuangan buruh di era digital"
  };

  const posts = [
    {
      id: "1",
      title: "Perjuangan Buruh di Era Digital: Tantangan dan Harapan",
      slug: "perjuangan-buruh-digital",
      excerpt: "Bagaimana teknologi mengubah lanskap perjuangan buruh di Indonesia",
      featuredImage: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc",
      publishedAt: "2023-05-01",
      author: {
        name: "Ahmad Dahlan",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      categories: [
        { name: "Buruh Digital", slug: "buruh-digital" },
        { name: "Teknologi", slug: "teknologi" }
      ]
    },
    {
      id: "2",
      title: "Gig Economy dan Nasib Pekerja Lepas",
      slug: "gig-economy-pekerja-lepas",
      excerpt: "Mengupas tuntas fenomena gig economy dan dampaknya bagi pekerja lepas di Indonesia",
      featuredImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      publishedAt: "2023-04-15",
      author: {
        name: "Siti Walidah",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      categories: [
        { name: "Buruh Digital", slug: "buruh-digital" },
        { name: "Ekonomi", slug: "ekonomi" }
      ]
    },
    {
      id: "3",
      title: "Serikat Pekerja di Perusahaan Teknologi",
      slug: "serikat-pekerja-teknologi",
      excerpt: "Perjuangan membentuk serikat pekerja di perusahaan teknologi dan tantangannya",
      featuredImage: "https://images.unsplash.com/photo-1573164713988-8665fc963095",
      publishedAt: "2023-03-20",
      author: {
        name: "Budi Santoso",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      categories: [
        { name: "Buruh Digital", slug: "buruh-digital" },
        { name: "Serikat Pekerja", slug: "serikat-pekerja" }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <CategoryHeader category={category} />
          <PostList posts={posts} />
          <div className="mt-8">
            <Pagination />
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
