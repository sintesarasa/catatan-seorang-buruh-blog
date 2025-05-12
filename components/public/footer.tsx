import Link from "next/link";

export function PublicFooter() {
  return (
    <footer className="border-t py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold font-playfair mb-4">Catatan Seorang Buruh</h3>
            <p className="text-sm text-muted-foreground">
              Refleksi dari balik dinding pabrik. Sebuah catatan pengalaman dan pemikiran seorang buruh.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Tautan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:underline">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/kategori" className="text-sm hover:underline">
                  Kategori
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="text-sm hover:underline">
                  Tentang
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-sm hover:underline">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Kontak</h3>
            <ul className="space-y-2">
              <li className="text-sm">Email: kontak@catatanburuh.id</li>
              <li className="text-sm">Telegram: @catatanburuh</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Catatan Seorang Buruh. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
