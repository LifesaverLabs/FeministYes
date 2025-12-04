import { Smartphone, Watch, ShieldAlert, ExternalLink } from "lucide-react";

const hardwareDevices = [
  {
    name: "Invisawear",
    description: "Discreet jewelry with hidden panic buttons that alert your emergency contacts and share your GPS location.",
    url: "https://invisawear.com/",
    type: "Smart Jewelry",
  },
  {
    name: "Loris SOS",
    description: "Wearable safety device designed for silent distress signaling when you need help without alerting those around you.",
    url: "https://www.lorissos.com/home",
    type: "Wearable Device",
  },
];

const softwareApps = [
  {
    name: "Safeword",
    description: "Digital safeword platform designed specifically for intimate situations. Provides verification, check-ins, and emergency protocols.",
    url: "https://www.safeword.us",
    type: "Coming Soon",
    featured: true,
  },
  {
    name: "bSafe",
    description: "Personal safety app with live GPS tracking, SOS alerts, automatic video recording, and fake call features.",
    url: "https://www.getbsafe.com",
    type: "Safety App",
  },
  {
    name: "UrSafe",
    description: "Voice-activated personal safety app that works hands-free. Say your safe word and it alerts your network.",
    url: "https://www.ursafe.com",
    type: "Voice-Activated",
  },
];

const SafetyDevices = () => {
  return (
    <section id="safety-devices" className="py-24 bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage/30 text-foreground mb-6">
            <ShieldAlert className="w-5 h-5" />
            <span className="font-medium text-sm">De-vices for Safety</span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Safety Technology We Recommend
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We strongly recommend everyone use at least one of these tools when starting a new 
            high-voltage connection. These de-vices help prevent bedroom harm and provide peace of mind.
          </p>
        </div>

        {/* Hardware Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Watch className="w-6 h-6 text-primary" />
            <h3 className="font-serif text-2xl font-semibold text-foreground">
              Hardware: Silent Distress Alarms
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {hardwareDevices.map((device) => (
              <a
                key={device.name}
                href={device.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                    {device.type}
                  </span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <h4 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {device.name}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {device.description}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Software Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Smartphone className="w-6 h-6 text-primary" />
            <h3 className="font-serif text-2xl font-semibold text-foreground">
              Software: Safety Apps
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {softwareApps.map((app) => (
              <a
                key={app.name}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block p-6 rounded-2xl border transition-all duration-300 ${
                  app.featured 
                    ? "bg-gradient-to-br from-primary/5 to-sage/10 border-primary/30 hover:border-primary/60 hover:shadow-xl" 
                    : "bg-card border-border hover:border-primary/40 hover:shadow-lg"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    app.featured 
                      ? "bg-primary/20 text-primary" 
                      : "bg-sage/30 text-foreground"
                  }`}>
                    {app.type}
                  </span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <h4 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {app.name}
                </h4>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {app.description}
                </p>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-sage/20 border border-sage/30 text-center">
          <p className="text-foreground font-medium mb-2">
            Safety is not suspicion—it's self-care.
          </p>
          <p className="text-muted-foreground text-sm">
            Using these tools doesn't mean you don't trust your partner. It means you value your wellbeing 
            enough to have a backup plan—just like wearing a seatbelt doesn't mean you expect to crash.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SafetyDevices;
