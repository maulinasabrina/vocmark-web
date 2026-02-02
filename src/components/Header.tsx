import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src={logo} 
            alt="VocMark logo" 
            className="w-8 h-8 transition-transform group-hover:scale-105" 
          />
          <span className="font-semibold text-lg text-foreground">VocMark</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            How it Works
          </a>
          <a href="#download" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Download
          </a>
        </nav>

        <a 
          href="#download" 
          className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium bg-gradient-brand text-primary-foreground rounded-lg hover:opacity-90 transition-opacity shadow-soft"
        >
          Download
        </a>
      </div>
    </header>
  );
};

export default Header;
