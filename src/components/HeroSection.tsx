import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-farm.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-overlay-dark" />
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <p className="text-gold font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4 opacity-0 animate-fade-in">
          PK5 Agro-Allied
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6 opacity-0 animate-fade-in-delay-1">
          Cultivating Excellence.{" "}
          <span className="text-gradient-gold">Processing Quality.</span>
        </h1>
        <p className="font-body text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-delay-2">
          From sustainably managed farmlands to global markets — premium agricultural commodities cultivated with care and processed to perfection.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-delay-3">
          <Button asChild variant="gold" size="lg">
            <Link to="/products">Explore Our Products</Link>
          </Button>
          <Button asChild variant="outline-light" size="lg">
            <Link to="/contact">Partner With Us</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary-foreground/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
