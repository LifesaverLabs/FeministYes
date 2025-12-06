import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    if (location.pathname === "/") {
      // Already on homepage, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to homepage then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container-wide flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-serif text-xl font-semibold text-foreground">
            Feminist <span className="text-primary">Yes</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#sre-checklist" 
            onClick={(e) => handleAnchorClick(e, "sre-checklist")}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
          >
            Yes Checklist
          </a>
          <a 
            href="#conversations" 
            onClick={(e) => handleAnchorClick(e, "conversations")}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
          >
            Conversations
          </a>
          <Link to="/deeper-thoughts" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            Deeper Thoughts
          </Link>
          <a 
            href="#about" 
            onClick={(e) => handleAnchorClick(e, "about")}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
          >
            About
          </a>
        </nav>

        <Button variant="hero" size="sm">
          Join the Discussion
        </Button>
      </div>
    </header>
  );
};

export default Header;
