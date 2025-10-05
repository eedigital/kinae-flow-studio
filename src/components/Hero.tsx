import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroImage from "@/assets/hero-yoga-studio.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Women practicing yoga and barre in serene studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
          Move beautifully.
          <br />
          <span className="text-gradient">Live intentionally.</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
          Premium athleisure designed for yoga, barre, and pilates. 
          Experience the perfect blend of comfort and elegance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="rounded-full px-8 shadow-glow hover:shadow-glow transition-smooth bg-primary hover:bg-primary/90 text-primary-foreground">
            Shop Collection
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="rounded-full px-8 glass-effect border-2 hover:bg-card/50 transition-smooth"
          >
            <Play className="w-4 h-4 mr-2" />
            Watch the Flow
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-foreground/50 rounded-full animate-glow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
