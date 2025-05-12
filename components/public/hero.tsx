import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative overflow-hidden rounded-lg bg-muted px-6 py-16 text-center shadow-md md:px-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-playfair text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          Catatan Seorang Buruh
        </h1>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl">
          Refleksi dari balik dinding pabrik. Sebuah catatan pengalaman dan pemikiran seorang buruh.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/kategori">Jelajahi Kategori</Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href="/tentang">Tentang Penulis</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
