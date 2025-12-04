import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg font-semibold text-foreground">
              Feminist <span className="text-primary">Yes</span>
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">
              A Lifesaver Labs Initiative
            </span>
          </div>

          <nav className="flex items-center gap-6 text-sm">
            <a href="#principles" className="text-muted-foreground hover:text-foreground transition-colors">
              Principles
            </a>
            <a href="#conversations" className="text-muted-foreground hover:text-foreground transition-colors">
              Conversations
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
          </nav>

          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> for healthier relationships
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
