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
    <footer className="gradient-soft py-16 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Capsule Pods Layout */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {/* Brand Capsule Pod */}
          <div className="glass-effect rounded-[2rem] p-6 shadow-soft hover:shadow-glow transition-smooth">
            <Link to="/" className="font-playfair text-3xl font-bold text-gradient block mb-4">
              Kinaé
            </Link>
            <p className="text-muted-foreground mb-4 text-sm">
              Move beautifully.
              <br />
              Live intentionally.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:shadow-glow transition-smooth hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:shadow-glow transition-smooth hover:scale-110"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Capsule Pod */}
          <div className="glass-effect rounded-[2rem] p-6 shadow-soft hover:shadow-glow transition-smooth">
            <h3 className="font-semibold mb-4 text-foreground">Shop</h3>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Capsule Pod */}
          <div className="glass-effect rounded-[2rem] p-6 shadow-soft hover:shadow-glow transition-smooth">
            <h3 className="font-semibold mb-4 text-foreground">Help</h3>
            <ul className="space-y-2">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Capsule Pod */}
          <div className="glass-effect rounded-[2rem] p-6 shadow-soft hover:shadow-glow transition-smooth">
            <h3 className="font-semibold mb-4 text-foreground">About</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Capsule */}
        <div className="text-center">
          <div className="inline-block glass-effect rounded-full px-8 py-3 shadow-soft">
            <p className="text-sm text-muted-foreground">
              © 2025 Kinaé. All rights reserved. Designed with intention.
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Floating Capsule */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full glass-effect shadow-glow flex items-center justify-center hover:scale-110 transition-smooth z-50"
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
