import { Download, Package } from "lucide-react";
import { productFile } from "./ProductExport";

const DownloadSection = () => {
  return (
    <section id="download" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-brand mb-8 shadow-brand">
            <Package className="w-8 h-8 text-primary-foreground" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Download VocMark
          </h2>

          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            VocMark saat ini tersedia sebagai paket ekstensi Chrome dan dapat dipasang secara manual.
          </p>

          <a 
            href={productFile } 
            className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-medium bg-gradient-brand text-primary-foreground rounded-xl hover:opacity-90 transition-all shadow-brand hover:shadow-lg"
          >
            <Download className="w-6 h-6" />
            Download VocMark (.zip)
          </a>

          <p className="text-sm text-muted-foreground mt-6">
            Lihat panduan instalasi di bawah untuk langkah selanjutnya.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
