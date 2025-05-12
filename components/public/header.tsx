import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

export function PublicHeader() {
  return (
    <header className="border-b py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/home" className="text-2xl font-bold font-playfair">
          Catatan Seorang Buruh
        </Link>
        <nav className="hidden space-x-6 md:flex">
          <Link href="/home" className="text-sm font-medium hover:underline">
            Beranda
          </Link>
          <Link href="/kategori" className="text-sm font-medium hover:underline">
            Kategori
          </Link>
          <Link href="/tentang" className="text-sm font-medium hover:underline">
            Tentang
          </Link>
          <Link href="/kontak" className="text-sm font-medium hover:underline">
            Kontak
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
