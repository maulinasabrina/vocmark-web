import logo from "@/assets/logo.png";

const ClosingSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-section relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-brand opacity-5 blur-3xl rounded-full" />
      
      <div className="container relative mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Logo */}
          <img 
            src={logo} 
            alt="VocMark" 
            className="w-16 h-16 mx-auto mb-8 opacity-80" 
          />

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            VocMark dibuat untuk membantu memperluas kosakata bahasa Inggris secara alami, langsung dari bacaan sehari-hari — tanpa mengganggu alur membaca.
          </p>

          <p className="text-foreground font-medium">
            Bukan untuk menggantikan kamus, tapi untuk menemani proses membaca dan belajar dengan lebih nyaman.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
