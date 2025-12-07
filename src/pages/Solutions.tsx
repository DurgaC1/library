import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Headphones, BarChart3, Database, Shield, Globe, ArrowRight, Check } from "lucide-react";
import patternImage from "@/assets/pattern-books.jpg";

const solutions = [
  {
    icon: BookOpen,
    title: "Digital Library",
    description: "Transform your library with our comprehensive digital platform. Access millions of eBooks, academic journals, and digital content.",
    features: ["5M+ eBooks", "Instant delivery", "Multi-format support", "Offline reading"],
  },
  {
    icon: Headphones,
    title: "eBooks & Audiobooks",
    description: "Offer your patrons the best in digital reading and listening experiences with our extensive collection.",
    features: ["Bestseller access", "New releases daily", "Synchronized reading", "Kids collection"],
  },
  {
    icon: Database,
    title: "Collection Management",
    description: "Powerful tools to manage, curate, and optimize your digital collections with data-driven insights.",
    features: ["Catalog management", "Auto-renewal", "Budget tracking", "Usage reports"],
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Gain deep insights into patron behavior, collection performance, and ROI with advanced analytics.",
    features: ["Real-time data", "Custom reports", "Trend analysis", "Export tools"],
  },
  {
    icon: Globe,
    title: "Multi-Branch Support",
    description: "Seamlessly manage digital resources across multiple library branches with centralized control.",
    features: ["Unified catalog", "Branch reporting", "Resource sharing", "Central billing"],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security ensuring patron privacy and content protection at all times.",
    features: ["DRM protection", "GDPR compliant", "SSO support", "Audit logs"],
  },
];

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 opacity-10">
            <img src={patternImage} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-card/80 font-body font-semibold text-sm uppercase tracking-wider mb-4">
                Our Solutions
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-card mb-6">
                Complete Library Solutions
              </h1>
              <p className="font-body text-lg text-card/80 max-w-xl mx-auto">
                From digital content to analytics, LibraryOne provides everything 
                your library needs to thrive in the digital age.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution) => (
                <div
                  key={solution.title}
                  className="bg-card rounded-xl p-8 card-elevated border border-border group hover:border-primary/30 transition-colors"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 hero-gradient rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <solution.icon className="w-7 h-7 text-card" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {solution.title}
                  </h3>
                  <p className="font-body text-muted-foreground mb-6">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary" />
                        <span className="font-body text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Get Started?
              </h2>
              <p className="font-body text-lg text-muted-foreground mb-8">
                Schedule a demo to see how LibraryOne can transform your library's digital experience.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/demo">
                  <Button variant="default" size="lg">
                    Request Demo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Solutions;
