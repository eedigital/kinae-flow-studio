import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center gradient-pearl">
      <div className="text-center glass-effect rounded-3xl p-12 shadow-glass animate-fade-in">
        <h1 className="mb-4 text-6xl font-playfair font-bold text-gradient">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">Oops! This page seems to have floated away</p>
        <a 
          href="/" 
          className="inline-block rounded-full px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth shadow-soft hover:shadow-glow"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
