import { Leaf, Shield, Lightbulb, Award } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Eco-friendly farming practices that protect our land for future generations.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Transparent operations and honest partnerships across the value chain.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Modern processing techniques that maximize quality and efficiency.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Rigorous quality control from seedling to final packaged product.",
  },
];

const AboutPreview = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">
              Who We Are
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Rooted in Agriculture, Growing for the Future
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              PK5 Agro-Allied is a premier agricultural enterprise specializing in the cultivation,
              processing, and export of high-grade commodities. 
              With extensive land holdings and state-of-the-art processing facilities, we bridge the gap between traditional farming excellence and modern market demands.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Our commitment to sustainable practices, community empowerment, and
              international quality standards makes us a trusted partner for businesses worldwide.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow border border-border"
              >
                <value.icon className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
