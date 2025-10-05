import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { X, SlidersHorizontal } from "lucide-react";
import leggingsImage from "@/assets/product-leggings.jpg";
import braImage from "@/assets/product-sports-bra.jpg";
import wrapImage from "@/assets/product-wrap.jpg";

const products = [
  { id: 1, name: "CloudFlex Leggings", price: 88, category: "bottoms", practice: "yoga", image: leggingsImage },
  { id: 2, name: "Serenity Sports Bra", price: 58, category: "tops", practice: "barre", image: braImage },
  { id: 3, name: "Flow Yoga Wrap", price: 68, category: "accessories", practice: "yoga", image: wrapImage },
  { id: 4, name: "CloudFlex Leggings - Lavender", price: 88, category: "bottoms", practice: "pilates", image: leggingsImage },
  { id: 5, name: "Metallic Flex Top", price: 72, category: "tops", practice: "yoga", image: braImage },
  { id: 6, name: "Serenity Set Bundle", price: 138, category: "tops", practice: "barre", image: braImage },
];

const Shop = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 200]);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12 animate-fade-in">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Shop <span className="text-gradient">Collection</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover pieces designed for your practice
            </p>
          </div>

          <div className="flex gap-8">
            {/* Filters Sidebar */}
            <aside className={`
              ${showFilters ? 'block' : 'hidden'} md:block
              fixed md:sticky top-24 left-0 right-0 md:left-auto md:right-auto
              z-40 md:z-0 h-screen md:h-auto
              glass-effect md:glass-effect-none
              w-full md:w-64 flex-shrink-0
              p-6 md:p-0
              overflow-y-auto
            `}>
              <div className="flex items-center justify-between mb-6 md:hidden">
                <h2 className="font-semibold text-lg">Filters</h2>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setShowFilters(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="space-y-6">
                {/* Practice Filter */}
                <div>
                  <h3 className="font-semibold mb-3">Practice</h3>
                  <div className="space-y-2">
                    {["Yoga", "Barre", "Pilates"].map((practice) => (
                      <label key={practice} className="flex items-center gap-2 cursor-pointer">
                        <Checkbox />
                        <span className="text-sm">{practice}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <h3 className="font-semibold mb-3">Category</h3>
                  <div className="space-y-2">
                    {["Tops", "Bottoms", "Accessories"].map((category) => (
                      <label key={category} className="flex items-center gap-2 cursor-pointer">
                        <Checkbox />
                        <span className="text-sm">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Color Filter */}
                <div>
                  <h3 className="font-semibold mb-3">Color</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Pink", "Lavender", "Blue", "Pearl", "Rose Gold"].map((color) => (
                      <button
                        key={color}
                        className="w-10 h-10 rounded-full border-2 border-border hover:border-primary transition-smooth glass-effect"
                        title={color}
                      />
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-semibold mb-3">Price Range</h3>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={200}
                    step={10}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Mobile Filter Button */}
              <div className="md:hidden mb-6">
                <Button 
                  variant="outline" 
                  onClick={() => setShowFilters(true)}
                  className="w-full rounded-full glass-effect"
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </div>

              {/* Products */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, index) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="rounded-3xl overflow-hidden shadow-soft hover:shadow-glass transition-smooth">
                      <div className="aspect-square relative overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                      </div>
                      <div className="p-4 bg-card">
                        <h3 className="font-semibold mb-1 group-hover:text-primary transition-smooth">
                          {product.name}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-2 capitalize">
                          {product.practice} • {product.category}
                        </p>
                        <p className="font-medium">${product.price}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
