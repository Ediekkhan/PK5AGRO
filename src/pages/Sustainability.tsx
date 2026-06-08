import { motion } from "framer-motion";
import { TreePine, Users, Recycle, Heart, LineChart, Ship, Sprout, Briefcase, Fuel, Landmark, Factory, Globe2 } from "lucide-react";
import governmentImg from "@/assets/government-alignment.jpg";
import economicImg from "@/assets/economic-impact.jpg";

const govPillars = [
  {
    icon: Landmark,
    title: "Supports Economic Diversification Agenda",
    desc: "We drive growth in the agricultural sector, reducing over-reliance on a single industry and contributing to a more balanced and resilient economy.",
  },
  {
    icon: Fuel,
    title: "Reduces Reliance on Crude Oil",
    desc: "Our initiative promotes alternative revenue streams through agriculture and agro-processing, helping to decrease dependence on crude oil exports.",
  },
  {
    icon: Factory,
    title: "Promotes Agro-Industrialization and Value Addition",
    desc: "We support the development of processing industries, enabling value addition to agricultural produce and boosting domestic production capacity.",
  },
  {
    icon: Globe2,
    title: "Strengthens National Agricultural Competitiveness",
    desc: "We enhance the country's position in global agricultural markets by improving product quality, increasing exports, and attracting investment into the sector.",
  },
];

const economicPillars = [
  {
    icon: Briefcase,
    title: "Job Creation",
    desc: "Our operations generate significant job opportunities across farming, processing, logistics, and support services, improving livelihoods and reducing unemployment.",
  },
  {
    icon: Sprout,
    title: "Increased Agricultural Productivity",
    desc: "Our operations enhance farming techniques and optimize resource utilization, leading to higher crop yields and improved food security.",
  },
  {
    icon: Ship,
    title: "Export Revenue Generation",
    desc: "By exporting agricultural products, we contribute significantly to foreign exchange earnings, strengthening the local, state, and national economy.",
  },
  {
    icon: LineChart,
    title: "Contribution to GDP and FX Earnings",
    desc: "Our agro-industrial activities contribute to national GDP and generate foreign exchange through the export of processed agricultural products, supporting economic stability and growth.",
  },
];
const Sustainability = () => {
  return (
    <main className="bg-background">
      <section className="section-padding pt-32 md:pt-40 md:pb-28 bg-forest-gradient text-center">
        <div className="container-wide max-w-3xl">
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Sustainability</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Growing Responsibly
          </h1>
          <p className="font-body text-primary-foreground/70 text-lg">
            PK5 Agro-Allied is committed to sustainability by implementing environmentally responsible agricultural practices and minimizing ecological impact. We prioritize strong ESG standards by fostering community engagement and ensuring transparent governance across all operations.
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
                  "We prioritize the protection and preservation of natural resources through sustainable farming practices and minimized environmental impact.",
                ],
              },
              {
                icon: Users,
                title: "Community Empowerment",
                points: [
                  "We actively engage local communities, support smallholder farmers, and implement initiatives that drive social and economic development.",
                ]
              },
              {
                icon: Recycle,
                title: "Responsible Land Use",
                points: [
                  "We ensure land is managed efficiently and ethically to maintain productivity while conserving biodiversity.",
                ],
              },
              {
                icon: Heart,
                title: "Long-term Sustainability Focus",
                points: [
                  "We are committed to strategies that support lasting agricultural success, economic viability, and ecological balance.",
                ],
              },
            ].map((item) => (
              <div key={item.title} className="p-8 rounded-xl bg-card shadow-sm border border-border">
                <item.icon className="w-10 h-10 text-accent mb-4" />
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">{item.title}</h2>
                <ul className="space-y-3">
                  {item.points.map((point) => (
                    <li key={point} className="font-body text-muted-foreground text-base flex items-start gap-2">
                      {/* <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" /> */}
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="relative section-padding overflow-hidden bg-muted/40">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, hsl(var(--forest)) 0, transparent 40%), radial-gradient(circle at 20% 80%, hsl(var(--gold)) 0, transparent 40%)",
          }}
          aria-hidden
        />
        <div className="container-wide relative">
          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">
                National Alignment
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5">
                Alignment With Government Priorities
              </h2>
              <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                PK5 Agro-Allied aligns closely with government priorities by promoting economic
                development through sustainable agricultural production and agro-industrialization.
                Our company emphasizes job creation, rural development, and export-driven growth to
                support long-term local, state, and national progress.
              </p>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-border group">
                <img
                  src={governmentImg}
                  alt="National agricultural development and policy alignment"
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-forest/60 via-transparent to-transparent" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {govPillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className="group relative p-6 md:p-7 rounded-2xl bg-card border border-border hover:border-accent/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="absolute top-5 right-5 font-display text-4xl font-bold text-accent/10 group-hover:text-accent/20 transition-colors">
                    0{i + 1}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <p.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Economic Impact */}
      <section className="relative section-padding bg-background overflow-hidden">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">
              Economic Impact
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5">
              Driving Local, State & National Growth
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
              PK5 Agro-Allied drives local, state, and national economic growth through sustainable
              agricultural development, leveraging modern farming practices and agro-processing to
              enhance productivity and support responsible environmental and socioeconomic progress.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden ring-1 ring-border shadow-2xl mb-14">
            <img
              src={economicImg}
              alt="Thriving agricultural community and economic impact"
              width={1280}
              height={800}
              loading="lazy"
              className="w-full h-[320px] md:h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/30 to-transparent" />
            <div className="absolute inset-0 flex items-end p-8 md:p-12">
              <div className="max-w-2xl">
                <p className="text-gold font-body text-xs md:text-sm tracking-[0.2em] uppercase mb-2">
                  Impact in Action
                </p>
                <p className="font-display text-2xl md:text-3xl font-semibold text-primary-foreground leading-snug">
                  Empowering communities, strengthening economies, and creating a sustainable
                  agricultural future across Africa.
                </p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {economicPillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="group relative p-7 rounded-2xl bg-card border border-border hover:border-accent/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-accent/5 group-hover:bg-accent/10 transition-colors" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-forest-gradient text-primary-foreground flex items-center justify-center mb-4 shadow-md">
                    <p.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <div className="w-8 h-px bg-accent/60 mb-3" />
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sustainability;
