import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Share2,
  Globe,
  Download,
  Search,
  Languages,
  CheckCircle2,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import patternImage from "@/assets/pattern-books.jpg";

const PressReader = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    libraryName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Demo Request Submitted",
        description:
          "We'll get back to you soon about your free Press Reader demo!",
      });
      setFormData({
        customerName: "",
        libraryName: "",
        email: "",
        message: "",
      });
    }, 1500);
  };

  // Content aligned with the reference "Key Features" section
  const features = [
    {
      icon: Globe,
      title: "Access to 7,000+ global publications",
      description:
        "Offer patrons thousands of newspapers and magazines from around the world.",
    },
    {
      icon: Download,
      title: "Full-color, full-format periodicals",
      description:
        "Give readers an experience that mirrors the print edition in a digital format.",
    },
    {
      icon: Search,
      title: "Mobile-friendly reading experience",
      description:
        "Enjoy responsive reading on smartphones, tablets, and laptops anywhere.",
    },
    {
      icon: Languages,
      title: "Multi-language support",
      description:
        "Serve diverse communities with content across multiple languages.",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-20 overflow-visible">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 opacity-10">
            <img
              src={patternImage}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumbs */}
              <nav className="flex items-center gap-2 text-xs md:text-sm text-card/80 mb-6">
                <Link to="/" className="hover:text-card transition-colors">
                  Home
                </Link>
                <span>/</span>
                {/* NOTE: Space in label to match reference: "Press Reader" */}
                <span className="text-card font-medium">Press Reader</span>
              </nav>

              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="font-display text-4xl md:text-5xl font-bold text-card mb-4">
                    Press Reader
                  </h1>
                  <p className="text-lg text-card/90 font-body">
                    eNewspapers and eMagazines
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-card/10 backdrop-blur border-card/20 text-card hover:bg-card/20"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>

              <div className="bg-card/10 backdrop-blur border border-card/20 rounded-lg p-4 mb-8">
                <p className="text-card font-semibold">
                  LibraryOne integrates with <strong>Press Reader</strong> to offer
                  thousands of newspapers and magazines from around the world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Description */}
              <div className="mb-12">
                <p className="text-lg text-muted-foreground mb-6 font-body leading-relaxed">
                  LibraryOne integrates with{" "}
                  <strong className="text-foreground">Press Reader</strong> to
                  offer patrons access to thousands of newspapers and magazines
                  from around the world. With easy digital access, readers can
                  stay informed on global news, trends, culture, and
                  entertainment.
                </p>
                <p className="text-lg text-muted-foreground font-body leading-relaxed">
                  With full-color, full-format periodicals and a
                  mobile-friendly experience, Press Reader helps your library
                  reach more readers—wherever they are and on whatever device
                  they prefer.
                </p>
              </div>

              {/* Features Grid */}
              <div className="mb-12">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-card rounded-xl p-6 border border-border card-elevated"
                    >
                      <div className="w-12 h-12 hero-gradient rounded-lg flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-card" />
                      </div>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-body">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Single Sign-On Note (extra detail, still fine with reference) */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      Single Sign-On Integration
                    </h3>
                    <p className="text-muted-foreground font-body">
                      Single sign-on gives patrons, students, and faculty
                      integrated access to all Press Reader content alongside
                      your other digital resources.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact info from reference */}
              <div className="mb-10">
                <p className="text-muted-foreground font-body">
                  To enable Press Reader for your library, contact:
                  <br />
                  <strong className="text-foreground">
                    solutions@libraryone.com
                  </strong>
                </p>
              </div>

              {/* Demo Request Form (your extra section, kept as-is) */}
              <div className="bg-card rounded-xl p-8 md:p-10 border border-border card-elevated">
                <div className="mb-6">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Request a Free Demo
                  </h2>
                  <p className="text-muted-foreground font-body">
                    Ask us about a free week trial for new customers!
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="customerName" className="text-foreground">
                        Customer Name{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="customerName"
                        type="text"
                        required
                        value={formData.customerName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            customerName: e.target.value,
                          })
                        }
                        placeholder="Enter your name"
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="libraryName" className="text-foreground">
                        Library Name{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="libraryName"
                        type="text"
                        required
                        value={formData.libraryName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            libraryName: e.target.value,
                          })
                        }
                        placeholder="Enter library name"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email Address{" "}
                      <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="your.email@example.com"
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Tell us more about how your library would like to use
                      Press Reader
                    </Label>
                    <Textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Share details about your library's needs and how you'd like to use Press Reader..."
                      className="w-full resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Request a Free Demo"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PressReader;
