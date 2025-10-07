import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Welcome to the flow! Check your email for a special offer.");
    setEmail("");
  };

  return (
    <section className="py-20 px-4 gradient-iridescent relative overflow-hidden">
      {/* Ambient Gradient Background */}
      <div className="absolute inset-0 animate-pulse-glow opacity-50" />
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Central Capsule Form */}
        <div className="glass-effect rounded-[3rem] p-12 md:p-16 shadow-glow animate-fade-in border-2 border-white/20">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Join the Flow
          </h2>
          <p className="text-foreground/80 mb-8 text-lg">
            Be the first to know about new collections, wellness tips, and exclusive offers.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="glass-effect rounded-full p-2 shadow-soft">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-full px-6 py-3 bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-center placeholder:text-foreground/50"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full sm:w-auto rounded-full px-12 py-6 text-lg shadow-glow hover:shadow-glow transition-smooth bg-primary hover:bg-primary/90 hover:scale-105"
            >
              Subscribe
            </Button>
          </form>
          
          <p className="text-sm text-muted-foreground mt-6">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
