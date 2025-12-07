import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  ChevronLeft,
  Info,
  CheckCircle2,
  Loader2,
  Building2,
  Globe2,
  UserCircle2,
  HelpCircle,
  Star,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/pattern-books.jpg";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "1-800-775-1800", href: "tel:1-800-775-1800" },
  { icon: Mail, label: "Email", value: "info@libraryone.com", href: "mailto:info@libraryone.com" },
  {
    icon: MapPin,
    label: "Address",
    value: "3540 Toringdon Way, Suite 200 #391 Charlotte, NC 28277",
  },
  { icon: Clock, label: "Hours", value: "Mon–Fri: 8AM–6PM EST" },
];

const carouselItems = [
  {
    title: "Fast, human support",
    text: "“LibraryOne got back to us within a few hours and resolved our issue the same day.”",
  },
  {
    title: "Implementation guidance",
    text: "“The onboarding team walked us through every step and made rollout simple.”",
  },
  {
    title: "Partners, not vendors",
    text: "“We always feel like LibraryOne is working with us, not just for us.”",
  },
];

const helpOptions = [
  "Academic Library Resources",
  "Axis 360 Support",
  "Book Recycling - Sustainable Shelves Program",
  "Customer Credit References",
  "Employment Opportunities",
  "Entertainment Services",
  "Events and Conferences",
  "Order Questions",
  "Other",
  "Public Library Resources",
  "Publisher Partner Inquiries",
  "Request Invoice or Statement",
  "Schedule Product or Service Demo",
  "Technical Support",
];

const quickTopics = [
  "Schedule Product or Service Demo",
  "Technical Support",
  "Public Library Resources",
  "Academic Library Resources",
];

const Contact = () => {
  const { toast } = useToast();

  const [activeTab, setActiveTab] = useState<"sales" | "support">("sales");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    jobTitle: "",
    organization: "",
    state: "",
    email: "",
    phone: "",
    marketType: "",
    helpType: "",
    message: "",
  });

  const handleChange =
    (field: keyof typeof formData) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData((prev) => ({ ...prev, [field]: e.target.value }));
      };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowModal(true);
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. Our team will get back to you shortly.",
      });

      setFormData({
        name: "",
        jobTitle: "",
        organization: "",
        state: "",
        email: "",
        phone: "",
        marketType: "",
        helpType: "",
        message: "",
      });
    }, 1200);
  };

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero / Banner with subtle parallax feel */}
        <section className="relative pt-28 md:pt-32 pb-20 min-h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Contact library support"
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
              <span className="text-card">Contact</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card/10 backdrop-blur-sm border border-card/20 text-xs md:text-sm text-card/90 mb-4">
                  <HelpCircle className="w-4 h-4" />
                  We're here to help
                </span>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-card mb-4 leading-tight">
                  Contact LibraryOne
                </h1>
                <p className="font-body text-card/85 text-base md:text-lg max-w-xl mb-4">
                  Whether you're exploring digital solutions, looking for support, or planning a
                  new project, our team is ready to partner with you.
                </p>
                <p className="font-body text-card/70 text-sm md:text-base">
                  Choose your focus below and tell us how we can help. We typically respond within{" "}
                  <span className="font-semibold text-card">1–2 business days</span>.
                </p>

                {/* Tabs */}
                <div className="mt-6 inline-flex rounded-full bg-card/95 backdrop-blur border border-card/50 p-1 shadow-lg">
                  <button
                    type="button"
                    className={`px-4 py-1.5 rounded-full text-sm font-body flex items-center gap-2 transition-all font-medium ${activeTab === "sales"
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-slate-900 bg-card/30 hover:bg-card/40"
                      }`}
                    onClick={() => setActiveTab("sales")}
                  >
                    <UserCircle2 className="w-4 h-4" />
                    Contact Sales
                  </button>
                  <button
                    type="button"
                    className={`px-4 py-1.5 rounded-full text-sm font-body flex items-center gap-2 transition-all font-medium ${activeTab === "support"
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-slate-900 bg-card/30 hover:bg-card/40"
                      }`}
                    onClick={() => setActiveTab("support")}
                  >
                    <HelpCircle className="w-4 h-4" />
                    Customer Support
                  </button>
                </div>
              </div>

              {/* Small "highlight" card with carousel */}
              <div className="relative">
                <div className="bg-card rounded-2xl border border-border p-6 md:p-7 card-elevated shadow-[0_24px_70px_rgba(15,23,42,0.6)]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full hero-gradient flex items-center justify-center">
                        <Star className="w-5 h-5 text-card" />
                      </div>
                      <div>
                        <p className="font-display text-sm font-semibold text-slate-900">
                          Why libraries love our team
                        </p>
                        <p className="font-body text-xs text-slate-600">
                          A few words from our partners
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={prevSlide}
                        className="p-1 rounded-full hover:bg-secondary transition-colors"
                        title="Previous"
                      >
                        <ChevronLeft className="w-4 h-4 text-slate-700" />
                      </button>
                      <button
                        type="button"
                        onClick={nextSlide}
                        className="p-1 rounded-full hover:bg-secondary transition-colors"
                        title="Next"
                      >
                        <ChevronRight className="w-4 h-4 text-slate-700" />
                      </button>
                    </div>
                  </div>

                  <div className="transition-all duration-300">
                    <p className="font-display text-base font-semibold text-slate-900 mb-2">
                      {carouselItems[carouselIndex].title}
                    </p>
                    <p className="font-body text-sm text-slate-800 mb-4 italic">
                      {carouselItems[carouselIndex].text}
                    </p>
                    <div className="flex items-center justify-between text-xs text-slate-600">
                      <span className="font-medium">
                        {carouselIndex + 1} / {carouselItems.length}
                      </span>
                      <span>Trusted by libraries nationwide</span>
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute -inset-6 bg-gradient-to-tr from-primary/10 via-transparent to-primary/10 blur-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl border border-border p-6 md:p-8 card-elevated shadow-lg shadow-slate-900/5">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold mb-1">
                      {activeTab === "sales"
                        ? "Tell us about your library"
                        : "Tell us how we can help"}
                    </h2>
                    <p className="font-body text-sm text-muted-foreground">
                      Fields marked with <span className="text-red-500">*</span> are required.
                    </p>
                  </div>
                  <div className="hidden md:flex flex-col items-end text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                      Secure form
                    </span>
                    <span>Average response: 1–2 business days</span>
                  </div>
                </div>

                {/* Quick topic chips */}
                <div className="mb-6">
                  <p className="font-body text-xs text-muted-foreground mb-2 flex items-center gap-2">
                    <Info className="w-4 h-4 text-primary" />
                    Quick select topics
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {quickTopics.map((topic) => (
                      <button
                        key={topic}
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            helpType: topic,
                          }))
                        }
                        className={`px-3 py-1 rounded-full text-xs font-body border transition-all ${formData.helpType === topic
                            ? "bg-primary text-primary-foreground border-primary shadow-sm"
                            : "bg-background text-foreground/80 border-border hover:border-primary/60 hover:bg-primary/5"
                          }`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-body">
                        Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={handleChange("name")}
                        placeholder="Jane Smith"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="jobTitle" className="font-body">
                        Job Title
                      </Label>
                      <Input
                        id="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange("jobTitle")}
                        placeholder="Digital Services Librarian"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="organization" className="font-body">
                        Organization <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="organization"
                        value={formData.organization}
                        onChange={handleChange("organization")}
                        placeholder="City Public Library"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state" className="font-body">
                        State / Region <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="state"
                        value={formData.state}
                        onChange={handleChange("state")}
                        placeholder="North Carolina"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-body">
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange("email")}
                        placeholder="you@library.org"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-body">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange("phone")}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Selects */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="marketType" className="font-body">
                        Market Type <span className="text-red-500">*</span>
                      </Label>
                      <select
                        id="marketType"
                        value={formData.marketType}
                        onChange={handleChange("marketType")}
                        required
                        className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-body shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition"
                      >
                        <option value="">Select one</option>
                        <option value="Public Library">Public Library</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="helpType" className="font-body">
                        How can we help? <span className="text-red-500">*</span>
                      </Label>
                      <select
                        id="helpType"
                        value={formData.helpType}
                        onChange={handleChange("helpType")}
                        required
                        className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-body shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition"
                      >
                        <option value="">Select one</option>
                        {helpOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-body">
                      What&apos;s your question in detail?{" "}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange("message")}
                      placeholder="Tell us more about your project, questions, or challenges..."
                      rows={6}
                      required
                    />
                  </div>

                  {/* Stepper / progress hint */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-2">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 text-xs font-body text-muted-foreground">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-semibold">
                          1
                        </span>
                        <span>Submit form</span>
                        <ChevronRight className="w-3 h-3" />
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-muted text-[10px] font-semibold">
                          2
                        </span>
                        <span>We review</span>
                        <ChevronRight className="w-3 h-3" />
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-muted text-[10px] font-semibold">
                          3
                        </span>
                        <span>We respond</span>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full md:w-auto flex items-center justify-center gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting && (
                        <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                      )}
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            {/* Side column: contact info, FAQ accordion, skeleton on submit */}
            <div className="space-y-6">
              {/* Contact card */}
              <div className="bg-card rounded-2xl border border-border p-6 card-elevated shadow-md hover:shadow-xl transition-shadow">
                <h3 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 hero-gradient rounded-lg flex items-center justify-center shrink-0"
                        title={item.label}
                      >
                        <item.icon className="w-5 h-5 text-card" />
                      </div>
                      <div>
                        <p className="font-body text-xs text-muted-foreground mb-1">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-body text-sm font-medium text-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-body text-sm font-medium text-foreground">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Little badge row */}
                <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-body">
                  <span className="px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 inline mr-1" />
                    99.9% uptime
                  </span>
                  <span className="px-2 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    Global support
                  </span>
                  <span className="px-2 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                    Dedicated onboarding
                  </span>
                </div>
              </div>

              {/* Support / help center card with skeleton on submit */}
              <div className="bg-secondary rounded-2xl p-6 border border-border/60 relative overflow-hidden">
                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-tr from-primary/20 to-primary/20 blur-2xl" />
                <h3 className="font-display text-lg font-semibold mb-2 flex items-center gap-2">
                  Looking for Support?
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  Existing customers can access our Help Center for FAQs, documentation, training
                  videos, and release notes.
                </p>

                {isSubmitting ? (
                  // skeleton loading state
                  <div className="space-y-2">
                    <div className="h-8 rounded-md bg-muted animate-pulse" />
                    <div className="h-3 w-2/3 rounded-md bg-muted animate-pulse" />
                  </div>
                ) : (
                  <Button variant="outline" size="sm" className="w-full">
                    Visit Help Center
                  </Button>
                )}
              </div>

              {/* Simple accordion for quick FAQ & timeline */}
              <div className="bg-card rounded-2xl border border-border p-4 md:p-5 card-elevated">
                <details className="group border-b border-border/70 pb-3 mb-3">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="font-display text-sm font-semibold">
                      How quickly will I hear back?
                    </span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-2 text-xs font-body text-muted-foreground">
                    We do our best to respond within 1–2 business days. For urgent technical
                    issues, please call our support line directly.
                  </p>
                </details>

                <details className="group border-b border-border/70 pb-3 mb-3">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="font-display text-sm font-semibold">
                      What should I include in my message?
                    </span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-2 text-xs font-body text-muted-foreground">
                    Share your library type, current systems (ILS, apps, etc.), and what you&apos;re
                    hoping to achieve. More context helps us route your request to the right team.
                  </p>
                </details>

                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="font-display text-sm font-semibold">
                      Do you work with libraries outside the U.S.?
                    </span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-2 text-xs font-body text-muted-foreground">
                    Yes. LibraryOne partners with libraries in multiple regions. Mention your
                    country and time zone so we can connect you with the appropriate team.
                  </p>
                </details>

                {/* Tiny timeline / stepper visual */}
                <div className="mt-5 pt-4 border-t border-border/70">
                  <p className="font-display text-xs font-semibold mb-2 flex items-center gap-1">
                    <Globe2 className="w-4 h-4 text-primary" />
                    How we handle your request
                  </p>
                  <ol className="space-y-2 text-xs font-body text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="mt-0.5 w-4 h-4 rounded-full bg-primary text-[10px] text-primary-foreground flex items-center justify-center">
                        1
                      </span>
                      <span>We route your request to the right specialist.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-0.5 w-4 h-4 rounded-full bg-muted flex items-center justify-center text-[10px]">
                        2
                      </span>
                      <span>We review your details and may follow up with clarifying questions.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-0.5 w-4 h-4 rounded-full bg-muted flex items-center justify-center text-[10px]">
                        3
                      </span>
                      <span>We respond with next steps, resources, or a meeting invite.</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Simple modal confirmation */}
      {showModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-card rounded-2xl border border-border p-6 md:p-8 max-w-md w-[90%] text-center card-elevated shadow-2xl">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">
              Thank you for reaching out!
            </h3>
            <p className="font-body text-sm text-muted-foreground mb-4">
              Your message has been received. A member of the LibraryOne team will contact you at{" "}
              <span className="font-semibold">{formData.email || "your email address"}</span>{" "}
              soon.
            </p>
            <Button
              onClick={() => setShowModal(false)}
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

export default Contact;
