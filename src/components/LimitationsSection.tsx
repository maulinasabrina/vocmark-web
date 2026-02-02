import { AlertCircle } from "lucide-react";

const limitations = [
  "Kualitas terjemahan tergantung layanan penerjemah yang digunakan",
  "Fokus pada kata atau frasa pendek, bukan kalimat panjang",
  "Beberapa website memiliki batasan keamanan browser yang mungkin membatasi fungsi"
];

const LimitationsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/50">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
              <AlertCircle className="w-5 h-5 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">Batasan</h3>
              <ul className="space-y-2">
                {limitations.map((limitation, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-muted-foreground/50 mt-1.5">•</span>
                    {limitation}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LimitationsSection;
