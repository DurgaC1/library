import { BookOpen, Headphones, BarChart3, Users, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "eBooks Collection",
    description: "Access millions of eBooks across all genres. From bestsellers to classics, build the perfect digital collection for your patrons.",
  },
  {
    icon: Headphones,
    title: "Audiobooks Library",
    description: "Offer thousands of audiobooks with seamless streaming. Perfect for commuters and multitasking readers.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Gain insights into collection usage, popular titles, and patron engagement with our comprehensive analytics tools.",
  },
  {
    icon: Users,
    title: "Patron Management",
    description: "Streamline user management with easy registration, borrowing limits, and personalized recommendations.",
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Enterprise-grade security protecting patron data and content with encryption and compliance standards.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience instant title delivery and lightning-fast search across your entire catalog.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-body font-semibold text-sm uppercase tracking-wider mb-4">
            Our Solutions
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything Your Library Needs
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            LibraryOne offers comprehensive digital solutions designed to help you 
            easily manage your collections and serve your patrons efficiently.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-xl p-8 card-elevated border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 hero-gradient rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-card" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
