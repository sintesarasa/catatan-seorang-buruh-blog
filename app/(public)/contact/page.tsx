import { PageHeader } from "@/components/public/page-header";
import { ContactForm } from "@/components/public/contact-form";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-3xl">
        <PageHeader title="Hubungi Kami" />
        
        <div className="mb-8 prose prose-slate dark:prose-invert max-w-none">
          <p className="text-lg">
            Kami sangat menghargai masukan, pertanyaan, dan kontribusi dari pembaca. 
            Jangan ragu untuk menghubungi kami melalui formulir di bawah ini atau 
            melalui saluran media sosial kami.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Informasi Kontak</h3>
              <ul className="space-y-3">
                <li>
                  <strong>Email:</strong> redaksi@catatanburuh.id
                </li>
                <li>
                  <strong>Telepon:</strong> +62 812 3456 7890
                </li>
                <li>
                  <strong>Alamat:</strong> Jl. Perjuangan No. 45, Jakarta Selatan, Indonesia
                </li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-4">Jam Operasional</h3>
              <p>Senin - Jumat: 09.00 - 17.00 WIB</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Kirim Naskah</h3>
              <p>
                Kami menerima kontribusi tulisan dari buruh, aktivis, dan siapapun yang 
                peduli dengan isu perburuhan. Kirimkan naskah Anda ke:
              </p>
              <p className="font-medium mt-2">naskah@catatanburuh.id</p>
              
              <h3 className="text-xl font-semibold mt-6 mb-4">Media Sosial</h3>
              <ul className="space-y-2">
                <li>Twitter: @catatanburuh</li>
                <li>Instagram: @catatan.buruh</li>
                <li>Facebook: Catatan Seorang Buruh</li>
              </ul>
            </div>
          </div>
        </div>
        
        <ContactForm />
      </div>
    </div>
  );
}
