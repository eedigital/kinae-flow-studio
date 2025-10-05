const testimonials = [
  {
    name: "Emma Chen",
    quote: "The CloudFlex leggings are simply divine. They move with me through every flow.",
    role: "Yoga Instructor"
  },
  {
    name: "Sofia Martinez",
    quote: "Finally, athleisure that feels as good as it looks. Kinaé gets it right.",
    role: "Barre Enthusiast"
  },
  {
    name: "Amara Johnson",
    quote: "Elegant, comfortable, and sustainably made. Everything I want in activewear.",
    role: "Pilates Coach"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 gradient-pearl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Join the <span className="text-gradient">Flow</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Loved by women who move
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass-effect rounded-3xl p-8 shadow-glass hover:shadow-glow transition-smooth animate-fade-in hover:scale-105"
              style={{ 
                animationDelay: `${index * 150}ms`,
                animationDuration: "6s",
                animationIterationCount: "infinite"
              }}
            >
              <div className="mb-6">
                <svg className="w-10 h-10 text-primary/50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                {testimonial.quote}
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
