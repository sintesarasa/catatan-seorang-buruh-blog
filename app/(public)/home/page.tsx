"use client";

import { FeaturedPosts } from "@/components/public/featured-posts";
import { LatestPosts } from "@/components/public/latest-posts";
import { Hero } from "@/components/public/hero";
import { Sidebar } from "@/components/public/sidebar";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Articles Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-playfair text-maroon mb-2 font-bold">Artikel Unggulan</h2>
          <div className="h-1 w-20 bg-maroon/30 mb-8 rounded-full"></div>
          <FeaturedPosts />
        </div>
      </section>
      
      {/* Latest Articles Section with Sidebar */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-playfair text-maroon mb-2 font-bold">Artikel Terbaru</h2>
              <div className="h-1 w-20 bg-maroon/30 mb-8 rounded-full"></div>
              <LatestPosts />
            </div>
            <div className="md:col-span-1 mt-10 md:mt-0">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
