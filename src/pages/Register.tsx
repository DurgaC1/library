import { useEffect, useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  CheckCircle2,
  X,
  Loader2,
  ShieldCheck,
  Mail,
  User,
  Building2,
  Phone,
  MapPin,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Star,
  Users,
  TrendingUp,
  Award,
  AlertCircle,
  Info,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-library.jpg";

const features = [
  {
    icon: TrendingUp,
    title: "Analytics Dashboard",
    description: "Track your library's performance with real-time insights.",
  },
  {
    icon: Award,
    title: "Premium Support",
    description: "24/7 dedicated support from our expert team.",
  },
  {
    icon: Users,
    title: "Community Access",
    description: "Join thousands of libraries in our network.",
  },
];

const testimonials = [
  {
    quote: "LibraryOne transformed how we manage our digital collections. The registration process was seamless.",
    name: "Sarah Johnson",
    role: "Digital Services Director",
    initials: "SJ",
  },
  {
    quote: "Best decision we made this year. The platform is intuitive and powerful.",
    name: "Michael Chen",
    role: "Library Director",
    initials: "MC",
  },
];

const Register = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    organizationType: "",
    state: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const strength = calculatePasswordStrength(formData.password);
    setPasswordStrength(strength);
  }, [formData.password]);

  const calculatePasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 1;
    if (/\d/.test(password)) strength += 1;
    if (/[^a-zA-Z\d]/.test(password)) strength += 1;
    return strength;
  };

  const handleChange = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (field === "agreeToTerms") {
      setFormData((prev) => ({ ...prev, [field]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
      toast({
        title: "Registration successful!",
        description: "Welcome to LibraryOne. Please check your email to verify your account.",
      });
    }, 1500);
  };

  const nextTestimonial = () =>
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const steps = [
    { number: 1, label: "Personal Info", completed: activeStep > 1 },
    { number: 2, label: "Organization", completed: activeStep > 2 },
    { number: 3, label: "Account Setup", completed: false },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden">
          {/* Parallax background */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-secondary via-background to-background" />
          <div className="pointer-events-none absolute -top-24 -right-10 w-72 h-72 rounded-full bg-primary/20 blur-3xl animate-pulse" />
          <div className="pointer-events-none absolute bottom-[-40px] left-[-40px] w-64 h-64 rounded-full bg-primary/15 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

          <div className="relative z-10 container mx-auto px-4 py-8 lg:py-12 flex flex-col lg:flex-row gap-10 lg:gap-14">
            {/* LEFT PANEL — Hero content */}
            <div className="flex-1 flex flex-col justify-between gap-10">
              <div>
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground mb-3">
                  <Link to="/" className="hover:text-foreground transition-colors">
                    Home
                  </Link>
                  <span>/</span>
                  <span className="text-foreground font-medium">Register</span>
                </nav>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border mb-4 shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span className="text-[11px] font-medium text-foreground">
                    Create your library account
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
                  Join thousands of libraries
                </h2>
                <p className="font-body text-sm md:text-base text-muted-foreground max-w-xl mb-5">
                  Create your account to access millions of titles, powerful analytics, and
                  comprehensive library management tools.
                </p>

                {/* Features grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  {features.map((feature, index) => (
                    <div
                      key={feature.title}
                      className="bg-card rounded-xl border border-border p-4 card-elevated hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-10 h-10 hero-gradient rounded-lg flex items-center justify-center mb-3">
                        <feature.icon className="w-5 h-5 text-card" />
                      </div>
                      <p className="font-display text-sm font-semibold text-foreground mb-1">
                        {feature.title}
                      </p>
                      <p className="font-body text-xs text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial carousel */}
              <div className="bg-card/90 backdrop-blur-xl border border-border rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-accent" />
                    <p className="font-display text-xs font-semibold text-foreground">
                      What libraries say
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

                {isLoading ? (
                  <div className="space-y-3 animate-pulse">
                    <div className="h-3 rounded bg-muted w-11/12" />
                    <div className="h-3 rounded bg-muted w-10/12" />
                    <div className="h-3 rounded bg-muted w-8/12" />
                  </div>
                ) : (
                  <>
                    <p className="font-body text-sm text-foreground/90 italic mb-3">
                      "{testimonials[testimonialIndex].quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full hero-gradient text-card text-xs font-semibold flex items-center justify-center">
                        {testimonials[testimonialIndex].initials}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground">
                          {testimonials[testimonialIndex].name}
                        </p>
                        <p className="text-[11px] text-muted-foreground">
                          {testimonials[testimonialIndex].role}
                        </p>
                      </div>
                      <span className="ml-auto text-[11px] text-muted-foreground">
                        {testimonialIndex + 1} / {testimonials.length}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* RIGHT PANEL — Registration form */}
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full max-w-md">
                <div className="bg-card/95 backdrop-blur-xl border border-border rounded-2xl p-7 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
                  <div className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />

                  {/* Stepper */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      {steps.map((step, index) => (
                        <div key={step.number} className="flex items-center flex-1">
                          <div className="flex flex-col items-center flex-1">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all ${
                                step.completed || activeStep === step.number
                                  ? "bg-primary text-primary-foreground shadow-sm"
                                  : "bg-muted text-muted-foreground"
                              }`}
                            >
                              {step.completed ? (
                                <CheckCircle2 className="w-4 h-4" />
                              ) : (
                                step.number
                              )}
                            </div>
                            <p className="text-[10px] text-muted-foreground mt-1 text-center">
                              {step.label}
                            </p>
                          </div>
                          {index < steps.length - 1 && (
                            <div
                              className={`h-0.5 flex-1 mx-2 transition-all ${
                                step.completed ? "bg-primary" : "bg-muted"
                              }`}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full hero-gradient transition-all duration-500"
                        style={{ width: `${(activeStep / steps.length) * 100}%` }}
                      />
                    </div>
                  </div>

                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
                    Create your account
                  </h3>
                  <p className="text-xs text-muted-foreground mb-6">
                    Step {activeStep} of {steps.length} • Registration
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Step 1: Personal Info */}
                    {activeStep === 1 && (
                      <div className="space-y-4 animate-fade-in">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">
                              First Name <span className="text-red-500">*</span>
                            </Label>
                            <Input
                              id="firstName"
                              value={formData.firstName}
                              onChange={handleChange("firstName")}
                              placeholder="John"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">
                              Last Name <span className="text-red-500">*</span>
                            </Label>
                            <Input
                              id="lastName"
                              value={formData.lastName}
                              onChange={handleChange("lastName")}
                              placeholder="Doe"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">
                            Email Address <span className="text-red-500">*</span>
                          </Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange("email")}
                              placeholder="john.doe@library.org"
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                              id="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleChange("phone")}
                              placeholder="(555) 123-4567"
                              className="pl-10"
                            />
                          </div>
                        </div>

                        <Button
                          type="button"
                          onClick={() => setActiveStep(2)}
                          className="w-full"
                          disabled={!formData.firstName || !formData.lastName || !formData.email}
                        >
                          Continue
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    )}

                    {/* Step 2: Organization */}
                    {activeStep === 2 && (
                      <div className="space-y-4 animate-fade-in">
                        <div className="space-y-2">
                          <Label htmlFor="organization">
                            Organization Name <span className="text-red-500">*</span>
                          </Label>
                          <div className="relative">
                            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                              id="organization"
                              value={formData.organization}
                              onChange={handleChange("organization")}
                              placeholder="City Public Library"
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="organizationType">
                            Organization Type <span className="text-red-500">*</span>
                          </Label>
                          <select
                            id="organizationType"
                            value={formData.organizationType}
                            onChange={handleChange("organizationType")}
                            className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm font-body text-foreground outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition"
                            required
                          >
                            <option value="">Select type</option>
                            <option value="Public Library">Public Library</option>
                            <option value="Academic Library">Academic Library</option>
                            <option value="School Library">School Library</option>
                            <option value="Special Library">Special Library</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="state">
                            State / Region <span className="text-red-500">*</span>
                          </Label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                              id="state"
                              value={formData.state}
                              onChange={handleChange("state")}
                              placeholder="North Carolina"
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setActiveStep(1)}
                            className="flex-1"
                          >
                            Back
                          </Button>
                          <Button
                            type="button"
                            onClick={() => setActiveStep(3)}
                            className="flex-1"
                            disabled={!formData.organization || !formData.organizationType || !formData.state}
                          >
                            Continue
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Account Setup */}
                    {activeStep === 3 && (
                      <div className="space-y-4 animate-fade-in">
                        <div className="space-y-2">
                          <Label htmlFor="password">
                            Password <span className="text-red-500">*</span>
                          </Label>
                          <div className="relative">
                            <Input
                              id="password"
                              type={showPassword ? "text" : "password"}
                              value={formData.password}
                              onChange={handleChange("password")}
                              placeholder="Create a strong password"
                              className="pr-10"
                              required
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword((prev) => !prev)}
                              className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition"
                            >
                              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                          </div>
                          {/* Password strength indicator */}
                          {formData.password && (
                            <div className="space-y-1">
                              <div className="flex gap-1">
                                {[1, 2, 3, 4].map((level) => (
                                  <div
                                    key={level}
                                    className={`h-1 flex-1 rounded-full transition-all ${
                                      passwordStrength >= level
                                        ? level <= 2
                                          ? "bg-red-500"
                                          : level === 3
                                          ? "bg-yellow-500"
                                          : "bg-green-500"
                                        : "bg-muted"
                                    }`}
                                  />
                                ))}
                              </div>
                              <p className="text-[10px] text-muted-foreground">
                                {passwordStrength <= 2
                                  ? "Weak password"
                                  : passwordStrength === 3
                                  ? "Medium strength"
                                  : "Strong password"}
                              </p>
                            </div>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword">
                            Confirm Password <span className="text-red-500">*</span>
                          </Label>
                          <div className="relative">
                            <Input
                              id="confirmPassword"
                              type={showConfirmPassword ? "text" : "password"}
                              value={formData.confirmPassword}
                              onChange={handleChange("confirmPassword")}
                              placeholder="Confirm your password"
                              className="pr-10"
                              required
                            />
                            <button
                              type="button"
                              onClick={() => setShowConfirmPassword((prev) => !prev)}
                              className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition"
                            >
                              {showConfirmPassword ? (
                                <EyeOff className="w-4 h-4" />
                              ) : (
                                <Eye className="w-4 h-4" />
                              )}
                            </button>
                          </div>
                          {formData.confirmPassword &&
                            formData.password !== formData.confirmPassword && (
                              <p className="text-xs text-red-500 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" />
                                Passwords do not match
                              </p>
                            )}
                        </div>

                        <div className="flex items-start space-x-2 p-3 bg-secondary/50 rounded-lg border border-border">
                          <Checkbox
                            id="terms"
                            checked={formData.agreeToTerms}
                            onCheckedChange={(checked) =>
                              setFormData((prev) => ({ ...prev, agreeToTerms: !!checked }))
                            }
                          />
                          <Label
                            htmlFor="terms"
                            className="text-xs font-body cursor-pointer leading-relaxed"
                          >
                            I agree to the{" "}
                            <Link to="/terms" className="text-primary hover:underline">
                              Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link to="/privacy" className="text-primary hover:underline">
                              Privacy Policy
                            </Link>
                          </Label>
                        </div>

                        <div className="flex gap-3">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setActiveStep(2)}
                            className="flex-1"
                          >
                            Back
                          </Button>
                          <Button
                            type="submit"
                            className="flex-1"
                            disabled={
                              isSubmitting ||
                              !formData.password ||
                              formData.password !== formData.confirmPassword ||
                              !formData.agreeToTerms
                            }
                          >
                            {isSubmitting && (
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            )}
                            {isSubmitting ? "Creating Account..." : "Create Account"}
                          </Button>
                        </div>
                      </div>
                    )}
                  </form>

                  <div className="mt-6 pt-5 border-t border-border space-y-3 text-sm font-body">
                    <p className="text-muted-foreground text-center">
                      Already have an account?{" "}
                      <Link to="/login" className="text-primary font-medium hover:underline">
                        Sign in
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-card rounded-2xl border border-border p-6 md:p-7 w-[90%] max-w-md shadow-2xl relative animate-scale-in">
            <button
              type="button"
              onClick={() => {
                setShowSuccessModal(false);
                navigate("/login");
              }}
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Account Created Successfully!
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-4">
                We've sent a verification email to <strong>{formData.email}</strong>. Please check
                your inbox to verify your account.
              </p>
              <Button onClick={() => navigate("/login")} className="w-full">
                Go to Login
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Register;

