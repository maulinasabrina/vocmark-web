import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-10 bg-card border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="VocMark" className="w-6 h-6 opacity-70" />
            <span className="text-sm text-muted-foreground">
              VocMark — Turn reading into learning.
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#download" className="hover:text-foreground transition-colors">Download</a>
            <a href="#installation" className="hover:text-foreground transition-colors">Install</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
