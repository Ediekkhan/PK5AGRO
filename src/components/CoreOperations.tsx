import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sprout, Factory, Truck, TrendingUp } from "lucide-react";
import cultivationImg from "@/assets/operations-cultivation.jpg";
import processingImg from "@/assets/operations-processing.jpg";
import logisticsImg from "@/assets/operations-logistics.jpg";
import agribusinessImg from "@/assets/operations-agribusiness.jpg";

const operations = [
  {
    title: "Cultivation of diverse agricultural crops",
    description:
      "Growing a variety of crops to ensure food security and meet market demands, while supporting consistent supply and agricultural sustainability.",
    image: cultivationImg,
    icon: Sprout,
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
  },
  {
    title: "Agro-Processing and packaging",
    description:
      "Transforming raw agricultural products into finished goods and packaging them for retail, while ensuring quality standards and market readiness.",
    image: processingImg,
    icon: Factory,
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-500",
  },
  {
    title: "Supply Chain and Distribution",
    description:
      "Managing the efficient movement of products from farms to consumers, ensuring timely delivery, reduced waste, and reliable supply chain operations.",
    image: logisticsImg,
    icon: Truck,
    iconBg: "bg-sky-500/10",
    iconColor: "text-sky-500",
  },
  {
    title: "Agribusiness Development",
    description:
      "Supporting the growth and sustainability of agricultural enterprises through innovation and investment, while improving productivity and long-term sector resilience.",
    image: agribusinessImg,
    icon: TrendingUp,
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-500",
  },
];

const SectionHeader = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: [1, 0, 0, 1] }}
        className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4"
      >
        What We Do
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, delay: 1, ease: [1, 0, 0, 1] }}
        className="font-display text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.1] mb-6"
      >
        Core Operations
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
        className="font-body text-muted-foreground text-base md:text-lg leading-relaxed"
      >
        PK5 Agro-Allied specializes in the development, cultivation, and processing
        of agricultural resources across regions. Our company is committed to
        sustainable farming practices and delivering high-quality agricultural
        products to meet both local and global market demands.
      </motion.p>
    </div>
  );
};

const OperationCard = ({
  operation,
  index,
}: {
  operation: (typeof operations)[number];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = operation.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl bg-card border border-border/60 shadow-sm hover:shadow-xl transition-all duration-700"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={operation.image}
          alt={operation.title}
          loading="lazy"
          width={1024}
          height={768}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        {/* Floating icon badge */}
        <div
          className={`absolute top-4 left-4 w-12 h-12 rounded-xl ${operation.iconBg} backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-lg`}
        >
          <Icon className={`w-6 h-6 ${operation.iconColor}`} />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3 leading-snug group-hover:text-accent transition-colors duration-500">
          {operation.title}
        </h3>
        <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed">
          {operation.description}
        </p>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-accent group-hover:w-full transition-all duration-700 ease-out" />
    </motion.div>
  );
};

const CoreOperations = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Subtle radial texture */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, hsla(157,72%,14%,0.03), transparent)' }} />

      <div className="container-wide relative z-10">
        <SectionHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {operations.map((operation, index) => (
            <OperationCard key={operation.title} operation={operation} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreOperations;
