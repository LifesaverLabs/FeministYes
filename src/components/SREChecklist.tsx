import { CheckCircle2, MessageSquareHeart, TestTube, BookHeart, Shield, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const checklistItems = [
  {
    icon: MessageSquareHeart,
    title: "Establish Safewords",
    description: "Agree on clear verbal and non-verbal signals to pause or stop. Consider digital safeword support through apps designed for this purpose.",
    priority: "Essential",
  },
  {
    icon: TestTube,
    title: "STD Testing Data Share",
    description: "Exchange recent testing documentation. Validate testing dates, discuss results openly, and agree on a testing cadence for ongoing relationships.",
    priority: "Essential",
  },
  {
    icon: BookHeart,
    title: "Ground Rules Conversation",
    description: "Discuss acceptable activities and boundaries. We recommend starting and staying at 'Kama Sutra 1' (foundational intimacy) for at least your first three encounters.",
    priority: "Essential",
  },
  {
    icon: Shield,
    title: "Multilayer Birth Control Assessment",
    subtitle: "(For Heterosexual Couples)",
    description: "Go beyond simple percentages. SRE-grade protection aims for 1-in-10,000 harmlessness through layered contraceptive methods.",
    priority: "Critical",
    link: {
      text: "Calculate Your Birth Control Score",
      url: "https://birthcontrol.safeword.us",
    },
  },
];

const SREChecklist = () => {
  return (
    <section id="sre-checklist" className="py-24 bg-card">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Sexual Reliability Engineering
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            The Pre-Intimacy Checklist
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Before unbuttoning or disrobing, complete these essential safeguards. 
            Like any high-voltage work, the checklist isn't bureaucracy—it's the foundation of trust.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {checklistItems.map((item, index) => (
            <div
              key={item.title}
              className="group relative p-8 rounded-2xl bg-background border-2 border-border hover:border-primary/40 transition-all duration-300"
            >
              <div className="absolute top-4 right-4">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  item.priority === "Critical" 
                    ? "bg-destructive/10 text-destructive" 
                    : "bg-primary/10 text-primary"
                }`}>
                  {item.priority}
                </span>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl gradient-coral flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-5 h-5 text-sage" />
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  
                  {item.subtitle && (
                    <p className="text-sm text-muted-foreground mb-2">{item.subtitle}</p>
                  )}
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {item.link && (
                    <a 
                      href={item.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                    >
                      {item.link.text}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Remember: Completing this checklist together isn't a mood killer—it's foreplay for trust. 
            Partners who checklist together, stay together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SREChecklist;
