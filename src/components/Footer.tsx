import { Link } from "react-router-dom";
import { Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    shop: [
      { name: "Tops", href: "/shop?category=tops" },
      { name: "Bottoms", href: "/shop?category=bottoms" },
      { name: "Accessories", href: "/shop?category=accessories" },
      { name: "Collections", href: "/shop" },
    ],
    help: [
      { name: "Contact Us", href: "/contact" },
      { name: "Shipping", href: "/shipping" },
      { name: "Returns", href: "/returns" },
      { name: "Size Guide", href: "/size-guide" },
    ],
    about: [
      { name: "Our Story", href: "/about" },
      { name: "Sustainability", href: "/sustainability" },
      { name: "Studio Partners", href: "/partners" },
      { name: "Journal", href: "/journal" },
    ],
  };

  return (
    <footer className="gradient-soft py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="font-playfair text-3xl font-bold text-gradient block mb-4">
              Kinaé
            </Link>
            <p className="text-muted-foreground mb-4">
              Move beautifully.
              <br />
              Live intentionally.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:shadow-glow transition-smooth"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:shadow-glow transition-smooth"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Shop</h3>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Help</h3>
            <ul className="space-y-2">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">About</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Kinaé. All rights reserved. Designed with intention.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
