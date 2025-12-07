import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
              <span className="text-foreground font-medium">Privacy Policy</span>
            </nav>

            <h1 className="text-3xl font-bold mb-6 text-foreground">Privacy Policy</h1>
        <p className="text-muted-foreground mb-4">
          Effective Date: 01 January 2025
        </p>
 
        <p className="text-muted-foreground mb-6">
          At <strong>LibraryOne</strong>, we are committed to protecting the
          privacy of the libraries, institutions, and users who rely on our
          digital solutions. This Privacy Policy explains what information we
          collect, how we use it, and the choices you have when using our website
          and services.
        </p>
 
        <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <ul className="list-disc ml-6 text-muted-foreground space-y-2">
          <li>Account and contact details provided during registration or inquiries.</li>
          <li>Usage data such as IP address, browser type, device information, and interaction logs.</li>
          <li>
            Metadata shared by libraries to support digital lending and analytics.
          </li>
          <li>Support messages, feedback forms, and webinar registrations.</li>
        </ul>
 
        <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc ml-6 text-muted-foreground space-y-2">
          <li>Provide, improve, and maintain our digital services.</li>
          <li>Enable library‐specific configurations and access controls.</li>
          <li>Respond to customer support inquiries.</li>
          <li>Send service updates and optional marketing communications.</li>
        </ul>
 
        <h2 className="text-xl font-semibold mt-6 mb-2">3. Sharing of Information</h2>
        <p className="text-muted-foreground">
          We do not sell personal data. Information may be shared only with trusted
          service providers, institutional customers, or when required by law.
        </p>
 
        <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Retention</h2>
        <p className="text-muted-foreground">
          We retain data only for as long as necessary to deliver our services or comply with obligations.
        </p>
 
        <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Rights</h2>
        <p className="text-muted-foreground">
          You may request access, corrections, or deletion of your data by contacting us at:
          <br />
          <strong>privacy@libraryone.com</strong>
        </p>
 
        <h2 className="text-xl font-semibold mt-6 mb-2">6. Changes to This Policy</h2>
        <p className="text-muted-foreground">
          We may update this Privacy Policy from time to time. Continued use of
          our services indicates acceptance of           these changes.
        </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  };

  export default PrivacyPolicy;