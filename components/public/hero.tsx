import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-background to-muted px-6 py-24 text-center shadow-sm">
      <div className="absolute inset-0 bg-grid-black/[0.03] bg-[size:20px_20px]" />
      <div className="mx-auto max-w-3xl relative z-10">
        <h1 className="font-playfair text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-4">
          Catatan <span className="text-maroon">Seorang Buruh</span>
        </h1>
        <p className="text-lg text-muted-foreground md:text-xl mb-6 font-serif">
          Refleksi dari balik dinding pabrik
        </p>
        <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
          Platform yang menyuarakan pengalaman, pemikiran, dan perjuangan para buruh. 
          Kami berbagi cerita dari perspektif pekerja untuk membangun kesadaran dan solidaritas
          dalam mewujudkan keadilan bagi kaum pekerja.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="rounded-full px-8 bg-maroon hover:bg-maroon/90">
            <Link href="/category">Jelajahi Artikel</Link>
          </Button>
          <Button variant="outline" asChild size="lg" className="rounded-full px-8">
            <Link href="/about">Tentang Kami</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
