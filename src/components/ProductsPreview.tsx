import { Link } from "react-router-dom";
import palmKernelImg from "@/assets/pk5_palm.jpeg";
import cocoaImg from "@/assets/pk5_cocoa.jpeg";
import plantainImg from "@/assets/plantains.jpeg";

const products = [
  {
    title: "Palm Kernel",
    description: "Premium palm kernel nuts cultivated and processed for oil extraction, animal feed, and industrial applications.",
    image: palmKernelImg,
    link: "/products#palm-kernel",
  },
  {
    title: "Cocoa",
    description: "Export-grade cocoa beans — fermented, dried, and sorted to meet international quality standards.",
    image: cocoaImg,
    link: "/products#cocoa",
  },
  {
    title: "Plantain",
    description: "Fresh plantain and processed plantain products sourced from our sustainable farms across Nigeria.",
    image: plantainImg,
    link: "/products#plantain",
  },
];

const ProductsPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">
            What We Grow & Process
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Our Core Products
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link
              key={product.title}
              to={product.link}
              className="group relative overflow-hidden rounded-lg bg-card shadow-lg hover:shadow-xl transition-all duration-500"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {product.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
                <span className="inline-block mt-4 text-accent text-sm font-medium tracking-wide uppercase">
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
