import { TreePine, Users, Recycle, Heart } from "lucide-react";

const Sustainability = () => {
  return (
    <main className="pt-20">
      <section className="section-padding bg-forest-gradient text-center">
        <div className="container-wide max-w-3xl">
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Sustainability</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Growing Responsibly
          </h1>
          <p className="font-body text-primary-foreground/70 text-lg">
            Our commitment to environmental stewardship and community development.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: TreePine,
                title: "Environmental Stewardship",
                points: [
                  "Sustainable crop rotation practices",
                  "Organic fertilizer and pest management",
                  "Rainwater harvesting systems",
                  "Reforestation programs on degraded land",
                ],
              },
              {
                icon: Users,
                title: "Community Empowerment",
                points: [
                  "Training programs for 2,000+ local farmers",
                  "Fair pricing and transparent procurement",
                  "Infrastructure development in farming communities",
                  "Educational scholarships for farmers' children",
                ],
              },
              {
                icon: Recycle,
                title: "Eco-Friendly Processing",
                points: [
                  "Waste-to-energy conversion in processing plants",
                  "Minimal water usage through recycling systems",
                  "Biodegradable packaging options",
                  "Carbon footprint reduction initiatives",
                ],
              },
              {
                icon: Heart,
                title: "CSR Initiatives",
                points: [
                  "Annual health outreach programs",
                  "Clean water projects in rural areas",
                  "Women-in-agriculture empowerment program",
                  "Youth agricultural entrepreneurship workshops",
                ],
              },
            ].map((item) => (
              <div key={item.title} className="p-8 rounded-xl bg-card shadow-sm border border-border">
                <item.icon className="w-10 h-10 text-accent mb-4" />
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">{item.title}</h2>
                <ul className="space-y-3">
                  {item.points.map((point) => (
                    <li key={point} className="font-body text-muted-foreground text-sm flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sustainability;
