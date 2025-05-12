import { FeaturedPosts } from "@/components/public/featured-posts";
import { Hero } from "@/components/public/hero";
import { LatestPosts } from "@/components/public/latest-posts";
import { Sidebar } from "@/components/public/sidebar";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />
      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <FeaturedPosts />
          <LatestPosts />
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
