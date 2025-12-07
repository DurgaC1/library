/**
 * 🌊 Modern Light-Blue Login Page
 * Uses: Carousel, cards, modal, accordion, tabs, toast, flex + grid,
 * parallax-like background, box shadows, hover effects, transitions,
 * hero banner, breadcrumbs, skeleton loaders, loader spinner, badges,
 * progress bar, stepper, mini timeline, off-canvas help drawer, avatars, responsive layout.
 */

import { useEffect, useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  BookOpen,
  ArrowRight,
  Eye,
  EyeOff,
  HelpCircle,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  X,
  Phone,
  Mail,
  MapPin,
  Users,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type AuthTab = "login" | "sso";

const testimonials = [
  {
    quote:
      "LibraryOne makes ordering and collection management feel effortless. Our staff love the interface.",
    name: "Robert Colbaugh",
    role: "Washington County Public Library",
    initials: "RC",
  },
  {
    quote:
      "The discovery tools are intuitive, and the support team responds quickly when we have questions.",
    name: "Jamie Liu",
    role: "Digital Services Librarian",
    initials: "JL",
  },
  {
    quote:
      "Rollout was smooth, and we were fully trained in no time. It’s become our daily hub.",
    name: "Maria Gonzalez",
    role: "Library Director",
    initials: "MG",
  },
];

const Login = () => {
  const { toast } = useToast();

  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [authTab, setAuthTab] = useState<AuthTab>("login");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTestimonialsLoading, setIsTestimonialsLoading] = useState(true);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const [showHelpModal, setShowHelpModal] = useState(false);
  const [showSupportDrawer, setShowSupportDrawer] = useState(false);

  // Simulate skeleton loading for testimonials
  useEffect(() => {
    const t = setTimeout(() => setIsTestimonialsLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Login attempted",
        description:
          "This is a demo screen. Actual authentication will be wired to your backend or SSO provider.",
      });
    }, 1200);
  };

  const nextTestimonial = () =>
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);

  const prevTestimonial = () =>
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const currentTestimonial = testimonials[testimonialIndex];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden">
          {/* Soft background with "parallax" blobs */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-secondary via-background to-background" />
          <div className="pointer-events-none absolute -top-24 -right-10 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="pointer-events-none absolute bottom-[-40px] left-[-40px] w-64 h-64 rounded-full bg-primary/15 blur-3xl" />

          <div className="relative z-10 container mx-auto px-4 py-8 lg:py-12 flex flex-col lg:flex-row gap-10 lg:gap-14">
            {/* LEFT PANEL — hero, stepper, testimonial carousel, gallery chips */}
            <div className="flex-1 flex flex-col justify-between gap-10">
              {/* Breadcrumbs + hero copy */}
              <div>
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground mb-3">
                  <Link to="/" className="hover:text-foreground transition-colors">
                    Home
                  </Link>
                  <span>/</span>
                  <span className="text-foreground font-medium">Login</span>
                </nav>

                {/* Hero header */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border mb-4 shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span className="text-[11px] font-medium text-foreground">
                    Secure library workspace
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-5">
                  <div className="w-14 h-14 bg-card rounded-xl flex items-center justify-center shadow-md border border-border">
                    <BookOpen className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h1 className="font-display text-2xl font-bold text-foreground leading-tight">
                      LibraryOne
                    </h1>
                    <p className="text-xs text-muted-foreground font-body">
                      Digital Orders & Collection Platform
                    </p>
                  </div>
                </div>

                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                  Welcome back to your library dashboard
                </h2>
                <p className="font-body text-sm md:text-base text-muted-foreground max-w-xl mb-5">
                  Sign in to discover titles, manage physical and digital collections, and
                  support your community with a unified workspace.
                </p>

                {/* Mini stepper / timeline */}
                <div className="mt-2 border-l border-border pl-4 space-y-3 text-xs font-body text-muted-foreground">
                  <div className="flex gap-2">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-[10px] font-semibold">
                      1
                    </span>
                    <span>Authenticate with your login ID or institutional SSO.</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-muted flex items-center justify-center text-[10px] font-semibold text-muted-foreground">
                      2
                    </span>
                    <span>Search, discover and curate titles across your collections.</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-muted flex items-center justify-center text-[10px] font-semibold text-muted-foreground">
                      3
                    </span>
                    <span>Place and track orders, analyze usage and share insights.</span>
                  </div>
                </div>

                <Link
                  to="/about"
                  className="mt-5 inline-flex items-center gap-1 text-primary hover:text-primary/80 text-sm font-medium group"
                >
                  Learn more about LibraryOne
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Bottom: testimonial carousel + "avatars gallery" */}
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-5">
                {/* Carousel card */}
                <div className="bg-card/90 backdrop-blur-xl border border-border rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-accent" />
                      <p className="font-display text-xs font-semibold text-foreground">
                        What librarians say
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={prevTestimonial}
                        className="p-1 rounded-full hover:bg-secondary transition-colors"
                        title="Previous"
                      >
                        <ChevronLeft className="w-4 h-4 text-muted-foreground" />
                      </button>
                      <button
                        type="button"
                        onClick={nextTestimonial}
                        className="p-1 rounded-full hover:bg-secondary transition-colors"
                        title="Next"
                      >
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
                  </div>

                  {isTestimonialsLoading ? (
                    <div className="space-y-3 animate-pulse">
                      <div className="h-3 rounded bg-muted w-11/12" />
                      <div className="h-3 rounded bg-muted w-10/12" />
                      <div className="h-3 rounded bg-muted w-8/12" />
                      <div className="flex items-center gap-3 mt-3">
                        <div className="w-8 h-8 rounded-full bg-muted" />
                        <div className="flex-1 space-y-2">
                          <div className="h-2.5 bg-muted rounded w-1/2" />
                          <div className="h-2 bg-muted rounded w-1/3" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="font-body text-sm text-foreground/90 italic mb-3">
                        "{currentTestimonial.quote}"
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full hero-gradient text-card text-xs font-semibold flex items-center justify-center">
                          {currentTestimonial.initials}
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-foreground">
                            {currentTestimonial.name}
                          </p>
                          <p className="text-[11px] text-muted-foreground">
                            {currentTestimonial.role}
                          </p>
                        </div>
                        <span className="ml-auto text-[11px] text-muted-foreground">
                          {testimonialIndex + 1} / {testimonials.length}
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {/* Gallery / chips */}
                <div className="bg-secondary/80 border border-border rounded-2xl p-4 flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-4 h-4 text-primary" />
                    <p className="text-xs font-semibold text-foreground">
                      Libraries using LibraryOne
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-[11px] font-body">
                    <div className="px-2 py-1 rounded-full bg-card border border-border text-foreground text-center">
                      City Libraries
                    </div>
                    <div className="px-2 py-1 rounded-full bg-card border border-border text-foreground text-center">
                      Campus Libraries
                    </div>
                    <div className="px-2 py-1 rounded-full bg-card border border-border text-foreground text-center">
                      Consortia
                    </div>
                    <div className="px-2 py-1 rounded-full bg-card border border-border text-foreground text-center">
                      Statewide Systems
                    </div>
                    <div className="px-2 py-1 rounded-full bg-card border border-border text-foreground text-center">
                      Special Collections
                    </div>
                    <div className="px-2 py-1 rounded-full bg-card border border-border text-foreground text-center">
                      Publishers
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL — login card and interactions */}
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full max-w-md">
                {/* Card */}
                <div className="bg-card/95 backdrop-blur-xl border border-border rounded-2xl p-7 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
                  {/* subtle decorative pseudo-like element via before-style */}
                  <div className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />

                  {/* Tabs: Password vs SSO */}
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
                        {authTab === "login"
                          ? "Sign in to LibraryOne"
                          : "Sign in with Single Sign-On"}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Step 1 of 3 • Authentication
                      </p>
                    </div>
                    <div className="inline-flex items-center bg-card border border-border rounded-full p-1 text-xs">
                      <button
                        type="button"
                        onClick={() => setAuthTab("login")}
                        className={`px-3 py-1 rounded-full transition-all ${
                          authTab === "login"
                            ? "bg-primary text-primary-foreground shadow-sm"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        Password
                      </button>
                      <button
                        type="button"
                        onClick={() => setAuthTab("sso")}
                        className={`px-3 py-1 rounded-full transition-all ${
                          authTab === "sso"
                            ? "bg-primary text-primary-foreground shadow-sm"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        SSO
                      </button>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mb-6">
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <div className="h-full w-1/3 hero-gradient animate-[pulse_2.2s_ease-in-out_infinite]" />
                    </div>
                    <p className="mt-1 text-[11px] text-muted-foreground font-body">
                      After login: explore titles • curate lists • place orders
                    </p>
                  </div>

                  {/* Tabs content */}
                  {authTab === "login" ? (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="space-y-2">
                        <Label htmlFor="loginId">
                          Login ID <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="loginId"
                          type="text"
                          value={loginId}
                          onChange={(e) => setLoginId(e.target.value)}
                          placeholder="your.email@library.org"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="password">
                            Password <span className="text-red-500">*</span>
                          </Label>
                          <button
                            type="button"
                            className="text-[11px] text-primary hover:text-primary/80 inline-flex items-center gap-1"
                            onClick={() => setShowHelpModal(true)}
                          >
                            <HelpCircle className="w-3 h-3" />
                            Need help?
                          </button>
                        </div>
                        <div className="relative">
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                            className="pr-10"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition"
                            title={showPassword ? "Hide password" : "Show password"}
                          >
                            {showPassword ? (
                              <EyeOff className="w-4 h-4" />
                            ) : (
                              <Eye className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="remember"
                            checked={rememberMe}
                            onCheckedChange={(checked) => setRememberMe(!!checked)}
                          />
                          <Label
                            htmlFor="remember"
                            className="font-body text-sm cursor-pointer"
                          >
                            Remember me
                          </Label>
                        </div>
                      </div>

                      {/* Stepper row */}
                      <div className="flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground font-semibold">
                          1
                        </span>
                        <span>Login</span>
                        <ChevronRight className="w-3 h-3" />
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-muted text-muted-foreground font-semibold">
                          2
                        </span>
                        <span>Review access</span>
                        <ChevronRight className="w-3 h-3" />
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-muted text-muted-foreground font-semibold">
                          3
                        </span>
                        <span>Start exploring</span>
                      </div>

                      <div className="flex gap-3 pt-1">
                        <Button
                          type="submit"
                          className="flex-1 shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                          disabled={isSubmitting}
                        >
                          {isSubmitting && (
                            <span className="w-4 h-4 border-2 border-primary-foreground/70 border-t-transparent rounded-full animate-spin" />
                          )}
                          {isSubmitting ? "Signing in..." : "LOGIN"}
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => {
                            setLoginId("");
                            setPassword("");
                            setRememberMe(false);
                          }}
                        >
                          CANCEL
                        </Button>
                      </div>

                      {/* Accordion: security tip */}
                      <div className="mt-4 border-t border-border pt-3">
                        <details className="group text-sm">
                          <summary className="flex items-center justify-between cursor-pointer list-none">
                            <span className="font-body text-xs font-semibold text-foreground">
                              Security tips
                            </span>
                            <ChevronDown className="w-4 h-4 text-muted-foreground transition-transform group-open:rotate-180" />
                          </summary>
                          <ul className="mt-2 space-y-1 text-[11px] text-muted-foreground list-disc list-inside">
                            <li>Only sign in from trusted devices and networks.</li>
                            <li>Never share your login ID or password via email.</li>
                            <li>Log out when using shared or public computers.</li>
                          </ul>
                        </details>
                      </div>

                      <p className="mt-1 text-[11px] text-muted-foreground">
                        <span className="text-red-500">*</span> indicates required field.
                      </p>
                    </form>
                  ) : (
                    <div className="space-y-5">
                      <p className="text-sm text-muted-foreground">
                        If your library is configured for Single Sign-On, use the button
                        below to authenticate with your institution&apos;s identity
                        provider.
                      </p>
                      <Button
                        variant="outline"
                        className="w-full flex items-center justify-center gap-2"
                        onClick={() =>
                          toast({
                            title: "SSO redirect",
                            description:
                              "In production, this would redirect you to your SSO provider.",
                          })
                        }
                      >
                        Continue with SSO
                        <ArrowRight className="w-4 h-4" />
                      </Button>

                      <div className="mt-2 border-t border-border pt-3 space-y-2 text-xs text-muted-foreground">
                        <p>
                          Not sure if your library uses SSO? Check with your IT team or
                          system administrator before proceeding.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Footer links */}
                  <div className="mt-6 pt-5 border-t border-border space-y-3 text-sm font-body">
                    <div className="flex flex-wrap gap-4 text-primary">
                      <Link to="/forgot-password" className="hover:underline">
                        Forgot Password?
                      </Link>
                      <button
                        type="button"
                        className="hover:underline"
                        onClick={() => setShowHelpModal(true)}
                      >
                        Forgot Login ID?
                      </button>
                    </div>
                    <p className="text-muted-foreground">
                      New to LibraryOne?{" "}
                      <Link to="/register" className="text-primary font-medium hover:underline">
                        Create an account
                      </Link>
                      {" or "}
                      <Link to="/contact" className="text-primary font-medium hover:underline">
                        Request access
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Off-canvas support floating button */}
          <button
            type="button"
            onClick={() => setShowSupportDrawer(true)}
            className="fixed bottom-5 right-5 z-30 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-primary text-primary-foreground text-xs font-body shadow-lg hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            <HelpCircle className="w-4 h-4" />
            Need support?
          </button>

          {/* Off-canvas support drawer */}
          <div
            className={`fixed top-0 right-0 h-full w-80 max-w-full bg-card border-l border-border shadow-2xl z-40 transform transition-transform duration-300 ${
              showSupportDrawer ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-secondary/80">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-primary" />
                <p className="font-display text-sm font-semibold text-foreground">
                  Quick support
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowSupportDrawer(false)}
                className="p-1 rounded-full hover:bg-secondary transition-colors"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            <div className="p-4 space-y-4 text-sm font-body text-foreground">
              <p className="text-muted-foreground">
                Having trouble signing in? Use one of the options below:
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-xs text-foreground">Call us</p>
                    <p className="text-xs text-muted-foreground">1-800-775-1800</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-xs text-foreground">Email support</p>
                    <p className="text-xs text-muted-foreground">info@libraryone.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-xs text-foreground">Headquarters</p>
                    <p className="text-xs text-muted-foreground">
                      3540 Toringdon Way, Suite 200 #391
                      <br />
                      Charlotte, NC 28277
                    </p>
                  </div>
                </div>
              </div>

              <details className="group border-t border-border pt-3">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-xs font-semibold text-foreground">
                    Troubleshooting checklist
                  </span>
                  <ChevronDown className="w-4 h-4 text-muted-foreground transition-transform group-open:rotate-180" />
                </summary>
                <ul className="mt-2 list-disc list-inside text-[11px] text-muted-foreground space-y-1">
                  <li>Check Caps Lock and keyboard layout.</li>
                  <li>Clear your browser cache and cookies if issues persist.</li>
                  <li>Try resetting your password using the forgot link.</li>
                  <li>Ask your admin if your account has been locked or disabled.</li>
                </ul>
              </details>
            </div>
          </div>
        </section>
      </main>

      {/* Help modal */}
      {showHelpModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-card rounded-2xl border border-border p-6 md:p-7 w-[90%] max-w-md shadow-2xl relative">
            <button
              type="button"
              onClick={() => setShowHelpModal(false)}
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-foreground">
                  Having trouble logging in?
                </p>
                <p className="font-body text-xs text-muted-foreground">
                  A few quick steps to recover access.
                </p>
              </div>
            </div>
            <div className="space-y-3 text-sm text-foreground font-body mb-4">
              <p>
                • Use <span className="font-semibold">"Forgot Login ID"</span> if you cannot
                remember your username.
              </p>
              <p>
                • Use <span className="font-semibold">"Forgot Password"</span> to reset your
                password via email.
              </p>
              <p>
                • If you still can&apos;t sign in, contact your library&apos;s system
                administrator or our support team.
              </p>
            </div>
            <Button
              size="sm"
              className="w-full md:w-auto"
              onClick={() => setShowHelpModal(false)}
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

export default Login;
