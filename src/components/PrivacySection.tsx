import { Shield, HardDrive, UserX, EyeOff, Lock } from "lucide-react";

const privacyPoints = [
  {
    icon: HardDrive,
    text: "Semua kata disimpan secara lokal di browser pengguna"
  },
  {
    icon: UserX,
    text: "Tidak perlu akun atau login"
  },
  {
    icon: EyeOff,
    text: "Tidak ada tracking atau analytics"
  },
  {
    icon: Lock,
    text: "Tidak ada data yang dikirim ke pihak ketiga"
  }
];

const PrivacySection = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            {/* Icon */}
            <div className="shrink-0">
              <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-brand">
                <Shield className="w-7 h-7 text-primary-foreground" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Data & Privasi
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {privacyPoints.map((point, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border/50"
                  >
                    <point.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{point.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
