import { Zap, BookOpen } from "lucide-react";

const HighVoltageIntro = () => {
  return (
    <section id="high-voltage" className="py-24 bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive mb-6">
              <Zap className="w-5 h-5" />
              <span className="font-medium text-sm">High-Voltage Territory</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
              Intimacy Is the Highest-Voltage Human Experience
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Just as electricians don't touch live wires without proper protocols, we shouldn't enter 
              intimate spaces without proper safeguards. Sexual and emotional intimacy carries tremendous 
              power—power to connect, to heal, but also power to harm when handled carelessly.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              <strong className="text-foreground">Sexual Reliability Engineering (SRE)</strong> applies 
              the same rigorous thinking used in aviation, surgery, and critical infrastructure to the 
              realm of intimate relationships. Because when the stakes are this high, having a 
              <em> checklist</em> isn't paranoid—it's caring.
            </p>

            <div className="p-6 rounded-2xl bg-sage/30 border border-sage">
              <p className="text-foreground italic font-serif text-lg">
                "We have accumulated stupendous know-how... But avoidable failures are common and persistent... 
                The reason is increasingly evident: the volume and complexity of what we know has exceeded our 
                individual ability to deliver its benefits correctly, safely, or reliably."
              </p>
              <p className="text-muted-foreground mt-3 text-sm">
                — Atul Gawande, <cite>The Checklist Manifesto</cite>
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <a 
              href="https://atulgawande.com/book/the-checklist-manifesto/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-sage/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-card rounded-2xl p-8 shadow-lg border border-border group-hover:border-primary/30 transition-all duration-300">
                  <BookOpen className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="font-serif text-2xl font-semibold text-foreground text-center mb-2">
                    The Checklist Manifesto
                  </h3>
                  <p className="text-muted-foreground text-center mb-4">
                    By Atul Gawande
                  </p>
                  <p className="text-sm text-muted-foreground text-center">
                    The foundational text on why checklists save lives—and relationships.
                  </p>
                  <div className="mt-6 text-center">
                    <span className="inline-flex items-center text-primary font-medium text-sm group-hover:underline">
                      Learn more →
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighVoltageIntro;
