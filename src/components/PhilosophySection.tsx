import { Heart } from "lucide-react";

const PhilosophySection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-section relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container relative mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-brand mb-8 shadow-brand">
            <Heart className="w-7 h-7 text-primary-foreground" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Built for deep reading
          </h2>

          <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
            <p>
              Membaca online sering terputus karena harus membuka tab baru hanya untuk mencari arti kata.
            </p>
            <p>
              VocMark dibuat untuk mendukung membaca dengan tenang dan fokus, sambil tetap belajar kosakata baru dari konteks bacaan yang nyata.
            </p>
            <p className="text-foreground font-medium">
              Alih-alih menghafal kata secara terpisah, VocMark membantu membangun kosakata dari apa yang benar-benar dibaca setiap hari.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
