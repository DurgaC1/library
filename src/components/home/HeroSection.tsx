import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-library.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern library with cozy reading spaces"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 overlay-gradient" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/10 backdrop-blur-sm border border-card/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-card/90 text-sm font-body font-medium">
              Digital Library Solutions
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up-delay-1 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-card leading-tight mb-6">
            Unlimited Access to <br />
            <span className="text-accent">eBooks, Audiobooks</span><br />
            & More
          </h1>

          {/* Description */}
          <p className="animate-fade-up-delay-2 font-body text-lg md:text-xl text-card/80 mb-10 max-w-xl">
            LibraryOne is a dynamic, state-of-the-art digital library platform. 
            Access millions of titles and manage your collections with ease.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4">
            <Link to="/demo">
              <Button variant="hero" size="xl" className="group">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/resources">
              <Button variant="heroOutline" size="xl" className="group">
                <Play className="w-5 h-5" />
                Watch Overview
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="animate-fade-up-delay-3 grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-card/20">
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-card">5M+</p>
              <p className="font-body text-card/60 text-sm mt-1">Titles Available</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-card">10K+</p>
              <p className="font-body text-card/60 text-sm mt-1">Libraries Served</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-card">99.9%</p>
              <p className="font-body text-card/60 text-sm mt-1">Uptime</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-card/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-card/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
