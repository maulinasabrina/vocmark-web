import { BookOpen, ArrowRight } from "lucide-react";

const WhatIsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section label */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-brand-soft flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-accent" />
            </div>
            <span className="text-sm font-medium text-accent">Apa itu VocMark?</span>
          </div>

          {/* Main content */}
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 leading-snug">
            Ekstensi Chrome untuk membaca dengan fokus tanpa gangguan.
          </h2>

          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Saat membaca artikel, newsletter, dokumentasi, atau tulisan panjang di internet, sering kali kita menemukan kata bahasa Inggris yang belum kita pahami. Biasanya, kita harus buka tab baru, cari arti kata tersebut, lalu balik lagi ke bacaan — dan fokus pun hilang.
            </p>
            
            <p>
              Dengan VocMark, pengguna bisa langsung:
            </p>

            <ul className="space-y-3 pl-1">
              {[
                "Menerjemahkan kata",
                "Menyimpannya sebagai catatan kosakata",
                "Lanjut membaca tanpa kehilangan konteks"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="pt-2 text-foreground font-medium">
              VocMark bisa digunakan di hampir semua website modern dan tidak terikat pada satu platform tertentu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
