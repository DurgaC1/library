import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login Attempted",
      description: "This is a demo. Login functionality would be implemented with a backend.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="min-h-[calc(100vh-5rem)] flex">
          {/* Left Side - Welcome */}
          <div className="hidden lg:flex lg:flex-1 hero-gradient relative">
            <div className="absolute inset-0 bg-[url('/pattern-books.jpg')] opacity-10" />
            <div className="relative z-10 flex flex-col justify-center p-12 max-w-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 bg-card rounded-xl flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-card">
                    Library One
                  </h2>
                  <p className="text-card/60 text-sm font-body">Digital Solutions</p>
                </div>
              </div>

              <h1 className="font-display text-4xl font-bold text-card mb-6">
                Welcome!
              </h1>
              <p className="font-body text-lg text-card/80 mb-8">
                Library One is a dynamic, state-of-the-art ordering system. 
                The site offers features designed to help you easily find the 
                titles you need and manage your orders more efficiently.
              </p>

              <Link to="/" className="inline-flex items-center gap-2 text-card font-medium group">
                <span>Click here to learn more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="w-full max-w-md">
              {/* Mobile Logo */}
              <div className="lg:hidden flex items-center gap-3 mb-8 justify-center">
                <div className="w-12 h-12 hero-gradient rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-card" />
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground">
                    Library One
                  </h2>
                </div>
              </div>

              <div className="bg-card rounded-xl border border-border p-8 card-elevated">
                <div className="mb-8">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                    Login to your account
                  </h2>
                  <p className="font-body text-muted-foreground text-sm">
                    Enter your credentials to access your dashboard
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="loginId" className="font-body">
                      Login ID <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="loginId"
                      type="text"
                      value={loginId}
                      onChange={(e) => setLoginId(e.target.value)}
                      placeholder="Enter your login ID"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="font-body">
                      Password <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={rememberMe}
                      onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    />
                    <Label htmlFor="remember" className="font-body text-sm cursor-pointer">
                      Remember me
                    </Label>
                  </div>

                  <div className="flex gap-3">
                    <Button type="submit" variant="default" className="flex-1">
                      LOGIN
                    </Button>
                    <Button type="button" variant="outline">
                      CANCEL
                    </Button>
                  </div>
                </form>

                <div className="mt-6 pt-6 border-t border-border space-y-3">
                  <div className="flex gap-4 text-sm font-body">
                    <a href="#" className="text-primary hover:underline">
                      Forgot Login ID?
                    </a>
                    <a href="#" className="text-primary hover:underline">
                      Forgot Password?
                    </a>
                  </div>
                  <p className="text-sm font-body text-muted-foreground">
                    Not Registered?{" "}
                    <a href="#" className="text-primary hover:underline font-medium">
                      Register Now
                    </a>
                  </p>
                </div>

                <p className="mt-6 text-xs text-muted-foreground font-body">
                  <span className="text-destructive">*</span> indicates required field
                </p>
              </div>

              {/* Testimonials */}
              <div className="mt-8 space-y-4">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  What Our Users Say
                </h3>
                <div className="bg-secondary rounded-lg p-4 border border-border">
                  <p className="font-body text-sm italic text-muted-foreground mb-3">
                    "We are loving Library One here, and we would all like to compliment 
                    you on your amazing fill rate. Lightning fast!"
                  </p>
                  <p className="font-body text-xs text-muted-foreground">
                    – Robert Colbaugh, Washington County Public Library
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
