import { Download, Play } from "lucide-react";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-section opacity-50" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-navy/5 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Logo floating */}
          <div className="mb-8 animate-float">
            <img 
              src={logo} 
              alt="VocMark" 
              className="w-20 h-20 mx-auto drop-shadow-lg" 
            />
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 animate-fade-up">
            Turn reading into{" "}
            <span className="text-gradient">learning</span>.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Ekstensi browser untuk menerjemahkan kata bahasa Inggris yang tidak familiar dan menyimpannya sebagai catatan kosakata, langsung saat kamu membaca apa pun di web.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <a 
              href="#download" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium bg-gradient-brand text-primary-foreground rounded-xl hover:opacity-90 transition-all shadow-brand hover:shadow-lg"
            >
              <Download className="w-5 h-5" />
              Download Extension
            </a>
            <a 
              href="#how-it-works" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium bg-card text-foreground border border-border rounded-xl hover:bg-muted transition-colors shadow-soft"
            >
              <Play className="w-5 h-5" />
              See how it works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
