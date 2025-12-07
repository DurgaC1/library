import { useState, useEffect, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Check,
  Calendar,
  Users,
  Presentation,
  Clock,
  Video,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Star,
  Sparkles,
  Award,
  TrendingUp,
  ShieldCheck,
  Zap,
  BookOpen,
  Loader2,
  X,
  Info,
  HelpCircle,
  CheckCircle2,
  AlertCircle,
  Globe2,
  Building2,
  UserCircle2,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-library.jpg";

const benefits = [
  {
    icon: Presentation,
    title: "Personalized Walkthrough",
    description: "See features tailored to your library's needs",
  },
  {
    icon: TrendingUp,
    title: "Custom Recommendations",
    description: "Get solution recommendations from experts",
  },
  {
    icon: Clock,
    title: "Quick Scheduling",
    description: "Book a demo in just 30 minutes",
  },
  {
    icon: ShieldCheck,
    title: "No Commitment",
    description: "Explore without any pressure to buy",
  },
];

const demoTypes = [
  { id: "live", label: "Live Demo", icon: Video, description: "Interactive session with our team" },
  { id: "recorded", label: "Recorded Demo", icon: Presentation, description: "Watch at your convenience" },
  { id: "self-guided", label: "Self-Guided Tour", icon: Globe2, description: "Explore on your own" },
];

const testimonials = [
  {
    quote: "The demo helped us understand exactly how LibraryOne would fit into our workflow. Game changer!",
    name: "Sarah Martinez",
    role: "Digital Services Director",
    organization: "Metro Public Library",
    initials: "SM",
    rating: 5,
  },
  {
    quote: "Best 30 minutes we spent this quarter. The team answered all our questions and showed us features we didn't know existed.",
    name: "David Chen",
    role: "Library Director",
    organization: "University Library System",
    initials: "DC",
    rating: 5,
  },
  {
    quote: "We were skeptical about switching platforms, but the demo convinced us. Implementation was smooth too!",
    name: "Emily Rodriguez",
    role: "Collection Manager",
    organization: "Community Library Network",
    initials: "ER",
    rating: 5,
  },
];

const faqItems = [
  {
    question: "How long does a demo take?",
    answer: "Our standard demo sessions are 30 minutes, but we can extend to 60 minutes for more detailed discussions about your specific needs.",
  },
  {
    question: "What will I see in the demo?",
    answer: "You'll see a personalized walkthrough of LibraryOne features, including collection management, patron interface, analytics dashboard, and integration capabilities.",
  },
  {
    question: "Do I need to prepare anything?",
    answer: "No preparation needed! Just come with questions about your library's needs. We'll tailor the demo to show relevant features.",
  },
  {
    question: "Can I schedule a follow-up demo?",
    answer: "Absolutely! Many libraries schedule multiple demos to show different features to different team members.",
  },
];

const features = [
  { name: "Collection Management", icon: BookOpen },
  { name: "Analytics Dashboard", icon: TrendingUp },
  { name: "Patron Portal", icon: Users },
  { name: "Mobile App", icon: Zap },
  { name: "API Integration", icon: Globe2 },
  { name: "Security Features", icon: ShieldCheck },
];

const Demo = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    libraryType: "",
    patrons: "",
    demoType: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
    agreeToTerms: false,
  });

  const [activeTab, setActiveTab] = useState("live");
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const [showHelpDrawer, setShowHelpDrawer] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
      toast({
        title: "Demo Request Submitted!",
        description: "Our team will contact you within 24 hours to schedule your demo.",
      });
    }, 1500);
  };

  const nextTestimonial = () =>
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const steps = [
    { number: 1, label: "Contact Info", completed: currentStep > 1 },
    { number: 2, label: "Library Details", completed: currentStep > 2 },
    { number: 3, label: "Demo Preferences", completed: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section with Parallax */}
        <section className="relative pt-28 md:pt-32 pb-20 min-h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Library demo"
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
              <span className="text-card">Request Demo</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card/10 backdrop-blur-sm border border-card/20 text-xs md:text-sm text-card/90 mb-4">
                  <Sparkles className="w-4 h-4" />
                  Schedule Your Demo
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-card mb-4 leading-tight">
                  See LibraryOne in Action
                </h1>
                <p className="font-body text-base md:text-lg text-card/85 mb-4 max-w-xl">
                  Experience a personalized walkthrough of our platform. See how LibraryOne can
                  transform your library's digital experience with powerful features and intuitive design.
                </p>
                <p className="font-body text-sm md:text-base text-card/70 max-w-xl">
                  Join thousands of libraries already using LibraryOne to deliver exceptional
                  digital experiences to their patrons.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-6 mt-8">
                  <div className="bg-card/10 backdrop-blur border border-card/20 rounded-xl p-4 text-center">
                    <Calendar className="w-6 h-6 text-card mx-auto mb-2" />
                    <p className="font-display text-2xl font-bold text-card">30 min</p>
                    <p className="font-body text-xs text-card/70">Session</p>
                  </div>
                  <div className="bg-card/10 backdrop-blur border border-card/20 rounded-xl p-4 text-center">
                    <Users className="w-6 h-6 text-card mx-auto mb-2" />
                    <p className="font-display text-2xl font-bold text-card">24hr</p>
                    <p className="font-body text-xs text-card/70">Response</p>
                  </div>
                  <div className="bg-card/10 backdrop-blur border border-card/20 rounded-xl p-4 text-center">
                    <Award className="w-6 h-6 text-card mx-auto mb-2" />
                    <p className="font-display text-2xl font-bold text-card">100%</p>
                    <p className="font-body text-xs text-card/70">Satisfaction</p>
                  </div>
                </div>
              </div>

              {/* Hero Card with Carousel */}
              <div className="relative">
                <div className="bg-card/90 backdrop-blur rounded-2xl border border-border p-6 md:p-7 card-elevated shadow-[0_24px_70px_rgba(15,23,42,0.6)]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full hero-gradient flex items-center justify-center">
                        <Star className="w-5 h-5 text-card" />
                      </div>
                      <div>
                        <p className="font-display text-sm font-semibold text-foreground">
                          What libraries say
                        </p>
                        <p className="font-body text-xs text-muted-foreground">
                          Real feedback from our partners
                        </p>
                      </div>
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
                    <div className="transition-all duration-300">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(testimonials[testimonialIndex].rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="font-body text-sm text-foreground mb-3 italic">
                        "{testimonials[testimonialIndex].quote}"
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full hero-gradient text-card text-xs font-semibold flex items-center justify-center">
                          {testimonials[testimonialIndex].initials}
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-foreground">
                            {testimonials[testimonialIndex].name}
                          </p>
                          <p className="text-[11px] text-muted-foreground">
                            {testimonials[testimonialIndex].role}
                          </p>
                          <p className="text-[11px] text-muted-foreground">
                            {testimonials[testimonialIndex].organization}
                          </p>
                        </div>
                        <span className="ml-auto text-[11px] text-muted-foreground">
                          {testimonialIndex + 1} / {testimonials.length}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="absolute -inset-6 bg-gradient-to-tr from-primary/10 via-transparent to-primary/10 blur-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section with Cards */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block text-primary font-body font-semibold text-sm uppercase tracking-wider mb-4">
                Why Schedule a Demo
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                See How LibraryOne Works for You
              </h2>
              <p className="font-body text-sm md:text-base text-muted-foreground">
                Our demos are designed to show you exactly how LibraryOne can solve your specific challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="bg-card rounded-xl p-6 card-elevated border border-border text-center relative overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="w-14 h-14 hero-gradient rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-7 h-7 text-card" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Form Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Form Column */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-2xl border border-border p-6 md:p-8 card-elevated shadow-lg">
                  {/* Stepper */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      {steps.map((step, index) => (
                        <div key={step.number} className="flex items-center flex-1">
                          <div className="flex flex-col items-center flex-1">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all ${
                                step.completed || currentStep === step.number
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
                        style={{ width: `${(currentStep / steps.length) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">
                        Request Your Demo
                      </h2>
                      <p className="font-body text-sm text-muted-foreground">
                        Step {currentStep} of {steps.length} • Complete the form below
                      </p>
                    </div>
                    <div className="hidden md:flex flex-col items-end text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-primary" />
                        Secure form
                      </span>
                      <span>Average response: 24 hours</span>
                    </div>
                  </div>

                  {/* Tabs for Demo Type */}
                  <div className="mb-6">
                    <p className="font-body text-xs text-muted-foreground mb-2 flex items-center gap-2">
                      <Info className="w-4 h-4 text-primary" />
                      Choose your demo type
                    </p>
                    <div className="inline-flex rounded-full bg-card border border-border p-1 text-xs">
                      {demoTypes.map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => {
                            setActiveTab(type.id);
                            setFormData((prev) => ({ ...prev, demoType: type.id }));
                          }}
                          className={`px-4 py-2 rounded-full text-sm font-body flex items-center gap-2 transition-all ${
                            activeTab === type.id
                              ? "bg-primary text-primary-foreground shadow-sm"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          <type.icon className="w-4 h-4" />
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Step 1: Contact Info */}
                    {currentStep === 1 && (
                      <div className="space-y-5 animate-fade-in">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div className="space-y-2">
                            <Label htmlFor="firstName" className="font-body">
                              First Name <span className="text-red-500">*</span>
                            </Label>
                            <Input
                              id="firstName"
                              value={formData.firstName}
                              onChange={(e) =>
                                setFormData({ ...formData, firstName: e.target.value })
                              }
                              placeholder="John"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName" className="font-body">
                              Last Name <span className="text-red-500">*</span>
                            </Label>
                            <Input
                              id="lastName"
                              value={formData.lastName}
                              onChange={(e) =>
                                setFormData({ ...formData, lastName: e.target.value })
                              }
                              placeholder="Doe"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email" className="font-body">
                            Work Email <span className="text-red-500">*</span>
                          </Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                              }
                              placeholder="john.doe@library.org"
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone" className="font-body">Phone Number</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                              id="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={(e) =>
                                setFormData({ ...formData, phone: e.target.value })
                              }
                              placeholder="(555) 123-4567"
                              className="pl-10"
                            />
                          </div>
                        </div>

                        <Button
                          type="button"
                          onClick={() => setCurrentStep(2)}
                          className="w-full"
                          disabled={!formData.firstName || !formData.lastName || !formData.email}
                        >
                          Continue
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    )}

                    {/* Step 2: Library Details */}
                    {currentStep === 2 && (
                      <div className="space-y-5 animate-fade-in">
                        <div className="space-y-2">
                          <Label htmlFor="organization" className="font-body">
                            Organization <span className="text-red-500">*</span>
                          </Label>
                          <div className="relative">
                            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                              id="organization"
                              value={formData.organization}
                              onChange={(e) =>
                                setFormData({ ...formData, organization: e.target.value })
                              }
                              placeholder="City Public Library"
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label className="font-body">
                            Library Type <span className="text-red-500">*</span>
                          </Label>
                          <Select
                            value={formData.libraryType}
                            onValueChange={(value) =>
                              setFormData({ ...formData, libraryType: value })
                            }
                            required
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select library type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="public">Public Library</SelectItem>
                              <SelectItem value="academic">Academic Library</SelectItem>
                              <SelectItem value="school">School Library</SelectItem>
                              <SelectItem value="corporate">Corporate Library</SelectItem>
                              <SelectItem value="special">Special Library</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label className="font-body">Number of Patrons</Label>
                          <Select
                            value={formData.patrons}
                            onValueChange={(value) =>
                              setFormData({ ...formData, patrons: value })
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="small">Under 5,000</SelectItem>
                              <SelectItem value="medium">5,000 - 25,000</SelectItem>
                              <SelectItem value="large">25,000 - 100,000</SelectItem>
                              <SelectItem value="enterprise">100,000+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="flex gap-3">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setCurrentStep(1)}
                            className="flex-1"
                          >
                            Back
                          </Button>
                          <Button
                            type="button"
                            onClick={() => setCurrentStep(3)}
                            className="flex-1"
                            disabled={!formData.organization || !formData.libraryType}
                          >
                            Continue
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Demo Preferences */}
                    {currentStep === 3 && (
                      <div className="space-y-5 animate-fade-in">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div className="space-y-2">
                            <Label htmlFor="preferredDate" className="font-body">
                              Preferred Date
                            </Label>
                            <Input
                              id="preferredDate"
                              type="date"
                              value={formData.preferredDate}
                              onChange={(e) =>
                                setFormData({ ...formData, preferredDate: e.target.value })
                              }
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="preferredTime" className="font-body">
                              Preferred Time
                            </Label>
                            <Select
                              value={formData.preferredTime}
                              onValueChange={(value) =>
                                setFormData({ ...formData, preferredTime: value })
                              }
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select time" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                                <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                                <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message" className="font-body">
                            Additional Information
                          </Label>
                          <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) =>
                              setFormData({ ...formData, message: e.target.value })
                            }
                            placeholder="Tell us about your specific needs, questions, or areas you'd like to focus on..."
                            rows={4}
                          />
                        </div>

                        {/* Feature Chips */}
                        <div className="space-y-2">
                          <Label className="font-body text-xs text-muted-foreground">
                            Features you're interested in (optional)
                          </Label>
                          <div className="flex flex-wrap gap-2">
                            {features.map((feature) => (
                              <div
                                key={feature.name}
                                className="px-3 py-1.5 rounded-full bg-secondary border border-border text-xs font-body text-foreground flex items-center gap-2 hover:border-primary/60 hover:bg-primary/5 transition-all cursor-pointer"
                              >
                                <feature.icon className="w-3 h-3 text-primary" />
                                {feature.name}
                              </div>
                            ))}
                          </div>
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
                            I agree to receive communications from LibraryOne and understand that my
                            information will be used according to our{" "}
                            <Link to="/privacy-policy" className="text-primary hover:underline">
                              Privacy Policy
                            </Link>
                            .
                          </Label>
                        </div>

                        <div className="flex gap-3">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setCurrentStep(2)}
                            className="flex-1"
                          >
                            Back
                          </Button>
                          <Button
                            type="submit"
                            className="flex-1"
                            disabled={isSubmitting || !formData.agreeToTerms}
                          >
                            {isSubmitting && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                            {isSubmitting ? "Submitting..." : "Schedule My Demo"}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </form>
                </div>
              </div>

              {/* Sidebar Column */}
              <div className="space-y-6">
                {/* Benefits Card */}
                <div className="bg-card rounded-2xl border border-border p-6 card-elevated">
                  <h3 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    What's Included
                  </h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit) => (
                      <li key={benefit.title} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <div>
                          <p className="font-display text-sm font-semibold text-foreground">
                            {benefit.title}
                          </p>
                          <p className="font-body text-xs text-muted-foreground">
                            {benefit.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* FAQ Accordion */}
                <div className="bg-card rounded-2xl border border-border p-6 card-elevated">
                  <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-primary" />
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-2">
                    {faqItems.map((faq, index) => (
                      <details
                        key={index}
                        className="group border-b border-border/70 pb-3 last:border-0"
                        open={activeFaq === index}
                        onToggle={() => setActiveFaq(activeFaq === index ? null : index)}
                      >
                        <summary className="flex items-center justify-between cursor-pointer list-none">
                          <span className="font-display text-sm font-semibold text-foreground">
                            {faq.question}
                          </span>
                          <ChevronDown className="w-4 h-4 text-muted-foreground transition-transform group-open:rotate-180" />
                        </summary>
                        <p className="mt-2 text-xs font-body text-muted-foreground">
                          {faq.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>

                {/* Contact Card */}
                <div className="bg-secondary rounded-2xl p-6 border border-border/60 relative overflow-hidden">
                  <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-tr from-primary/20 to-primary/20 blur-2xl" />
                  <h3 className="font-display text-lg font-semibold mb-3">Need Help?</h3>
                  <p className="font-body text-sm text-muted-foreground mb-4">
                    Our team is here to assist you. Reach out anytime.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-body text-xs font-semibold text-foreground">Phone</p>
                        <a
                          href="tel:1-800-775-1800"
                          className="font-body text-xs text-primary hover:underline"
                        >
                          1-800-775-1800
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-body text-xs font-semibold text-foreground">Email</p>
                        <a
                          href="mailto:demo@libraryone.com"
                          className="font-body text-xs text-primary hover:underline"
                        >
                          demo@libraryone.com
                        </a>
                      </div>
                    </div>
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
          <div className="bg-card rounded-2xl border border-border p-6 md:p-8 max-w-md w-[90%] shadow-2xl relative animate-scale-in">
            <button
              type="button"
              onClick={() => {
                setShowSuccessModal(false);
                navigate("/");
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
                Demo Request Received!
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-4">
                Thank you for your interest! Our team will contact you at{" "}
                <strong className="text-foreground">{formData.email}</strong> within 24 hours to
                schedule your personalized demo.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={() => navigate("/")} className="flex-1">
                  Return Home
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowSuccessModal(false);
                    setFormData({
                      firstName: "",
                      lastName: "",
                      email: "",
                      phone: "",
                      organization: "",
                      libraryType: "",
                      patrons: "",
                      demoType: "",
                      preferredDate: "",
                      preferredTime: "",
                      message: "",
                      agreeToTerms: false,
                    });
                    setCurrentStep(1);
                  }}
                  className="flex-1"
                >
                  Request Another
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Off-canvas Help Drawer */}
      <button
        type="button"
        onClick={() => setShowHelpDrawer(true)}
        className="fixed bottom-5 right-5 z-30 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-primary text-primary-foreground text-sm font-body shadow-lg hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5 transition-all"
      >
        <HelpCircle className="w-5 h-5" />
        Need Help?
      </button>

      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-full bg-card border-l border-border shadow-2xl z-40 transform transition-transform duration-300 ${
          showHelpDrawer ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-secondary/80">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-primary" />
            <p className="font-display text-sm font-semibold text-foreground">Quick Help</p>
          </div>
          <button
            type="button"
            onClick={() => setShowHelpDrawer(false)}
            className="p-1 rounded-full hover:bg-secondary transition-colors"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>

        <div className="p-4 space-y-4 text-sm font-body text-foreground">
          <p className="text-muted-foreground">
            Have questions about scheduling a demo? We're here to help!
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-xs text-foreground">Call us</p>
                <a
                  href="tel:1-800-775-1800"
                  className="text-xs text-primary hover:underline block"
                >
                  1-800-775-1800
                </a>
                <p className="text-xs text-muted-foreground">Mon-Fri, 8AM-6PM EST</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-xs text-foreground">Email us</p>
                <a
                  href="mailto:demo@libraryone.com"
                  className="text-xs text-primary hover:underline block"
                >
                  demo@libraryone.com
                </a>
                <p className="text-xs text-muted-foreground">We respond within 24 hours</p>
              </div>
            </div>
          </div>

          <details className="group border-t border-border pt-3">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span className="text-xs font-semibold text-foreground">
                Common questions
              </span>
              <ChevronDown className="w-4 h-4 text-muted-foreground transition-transform group-open:rotate-180" />
            </summary>
            <ul className="mt-2 list-disc list-inside text-[11px] text-muted-foreground space-y-1">
              <li>Demos are typically 30 minutes</li>
              <li>No commitment required</li>
              <li>We can accommodate your schedule</li>
              <li>Bring your team members</li>
            </ul>
          </details>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Demo;
