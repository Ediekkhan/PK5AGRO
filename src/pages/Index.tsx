import HeroSection from "@/components/HeroSection";
import ProductsPreview from "@/components/ProductsPreview";
import StatsSection from "@/components/StatsSection";
import AboutPreview from "@/components/AboutPreview";
import SustainabilitySection from "@/components/SustainabilitySection";
import CTASection from "@/components/CTASection";
import CoreOperations from "@/components/CoreOperations";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <ProductsPreview />
      {/* <StatsSection /> */}
      <AboutPreview />     
      <CoreOperations />
      <SustainabilitySection />
      <CTASection />
    </main>
  );
};

export default Index;
