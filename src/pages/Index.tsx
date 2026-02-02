import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatIsSection from "@/components/WhatIsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import PhilosophySection from "@/components/PhilosophySection";
import DownloadSection from "@/components/DownloadSection";
import InstallationSection from "@/components/InstallationSection";
import PrivacySection from "@/components/PrivacySection";
import LimitationsSection from "@/components/LimitationsSection";
import ClosingSection from "@/components/ClosingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhatIsSection />
        <HowItWorksSection />
        <FeaturesSection />
        <PhilosophySection />
        <DownloadSection />
        <InstallationSection />
        <PrivacySection />
        <LimitationsSection />
        <ClosingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
