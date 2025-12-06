import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const DeeperThoughts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container-wide max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <article className="prose prose-lg max-w-none">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-coral flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">Essential</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Long Term Timeline Alignment
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Before going high-voltage, ensure you and your partner share compatible visions for your relationship's
              future milestones.
            </p>

            <div className="bg-card border-2 border-border rounded-2xl p-8 mb-12">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Why Timeline Alignment Matters</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If engagement within 1 year and a simple, stress-free wedding ceremony 2 months later matters to you,
                don't proceed with someone who won't accept or make any proposal for 3 years and then adds another 9
                months after that for a{" "}
                <u>
                  <a href="https://www.harpersbazaar.com/uk/brides/a22085716/couples-who-have-expensive-weddings-are-more-likely-to-get-divorced/">
                    divorce-correlated complex, expensive wedding affair
                  </a>
                </u>
                . Misaligned expectations about relationship progression are among the most common sources of heartbreak
                and wasted time in modern dating.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                High-voltage intimacy creates powerful bonds. Before forming those bonds, both partners deserve clarity
                on whether they're building toward the same destination.
              </p>
            </div>

            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">The Equal Right to Propose</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Discuss your equal right to ritefully propose when you're ready—there should be no gender bias in who
              controls pacing or who can be the sole first-mover on the step that defines the rest of your life.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              How many countless years of people's lives have been wasted waiting endlessly for proposal-privileged
              partners to propose? The tradition that only one partner can propose creates an artificial power imbalance
              that serves no one's genuine interests.
            </p>

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl mb-8">
              <p className="text-foreground font-medium italic">
                "If you're already engaged or married when you first get intimate, that's a remarkable choice—you've
                already achieved the milestones so many struggle with."
              </p>
            </div>

            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Key Questions to Discuss</h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">1.</span>
                <span className="text-muted-foreground">What's your ideal timeline for engagement? For marriage?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">2.</span>
                <span className="text-muted-foreground">Are these timelines flexible, or are they dealbreakers?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">3.</span>
                <span className="text-muted-foreground">Who has the right to propose? Both of us, or only one?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">4.</span>
                <span className="text-muted-foreground">
                  If one partner feels ready before the other, how will we handle that conversation?
                </span>
              </li>
            </ul>

            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Resources</h2>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.youtube.com/watch?v=rmLT71uvu3U"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                Vision 50/50: Reaching Proposal Equality
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=3HF35T0zlVU"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                Very simple, very sweet: Break the Glass Time Floor
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DeeperThoughts;
