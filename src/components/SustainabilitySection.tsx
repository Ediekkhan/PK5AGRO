import { TreePine, Users, Recycle } from "lucide-react";

const SustainabilitySection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">
            Our Responsibility
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Sustainability & Community
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-xl bg-primary/5 border border-primary/10">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <TreePine className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              Environmental Stewardship
            </h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              We implement sustainable farming practices including crop rotation,
              organic fertilization, and water conservation to protect our ecosystem.
            </p>
          </div>
          <div className="text-center p-8 rounded-xl bg-accent/5 border border-accent/10">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
              <Users className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              Community Empowerment
            </h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              Over 1,000 local farmers benefit from our outreach programs,
              training initiatives, and fair-trade partnerships.
            </p>
          </div>
          <div className="text-center p-8 rounded-xl bg-secondary/5 border border-secondary/10">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary/10 flex items-center justify-center">
              <Recycle className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              Eco-Friendly Processing
            </h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              Our processing facilities use waste-to-energy systems and
              minimize environmental impact at every stage of production.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
