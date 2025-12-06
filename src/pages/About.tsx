import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Target, Award, Heart, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-library.jpg";

const stats = [
  { value: "40+", label: "Years of Experience" },
  { value: "10,000+", label: "Libraries Served" },
  { value: "5M+", label: "Titles Available" },
  { value: "50+", label: "Countries Reached" },
];

const values = [
  {
    icon: Target,
    title: "Innovation",
    description: "We continuously push the boundaries of library technology to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We believe in building lasting relationships with libraries, understanding their unique needs.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We are committed to delivering the highest quality products and services to our customers.",
  },
  {
    icon: Heart,
    title: "Community",
    description: "We're passionate about supporting libraries in their mission to serve communities.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 min-h-[60vh] flex items-center">
          <div className="absolute inset-0">
            <img src={heroImage} alt="Library" className="w-full h-full object-cover" />
            <div className="absolute inset-0 overlay-gradient" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block text-card/80 font-body font-semibold text-sm uppercase tracking-wider mb-4">
                About Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-card mb-6">
                Empowering Libraries for Over 40 Years
              </h1>
              <p className="font-body text-lg text-card/80 max-w-xl">
                Library One is dedicated to helping libraries of all sizes deliver 
                exceptional digital experiences to their patrons.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="font-body text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-block text-primary font-body font-semibold text-sm uppercase tracking-wider mb-4">
                    Our Mission
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Connecting Communities Through Knowledge
                  </h2>
                  <p className="font-body text-muted-foreground mb-6">
                    At Library One, we believe that access to knowledge should be universal. 
                    Our mission is to empower libraries with innovative digital solutions that 
                    make it easier than ever to connect patrons with the content they need.
                  </p>
                  <p className="font-body text-muted-foreground">
                    From small community libraries to major metropolitan systems, we provide 
                    scalable solutions that grow with your needs while maintaining the personal 
                    touch that makes libraries so special.
                  </p>
                </div>
                <div className="bg-secondary rounded-xl p-8">
                  <blockquote className="font-display text-xl italic text-foreground mb-4">
                    "Libraries are the cornerstone of democracy. They enable access to 
                    knowledge for all members of society."
                  </blockquote>
                  <p className="font-body text-muted-foreground">
                    — Library One Founding Principle
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block text-primary font-body font-semibold text-sm uppercase tracking-wider mb-4">
                Our Values
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                What Drives Us Forward
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="bg-card rounded-xl p-6 card-elevated border border-border text-center">
                  <div className="w-14 h-14 hero-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-card" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 hero-gradient">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-card mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="font-body text-lg text-card/80 mb-8 max-w-xl mx-auto">
              Join thousands of libraries already using Library One to transform their digital experience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/demo">
                <Button variant="hero" size="lg">
                  Request Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="heroOutline" size="lg">
                  Contact Us
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

export default About;
