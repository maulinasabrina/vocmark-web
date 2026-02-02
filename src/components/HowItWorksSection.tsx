import { MousePointer2, Languages, FolderOpen, BookMarked } from "lucide-react";

const steps = [
  {
    icon: MousePointer2,
    title: "Sorot kata",
    description: "Sorot satu kata bahasa Inggris di website mana pun yang kamu baca."
  },
  {
    icon: Languages,
    title: "Terjemahkan",
    description: "Klik kanan, pilih \"Translate & Save\" — arti kata langsung ditampilkan."
  },
  {
    icon: FolderOpen,
    title: "Simpan dengan kategori",
    description: "Simpan kata tersebut dengan kategori yang kamu tentukan sendiri."
  },
  {
    icon: BookMarked,
    title: "Lihat kembali",
    description: "Akses semua kosakata yang sudah disimpan di halaman vocabulary."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cara Kerja
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Cepat, tidak mengganggu, dan fokus pada membaca.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative bg-card rounded-2xl p-6 shadow-soft border border-border/50 hover:shadow-medium transition-shadow"
              >
                {/* Step number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-brand text-primary-foreground text-sm font-bold flex items-center justify-center shadow-soft">
                  {index + 1}
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-brand-soft flex items-center justify-center shrink-0">
                    <step.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
