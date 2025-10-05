import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Star, Heart } from "lucide-react";
import { toast } from "sonner";
import leggingsImage from "@/assets/product-leggings.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Pink");
  const [quantity, setQuantity] = useState(1);

  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = [
    { name: "Pink", class: "bg-primary" },
    { name: "Lavender", class: "bg-secondary" },
    { name: "Blue", class: "bg-accent" },
  ];

  const handleAddToCart = () => {
    toast.success("Added to cart!", {
      description: `${quantity} item(s) in ${selectedColor}, size ${selectedSize}`,
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 animate-fade-in">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-smooth">Home</Link></li>
              <li>/</li>
              <li><Link to="/shop" className="hover:text-primary transition-smooth">Shop</Link></li>
              <li>/</li>
              <li className="text-foreground">CloudFlex Leggings</li>
            </ol>
          </nav>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="animate-fade-in">
              <div className="rounded-3xl overflow-hidden shadow-glass mb-4">
                <img
                  src={leggingsImage}
                  alt="CloudFlex Leggings"
                  className="w-full aspect-square object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <button
                    key={i}
                    className="rounded-2xl overflow-hidden border-2 border-border hover:border-primary transition-smooth"
                  >
                    <img
                      src={leggingsImage}
                      alt={`View ${i}`}
                      className="w-full aspect-square object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="animate-fade-in" style={{ animationDelay: "150ms" }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">(248 reviews)</span>
              </div>

              <h1 className="font-playfair text-4xl font-bold mb-4">
                CloudFlex Leggings
              </h1>
              
              <p className="text-3xl font-semibold mb-6">$88</p>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                Experience ultimate comfort and flexibility with our signature CloudFlex fabric. 
                Designed to move with you through every flow, featuring a high-rise fit and 
                four-way stretch technology. Made from sustainable materials with moisture-wicking properties.
              </p>

              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Color: {selectedColor}</h3>
                <div className="flex gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-12 h-12 rounded-full ${color.class} border-2 transition-smooth ${
                        selectedColor === color.name
                          ? "border-foreground scale-110 shadow-glow"
                          : "border-border hover:border-foreground/50"
                      }`}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold">Size: {selectedSize}</h3>
                  <Link to="/size-guide" className="text-sm text-primary hover:underline">
                    Size Guide
                  </Link>
                </div>
                <div className="flex gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 rounded-full border-2 transition-smooth font-medium ${
                        selectedSize === size
                          ? "border-primary bg-primary text-primary-foreground shadow-soft"
                          : "border-border hover:border-primary glass-effect"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <h3 className="font-semibold mb-3">Quantity</h3>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="rounded-full"
                  >
                    -
                  </Button>
                  <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                    className="rounded-full"
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex gap-4">
                <Button
                  size="lg"
                  onClick={handleAddToCart}
                  className="flex-1 rounded-full shadow-glow hover:shadow-glow transition-smooth"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full glass-effect"
                >
                  <Heart className="w-5 h-5" />
                </Button>
              </div>

              {/* Features */}
              <div className="mt-8 space-y-4 glass-effect rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h4 className="font-semibold mb-1">Premium CloudFlex Fabric</h4>
                    <p className="text-sm text-muted-foreground">
                      Four-way stretch with moisture-wicking technology
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2" />
                  <div>
                    <h4 className="font-semibold mb-1">Sustainable Materials</h4>
                    <p className="text-sm text-muted-foreground">
                      Made from recycled polyester and organic cotton
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                  <div>
                    <h4 className="font-semibold mb-1">High-Rise Fit</h4>
                    <p className="text-sm text-muted-foreground">
                      Flattering silhouette with hidden pocket
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
