import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);

  const megaMenus = {
    shop: {
      title: "Shop",
      sections: [
        { 
          title: "Categories",
          links: [
            { name: "Tops", href: "/shop?category=tops" },
            { name: "Bottoms", href: "/shop?category=bottoms" },
            { name: "Accessories", href: "/shop?category=accessories" },
          ]
        }
      ]
    },
    practice: {
      title: "Practice",
      sections: [
        {
          title: "Disciplines",
          links: [
            { name: "Yoga", href: "/shop?practice=yoga" },
            { name: "Barre", href: "/shop?practice=barre" },
            { name: "Pilates", href: "/shop?practice=pilates" },
          ]
        }
      ]
    },
    collections: {
      title: "Collections",
      sections: [
        {
          title: "Featured",
          links: [
            { name: "CloudFlex", href: "/shop?collection=cloudflex" },
            { name: "Metallic Flex", href: "/shop?collection=metallic" },
            { name: "Serenity Set", href: "/shop?collection=serenity" },
            { name: "Glow Edit", href: "/shop?collection=glow" },
          ]
        }
      ]
    },
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect shadow-glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="font-playfair text-2xl font-bold text-gradient">
              Kinaé
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {Object.entries(megaMenus).map(([key, menu]) => (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => setActiveMega(key)}
                  onMouseLeave={() => setActiveMega(null)}
                >
                  <button className="flex items-center gap-1 text-foreground/80 hover:text-foreground transition-smooth">
                    {menu.title}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <Link to="/about" className="text-foreground/80 hover:text-foreground transition-smooth">
                About
              </Link>
              <Link to="/journal" className="text-foreground/80 hover:text-foreground transition-smooth">
                Journal
              </Link>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <ShoppingBag className="w-5 h-5" />
              </Button>
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mega Menu Desktop */}
      {activeMega && (
        <div
          className="fixed top-16 left-0 right-0 z-40 glass-effect shadow-glass animate-fade-in"
          onMouseEnter={() => setActiveMega(activeMega)}
          onMouseLeave={() => setActiveMega(null)}
        >
          <div className="max-w-7xl mx-auto px-8 py-8">
            <div className="grid grid-cols-3 gap-8">
              {megaMenus[activeMega as keyof typeof megaMenus].sections.map((section) => (
                <div key={section.title}>
                  <h3 className="font-semibold mb-4 text-foreground/60 text-sm uppercase tracking-wide">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="text-foreground/80 hover:text-primary transition-smooth block"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 md:hidden glass-effect animate-fade-in">
          <div className="p-6 space-y-6">
            <Link to="/shop" className="block text-lg font-medium">Shop</Link>
            <Link to="/shop?practice=yoga" className="block text-lg font-medium">Practice</Link>
            <Link to="/shop?collection=cloudflex" className="block text-lg font-medium">Collections</Link>
            <Link to="/about" className="block text-lg font-medium">About</Link>
            <Link to="/journal" className="block text-lg font-medium">Journal</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
