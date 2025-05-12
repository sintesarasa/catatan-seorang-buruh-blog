import Link from "next/link";
import { Icons } from "@/components/icons";

export function Footer() {
  const categories = [
    { name: "Keseharian", slug: "keseharian" },
    { name: "Politik", slug: "politik" },
    { name: "Edukasi", slug: "edukasi" },
    { name: "Opini", slug: "opini" },
    { name: "Berita", slug: "berita" },
  ];
  
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Column 1: Blog information */}
          <div>
            <Link href="/home" className="text-2xl font-bold font-playfair">
              Catatan <span className="text-maroon">Seorang Buruh</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Platform untuk menyuarakan pengalaman, pemikiran, dan perjuangan kaum buruh. 
              Kami berkomitmen untuk membangun kesadaran dan solidaritas melalui tulisan 
              yang bermakna dari perspektif pekerja.
            </p>
          </div>
          
          {/* Column 2: Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kategori</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link 
                    href={`/kategori/${category.slug}`} 
                    className="text-muted-foreground hover:text-maroon transition-colors text-sm"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Navigation links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigasi</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/home" 
                  className="text-muted-foreground hover:text-maroon transition-colors text-sm"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-muted-foreground hover:text-maroon transition-colors text-sm"
                >
                  Tentang
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-muted-foreground hover:text-maroon transition-colors text-sm"
                >
                  Kontak
                </Link>
              </li>
              <li>
                <Link 
                  href="/admin" 
                  className="text-muted-foreground hover:text-maroon transition-colors text-sm"
                >
                  Administrator
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright bar */}
      <div className="bg-maroon text-white py-4">
        <div className="container mx-auto px-4 text-center text-sm">
          © {new Date().getFullYear()} Catatan Seorang Buruh – All rights reserved
        </div>
      </div>
    </footer>
  );
}
