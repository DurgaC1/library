import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, Calendar, Users, Presentation } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import patternImage from "@/assets/pattern-books.jpg";

const benefits = [
  "Personalized walkthrough of all features",
  "Custom solution recommendations",
  "Pricing and implementation timeline",
  "Q&A with our product specialists",
];

const Demo = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    libraryType: "",
    patrons: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demo Request Submitted!",
      description: "Our team will contact you within 24 hours to schedule your demo.",
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      organization: "",
      libraryType: "",
      patrons: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="min-h-[calc(100vh-5rem)] flex">
          {/* Left Side - Info */}
          <div className="hidden lg:flex lg:w-2/5 hero-gradient relative">
            <div className="absolute inset-0 opacity-10">
              <img src={patternImage} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 flex flex-col justify-center p-12">
              <h1 className="font-display text-4xl font-bold text-card mb-6">
                See Library One in Action
              </h1>
              <p className="font-body text-lg text-card/80 mb-10">
                Schedule a personalized demo with our product specialists and discover 
                how Library One can transform your library's digital experience.
              </p>

              <div className="space-y-6 mb-10">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-card/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-card" />
                    </div>
                    <span className="font-body text-card">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-card/20">
                <div className="text-center">
                  <Calendar className="w-8 h-8 text-card mx-auto mb-2" />
                  <p className="font-body text-sm text-card/80">30-min session</p>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-card mx-auto mb-2" />
                  <p className="font-body text-sm text-card/80">Live with expert</p>
                </div>
                <div className="text-center">
                  <Presentation className="w-8 h-8 text-card mx-auto mb-2" />
                  <p className="font-body text-sm text-card/80">Custom demo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="flex-1 flex items-center justify-center p-8 bg-muted">
            <div className="w-full max-w-lg">
              <div className="bg-card rounded-xl border border-border p-8 card-elevated">
                <div className="mb-8">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                    Request Your Demo
                  </h2>
                  <p className="font-body text-muted-foreground text-sm">
                    Fill out the form below and we'll be in touch within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="font-body">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="font-body">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-body">Work Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-body">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization" className="font-body">Organization *</Label>
                    <Input
                      id="organization"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="font-body">Library Type *</Label>
                    <Select
                      value={formData.libraryType}
                      onValueChange={(value) => setFormData({ ...formData, libraryType: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select library type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Public Library</SelectItem>
                        <SelectItem value="academic">Academic Library</SelectItem>
                        <SelectItem value="school">School Library</SelectItem>
                        <SelectItem value="corporate">Corporate Library</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="font-body">Number of Patrons</Label>
                    <Select
                      value={formData.patrons}
                      onValueChange={(value) => setFormData({ ...formData, patrons: value })}
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

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-body">Additional Information</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your needs..."
                      rows={3}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Schedule My Demo
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Demo;
