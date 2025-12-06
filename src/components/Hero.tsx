import { Button } from "@/components/ui/button";
import { Heart, MessageCircle } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-sage/20 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative z-10 text-center py-20">
        <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm text-muted-foreground mb-8">
            <Heart className="w-4 h-4 text-primary" />
            A Lifesaver Labs Initiative
          </span>
        </div>

        <h1 
          className="font-serif text-5xl md:text-7xl font-semibold text-foreground leading-tight mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Before You Say{" "}
          <span className="text-primary italic">"Yes"</span>
        </h1>

        <p 
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          A thoughtful space for exploring what conscious consent looks like in new relationships — 
          for feminists of all genders.
        </p>

        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <Button variant="hero" size="xl" onClick={() => scrollToSection("conversations")}>
            <MessageCircle className="w-5 h-5" />
            Start the Conversation
          </Button>
          <Button variant="outline" size="xl" onClick={() => scrollToSection("principles")}>
            Read Our Principles
          </Button>
        </div>

        <p 
          className="mt-16 text-sm text-muted-foreground opacity-0 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          Because "yes" should always be informed, enthusiastic, and mutual.
        </p>
      </div>
    </section>
  );
};

export default Hero;
