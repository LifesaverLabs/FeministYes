import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container-wide flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-serif text-xl font-semibold text-foreground">
            Feminist <span className="text-primary">Yes</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/#principles" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            Principles
          </Link>
          <Link to="/#conversations" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            Conversations
          </Link>
          <Link to="/deeper-thoughts" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            Deeper Thoughts
          </Link>
          <Link to="/#about" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            About
          </Link>
        </nav>

        <Button variant="hero" size="sm">
          Join the Discussion
        </Button>
      </div>
    </header>
  );
};

export default Header;
