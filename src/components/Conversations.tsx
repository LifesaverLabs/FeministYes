import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const topics = [
  {
    question: "How do I bring up boundaries without killing the mood?",
    preview: "Setting boundaries isn't a mood-killer — it's the foundation for deeper connection...",
  },
  {
    question: "What does 'enthusiastic consent' actually look like?",
    preview: "It's more than just words. Body language, tone, and context all matter...",
  },
  {
    question: "How do past experiences affect current consent?",
    preview: "Trauma-informed intimacy means understanding that history shapes our present...",
  },
  {
    question: "When is the right time to have 'the talk'?",
    preview: "There's no perfect moment, but there are better approaches...",
  },
];

const Conversations = () => {
  return (
    <section id="conversations" className="py-24">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Join the Conversation
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              These aren't easy topics, but they're essential ones. Our community 
              explores the nuanced questions that come up when navigating intimacy 
              with intention and care.
            </p>
            <Button variant="sage" size="lg">
              Explore All Topics
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-4">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-card border border-border hover:border-sage hover:bg-sage/5 transition-all duration-300 cursor-pointer"
              >
                <h3 className="font-serif text-lg font-medium text-foreground mb-2 group-hover:text-sage-dark transition-colors">
                  {topic.question}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {topic.preview}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conversations;
