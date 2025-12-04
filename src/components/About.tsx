import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container-narrow text-center">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">
          About Us
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mt-4 mb-6">
          Why Feminist Yes?
        </h2>
        
        <div className="prose prose-lg mx-auto text-muted-foreground mb-10">
          <p className="leading-relaxed">
            In a world where conversations about consent are often reduced to simple 
            yes-or-no frameworks, we believe in something richer. <strong className="text-foreground">Feminist Yes</strong> is 
            a space where people of all genders can explore what it truly means to 
            approach intimacy with intention, respect, and mutual understanding.
          </p>
          <p className="leading-relaxed">
            We're not here to prescribe rules. We're here to facilitate the kind of 
            thoughtful dialogue that leads to healthier, more fulfilling relationships — 
            where "yes" is informed, enthusiastic, and freely given.
          </p>
        </div>

        <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-background border border-border">
          <span className="text-sm text-muted-foreground">
            A project by
          </span>
          <span className="font-serif font-semibold text-foreground">
            Lifesaver Labs
          </span>
          <Button variant="ghost" size="sm" className="ml-2">
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
