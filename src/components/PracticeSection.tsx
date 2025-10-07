import { Link } from "react-router-dom";
import yogaImage from "@/assets/practice-yoga.jpg";
import barreImage from "@/assets/practice-barre.jpg";
import pilatesImage from "@/assets/practice-pilates.jpg";

const practices = [
  {
    name: "Yoga",
    image: yogaImage,
    description: "Flow through mindful movement",
    href: "/shop?practice=yoga",
    gradient: "from-primary/20 to-secondary/20",
  },
  {
    name: "Barre",
    image: barreImage,
    description: "Strengthen with grace",
    href: "/shop?practice=barre",
    gradient: "from-secondary/20 to-accent/20",
  },
  {
    name: "Pilates",
    image: pilatesImage,
    description: "Core strength meets elegance",
    href: "/shop?practice=pilates",
    gradient: "from-accent/20 to-primary/20",
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
          <p className="text-lg text-muted-foreground">
            Designed for how you move
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {practices.map((practice, index) => (
            <Link
              key={practice.name}
              to={practice.href}
              className="group block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-soft hover:shadow-glow transition-smooth hover:-translate-y-2 animate-fade-in-up">
                {/* Capsule Card with Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${practice.gradient} opacity-0 group-hover:opacity-100 transition-smooth`} />
                
                {/* Image */}
                <div className="aspect-[4/5] relative">
                  <img
                    src={practice.image}
                    alt={`${practice.name} practice`}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                </div>

                {/* Content Capsule */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-effect rounded-full px-6 py-4 text-center transform transition-smooth group-hover:scale-105">
                    <h3 className="font-playfair text-2xl font-semibold mb-1 text-foreground">
                      {practice.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {practice.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeSection;
