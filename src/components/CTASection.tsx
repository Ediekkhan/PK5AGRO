import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-padding bg-forest-gradient text-center">
      <div className="container-wide max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
          Ready to Partner With Us?
        </h2>
        <p className="font-body text-primary-foreground/75 text-lg mb-8 leading-relaxed">
          Whether you're looking for bulk purchases, export partnerships, or sourcing
          premium agricultural products, we'd love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="gold" size="lg">
            <Link to="/contact">Get in Touch</Link>
          </Button>
          <Button asChild variant="outline-light" size="lg">
            <Link to="/about">Learn About Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
