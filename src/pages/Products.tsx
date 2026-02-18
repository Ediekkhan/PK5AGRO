// import palmKernelImg from "@/assets/palm-kernel.jpg";
// import cocoaImg from "@/assets/cocoa.jpg";
// import plantainImg from "@/assets/plantain.jpg";

import palmKernelImg from "@/assets/pk5_palm.jpeg";
import cocoaImg from "@/assets/pk5_cocoa.jpeg";
import plantainImg from "@/assets/pk5_plantain.jpeg";

const productData = [
  {
    id: "palm-kernel",
    name: "Palm Kernel",
    image: palmKernelImg,
    tagline: "The Golden Heart of the Oil Palm",
    description:
      "Our palm kernel operations span cultivation, harvesting, cracking, and oil extraction. We produce premium-grade palm kernel oil and palm kernel cake for both domestic and export markets.",
    specs: [
      "Free Fatty Acid (FFA): < 5%",
      "Moisture Content: < 7%",
      "Oil Content: 45-50%",
      "Impurity: < 6%",
    ],
    stages: ["Harvesting", "Sterilization", "Cracking", "Oil Extraction", "Refining", "Packaging"],
    packaging: ["50kg polypropylene bags", "1-tonne bulk bags", "Flexitank for liquid oil"],
  },
  {
    id: "cocoa",
    name: "Cocoa",
    image: cocoaImg,
    tagline: "Premium Beans for a Global Palate",
    description:
      "Our cocoa beans are carefully fermented, sun-dried, and sorted to meet the highest international export standards. Sourced from farms in Nigeria's cocoa belt, every batch delivers rich flavor and premium quality.",
    specs: [
      "Bean Count: 90-100 per 100g",
      "Moisture: < 7.5%",
      "Grade: Export Quality (Grade 1)",
      "Fermentation: 5-7 days",
    ],
    stages: ["Harvesting", "Pod Breaking", "Fermentation", "Sun Drying", "Sorting & Grading", "Bagging"],
    packaging: ["65kg jute bags", "Containerized for export", "Custom packaging available"],
  },
  {
    id: "plantain",
    name: "Plantain",
    image: plantainImg,
    tagline: "Farm-Fresh & Processed Products",
    description:
      "We supply both fresh plantain bunches and processed plantain products including plantain flour, chips, and dried plantain for local consumption and export markets.",
    specs: [
      "Variety: False Horn & French",
      "Grade: Premium Select",
      "Shelf Life: 7-14 days (fresh)",
      "Processed Shelf Life: 6-12 months",
    ],
    stages: ["Cultivation", "Harvesting", "Sorting", "Washing", "Processing / Packaging", "Distribution"],
    packaging: ["Fresh bunches in ventilated crates", "Plantain flour in 1-25kg bags", "Chips in retail packs"],
  },
];

const Products = () => {
  return (
    <main className="pt-20">
      <section className="section-padding bg-forest-gradient text-center">
        <div className="container-wide max-w-3xl">
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Our Products</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Premium Agricultural Products
          </h1>
          <p className="font-body text-primary-foreground/70 text-lg">
            From farm to market — quality you can trust.
          </p>
        </div>
      </section>

      {productData.map((product, idx) => (
        <section
          key={product.id}
          id={product.id}
          className={`section-padding ${idx % 2 === 0 ? "bg-background" : "bg-muted/50"}`}
        >
          <div className="container-wide">
            <div className={`grid md:grid-cols-2 gap-12 items-center ${idx % 2 !== 0 ? "md:direction-rtl" : ""}`}>
              <div className={idx % 2 !== 0 ? "md:order-2" : ""}>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img src={product.image} alt={product.name} className="w-full h-80 object-cover" />
                </div>
              </div>
              <div className={idx % 2 !== 0 ? "md:order-1" : ""}>
                <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-2">
                  {product.tagline}
                </p>
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                  {product.name}
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  {product.description}
                </p>

                <h3 className="font-display text-lg font-semibold text-foreground mb-3">Specifications</h3>
                <ul className="space-y-2 mb-6">
                  {product.specs.map((spec) => (
                    <li key={spec} className="font-body text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>

                <h3 className="font-display text-lg font-semibold text-foreground mb-3">Processing Stages</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.stages.map((stage, i) => (
                    <span
                      key={stage}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-foreground text-xs font-body"
                    >
                      <span className="text-accent font-semibold">{i + 1}.</span> {stage}
                    </span>
                  ))}
                </div>

                <h3 className="font-display text-lg font-semibold text-foreground mb-3">Packaging</h3>
                <ul className="space-y-1">
                  {product.packaging.map((pkg) => (
                    <li key={pkg} className="font-body text-sm text-muted-foreground">• {pkg}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
};

export default Products;
