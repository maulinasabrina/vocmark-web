import { Zap, FileText, FolderKanban, Search, BookOpen, Globe } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Terjemahan instan",
    description: "Menerjemahkan kata yang dipilih secara langsung tanpa membuka tab baru."
  },
  {
    icon: FileText,
    title: "Simpan dengan konteks",
    description: "Menyimpan kata beserta arti dan sumber website tempat kamu menemukannya."
  },
  {
    icon: FolderKanban,
    title: "Kategorisasi",
    description: "Mengelompokkan kosakata berdasarkan kategori yang kamu tentukan sendiri."
  },
  {
    icon: Search,
    title: "Cari & filter",
    description: "Mencari dan memfilter kata yang sudah disimpan dengan mudah."
  },
  {
    icon: BookOpen,
    title: "Halaman vocabulary",
    description: "Halaman khusus untuk melihat dan mengelola seluruh daftar kosakata."
  },
  {
    icon: Globe,
    title: "Multi-website",
    description: "Bisa digunakan di berbagai website tanpa batasan platform tertentu."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Fitur Utama
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Semua yang kamu butuhkan untuk belajar kosakata saat membaca.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-background border border-border/50 hover:border-accent/30 hover:shadow-medium transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-brand-soft flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
