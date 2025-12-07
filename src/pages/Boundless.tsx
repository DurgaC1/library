import { useState, FormEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
    Sparkles,
    ShieldCheck,
    PiggyBank,
    Globe2,
    CheckCircle2,
    Layers,
    MonitorSmartphone,
    Users,
    BookOpenCheck,
    Wand2,
    ArrowRight,
    ArrowRightCircle,
} from "lucide-react";
import heroImage from "@/assets/hero-library.jpg";

const identityPoints = [
    "Eliminate vendor lock-in",
    "Keep patrons within your ecosystem",
    "Own the user experience and the data that powers it",
    "Seamlessly connect your print and digital collections",
];

const budgetPoints = [
    "Stretch your digital budget further",
    "Get premium content at lower cost",
    "Choose flexible terms based on your needs",
    "Lower cost per circ without longer hold queues",
];

const patronPoints = [
    "Serve digital-first users anywhere",
    "Maintain a consistent user experience across platforms",
    "Easily order titles with TS360",
    "Curate content effortlessly",
];

const keyFeatures = [
    {
        icon: Layers,
        title: "Migrate with Confidence",
        description: "Easily transfer your existing collections without disruption to patrons.",
    },
    {
        icon: Users,
        title: "Age-Based Profiles",
        description:
            "Ensure that patrons only see age-appropriate content with profile-based filtering.",
    },
    {
        icon: BookOpenCheck,
        title: "TS360 Integration",
        description:
            "Shop and add new eBooks and audiobooks directly to Boundless via TS360.",
    },
    {
        icon: Sparkles,
        title: "Reading Programs & Challenges",
        description:
            "Increase engagement with built-in reading programs, badges, and challenges.",
    },
    {
        icon: MonitorSmartphone,
        title: "Rich Digital Formats",
        description:
            "Support for videobooks, PDFs, activities, and more — all in one experience.",
    },
    {
        icon: Wand2,
        title: "My Shelf Personalization",
        description:
            "Give every patron a personalized page with carousels curated from their activity.",
    },
];

const Boundless = () => {
    // simple demo form state
    const [customerName, setCustomerName] = useState("");
    const [libraryName, setLibraryName] = useState("");
    const [email, setEmail] = useState("");
    const [interest, setInterest] = useState<"boundless" | "kidsTeens">("boundless");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // TODO: replace with real submit (API / email / etc.)
        console.log({
            customerName,
            libraryName,
            email,
            interest,
            message,
        });
        alert("Thank you! We’ve received your request for a Boundless demo.");
        setCustomerName("");
        setLibraryName("");
        setEmail("");
        setInterest("boundless");
        setMessage("");
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 min-h-[60vh] flex items-center">
                    <div className="absolute inset-0">
                        <img
                            src={heroImage}
                            alt="Boundless digital library"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 overlay-gradient" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-3xl">
                            <span className="inline-flex items-center gap-2 text-card/80 font-body font-semibold text-sm uppercase tracking-wider mb-4">
                                <Sparkles className="w-4 h-4" />
                                Say hello to Boundless
                            </span>
                            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-card mb-6">
                                Boundless: The Digital Library Platform Built for Libraries
                            </h1>
                            <p className="font-body text-lg text-card/80 mb-4">
                                Tired of losing your patrons to third-party platforms that hijack your library’s
                                identity, limit your flexibility, and drive up costs?
                            </p>
                            <p className="font-body text-lg text-card/80 max-w-xl">
                                Boundless gives libraries a better way forward — with more control, deeper
                                discounts, and a platform built for libraries, not against them. Give your patrons
                                an extensive digital library of eBooks and audiobooks, from trending bestsellers to
                                timeless classics, plus activities, customizable reading programs, and more.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <a href="#boundless-demo">
                                    <Button variant="hero" size="lg" className="group">
                                        Schedule a Free Demo
                                        <ArrowRightCircle className="w-5 h-5 ml-2 group-hover:translate-x-0.5 transition-transform" />
                                    </Button>
                                </a>
                                <Link to="/contact">
                                    <Button variant="heroOutline" size="lg">
                                        Talk to Our Team
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Highlight Cards */}
                <section className="py-16 bg-card border-y border-border">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-background rounded-2xl p-6 card-elevated border border-border/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/60">
                                <div className="w-11 h-11 hero-gradient rounded-xl flex items-center justify-center mb-4">
                                    <ShieldCheck className="w-6 h-6 text-card" />
                                </div>
                                <h3 className="font-display text-xl font-semibold mb-2">
                                    Reclaim Your Identity
                                </h3>
                                <p className="font-body text-sm text-muted-foreground">
                                    Keep your library’s brand at the center of the experience. Boundless puts your
                                    institution, not the vendor, in the spotlight.
                                </p>
                            </div>

                            <div className="bg-background rounded-2xl p-6 card-elevated border border-border/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/60">
                                <div className="w-11 h-11 hero-gradient rounded-xl flex items-center justify-center mb-4">
                                    <PiggyBank className="w-6 h-6 text-card" />
                                </div>
                                <h3 className="font-display text-xl font-semibold mb-2">
                                    Unlock Budget Relief
                                </h3>
                                <p className="font-body text-sm text-muted-foreground">
                                    Access discounted digital content and flexible terms so you can stretch your
                                    budget and reinvest in your community.
                                </p>
                            </div>

                            <div className="bg-background rounded-2xl p-6 card-elevated border border-border/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/60">
                                <div className="w-11 h-11 hero-gradient rounded-xl flex items-center justify-center mb-4">
                                    <Globe2 className="w-6 h-6 text-card" />
                                </div>
                                <h3 className="font-display text-xl font-semibold mb-2">
                                    Meet Patrons Anywhere
                                </h3>
                                <p className="font-body text-sm text-muted-foreground">
                                    Take your collection wherever your community goes with integrations and a
                                    consistent digital experience across platforms.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Reclaim / Budget / Patrons */}
                <section className="py-20 bg-background">
                    <div className="container mx-auto px-4 max-w-5xl space-y-16">
                        {/* Reclaim */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                            <div>
                                <span className="inline-block text-primary font-body font-semibold text-sm uppercase tracking-wider mb-3">
                                    Reclaim Your Digital Identity
                                </span>
                                <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                                    Keep Your Library Front and Center
                                </h2>
                                <p className="font-body text-muted-foreground mb-4">
                                    Boundless keeps your library at the forefront. Your patrons see your branding —
                                    so your organization stays visible and in control. Libraries deserve recognition
                                    in the digital world, and Boundless makes that possible.
                                </p>
                            </div>
                            <div className="bg-card rounded-2xl p-6 md:p-7 border border-border card-elevated">
                                <ul className="space-y-3">
                                    {identityPoints.map((point) => (
                                        <li key={point} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 mt-0.5 text-primary" />
                                            <span className="font-body text-sm text-muted-foreground">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Budget */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start md:flex-row-reverse">
                            <div className="order-2 md:order-1">
                                <span className="inline-block text-primary font-body font-semibold text-sm uppercase tracking-wider mb-3">
                                    Unlock Budget Relief
                                </span>
                                <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                                    Do More with Your Digital Budget
                                </h2>
                                <p className="font-body text-muted-foreground mb-4">
                                    Boundless gives you access to discounted digital content, including premium
                                    eBooks and audiobooks. Stop paying more for less flexibility — save more with
                                    Boundless and reinvest in your library.
                                </p>
                            </div>
                            <div className="order-1 md:order-2 bg-card rounded-2xl p-6 md:p-7 border border-border card-elevated">
                                <ul className="space-y-3">
                                    {budgetPoints.map((point) => (
                                        <li key={point} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 mt-0.5 text-primary" />
                                            <span className="font-body text-sm text-muted-foreground">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Patrons */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                            <div>
                                <span className="inline-block text-primary font-body font-semibold text-sm uppercase tracking-wider mb-3">
                                    Meet Patrons Where They Are
                                </span>
                                <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                                    Seamless Access, On Your Terms
                                </h2>
                                <p className="font-body text-muted-foreground mb-4">
                                    With Boundless, your digital collection goes wherever your community goes. It
                                    integrates with solutions like Palace, Solus, and your ILS so you can offer
                                    seamless access on your terms.
                                </p>
                            </div>
                            <div className="bg-card rounded-2xl p-6 md:p-7 border border-border card-elevated">
                                <ul className="space-y-3">
                                    {patronPoints.map((point) => (
                                        <li key={point} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 mt-0.5 text-primary" />
                                            <span className="font-body text-sm text-muted-foreground">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Features */}
                <section className="py-20 bg-secondary">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <span className="inline-block text-primary font-body font-semibold text-sm uppercase tracking-wider mb-3">
                                Key Features
                            </span>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                                Everything You Need in One Platform
                            </h2>
                            <p className="font-body text-muted-foreground">
                                From migration to engagement, Boundless gives you the tools to build, manage,
                                and grow a powerful digital collection that truly belongs to your library.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {keyFeatures.map((feature) => (
                                <div
                                    key={feature.title}
                                    className="bg-card rounded-2xl p-6 border border-border card-elevated relative overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                                >
                                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/80 via-purple-500/70 to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="w-10 h-10 hero-gradient rounded-xl flex items-center justify-center mb-4">
                                        <feature.icon className="w-5 h-5 text-card" />
                                    </div>
                                    <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
                                    <p className="font-body text-sm text-muted-foreground">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* My Shelf & Support */}
                        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-card rounded-2xl p-6 border border-primary/40 card-elevated">
                                <h3 className="font-display text-xl font-semibold mb-2">
                                    My Shelf: Personalized Reading
                                </h3>
                                <p className="font-body text-sm text-muted-foreground mb-3">
                                    Give every patron their own personalized space. My Shelf brings together
                                    curated carousels and content based on each user’s reading activity and
                                    interests.
                                </p>
                                <p className="font-body text-sm text-muted-foreground">
                                    Features include bookmarking, notetaking, page layout options, and font
                                    controls — all designed to create a comfortable, accessible reading
                                    experience.
                                </p>
                            </div>
                            <div className="bg-card rounded-2xl p-6 border border-border card-elevated">
                                <h3 className="font-display text-xl font-semibold mb-2">
                                    Support for Your Team
                                </h3>
                                <p className="font-body text-sm text-muted-foreground mb-3">
                                    Marketing resources, training materials, and video support are ready for you
                                    and your staff, so you can launch Boundless with confidence.
                                </p>
                                <Button
                                    variant="link"
                                    className="px-0 text-primary font-body text-sm inline-flex items-center gap-1"
                                >
                                    Explore resources
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Learn More / Demo Form */}
                <section id="boundless-demo" className="py-20 bg-background">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <p className="font-display text-xl md:text-2xl font-bold text-primary mb-4 text-center">
                            Ready to Make the Move to Boundless? Schedule your Free Demo Below!
                        </p>

                        <div className="relative bg-card border border-border rounded-3xl card-elevated overflow-hidden">
                            {/* big LEARN MORE text in background */}
                            <div className="absolute inset-x-8 top-4 text-5xl md:text-7xl font-display font-extrabold text-muted-foreground/10 pointer-events-none select-none">
                                LEARN MORE
                            </div>

                            <div className="relative z-10 p-6 md:p-10">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 gap-6">
                                        <div className="flex flex-col">
                                            <label className="font-body text-sm text-foreground mb-1">
                                                Customer Name<span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={customerName}
                                                onChange={(e) => setCustomerName(e.target.value)}
                                                className="h-11 rounded-lg border border-border bg-background px-3 font-body text-sm outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-shadow"
                                            />
                                        </div>

                                        <div className="flex flex-col">
                                            <label className="font-body text-sm text-foreground mb-1">
                                                Library Name<span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={libraryName}
                                                onChange={(e) => setLibraryName(e.target.value)}
                                                className="h-11 rounded-lg border border-border bg-background px-3 font-body text-sm outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-shadow"
                                            />
                                        </div>

                                        <div className="flex flex-col">
                                            <label className="font-body text-sm text-foreground mb-1">
                                                Email Address<span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="h-11 rounded-lg border border-border bg-background px-3 font-body text-sm outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-shadow"
                                            />
                                        </div>

                                        <div className="flex flex-col">
                                            <span className="font-body text-sm text-foreground mb-2">
                                                I am interested in:
                                            </span>
                                            <div className="flex flex-wrap gap-6 text-sm font-body">
                                                <label className="inline-flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="interest"
                                                        value="boundless"
                                                        checked={interest === "boundless"}
                                                        onChange={() => setInterest("boundless")}
                                                        className="accent-primary"
                                                    />
                                                    <span>Boundless</span>
                                                </label>
                                                <label className="inline-flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="interest"
                                                        value="kidsTeens"
                                                        checked={interest === "kidsTeens"}
                                                        onChange={() => setInterest("kidsTeens")}
                                                        className="accent-primary"
                                                    />
                                                    <span>Boundless Kids and Teen Bundle</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="flex flex-col">
                                            <label className="font-body text-sm text-foreground mb-1">
                                                Tell us more about how your library would like to use Boundless
                                            </label>
                                            <textarea
                                                rows={4}
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                className="rounded-lg border border-border bg-background px-3 py-2 font-body text-sm outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-shadow resize-none"
                                            />
                                        </div>
                                    </div>

                                    <div className="pt-2">
                                        <Button
                                            type="submit"
                                            variant="hero"
                                            size="lg"
                                            className="w-full md:w-auto px-10"
                                        >
                                            REQUEST A FREE DEMO
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Kids & Teens CTA */}
                <section className="py-20 hero-gradient">
                    <div className="container mx-auto px-4 max-w-4xl text-center">
                        <div className="bg-card/10 backdrop-blur rounded-3xl p-10 border border-card/30 card-elevated">
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-card mb-4">
                                Built for Every Reader — Especially Kids & Teens
                            </h2>
                            <p className="font-body text-card/85 mb-6">
                                Interested in a custom digital experience built just for Kids & Teens? Boundless
                                helps you design age-appropriate spaces that keep younger readers safe,
                                inspired, and engaged.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                                <Link to="/contact">
                                    <Button variant="hero" size="lg">
                                        Talk About Kids & Teens
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </Link>
                                <a href="#boundless-demo">
                                    <Button variant="heroOutline" size="lg">
                                        Schedule Your Free Demo
                                    </Button>
                                </a>
                            </div>
                            <p className="font-body text-xs text-card/70">
                                Ready to move to Boundless? Our team will guide you through migration,
                                configuration, and launch — step by step.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Boundless;
