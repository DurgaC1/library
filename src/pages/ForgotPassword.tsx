import { useState, FormEvent, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Mail,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Loader2,
  ShieldCheck,
  Lock,
  KeyRound,
  Clock,
  AlertCircle,
  Info,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  BookOpen,
  Users,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const securityTips = [
  {
    icon: ShieldCheck,
    title: "Secure Reset Process",
    description: "Your password reset link is encrypted and expires after 1 hour.",
  },
  {
    icon: Clock,
    title: "Quick Recovery",
    description: "Receive your reset link within minutes in your inbox.",
  },
  {
    icon: Lock,
    title: "Account Protection",
    description: "We never share your email or account information.",
  },
];

const faqItems = [
  {
    question: "How long does the reset link last?",
    answer: "The password reset link expires after 1 hour for security purposes. If it expires, you can request a new one.",
  },
  {
    question: "I didn't receive the email. What should I do?",
    answer: "Check your spam folder first. If you still don't see it, wait a few minutes and try requesting again. Make sure you're using the correct email address.",
  },
  {
    question: "Can I reset my password if I forgot my email?",
    answer: "You'll need to contact our support team at support@libraryone.com with your account details to recover access.",
  },
];

const ForgotPassword = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [resetCode, setResetCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState<"email" | "verify" | "reset">("email");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleEmailSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setStep("verify");
      toast({
        title: "Reset link sent!",
        description: "Please check your email for the password reset code.",
      });
    }, 1200);
  };

  const handleVerifySubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setStep("reset");
      toast({
        title: "Code verified!",
        description: "You can now set your new password.",
      });
    }, 1000);
  };

  const handleResetSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
      toast({
        title: "Password reset successful!",
        description: "Your password has been updated. You can now log in.",
      });
    }, 1200);
  };

  const nextCarousel = () => setCarouselIndex((prev) => (prev + 1) % securityTips.length);
  const prevCarousel = () =>
    setCarouselIndex((prev) => (prev - 1 + securityTips.length) % securityTips.length);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden">
          {/* Animated background */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-secondary via-background to-background" />
          <div className="pointer-events-none absolute -top-24 -right-10 w-72 h-72 rounded-full bg-primary/20 blur-3xl animate-pulse" />
          <div
            className="pointer-events-none absolute bottom-[-40px] left-[-40px] w-64 h-64 rounded-full bg-primary/15 blur-3xl animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />

          <div className="relative z-10 container mx-auto px-4 py-8 lg:py-12 flex flex-col lg:flex-row gap-10 lg:gap-14">
            {/* LEFT PANEL — Info and features */}
            <div className="flex-1 flex flex-col justify-between gap-10">
              <div>
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground mb-3">
                  <Link to="/" className="hover:text-foreground transition-colors">
                    Home
                  </Link>
                  <span>/</span>
                  <Link to="/login" className="hover:text-foreground transition-colors">
                    Login
                  </Link>
                  <span>/</span>
                  <span className="text-foreground font-medium">Forgot Password</span>
                </nav>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border mb-4 shadow-sm">
                  <KeyRound className="w-4 h-4 text-primary" />
                  <span className="text-[11px] font-medium text-foreground">
                    Password Recovery
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
                  Reset your password
                </h2>
                <p className="font-body text-sm md:text-base text-muted-foreground max-w-xl mb-5">
                  Don't worry! Enter your email address and we'll send you instructions to reset
                  your password.
                </p>

                {/* Progress stepper */}
                <div className="flex items-center gap-2 mb-6">
                  <div
                    className={`flex items-center gap-2 ${
                      step === "email" ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold transition-all ${
                        step === "email"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      1
                    </div>
                    <span className="text-xs font-medium">Enter Email</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  <div
                    className={`flex items-center gap-2 ${
                      step === "verify" ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold transition-all ${
                        step === "verify"
                          ? "bg-primary text-primary-foreground"
                          : step === "reset"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {step === "reset" ? <CheckCircle2 className="w-3 h-3" /> : "2"}
                    </div>
                    <span className="text-xs font-medium">Verify Code</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  <div
                    className={`flex items-center gap-2 ${
                      step === "reset" ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold transition-all ${
                        step === "reset"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      3
                    </div>
                    <span className="text-xs font-medium">New Password</span>
                  </div>
                </div>
              </div>

              {/* Security tips carousel */}
              <div className="bg-card/90 backdrop-blur-xl border border-border rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-accent" />
                    <p className="font-display text-xs font-semibold text-foreground">
                      Security Features
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={prevCarousel}
                      className="p-1 rounded-full hover:bg-secondary transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4 text-muted-foreground" />
                    </button>
                    <button
                      type="button"
                      onClick={nextCarousel}
                      className="p-1 rounded-full hover:bg-secondary transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </div>
                </div>

                {isLoading ? (
                  <div className="space-y-3 animate-pulse">
                    <div className="h-3 rounded bg-muted w-11/12" />
                    <div className="h-3 rounded bg-muted w-10/12" />
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg hero-gradient flex items-center justify-center">
                        {(() => {
                          const CurrentIcon = securityTips[carouselIndex].icon;
                          return <CurrentIcon className="w-4 h-4 text-card" />;
                        })()}
                      </div>
                      <p className="font-display text-sm font-semibold text-foreground">
                        {securityTips[carouselIndex].title}
                      </p>
                    </div>
                    <p className="font-body text-xs text-muted-foreground">
                      {securityTips[carouselIndex].description}
                    </p>
                    <div className="mt-3 flex items-center justify-between text-[11px] text-muted-foreground">
                      <span>
                        {carouselIndex + 1} / {securityTips.length}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* FAQ Accordion */}
              <div className="bg-card/90 backdrop-blur-xl border border-border rounded-2xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Info className="w-4 h-4 text-primary" />
                  <p className="font-display text-xs font-semibold text-foreground">
                    Frequently Asked Questions
                  </p>
                </div>
                <div className="space-y-2">
                  {faqItems.map((faq, index) => (
                    <details
                      key={index}
                      className="group"
                      open={activeFaq === index}
                      onToggle={() => setActiveFaq(activeFaq === index ? null : index)}
                    >
                      <summary className="flex items-center justify-between cursor-pointer list-none text-xs font-semibold text-foreground py-2 hover:text-primary transition-colors">
                        <span>{faq.question}</span>
                        <ChevronRight className="w-3 h-3 text-muted-foreground transition-transform group-open:rotate-90" />
                      </summary>
                      <p className="text-[11px] text-muted-foreground mt-1 pb-2 pl-4">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT PANEL — Reset form */}
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full max-w-md">
                <div className="bg-card/95 backdrop-blur-xl border border-border rounded-2xl p-7 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
                  <div className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />

                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
                    {step === "email"
                      ? "Enter your email"
                      : step === "verify"
                      ? "Verify reset code"
                      : "Set new password"}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-6">
                    {step === "email"
                      ? "We'll send you a reset code"
                      : step === "verify"
                      ? "Check your email for the code"
                      : "Create a strong new password"}
                  </p>

                  {/* Step 1: Email */}
                  {step === "email" && (
                    <form onSubmit={handleEmailSubmit} className="space-y-5 animate-fade-in">
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Email Address <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your.email@library.org"
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <Button type="submit" className="w-full" disabled={isSubmitting || !email}>
                        {isSubmitting && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                        {isSubmitting ? "Sending..." : "Send Reset Code"}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>

                      <div className="p-3 bg-secondary/50 rounded-lg border border-border">
                        <div className="flex items-start gap-2">
                          <Info className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <p className="text-xs text-muted-foreground">
                            If an account exists with this email, you'll receive a password reset
                            code within a few minutes.
                          </p>
                        </div>
                      </div>
                    </form>
                  )}

                  {/* Step 2: Verify Code */}
                  {step === "verify" && (
                    <form onSubmit={handleVerifySubmit} className="space-y-5 animate-fade-in">
                      <div className="space-y-2">
                        <Label htmlFor="resetCode">
                          Reset Code <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="resetCode"
                            type="text"
                            value={resetCode}
                            onChange={(e) => setResetCode(e.target.value)}
                            placeholder="Enter 6-digit code"
                            className="pl-10 text-center text-lg tracking-widest font-mono"
                            maxLength={6}
                            required
                          />
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Enter the 6-digit code sent to {email}
                        </p>
                      </div>

                      <div className="flex gap-3">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setStep("email")}
                          className="flex-1"
                        >
                          <ArrowLeft className="w-4 h-4 mr-2" />
                          Back
                        </Button>
                        <Button
                          type="submit"
                          className="flex-1"
                          disabled={isSubmitting || resetCode.length !== 6}
                        >
                          {isSubmitting && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                          {isSubmitting ? "Verifying..." : "Verify Code"}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>

                      <div className="p-3 bg-secondary/50 rounded-lg border border-border">
                        <p className="text-xs text-muted-foreground text-center">
                          Didn't receive the code?{" "}
                          <button
                            type="button"
                            onClick={handleEmailSubmit}
                            className="text-primary hover:underline font-medium"
                          >
                            Resend
                          </button>
                        </p>
                      </div>
                    </form>
                  )}

                  {/* Step 3: New Password */}
                  {step === "reset" && (
                    <form onSubmit={handleResetSubmit} className="space-y-5 animate-fade-in">
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">
                          New Password <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="newPassword"
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder="Enter new password"
                            className="pl-10"
                            required
                            minLength={8}
                          />
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Must be at least 8 characters with letters and numbers
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">
                          Confirm Password <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm new password"
                            className="pl-10"
                            required
                          />
                        </div>
                        {confirmPassword &&
                          newPassword !== confirmPassword && (
                            <p className="text-xs text-red-500 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              Passwords do not match
                            </p>
                          )}
                      </div>

                      <div className="flex gap-3">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setStep("verify")}
                          className="flex-1"
                        >
                          <ArrowLeft className="w-4 h-4 mr-2" />
                          Back
                        </Button>
                        <Button
                          type="submit"
                          className="flex-1"
                          disabled={
                            isSubmitting ||
                            !newPassword ||
                            newPassword !== confirmPassword ||
                            newPassword.length < 8
                          }
                        >
                          {isSubmitting && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                          {isSubmitting ? "Resetting..." : "Reset Password"}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </form>
                  )}

                  <div className="mt-6 pt-5 border-t border-border space-y-3 text-sm font-body">
                    <p className="text-muted-foreground text-center">
                      Remember your password?{" "}
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
          <div className="bg-card rounded-2xl border border-border p-6 md:p-7 w-[90%] max-w-md shadow-2xl relative animate-scale-in text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Password Reset Successful!
            </h3>
            <p className="font-body text-sm text-muted-foreground mb-4">
              Your password has been updated. You can now log in with your new password.
            </p>
            <Button onClick={() => navigate("/login")} className="w-full">
              Go to Login
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ForgotPassword;

