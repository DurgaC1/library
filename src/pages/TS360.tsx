import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  Share2,
  Layers,
  Bell,
  Brain,
} from "lucide-react";
import heroImage from "@/assets/hero-library.jpg";

const TS360 = () => {
  const [showStandingOrders, setShowStandingOrders] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showEsp, setShowEsp] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 min-h-[60vh] flex items-center">
          <div className="absolute inset-0">
            <img src={heroImage} alt="Title Source 360" className="w-full h-full object-cover" />
            <div className="absolute inset-0 overlay-gradient" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="max-w-3xl">
                <span className="inline-block text-card/80 font-body font-semibold text-sm uppercase tracking-wider mb-4">
                  Title Source 360
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-card mb-6">
                  Smarter Ordering for Physical & Digital Collections
                </h1>
                <p className="font-body text-lg text-card/80 max-w-xl">
                  Title Source 360 is a dynamic, state-of-the-art ordering system by LibraryOne
                  where you can find all the physical and digital books, plus entertainment titles,
                  for your institution. The platform is designed to help you easily find the titles
                  you need and manage your orders more efficiently.
                </p>
              </div>

              {/* Share / Quick Action */}
              <div className="flex flex-col items-start md:items-end gap-4">
                <Button
                  variant="heroOutline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
                <div className="bg-card/80 backdrop-blur rounded-xl p-4 shadow-lg max-w-xs">
                  <p className="font-body text-sm text-muted-foreground mb-2">
                    Already using Title Source 360?
                  </p>
                  <Button variant="hero" size="sm" className="w-full justify-between">
                    Go to Title Source 360
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background rounded-xl p-6 card-elevated border border-border">
                <h3 className="font-display text-lg font-semibold mb-2">
                  Existing Title Source 360 Users
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  Do you already have a Title Source 360 log-in? Access your account and start
                  managing your orders.
                </p>
                <Button variant="outline" size="sm" className="group">
                  Click here to get started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </div>

              <div className="bg-background rounded-xl p-6 card-elevated border border-border">
                <h3 className="font-display text-lg font-semibold mb-2">
                  New to LibraryOne?
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  Are you a new customer to LibraryOne? Learn how Title Source 360 can support your
                  collection development and acquisitions.
                </p>
                <Button variant="outline" size="sm" className="group">
                  Click here to get started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </div>

              <div className="bg-background rounded-xl p-6 card-elevated border border-border">
                <h3 className="font-display text-lg font-semibold mb-2">
                  Online Customer Support
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  Need to register a new user for Online Customer Support? Create access for your
                  team in just a few steps.
                </p>
                <Button variant="outline" size="sm" className="group">
                  Click here to sign up
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Standing Order Programs */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <button
              type="button"
              onClick={() => setShowStandingOrders((prev) => !prev)}
              className="w-full flex items-center justify-between bg-card rounded-xl px-6 py-4 border border-border card-elevated hover:-translate-y-[2px] transition-transform"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 hero-gradient rounded-lg flex items-center justify-center">
                  <Layers className="w-5 h-5 text-card" />
                </div>
                <div className="text-left">
                  <p className="font-display text-lg font-semibold">
                    Standing Order Programs
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    Automatic delivery for must-have titles across print and digital.
                  </p>
                </div>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-muted-foreground transition-transform ${
                  showStandingOrders ? "rotate-180" : ""
                }`}
              />
            </button>

            {showStandingOrders && (
              <div className="mt-6 space-y-10 bg-card rounded-xl p-6 md:p-8 border border-border">
                {/* Patron Must-Haves */}
                <div>
                  <h3 className="font-display text-xl font-semibold mb-3">
                    Patron Must-Haves
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-4">
                    LibraryOne offers automatic delivery plans for popular series, test prep,
                    guidebooks and popular authors that are must-haves for your library. You can
                    depend on us to keep your digital shelves up to date.
                  </p>
                  <Button variant="link" className="px-0 text-primary font-body text-sm">
                    View all Standing Order Lists
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>

                {/* Automatically Yours */}
                <div>
                  <h3 className="font-display text-xl font-semibold mb-3">
                    Automatically Yours™
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-3">
                    Automatically Yours™ is a specialized program that allows you to have the
                    latest print and digital — by popular adult and children's authors or series —
                    delivered right to your door, automatically. We send you the latest titles as
                    soon as they are released. No more placing separate orders or worrying about
                    title availability. The titles will arrive on time at your library, every time.
                    Title Source 360 Notification cart option is also available.
                  </p>
                  <p className="font-body text-sm text-muted-foreground mb-2">
                    Adult plans include Fiction, Large Print, Non-Fiction, Inspirational, Spoken
                    Word, and more.
                  </p>
                  <p className="font-body text-sm text-muted-foreground mb-4">
                    Children’s and Teen Services (CATS) plans include Series, Authors and
                    Illustrators, Graphic Novels, Paw Prints, Awards, and more.
                  </p>
                  <Button variant="link" className="px-0 text-primary font-body text-sm">
                    View all Automatically Yours Lists
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>

                {/* Continuations Services */}
                <div>
                  <h3 className="font-display text-xl font-semibold mb-3">
                    Continuations Services
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-3">
                    Continuations is your one-stop source for series standing orders for print and
                    digital content. Our extensive title selection, innovative web-based system,
                    unparalleled service and free management reports make us a leader in standing
                    order services.
                  </p>
                  <p className="font-body text-sm text-muted-foreground mb-3">
                    Continuations offerings include travel books, almanacs, yearbooks, test
                    preparation and occupational guides, as well as essential general reference.
                    Also included are numbered and unnumbered monographic series, sets in progress,
                    non-subscription serials, proceedings and select U.S. government documents and
                    publications.
                  </p>
                  <p className="font-body text-sm text-muted-foreground mb-3">
                    Our experienced researchers monitor more than 40,000 adult and children’s series
                    from more than 14,000 publishers, so they know when the next issues of relevant
                    publications will be published. We then ship the new titles as soon as they are
                    available. Title Source 360 Notification cart option is also available.
                  </p>
                  <p className="font-body text-sm text-muted-foreground mb-4">
                    Additionally, our friendly support staff provides analyses and extra assistance
                    with your adult and children’s series collection development plans.
                  </p>
                  <Button variant="link" className="px-0 text-primary font-body text-sm">
                    View all Continuations Services Lists
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>

                <div className="pt-4 border-t border-border/60">
                  <p className="font-body text-sm text-muted-foreground">
                    Contact us for more information about Standing Order Services.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Notification Programs */}
        <section className="pb-16 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <button
              type="button"
              onClick={() => setShowNotifications((prev) => !prev)}
              className="w-full flex items-center justify-between bg-card rounded-xl px-6 py-4 border border-border card-elevated hover:-translate-y-[2px] transition-transform"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 hero-gradient rounded-lg flex items-center justify-center">
                  <Bell className="w-5 h-5 text-card" />
                </div>
                <div className="text-left">
                  <p className="font-display text-lg font-semibold">
                    Notification Programs
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    Stay ahead of new and forthcoming titles with expert-curated alerts.
                  </p>
                </div>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-muted-foreground transition-transform ${
                  showNotifications ? "rotate-180" : ""
                }`}
              />
            </button>

            {showNotifications && (
              <div className="mt-6 space-y-8 bg-card rounded-xl p-6 md:p-8 border border-border">
                {/* FirstLook */}
                <div>
                  <h3 className="font-display text-xl font-semibold mb-3">
                    FirstLook™
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-3">
                    FirstLook™ is the family of notification services available to libraries for
                    print and digital content. FirstLook is supported by a staff of experienced
                    librarians and merchandising specialists who are experts in the publishing and
                    entertainment industries.
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    These services are supported by the industry’s most sophisticated collection
                    development management system, and title lists are provided via Title Source
                    360.
                  </p>
                </div>

                {/* Selection Lists */}
                <div>
                  <h3 className="font-display text-xl font-semibold mb-3">
                    Selection Lists
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-3">
                    Many of your foreseeable and annual collection needs are supported with the
                    various selection lists offered in Title Source 360.
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    Whether it’s to support a current topic, major holiday, summer reading or a
                    popular genre, you will find a selection list that includes current and
                    forthcoming titles for all of your patrons, from children to adults.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Evidence-based Selection Planning */}
        <section className="pb-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <button
              type="button"
              onClick={() => setShowEsp((prev) => !prev)}
              className="w-full flex items-center justify-between bg-card rounded-xl px-6 py-4 border border-border card-elevated hover:-translate-y-[2px] transition-transform"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 hero-gradient rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-card" />
                </div>
                <div className="text-left">
                  <p className="font-display text-lg font-semibold">
                    Evidence-based Selection Planning (ESP)
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    Data-driven tools to ensure the right content, at the right time, in the right place.
                  </p>
                </div>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-muted-foreground transition-transform ${
                  showEsp ? "rotate-180" : ""
                }`}
              />
            </button>

            {showEsp && (
              <div className="mt-6 bg-card rounded-xl p-6 md:p-8 border border-border space-y-4">
                <p className="font-body text-sm text-muted-foreground">
                  Evidence-based Selection Planning (ESP) helps libraries have the right content at
                  the right time in the ideal quantity and at the locations where it is needed most.
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  By harnessing the same Machine Learning methods that drive Apple’s Siri, Google’s
                  Assistant and the recommendation engines at Netflix and Amazon, ESP predicts how
                  current and forthcoming titles will perform in your library’s collection.
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  When using ESP, you can improve discovery and engagement in your collection, while
                  freeing up staff to focus on other tasks.
                </p>
                <Button variant="link" className="px-0 text-primary font-body text-sm">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 hero-gradient">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-card mb-6">
              Ready to explore Title Source 360?
            </h2>
            <p className="font-body text-lg text-card/80 mb-8 max-w-xl mx-auto">
              Discover how LibraryOne and Title Source 360 can simplify collection development,
              standing orders, and evidence-based selection for your library.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Talk to our team
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="heroOutline" size="lg">
                  Request a demo
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

export default TS360;
