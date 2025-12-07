import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "We are loving LibraryOne here, and we would all like to compliment you on your amazing fill rate. Lightning fast is how I would describe it. Much, much faster than other vendors.",
    author: "Robert Colbaugh",
    role: "Washington County Public Library, Abingdon, VA",
  },
  {
    quote: "I love LibraryOne. I really like the inventory/in-stock button…and the fulfillment accuracy is tremendous. No complaints!",
    author: "Carson Moss",
    role: "The Strand, New York City, NY",
  },
  {
    quote: "I really enjoyed using LibraryOne. It has a lot of very helpful features and I look forward to getting more experience with all the bells and whistles there.",
    author: "Martha Brumfield",
    role: "Santa Rosa County Library System",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-body font-semibold text-sm uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by Libraries Nationwide
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            See what librarians across the country are saying about LibraryOne.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="bg-card rounded-xl p-8 card-elevated border border-border relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-10 h-10 text-primary/20" />
              </div>

              {/* Quote */}
              <p className="font-body text-foreground italic leading-relaxed mb-8 relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 hero-gradient rounded-full flex items-center justify-center">
                  <span className="text-card font-display font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
