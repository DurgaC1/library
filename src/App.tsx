import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Resources from "./pages/Resources";
import Solutions from "./pages/Solutions";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Demo from "./pages/Demo";
import NotFound from "./pages/NotFound";
import TS360 from "./pages/TS360";
import Boundless from "./pages/Boundless";
import Webinar from "./pages/Webinar";
import CareersJobs from "./pages/CareersJobs";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import PressReleases from "./pages/PressReleases";
import DigitalContent from "./pages/DigitalContent";
import RotatingReads from "./pages/RotatingReads";
import PressReader from "./pages/PressReader";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/title-source-360" element={<TS360 />} />
          <Route path="/boundless" element={<Boundless />} />
          <Route path="/webinar" element={<Webinar />} />
          <Route path="/careers" element={<CareersJobs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/press-releases" element={<PressReleases />} />
          <Route path="/digital-content" element={<DigitalContent />} />
 
          <Route path="/rotating-reads" element={<RotatingReads />} />
          <Route path="/press-reader" element={<PressReader />} />
          <Route path="/founding-principles" element={<About />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
