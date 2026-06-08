import { Leaf, Shield, Lightbulb, Award, Eye, Target, Building2, Cpu, Factory, Handshake, ArrowRight, Layers, Linkedin, Mail, Network, Settings2, Sprout, Truck, Wallet, X, TrendingUp } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import strategyCrop from "@/assets/strategy-crop.jpg";
import strategyProcessing from "@/assets/strategy-processing.jpg";
import strategyDistribution from "@/assets/strategy-distribution.jpg";
import advantagePartnerships from "@/assets/advantage-partnerships.jpg";
import growthStrategyImg from "@/assets/growth-strategy.jpg";
import { leadership, type Leader } from "@/data/leadership";
import visionBg from "@/assets/vision-bg.jpg";
import missionOperationsImg from "@/assets/mission-operations.jpg";
import missionProductsImg from "@/assets/mission-products.jpg";
import missionSustainableImg from "@/assets/mission-sustainable.jpg";
import missionStakeholderImg from "@/assets/mission-stakeholder.jpg";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const About = () => {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const active = leadership.find((l) => l.slug === activeSlug) || null;

  useEffect(() => {
    if (active && panelRef.current) {
      const t = setTimeout(() => {
        panelRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 120);
      return () => clearTimeout(t);
    }
  }, [active]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveSlug(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="section-padding pt-32 md:pt-40 md:pb-28 bg-forest-gradient text-center">
        <div className="container-wide max-w-3xl">
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">About Us</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Our Story
          </h1>
          <p className="font-body text-primary-foreground/70 text-lg leading-relaxed">
            PK5 Agro-Allied is an agribusiness development company operating under PK5 Holdings Inc. (USA), established to drive large-scale, commercially viable agricultural investments.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="relative overflow-hidden">
        <div className="relative min-h-[520px] flex items-center">
          <img
            src={visionBg}
            alt="PK5 Agro-Allied palm plantation at sunrise"
            loading="lazy"
            width={1920}
            height={1080}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest/95 via-forest/80 to-forest/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsla(41,55%,51%,0.25),transparent_60%)]" />

          <div className="container-wide relative z-10 section-padding">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="h-px w-10 bg-gold" />
                <Eye className="w-5 h-5 text-gold" />
                <p className="text-gold font-body text-sm tracking-[0.25em] uppercase">Our Vision</p>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] mb-8">
                Vision
              </h2>
              <p className="font-display italic text-primary-foreground/90 text-xl md:text-2xl lg:text-3xl leading-relaxed">
                <span className="text-gold text-4xl leading-none align-top mr-1">“</span>
                At PK5 Agro-Allied, our vision is to be become a leading agro-industrial
                company delivering premium agricultural products to local and global markets.
                <span className="text-gold text-4xl leading-none align-bottom ml-1">”</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Carousel */}
      <MissionCarousel />

      {/* Core Values */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">What Drives Us</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Core Values</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: "Sustainability", desc: "Farming that respects the earth." },
              { icon: Shield, title: "Integrity", desc: "Honest in every transaction." },
              { icon: Lightbulb, title: "Innovation", desc: "Modern solutions for age-old challenges." },
              { icon: Award, title: "Quality", desc: "Excellence from seed to shelf." },
            ].map((v) => (
              <div key={v.title} className="text-center p-6 rounded-lg bg-card shadow-sm border border-border">
                <v.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="font-body text-muted-foreground text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      {/* <section className="section-padding bg-background">
        <div className="container-wide text-center">
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">Leadership</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Prince  Njoku", role: "CEO & Founder", image: princeImg }, 
              { name: "Peter Eziakor", role: "Director of Corporate Affairs", image: peterImg },
              { name: "Alozie Okwukanma", role: "Director of ICT", image: alozieImg },
            ].map((person) => (
              <div key={person.name} className="p-6 rounded-lg bg-card shadow-sm border border-border">
                <div className="w-20 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{person.name}</h3>
                <p className="font-body text-muted-foreground text-sm">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section
        id="leadership"
        className="relative section-padding overflow-hidden bg-gradient-to-b from-background via-muted/40 to-background scroll-mt-24"
      >
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, hsl(var(--forest)) 0, transparent 40%), radial-gradient(circle at 80% 80%, hsl(var(--gold)) 0, transparent 40%)",
          }}
          aria-hidden
        />
        <div className="container-wide relative">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">Leadership</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5">
              PK5 Agro-Allied Leadership
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
              Our leadership team is committed to innovation, sustainability, and operational excellence —
              advancing agricultural development across Africa while delivering world-class products to
              global markets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {leadership.map((person, idx) => {
              const isActive = person.slug === activeSlug;
              return (
                <button
                  key={person.slug}
                  type="button"
                  onClick={() => setActiveSlug(isActive ? null : person.slug)}
                  aria-expanded={isActive}
                  aria-controls="leader-detail-panel"
                  aria-label={`${isActive ? "Close" : "Open"} full profile of ${person.name}, ${person.role}`}
                  className={`group relative text-left bg-card border rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 animate-fade-in focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${isActive ? "border-accent ring-2 ring-accent/40" : "border-border"
                    }`}
                  style={{ animationDelay: `${idx * 120}ms` }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                    <img
                      src={person.image}
                      alt={`${person.name}, ${person.role} at PK5 Agro-Allied`}
                      width={768}
                      height={960}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="absolute bottom-4 left-4 right-4 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground font-body text-sm font-semibold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      {isActive ? "Close Profile" : "Read Full Profile"} <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                      {person.name}
                    </h3>
                    <p className="font-body text-accent text-sm font-medium tracking-wide uppercase mt-1">
                      {person.role}
                    </p>
                    <div className="w-10 h-px bg-accent/60 my-4" />
                    <p className="font-body text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {person.preview}
                    </p>
                    <div className="flex items-center justify-between mt-5 pt-5 border-t border-border">
                      <div className="flex items-center gap-3">
                        <a
                          href={person.linkedin}
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`${person.name} on LinkedIn`}
                          className="w-9 h-9 rounded-full flex items-center justify-center bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a
                          href={person.email}
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`Email ${person.name}`}
                          className="w-9 h-9 rounded-full flex items-center justify-center bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      </div>
                      <span className="inline-flex items-center gap-1 font-body text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                        {isActive ? "Hide" : "View"} <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Inline expanded profile panel */}
          <AnimatePresence initial={false} mode="wait">
            {active && (
              <motion.div
                key={active.slug}
                id="leader-detail-panel"
                ref={panelRef}
                initial={{ opacity: 0, height: 0, y: 12 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: 12 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden mt-10"
              >
                <LeaderPanel leader={active} onClose={() => setActiveSlug(null)} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Strategic Focus Areas */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">
              Strategic Focus Areas
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5">
              Aligned for Sustainable Agricultural Growth
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
              PK5 Agro-Allied strategically aligns its core focus areas to enhance operational
              efficiency and drive sustainable agricultural growth. This approach ensures the
              company remains competitive while meeting market demands and stakeholder expectations.
            </p>
          </div>

          <div className="space-y-20 md:space-y-24">
            {[
              {
                icon: Sprout,
                tag: "Focus 01",
                title: "Crop Production Development",
                desc: "We focus on high-yield crop cultivation through structured farm planning, soil analysis, and the use of improved seedlings to support consistent and scalable agricultural output.",
                image: strategyCrop,
                reverse: false,
              },
              {
                icon: Factory,
                tag: "Focus 02",
                title: "Processing & Value Addition",
                desc: "Our integrated agro-processing facilities transform raw agricultural produce into refined, market-ready products, maximizing in-country value and improving profitability.",
                image: strategyProcessing,
                reverse: true,
              },
              {
                icon: Truck,
                tag: "Focus 03",
                title: "Market-Oriented Distribution",
                desc: "Our end-to-end supply chain, from farm to market, ensures efficient storage, transportation, and delivery of agricultural products to both local and international markets.",
                image: strategyDistribution,
                reverse: false,
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${item.reverse ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
              >
                <div className="relative group">
                  <div className="absolute -inset-4 bg-forest-gradient opacity-0 group-hover:opacity-20 blur-2xl rounded-3xl transition-opacity duration-700" />
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-border">
                    <img
                      src={item.image}
                      alt={item.title}
                      width={1280}
                      height={800}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-forest/40 via-transparent to-transparent" />
                    <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur border border-border">
                      <item.icon className="w-4 h-4 text-accent" />
                      <span className="font-body text-xs font-semibold tracking-wider uppercase text-foreground">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 text-accent mb-5">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {item.title}
                  </h3>
                  <div className="w-12 h-px bg-accent/60 mb-5" />
                  <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="relative section-padding overflow-hidden bg-muted/40">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 10%, hsl(var(--forest)) 0, transparent 35%), radial-gradient(circle at 90% 90%, hsl(var(--gold)) 0, transparent 35%)",
          }}
          aria-hidden
        />
        <div className="container-wide relative">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
            <div>
              <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">
                Competitive Advantage
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5">
                Built to Lead the Agribusiness Sector
              </h2>
              <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                PK5 Agro-Allied maintains a competitive edge through its commitment to sustainable
                agricultural practices and the integration of modern technologies. Our focus on
                efficient resource management and strong community engagement further strengthens
                our position in the agribusiness sector.
              </p>
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-xl ring-1 ring-border group">
                <img
                  src={advantagePartnerships}
                  alt="Strategic agricultural partnerships and innovation"
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-forest/10 to-transparent" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {
                  icon: Network,
                  title: "Integrated farm-to-market model",
                  desc: "Our operations ensure seamless control of the supply chain from cultivation to retail, enhancing freshness, reducing waste, and lowering overall costs.",
                },
                {
                  icon: Handshake,
                  title: "Strong technical and strategic partnerships",
                  desc: "Collaborations with industry experts and technology providers allow us to adopt advanced processing techniques and continuously improve product quality.",
                },
                {
                  icon: Layers,
                  title: "Scalable operations",
                  desc: "Our robust infrastructure supports expansion and increased production capacity to efficiently meet growing market demands.",
                },
                {
                  icon: Award,
                  title: "Premium quality standards",
                  desc: "From seed selection to final packaging, every stage of our process is governed by strict quality benchmarks aligned with international market expectations.",
                },
              ]
                .slice(0, 3)
                .map((c, i) => (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group p-6 md:p-7 rounded-2xl bg-card border border-border hover:border-accent/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 sm:[&:nth-child(3)]:col-span-2"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <c.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2 leading-snug">
                      {c.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">
                      {c.desc}
                    </p>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Growth Strategy */}
      <section className="relative section-padding bg-background overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-14 items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">
                Growth Strategy
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5">
                Investing in Scale, Innovation & Long-Term Value
              </h2>
              <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                PK5 Agro-Allied is committed to driving sustainable growth through strategic
                investments in modern agricultural technologies and the expansion of its
                operational capacity. Our growth strategy focuses on improving productivity,
                strengthening local partnerships, and expanding market access to maximize value
                creation.
              </p>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-border group">
                <img
                  src={growthStrategyImg}
                  alt="Modern agricultural technology and precision farming"
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-forest/60 via-transparent to-transparent" />
              </div>
            </div>

            <ol className="relative border-l-2 border-accent/30 pl-8 space-y-10">
              {[
                {
                  icon: Building2,
                  title: "Expansion of Agricultural Land and Assets",
                  desc: "We scale production capacity by acquiring and developing additional farmland, ensuring a strong and sustainable pipeline for long-term agricultural output.",
                },
                {
                  icon: Cpu,
                  title: "Investment in Agro-Processing",
                  desc: "We enhance our operational footprint by developing processing facilities and adopting modern technologies to increase efficiency, improve product quality, and maximize value addition.",
                },
                {
                  icon: Wallet,
                  title: "Strategic Partnerships and Funding",
                  desc: "We collaborate with industry experts, development partners, and financial institutions to drive innovation, optimize resource allocation, and ensure long-term financial sustainability and scalability.",
                },
                {
                  icon: Settings2,
                  title: "Continuous Operational Optimization",
                  desc: "We improve performance by modernizing farming practices, streamlining operations, and leveraging innovation to maintain an efficient, sustainable, and resilient agricultural system.",
                },
              ].map((step, i) => (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className="relative"
                >
                  <span className="absolute -left-[42px] top-1 w-10 h-10 rounded-full bg-forest-gradient text-primary-foreground flex items-center justify-center ring-4 ring-background shadow-md">
                    <step.icon className="w-5 h-5" />
                  </span>
                  <div className="p-6 rounded-2xl bg-card border border-border hover:border-accent/60 hover:shadow-lg transition-all duration-500">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-body text-xs font-semibold tracking-[0.18em] uppercase text-accent">
                        Step {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
};

const LeaderPanel = ({ leader, onClose }: { leader: Leader; onClose: () => void }) => (
  <motion.article
    initial={{ opacity: 0, scale: 0.985 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
    className="relative w-full bg-card border border-border rounded-3xl shadow-2xl overflow-hidden"
    aria-labelledby={`leader-${leader.slug}-name`}
  >
    {/* Decorative top bar */}
    <div className="h-1.5 w-full bg-forest-gradient" />

    <button
      type="button"
      onClick={onClose}
      aria-label="Close profile"
      className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-background/90 backdrop-blur border border-border text-foreground hover:bg-accent hover:text-accent-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <X className="w-5 h-5" />
    </button>

    <div className="grid lg:grid-cols-[minmax(0,420px)_1fr] gap-0">
      {/* Image column */}
      <div className="relative bg-forest-gradient p-6 md:p-8 flex items-center justify-center">
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 20%, hsl(var(--gold)) 0, transparent 55%)",
          }}
          aria-hidden
        />
        <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden ring-4 ring-accent/40 shadow-2xl">
          <img
            src={leader.image}
            alt={`${leader.name}, ${leader.role}`}
            width={768}
            height={960}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content column */}
      <div className="p-6 md:p-10 lg:p-12">
        <p className="text-accent font-body text-xs md:text-sm tracking-[0.2em] uppercase mb-2">
          {leader.role}
        </p>
        <h3
          id={`leader-${leader.slug}-name`}
          className="font-display text-3xl md:text-4xl font-bold text-foreground"
        >
          {leader.name}
        </h3>
        <p className="font-body text-muted-foreground text-base md:text-lg italic mt-3 leading-relaxed">
          "{leader.tagline}"
        </p>

        <div className="flex items-center gap-3 mt-5">
          <a
            href={leader.linkedin}
            aria-label={`${leader.name} on LinkedIn`}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={leader.email}
            aria-label={`Email ${leader.name}`}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        <div className="w-12 h-px bg-accent/60 my-6" />

        <div className="space-y-4 mb-8">
          {leader.bio.map((p, i) => (
            <p key={i} className="font-body text-muted-foreground leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        {/* <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <PanelBlock icon={Briefcase} title="Experience" items={leader.experience} />
          <PanelBlock icon={Award} title="Achievements" items={leader.achievements} />
          <PanelBlock icon={GraduationCap} title="Education" items={leader.education} />
          <PanelBlock icon={BadgeCheck} title="Certifications" items={leader.certifications} />
        </div>

        <div className="mt-8">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-accent" />
            <h4 className="font-display text-lg font-semibold text-foreground">Expertise</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {leader.expertise.map((e) => (
              <span
                key={e}
                className="px-3 py-1.5 rounded-full bg-muted text-foreground/80 font-body text-sm border border-border"
              >
                {e}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 p-5 md:p-6 rounded-2xl bg-accent/5 border border-accent/20">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-4 h-4 text-accent" />
            <h4 className="font-display text-base font-semibold text-foreground">Vision</h4>
          </div>
          <p className="font-body text-muted-foreground italic leading-relaxed">"{leader.vision}"</p>
        </div> */}

        <div className="mt-8 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background font-body text-sm font-medium hover:bg-foreground/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <X className="w-4 h-4" /> Close Profile
          </button>
        </div>
      </div>
    </div>
  </motion.article>
);

const missionCards = [
  {
    icon: Sprout,
    eyebrow: "Operations",
    title: "Develop World-Class Agricultural Operations",
    desc: "Our mission is committed to implementing cutting-edge farming techniques and innovative practices to optimize productivity and efficiency.",
    image: missionOperationsImg,
  },
  {
    icon: Factory,
    eyebrow: "Products",
    title: "Deliver Premium Agricultural Products",
    desc: "Our mission is to transform raw agricultural produce into premium products, maintaining high standards to meet both local and international market demands.",
    image: missionProductsImg,
  },
  {
    icon: Leaf,
    eyebrow: "Sustainability",
    title: "Drive Sustainable Agricultural Growth",
    desc: "Our mission is to prioritize environmentally responsible methods that promote soil health, biodiversity, and resource conservation.",
    image: missionSustainableImg,
  },
  {
    icon: TrendingUp,
    eyebrow: "Stakeholder Value",
    title: "Create Long-Term Stakeholder Value",
    desc: "Our mission focuses on consistent growth and ethical business practices to generate lasting benefits for investors, communities, and partners.",
    image: missionStakeholderImg,
  },
];

const MissionCarousel = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selected, setSelected] = useState(0);
  const autoplay = useRef(Autoplay({ delay: 6000, stopOnInteraction: false, stopOnMouseEnter: true }));

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="relative overflow-hidden bg-forest py-20 md:py-28">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,hsla(41,55%,51%,0.12),transparent_55%),radial-gradient(circle_at_85%_90%,hsla(157,72%,30%,0.25),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22><path d=%22M0 39h40M39 0v40%22 stroke=%22%23ffffff%22 stroke-width=%220.5%22/></svg>')]" />

      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-gold" />
            <Target className="w-4 h-4 text-gold" />
            <p className="text-gold font-body text-xs md:text-sm tracking-[0.3em] uppercase">Our Mission</p>
            <span className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
            Driving Africa's <span className="text-gradient-gold">Agricultural Future</span>
          </h2>
        </motion.div>

        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: true }}
          plugins={[autoplay.current]}
          className="relative"
        >
          <CarouselContent className="-ml-0">
            {missionCards.map((card, i) => {
              const Icon = card.icon;
              const isActive = selected === i;
              return (
                <CarouselItem key={i} className="pl-0 basis-full">
                  <article className="relative group h-[520px] md:h-[600px] lg:h-[640px] rounded-3xl overflow-hidden shadow-[0_30px_80px_-20px_hsla(157,72%,4%,0.6)] ring-1 ring-white/10">
                    {/* Background image with parallax/zoom */}
                    <motion.div
                      className="absolute inset-0"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: isActive ? 1.0 : 1.1 }}
                      transition={{ duration: 8, ease: "easeOut" }}
                    >
                      <img
                        src={card.image}
                        alt={card.title}
                        loading="lazy"
                        width={1600}
                        height={1000}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    {/* Overlay gradients */}
                    <div className="absolute inset-0 bg-gradient-to-r from-forest/95 via-forest/70 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent" />

                    {/* Content */}
                    <div className="relative h-full flex items-center">
                      <div className="w-full md:w-3/5 lg:w-1/2 px-6 sm:px-10 md:px-14 lg:px-16 py-10">
                        <AnimatePresence mode="wait">
                          {isActive && (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={{ duration: 0.7, ease: "easeOut" }}
                            >
                              {/* Glass icon badge */}
                              <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20">
                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gold/20 text-gold">
                                  <Icon className="w-4 h-4" />
                                </span>
                                <span className="text-gold font-body text-xs tracking-[0.25em] uppercase">
                                  {card.eyebrow}
                                </span>
                              </div>

                              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-[1.1] mb-6 ml-6 drop-shadow-lg">
                                {card.title}
                              </h3>
                              <div className="h-[2px] w-16 bg-gold mb-6" />
                              <p className="font-body text-base md:text-lg text-primary-foreground/85 leading-relaxed max-w-xl">
                                {card.desc}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          {/* Navigation arrows */}
          <CarouselPrevious className="hidden md:flex left-6 lg:left-10 h-12 w-12 bg-white/10 backdrop-blur-md border-white/20 text-primary-foreground hover:bg-gold hover:text-forest hover:border-gold shadow-xl z-10" />
          <CarouselNext className="hidden md:flex right-6 lg:right-10 h-12 w-12 bg-white/10 backdrop-blur-md border-white/20 text-primary-foreground hover:bg-gold hover:text-forest hover:border-gold shadow-xl z-10" />
        </Carousel>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-3 mt-10">
          {missionCards.map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="group relative h-2 flex items-center"
            >
              <span
                className={`block h-[3px] rounded-full transition-all duration-500 ${
                  selected === i
                    ? "w-12 bg-gold"
                    : "w-6 bg-primary-foreground/25 group-hover:bg-primary-foreground/50"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
// const PanelBlock = ({
//   icon: Icon,
//   title,
//   items,
// }: {
//   icon: React.ElementType;
//   title: string;
//   items: string[];
// }) => {
//   if (!items?.length) return null;
//   return (
//     <div>
//       <div className="flex items-center gap-2 mb-3">
//         <Icon className="w-4 h-4 text-accent" />
//         <h4 className="font-display text-base font-semibold text-foreground">{title}</h4>
//       </div>
//       <ul className="space-y-2">
//         {items.map((i) => (
//           <li
//             key={i}
//             className="flex items-start gap-2.5 font-body text-sm text-muted-foreground leading-relaxed"
//           >
//             <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
//             {i}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

export default About;
