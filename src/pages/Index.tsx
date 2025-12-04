import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HighVoltageIntro from "@/components/HighVoltageIntro";
import Principles from "@/components/Principles";
import SREChecklist from "@/components/SREChecklist";
import SafetyDevices from "@/components/SafetyDevices";
import Conversations from "@/components/Conversations";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <HighVoltageIntro />
        <Principles />
        <SREChecklist />
        <SafetyDevices />
        <Conversations />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
