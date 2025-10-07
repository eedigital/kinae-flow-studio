const testimonials = [
  {
    name: "Sarah M.",
    quote: "The CloudFlex leggings are like a second skin. I've never felt more confident in my practice.",
    role: "Yoga Instructor",
  },
  {
    name: "Emma L.",
    quote: "Finally found athleisure that transitions perfectly from barre class to brunch. Absolute game-changer.",
    role: "Barre Enthusiast",
  },
  {
    name: "Maya K.",
    quote: "The quality and attention to detail is unmatched. These pieces move with me, not against me.",
    role: "Pilates Teacher",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Loved by the <span className="text-gradient">Community</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real stories from real movers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Capsule Testimonial Card */}
              <div className="glass-effect rounded-[2.5rem] p-8 shadow-glass hover:shadow-glow transition-smooth hover:-translate-y-2 animate-float-slow h-full">
                {/* Quote */}
                <div className="mb-6">
                  <svg
                    className="w-10 h-10 text-primary/30 mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-foreground/90 text-lg leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Author Capsule */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold shadow-soft">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
