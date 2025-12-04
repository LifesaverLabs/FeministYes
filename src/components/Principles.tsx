import { MessageSquare, Clock, Users, Shield, Sparkles, Heart } from "lucide-react";

const principles = [
  {
    icon: MessageSquare,
    title: "Open Communication",
    description: "Talk openly about boundaries, desires, and expectations before taking steps toward intimacy.",
  },
  {
    icon: Clock,
    title: "Take Your Time",
    description: "There's no rush. A relationship that honors both parties will wait until everyone feels ready.",
  },
  {
    icon: Users,
    title: "Equal Partnership",
    description: "Both people should feel equally empowered to initiate, pause, or stop at any moment.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Physical, emotional, and mental safety are non-negotiable foundations for healthy intimacy.",
  },
  {
    icon: Sparkles,
    title: "Enthusiastic Consent",
    description: "Look for clear, enthusiastic 'yes' — not just the absence of 'no.'",
  },
  {
    icon: Heart,
    title: "Mutual Respect",
    description: "Honor each other's past experiences, current feelings, and future boundaries.",
  },
];

const Principles = () => {
  return (
    <section id="principles" className="py-24 bg-card">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Core Principles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These foundational ideas guide our conversations about mindful consent and healthy relationships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <div
              key={principle.title}
              className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-coral flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <principle.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {principle.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Principles;
