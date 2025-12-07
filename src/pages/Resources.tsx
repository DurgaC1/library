import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, HelpCircle, Video, Download, ArrowRight } from "lucide-react";
import patternImage from "@/assets/pattern-books.jpg";

const resources = [
  {
    icon: FileText,
    title: "Marketing Assets",
    description: "A collection of brand identity and marketing materials to support LibraryOne in your library!",
    link: "/resources/marketing",
    color: "from-primary to-primary/80",
  },
  {
    icon: HelpCircle,
    title: "Admin Help & Training",
    description: "Frequently Asked Questions, Admin Help and Training Modules to get you started.",
    link: "/resources/training",
    color: "from-accent to-accent/80",
  },
  {
    icon: Video,
    title: "LibraryOne Videos",
    description: "Interested in LibraryOne for your library? Watch our overview video and recorded webinars!",
    link: "/resources/videos",
    color: "from-primary to-accent",
  },
];

const quickLinks = [
  { name: "Getting Started Guide", icon: Download },
  { name: "User Manual PDF", icon: Download },
  { name: "API Documentation", icon: FileText },
  { name: "Integration Guide", icon: FileText },
];

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20">
          {/* Background */}
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 opacity-10">
            <img src={patternImage} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-card mb-6">
                Resources
              </h1>
              <p className="font-body text-lg text-card/80 max-w-xl">
                Everything you need to get the most out of LibraryOne. From marketing 
                materials to training videos, we've got you covered.
              </p>
            </div>
          </div>

          {/* Decorative Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-2 flex">
            <div className="flex-1 bg-primary" />
            <div className="flex-1 bg-accent" />
            <div className="flex-1 bg-primary/70" />
            <div className="flex-1 bg-accent/70" />
            <div className="flex-1 bg-primary/50" />
          </div>
        </section>

        {/* Resources Cards */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resources.map((resource) => (
                <Link
                  key={resource.title}
                  to={resource.link}
                  className="group"
                >
                  <div className="bg-card rounded-xl overflow-hidden card-elevated border border-border h-full flex flex-col">
                    {/* Card Header */}
                    <div className={`h-48 bg-gradient-to-br ${resource.color} flex items-center justify-center relative overflow-hidden`}>
                      {/* Decorative Bar */}
                      <div className="absolute top-0 left-0 right-0 h-2 flex">
                        <div className="flex-1 bg-red-500" />
                        <div className="flex-1 bg-yellow-500" />
                        <div className="flex-1 bg-green-500" />
                        <div className="flex-1 bg-blue-500" />
                        <div className="flex-1 bg-purple-500" />
                      </div>
                      
                      <div className="text-center">
                        <resource.icon className="w-12 h-12 text-card mx-auto mb-3" />
                        <h3 className="font-display text-xl font-bold text-card">
                          {resource.title}
                        </h3>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 flex-1 flex flex-col">
                      <p className="font-body text-muted-foreground flex-1">
                        {resource.description}
                      </p>
                      <div className="flex items-center gap-2 text-primary font-medium mt-4 group-hover:gap-3 transition-all">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Downloads */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
                Quick Downloads
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href="#"
                    className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors group"
                  >
                    <div className="w-10 h-10 hero-gradient rounded-lg flex items-center justify-center">
                      <link.icon className="w-5 h-5 text-card" />
                    </div>
                    <span className="font-body font-medium text-foreground group-hover:text-primary transition-colors">
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Need Help Getting Started?
            </h2>
            <p className="font-body text-muted-foreground mb-8 max-w-lg mx-auto">
              Our support team is ready to assist you with any questions about LibraryOne.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="default" size="lg">
                  Contact Support
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg">
                  Login to Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
