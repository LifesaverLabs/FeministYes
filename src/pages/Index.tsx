import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Principles from "@/components/Principles";
import Conversations from "@/components/Conversations";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Principles />
        <Conversations />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
