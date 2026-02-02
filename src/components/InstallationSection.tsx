import { Check, FolderArchive, Chrome, ToggleRight, FolderUp, Sparkles } from "lucide-react";

const steps = [
  {
    icon: FolderArchive,
    title: "Unduh dan unzip",
    description: "Unduh file VocMark dan unzip foldernya di lokasi yang mudah ditemukan."
  },
  {
    icon: Chrome,
    title: "Buka Extensions",
    description: "Buka chrome://extensions di browser Chrome kamu."
  },
  {
    icon: ToggleRight,
    title: "Aktifkan Developer mode",
    description: "Toggle Developer mode di pojok kanan atas halaman."
  },
  {
    icon: FolderUp,
    title: "Load unpacked",
    description: "Klik \"Load unpacked\" dan pilih folder VocMark yang sudah di-unzip."
  },
  {
    icon: Sparkles,
    title: "Selesai!",
    description: "Ekstensi siap digunakan. Mulai membaca dan simpan kosakata baru."
  }
];

const InstallationSection = () => {
  return (
    <section id="installation" className="py-20 md:py-28 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Panduan Instalasi
            </h2>
            <p className="text-muted-foreground text-lg">
              Langkah sederhana untuk memasang VocMark di Chrome.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border/50 shadow-soft"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-brand-soft shrink-0">
                  <step.icon className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-accent">Step {index + 1}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
                {index === steps.length - 1 && (
                  <Check className="w-5 h-5 text-accent shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationSection;
