import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Users,
  Target,
  Award,
  Heart,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  BookOpen,
  PawPrint,
  Globe2,
  MapPin,
  Loader2,
  Info,
  Star,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/image.png";

// stats removed

const values = [
  {
    icon: Target,
    title: "Innovation",
    description:
      "We continuously push the boundaries of library technology to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We believe in building lasting relationships with libraries, understanding their unique needs.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We are committed to delivering the highest quality products and services to our customers.",
  },
  {
    icon: Heart,
    title: "Community",
    description:
      "We're passionate about supporting libraries in their mission to serve communities.",
  },
];

const timeline = [
  {
    year: "1828",
    title: "Our Beginnings",
    description:
      "LibraryOne began by binding and publishing books, supporting early library collections.",
  },
  {
    year: "19th Century",
    title: "Growing with Libraries",
    description:
      "We expanded into distributing books, originally by horse-drawn carriage, reaching more communities.",
  },
  {
    year: "Digital Era",
    title: "Technology & Innovation",
    description:
      "We embraced technology and digitization to create progressive services for modern libraries.",
  },
  {
    year: "Today",
    title: "Global Library Partner",
    description:
      "Based in Charlotte, N.C., we partner with more than 5,000 libraries worldwide to advance literacy.",
  },
];

const mascotSlides = [
  {
    title: "Our Mascots",
    subtitle: "LibraryOne",
    text: "Our beloved cat mascots, LibraryOne, once lived and worked at Douglas County Public Library in Minden, Nevada.",
  },
  {
    title: "A Library Home",
    subtitle: "Working Library Cats",
    text: "They spent much of their time at the checkout counter, visiting with patrons who would stop by just to see them.",
  },
  {
    title: "A Lasting Legacy",
    subtitle: "Loved by Librarians",
    text: "They’ve been immortalized on posters, tote bags and calendars, and remain trade-show highlights as larger-than-life models.",
  },
];

const About = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<"overview" | "history" | "impact">("overview");
  const [showStoryModal, setShowStoryModal] = useState(false);
  const [mascotIndex, setMascotIndex] = useState(0);
  const [mascotsLoading, setMascotsLoading] = useState(true);

  useEffect(() => {
    // Simulate skeleton loading for mascots section
    const timer = setTimeout(() => setMascotsLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  const handleCopyAddress = () => {
    navigator.clipboard
      .writeText("3540 Toringdon Way, Suite 200 #391 Charlotte, NC 28277")
      .catch(() => undefined);

    toast({
      title: "Address copied",
      description: "LibraryOne headquarters address copied to your clipboard.",
    });
  };

  const nextMascotSlide = () =>
    setMascotIndex((prev) => (prev + 1) % mascotSlides.length);
  const prevMascotSlide = () =>
    setMascotIndex((prev) => (prev - 1 + mascotSlides.length) % mascotSlides.length);

  const currentMascotSlide = mascotSlides[mascotIndex];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section with breadcrumbs, badges */}
        <section className="relative pt-28 md:pt-32 pb-20 min-h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Library"
              className="w-full h-full object-cover transform scale-105"
            />
            <div className="absolute inset-0 overlay-gradient" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-xs md:text-sm text-card/80 mb-4">
              <Link to="/" className="hover:text-card transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-card">About</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1.4fr)] gap-10 items-center">
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 text-card/80 font-body font-semibold text-xs md:text-sm uppercase tracking-wider mb-4">
                  <BookOpen className="w-4 h-4" />
                  About LibraryOne
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-card mb-4 leading-tight">
                  Empowering Libraries for Over 40 Years
                </h1>
                <p className="font-body text-base md:text-lg text-card/85 mb-4 max-w-xl">
                  LibraryOne is the leading supplier of library content, software and services
                  to public and academic libraries, partnering with thousands of institutions
                  to advance literacy and learning.
                </p>
                <p className="font-body text-sm md:text-base text-card/70 max-w-xl">
                  From our 19th-century roots in book binding to today&apos;s digital-first
                  solutions, we&apos;ve grown alongside libraries while staying true to our
                  mission: helping them inspire and serve their communities.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link to="/demo">
                    <Button variant="hero" size="lg" className="group">
                      Request Demo
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="heroOutline" size="lg">
                      Contact Us
                    </Button>
                  </Link>
                  <Button
                    type="button"
                    variant="heroOutline"
                    size="sm"
                    className="mt-1"
                    onClick={() => setShowStoryModal(true)}
                  >
                    Our Story in a Minute
                  </Button>
                </div>
              </div>

              {/* Right side: badges / mini highlight card */}
              <div className="bg-card/90 backdrop-blur rounded-2xl border border-border p-5 md:p-6 card-elevated shadow-[0_24px_70px_rgba(15,23,42,0.6)]">
                <p className="font-display text-sm font-semibold text-foreground/80 mb-3 flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-primary" />
                  At a glance
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="rounded-xl bg-secondary/70 p-3 flex flex-col justify-between">
                    <span className="text-xs font-body text-muted-foreground mb-1">
                      Libraries partnered
                    </span>
                    <span className="font-display text-2xl font-bold text-primary">
                      5,000+
                    </span>
                  </div>
                  <div className="rounded-xl bg-secondary/70 p-3 flex flex-col justify-between">
                    <span className="text-xs font-body text-muted-foreground mb-1">
                      Founded
                    </span>
                    <span className="font-display text-2xl font-bold text-primary">
                      1828
                    </span>
                  </div>
                </div>
                <p className="font-body text-xs text-muted-foreground mb-3">
                  Based in Charlotte, N.C., LibraryOne is an independent, privately held
                  company serving public and academic libraries, along with small and
                  mid-sized publishers.
                </p>
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-2 text-xs font-body text-primary hover:text-primary/80 transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  Copy headquarters address
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats section removed */}

        {/* Tabs: Overview / History / Impact */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div>
                <span className="inline-block text-primary font-body font-semibold text-xs md:text-sm uppercase tracking-wider mb-2">
                  Our Story
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  Who we are and why we exist
                </h2>
              </div>
              <div className="inline-flex bg-card border border-border rounded-full p-1 text-xs md:text-sm font-body">
                <button
                  type="button"
                  onClick={() => setActiveTab("overview")}
                  className={`px-3 md:px-4 py-1 rounded-full flex items-center gap-1 transition-all ${
                    activeTab === "overview"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Info className="w-3 h-3" />
                  Overview
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("history")}
                  className={`px-3 md:px-4 py-1 rounded-full flex items-center gap-1 transition-all ${
                    activeTab === "history"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <BookOpen className="w-3 h-3" />
                  History
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("impact")}
                  className={`px-3 md:px-4 py-1 rounded-full flex items-center gap-1 transition-all ${
                    activeTab === "impact"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Heart className="w-3 h-3" />
                  Impact
                </button>
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border card-elevated p-6 md:p-8">
              {activeTab === "overview" && (
                <div className="space-y-4 font-body text-muted-foreground text-sm md:text-base">
                  <p>
                    LibraryOne is the leading supplier of library content, software and
                    services to public and academic libraries in the U.S. We also provide
                    sales, manufacturing, warehousing and distribution support to small and
                    mid-sized publishers through our Publisher Services business.
                  </p>
                  <p>
                    Our mission is to help our library partners inspire and serve their
                    communities through literacy and learning. By providing libraries with
                    access to a multitude of formats and titles, we help our partners meet
                    their patrons where they are in their lives.
                  </p>
                </div>
              )}

              {activeTab === "history" && (
                <div className="space-y-4 font-body text-muted-foreground text-sm md:text-base">
                  <p>
                    Founded in 1828, LibraryOne began by binding and publishing books and
                    later expanded into distributing books, originally by horse-drawn
                    carriage. As libraries evolved, so did we.
                  </p>
                  <p>
                    Over time, we&apos;ve grown our focus and efforts to harness the power
                    of technology and digitization, developing progressive and innovative
                    services that promote the progress and success of your library.
                  </p>
                </div>
              )}

              {activeTab === "impact" && (
                <div className="space-y-4 font-body text-muted-foreground text-sm md:text-base">
                  <p>
                    Based in Charlotte, N.C., LibraryOne is an independent, privately held
                    company. We feel privileged to partner with more than 5,000 libraries
                    and to support our library and publishing partners as they advance
                    literacy in communities worldwide.
                  </p>
                  <p>
                    By connecting readers with stories, research and resources, we help
                    libraries strengthen the communities they serve, from small towns to
                    global cities.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Timeline + Stepper */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.4fr)] gap-10">
              {/* Timeline */}
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  A timeline of LibraryOne
                </h3>
                <p className="font-body text-sm md:text-base text-muted-foreground mb-6">
                  From our origins in book binding to today&apos;s global digital solutions,
                  our journey has always been rooted in supporting libraries.
                </p>
                <ol className="relative border-l border-border/70 pl-5 space-y-6">
                  {timeline.map((item) => (
                    <li key={item.year} className="relative">
                      <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <div className="bg-card rounded-xl border border-border p-4 card-elevated transition-transform duration-300 hover:-translate-y-1">
                        <p className="font-display text-xs uppercase tracking-wide text-primary mb-1">
                          {item.year}
                        </p>
                        <p className="font-display text-base font-semibold text-foreground mb-1">
                          {item.title}
                        </p>
                        <p className="font-body text-xs md:text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Stepper / progress - Centered and compact */}
              <div className="flex items-center justify-center lg:justify-start">
                <div className="bg-card rounded-2xl border border-border card-elevated p-5 max-w-md w-full">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    How we partner with libraries
                  </h3>
                  <p className="font-body text-xs text-muted-foreground mb-4">
                    Our work with libraries usually follows three simple steps.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-[10px] font-semibold shrink-0">
                        1
                      </span>
                      <div>
                        <p className="font-display text-sm font-semibold text-foreground">Discover</p>
                        <p className="font-body text-xs text-muted-foreground">
                          We listen to your challenges, goals and community needs.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-muted text-[10px] font-semibold shrink-0">
                        2
                      </span>
                      <div>
                        <p className="font-display text-sm font-semibold text-foreground">Design</p>
                        <p className="font-body text-xs text-muted-foreground">
                          We recommend solutions and services that fit your budget and infrastructure.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-muted text-[10px] font-semibold shrink-0">
                        3
                      </span>
                      <div>
                        <p className="font-display text-sm font-semibold text-foreground">Deliver</p>
                        <p className="font-body text-xs text-muted-foreground">
                          We implement, train and stay with you as your needs evolve.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-4">
                    <p className="font-body text-xs text-muted-foreground mb-1">
                      Your journey with us
                    </p>
                    <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
                      <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-primary via-purple-500 to-primary animate-[pulse_2.2s_ease-in-out_infinite]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mascots section: LibraryOne */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex flex-col md:flex-row md:items-start gap-10">
              <div className="md:w-1/2">
                <span className="inline-block text-primary font-body font-semibold text-xs md:text-sm uppercase tracking-wider mb-3">
                  LibraryOne – Our Mascots
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  A special chapter in our story
                </h3>
                <p className="font-body text-sm md:text-base text-muted-foreground mb-4">
                  Libraries and cats have long been connected, from the Royal Library of
                  Alexandria to 19th-century library cats who protected books from rodents.
                  We have our own cat history: our beloved mascots, LibraryOne.
                </p>
                <p className="font-body text-sm md:text-base text-muted-foreground mb-4">
                  Both have since passed away, but for many years they were the pride of the
                  Douglas County Public Library in Minden, Nevada. LibraryOne arrived first in
                  1983, named for his habit of sleeping in a LibraryOne box. Soon after,
                  a LibraryOne sales director helped introduce Taylor as his new companion.
                </p>
                <p className="font-body text-sm md:text-base text-muted-foreground">
                  LibraryOne lived full lives as working library cats, greeting
                  patrons at the checkout counter and bringing joy to staff and visitors
                  alike. Their legacy continues in our imagery, stories and at library
                  events around the world.
                </p>

                {/* Simple accordion FAQ */}
                <div className="mt-6 border-t border-border/70 pt-4">
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <span className="font-display text-sm font-semibold">
                        Why do we still talk about LibraryOne?
                      </span>
                      <ChevronDown className="w-4 h-4 text-muted-foreground transition-transform group-open:rotate-180" />
                    </summary>
                    <p className="mt-2 text-xs md:text-sm font-body text-muted-foreground">
                      They remind us that libraries are about more than collections and
                      systems—they&apos;re about warmth, familiarity and the little details
                      patrons remember.
                    </p>
                  </details>
                </div>
              </div>

              {/* Right: carousel / gallery card */}
              <div className="md:w-1/2">
                <div className="bg-card rounded-2xl border border-border card-elevated p-5 md:p-6 shadow-lg relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-tr from-primary/25 via-purple-400/25 to-primary/25 blur-3xl" />
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-3">
                        {/* Avatars / chips */}
                        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-orange-400 to-pink-500 border-2 border-card flex items-center justify-center text-xs font-display text-card">
                          B
                        </div>
                        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-sky-400 to-emerald-400 border-2 border-card flex items-center justify-center text-xs font-display text-card">
                          T
                        </div>
                      </div>
                      <div>
                        <p className="font-display text-sm font-semibold text-foreground">
                          LibraryOne
                        </p>
                        <p className="font-body text-[11px] text-muted-foreground">
                          Our iconic library cats
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={prevMascotSlide}
                        className="p-1 rounded-full hover:bg-secondary transition-colors"
                        title="Previous"
                      >
                        <ChevronLeft className="w-4 h-4 text-muted-foreground" />
                      </button>
                      <button
                        type="button"
                        onClick={nextMascotSlide}
                        className="p-1 rounded-full hover:bg-secondary transition-colors"
                        title="Next"
                      >
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
                  </div>

                  {mascotsLoading ? (
                    <div className="space-y-3 mt-2">
                      <div className="h-4 rounded bg-muted animate-pulse" />
                      <div className="h-4 rounded bg-muted animate-pulse" />
                      <div className="h-4 rounded bg-muted animate-pulse w-2/3" />
                      <div className="mt-4 h-24 rounded-xl bg-muted animate-pulse" />
                    </div>
                  ) : (
                    <div className="relative z-10">
                      <p className="font-display text-xs uppercase tracking-wide text-primary mb-1">
                        {currentMascotSlide.subtitle}
                      </p>
                      <p className="font-display text-lg font-semibold text-foreground mb-2">
                        {currentMascotSlide.title}
                      </p>
                      <p className="font-body text-sm text-muted-foreground mb-4">
                        {currentMascotSlide.text}
                      </p>
                      {/* simple “slider” image placeholder */}
                      <div className="h-28 md:h-32 rounded-xl bg-gradient-to-tr from-primary/40 via-purple-500/40 to-primary/40 flex items-center justify-center">
                        <div className="flex items-center gap-3 text-card">
                          <PawPrint className="w-7 h-7" />
                          <span className="font-display text-sm md:text-base">
                            Library cats at work
                          </span>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center justify-between text-[11px] font-body text-muted-foreground">
                        <span>
                          {mascotIndex + 1} / {mascotSlides.length} stories
                        </span>
                        <span>Immortalized on posters, totes &amp; calendars</span>
                      </div>
                    </div>
                  )}
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
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                What drives us forward
              </h2>
              <p className="font-body text-sm md:text-base text-muted-foreground">
                These principles guide how we design products, partner with libraries and
                show up for our communities every day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-card rounded-xl p-6 card-elevated border border-border text-center relative overflow-hidden group transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

        {/* CTA Banner */}
        <section className="py-20 hero-gradient">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card/10 border border-card/40 text-xs font-body text-card/80 mb-4">
                <Star className="w-4 h-4" />
                Partner with LibraryOne
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-card mb-4">
                Ready to build what&apos;s next for your library?
              </h2>
              <p className="font-body text-lg text-card/80 mb-8">
                Join thousands of libraries already using LibraryOne to transform their
                collections, workflows and patron experience.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/demo">
                <Button variant="hero" size="lg">
                  Request Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="heroOutline" size="lg">
                  Talk to our team
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Story Modal */}
      {showStoryModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-card rounded-2xl border border-border p-6 md:p-8 max-w-lg w-[90%] card-elevated shadow-2xl relative">
            <button
              type="button"
              onClick={() => setShowStoryModal(false)}
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              ×
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Loader2 className="w-5 h-5 text-primary animate-spin" />
              </div>
              <div>
                <p className="font-display text-lg font-semibold">Our story in short</p>
                <p className="font-body text-xs text-muted-foreground">
                  A quick snapshot of LibraryOne&apos;s journey.
                </p>
              </div>
            </div>
            <div className="space-y-3 font-body text-sm text-muted-foreground mb-4">
              <p>
                LibraryOne began in 1828, binding and publishing books for early libraries.
                As those libraries grew, we expanded our role—delivering books by
                horse-drawn carriage and later by modern distribution networks.
              </p>
              <p>
                Today, we combine that history with powerful digital platforms, data-driven
                tools and a deep commitment to library values. Our goal hasn&apos;t
                changed: help libraries connect people with the stories and knowledge that
                shape their lives.
              </p>
            </div>
            <Button
              type="button"
              onClick={() => setShowStoryModal(false)}
              className="w-full md:w-auto"
              size="sm"
            >
              Close
            </Button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default About;
