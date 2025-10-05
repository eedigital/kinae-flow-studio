import { Link } from "react-router-dom";
import yogaImage from "@/assets/practice-yoga.jpg";
import barreImage from "@/assets/practice-barre.jpg";
import pilatesImage from "@/assets/practice-pilates.jpg";

const practices = [
  {
    name: "Yoga",
    image: yogaImage,
    description: "Flow through poses with grace and mindfulness",
    href: "/shop?practice=yoga"
  },
  {
    name: "Barre",
    image: barreImage,
    description: "Ballet-inspired strength and elegance",
    href: "/shop?practice=barre"
  },
  {
    name: "Pilates",
    image: pilatesImage,
    description: "Core-focused control and precision",
    href: "/shop?practice=pilates"
  }
];

const PracticeSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Shop by <span className="text-gradient">Practice</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Curated collections for your movement journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {practices.map((practice, index) => (
            <Link
              key={practice.name}
              to={practice.href}
              className="group relative overflow-hidden rounded-3xl shadow-soft hover:shadow-glass transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-[3/4] relative">
                <img
                  src={practice.image}
                  alt={`${practice.name} practice`}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-playfair text-2xl font-semibold mb-2 text-foreground">
                  {practice.name}
                </h3>
                <p className="text-foreground/80 text-sm">
                  {practice.description}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none">
                <div className="absolute inset-0 rounded-3xl border-2 border-primary/50 shadow-glow" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeSection;
