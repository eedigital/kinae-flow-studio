import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PracticeSection from "@/components/PracticeSection";
import ProductCarousel from "@/components/ProductCarousel";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <PracticeSection />
      <ProductCarousel />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
