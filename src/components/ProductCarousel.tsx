import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import leggingsImage from "@/assets/product-leggings.jpg";
import braImage from "@/assets/product-sports-bra.jpg";
import wrapImage from "@/assets/product-wrap.jpg";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "CloudFlex Leggings",
    price: 88,
    colors: ["Pink", "Lavender", "Blue"],
    image: leggingsImage,
  },
  {
    id: 2,
    name: "Serenity Sports Bra",
    price: 58,
    colors: ["Lavender", "Rose Gold", "Pearl"],
    image: braImage,
  },
  {
    id: 3,
    name: "Flow Yoga Wrap",
    price: 68,
    colors: ["Blue", "Pink", "Pearl"],
    image: wrapImage,
  },
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  // Auto-scroll effect
  useState(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        next();
      }
    }, 4000);
    return () => clearInterval(interval);
  });

  return (
    <section className="py-20 gradient-soft">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Collection</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover our most-loved pieces
          </p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="max-w-md mx-auto animate-float-slow">
                    <Link to={`/product/${product.id}`}>
                      <div className="relative group rounded-[3rem] overflow-hidden shadow-glass hover:shadow-glow transition-smooth hover:-translate-y-2">
                        <div className="aspect-square">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                        
                        {/* Quick View Capsule */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-smooth">
                          <div className="glass-effect rounded-full px-6 py-3 text-sm font-medium">
                            Quick View
                          </div>
                        </div>
                      </div>
                    </Link>
                    
                    {/* Product Info Capsule */}
                    <div className="mt-6 glass-effect rounded-[2rem] p-6 shadow-soft">
                      <h3 className="font-playfair text-2xl font-semibold mb-3 text-center">
                        {product.name}
                      </h3>
                      <div className="flex justify-center gap-2 mb-4">
                        {product.colors.map((color) => (
                          <div
                            key={color}
                            className="w-7 h-7 rounded-full border-2 border-border glass-effect shadow-soft hover:scale-110 transition-smooth cursor-pointer"
                            title={color}
                          />
                        ))}
                      </div>
                      <p className="text-2xl font-medium mb-4 text-center text-gradient">${product.price}</p>
                      <Button className="w-full rounded-full px-8 shadow-soft hover:shadow-glow transition-smooth hover:scale-105">
                        Quick Add
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Capsule Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prev}
            className="absolute left-4 top-1/3 -translate-y-1/2 rounded-full glass-effect shadow-glass hover:shadow-glow transition-smooth hover:scale-110 w-12 h-12"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={next}
            className="absolute right-4 top-1/3 -translate-y-1/2 rounded-full glass-effect shadow-glass hover:shadow-glow transition-smooth hover:scale-110 w-12 h-12"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Capsule Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-smooth shadow-soft hover:shadow-glow ${
                  index === currentIndex
                    ? "bg-primary w-10"
                    : "bg-muted-foreground/30 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
