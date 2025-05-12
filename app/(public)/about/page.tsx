import { PageHeader } from "@/components/public/page-header";
import { PageContent } from "@/components/public/page-content";

export default function AboutPage() {
  // In a real app, you would fetch this content from the database
  const pageData = {
    title: "Tentang Kami",
    content: `
      <h2>Selamat Datang di Catatan Seorang Buruh</h2>
      <p>Catatan Seorang Buruh adalah platform yang didedikasikan untuk menyuarakan pengalaman, pemikiran, dan perjuangan kaum buruh di Indonesia. Kami percaya bahwa setiap buruh memiliki cerita yang layak untuk didengar dan dibagikan.</p>
      
      <h3>Visi Kami</h3>
      <p>Menjadi wadah ekspresi dan refleksi bagi kaum buruh, sekaligus menjembatani kesenjangan pemahaman antara masyarakat umum dengan realitas kehidupan buruh.</p>
      
      <h3>Misi Kami</h3>
      <ul>
        <li>Mendokumentasikan pengalaman dan perjuangan buruh dalam bentuk tulisan yang bermakna</li>
        <li>Membangun kesadaran kolektif tentang isu-isu perburuhan di Indonesia</li>
        <li>Menyediakan ruang aman bagi buruh untuk berbagi cerita dan pengalaman</li>
        <li>Mengedukasi masyarakat tentang hak-hak buruh dan tantangan yang mereka hadapi</li>
      </ul>
      
      <h3>Tim Kami</h3>
      <p>Catatan Seorang Buruh dikelola oleh sekelompok aktivis buruh, jurnalis, dan akademisi yang peduli dengan isu-isu perburuhan. Kami bekerja secara kolektif untuk memastikan suara buruh terdengar dan dihargai.</p>
      
      <h3>Bergabunglah Dengan Kami</h3>
      <p>Kami mengundang semua buruh, aktivis, dan siapapun yang peduli dengan isu perburuhan untuk berkontribusi dalam platform ini. Kirimkan tulisan, foto, atau karya lainnya melalui halaman <a href="/contact">Kontak</a>.</p>
      
      <blockquote>
        "Perjuangan buruh adalah perjuangan kemanusiaan. Ketika buruh bersatu, perubahan menjadi mungkin."
      </blockquote>
    `,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-3xl">
        <PageHeader title={pageData.title} />
        <PageContent content={pageData.content} />
      </div>
    </div>
  );
}
