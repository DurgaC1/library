import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 pt-20 overflow-visible">
          <div className="container mx-auto py-10 max-w-4xl px-4">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground mb-4">
              <Link to="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-foreground font-medium">Terms & Conditions</span>
            </nav>

            <h1 className="text-3xl font-bold mb-6 text-foreground">Terms & Conditions</h1>
 
        <p className="text-muted-foreground mb-6">
          These Terms & Conditions govern your use of the LibraryOne website,
          digital services, and related content. By accessing our platform, you
          agree to comply with the terms outlined below.
        </p>
 
        <h2 className="text-xl font-semibold mt-6 mb-3">1. Use of Services</h2>
        <p className="text-muted-foreground">
          You may use LibraryOne services only for lawful library, educational,
          and informational purposes. Unauthorized distribution, scraping, or
          copying of digital content is prohibited.
        </p>
 
        <h2 className="text-xl font-semibold mt-6 mb-3">
          2. Account Responsibilities
        </h2>
        <p className="text-muted-foreground">
          Users must keep account credentials secure and notify us immediately of
          unauthorized access.
        </p>
 
        <h2 className="text-xl font-semibold mt-6 mb-3">3. Intellectual Property</h2>
        <p className="text-muted-foreground">
          All platform content, branding, and design elements belong to Library
          One or its partners. Libraries retain ownership of their own data and
          metadata.
        </p>
 
        <h2 className="text-xl font-semibold mt-6 mb-3">4. Limitation of Liability</h2>
        <p className="text-muted-foreground">
          LibraryOne is not liable for service interruptions, data loss, or
          external system failures beyond our control.
        </p>
 
        <h2 className="text-xl font-semibold mt-6 mb-3">5. Updates to Terms</h2>
        <p className="text-muted-foreground">
          We may modify these Terms as our services evolve. Continued use
          constitutes acceptance of future updates.
        </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  };

  export default TermsAndConditions;