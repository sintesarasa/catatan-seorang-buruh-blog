"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { usePathname } from "next/navigation";

export function PublicHeader() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b shadow-sm">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-6 px-4">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <Link href="/home" className="text-3xl font-bold font-playfair hover:text-maroon/80 transition-colors">
            Catatan <span className="text-maroon">Seorang Buruh</span>
          </Link>
          <p className="text-sm text-muted-foreground mt-1 font-serif italic">
            Refleksi dari balik dinding pabrik
          </p>
        </div>
        <div className="flex items-center space-x-2 md:space-x-6">
          <nav className="flex space-x-1 md:space-x-6">
            <Link 
              href="/home" 
              className={`px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors ${
                pathname === "/home" ? "text-maroon font-semibold bg-accent/50" : ""
              }`}
            >
              Beranda
            </Link>
            <Link 
              href="/category" 
              className={`px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors ${
                pathname.includes("/category") ? "text-maroon font-semibold bg-accent/50" : ""
              }`}
            >
              Keseharian
            </Link>
            <Link 
              href="/politics" 
              className={`px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors ${
                pathname === "/politics" ? "text-maroon font-semibold bg-accent/50" : ""
              }`}
            >
              Politik
            </Link>
            <Link 
              href="/about" 
              className={`px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors ${
                pathname === "/about" ? "text-maroon font-semibold bg-accent/50" : ""
              }`}
            >
              Tentang
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Link 
              href="/admin" 
              className="px-3 py-2 text-sm font-medium rounded-md border border-input hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Administrator
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
