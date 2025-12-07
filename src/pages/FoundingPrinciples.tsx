import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const FoundingPrinciples = () => {
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
              <span className="text-foreground font-medium">Founding Principles</span>
            </nav>

            <h1 className="text-3xl font-bold mb-6 text-foreground">Founding Principles</h1>
 
        <p className="text-muted-foreground mb-6">
          LibraryOne was created with a vision to empower libraries with modern,
          accessible, and impactful digital solutions. These principles continue
          to guide every product, partnership, and innovation we deliver.
        </p>
 
        <h2 className="text-xl font-semibold mt-6 mb-3">Our Core Principles</h2>
 
        <ul className="list-disc ml-6 text-muted-foreground space-y-2">
          <li>
            <strong>Access for All</strong> — Ensure digital reading is available to
            every community.
          </li>
          <li>
            <strong>Partnership With Libraries</strong> — Collaborate closely with
            librarians to understand real needs.
          </li>
          <li>
            <strong>Innovation With Purpose</strong> — Build technology that simplifies,
            enhances, and empowers.
          </li>
          <li>
            <strong>Respect for Readers</strong> — Protect privacy and support inclusive
            user experiences.
          </li>
        </ul>
 
        <p className="text-muted-foreground mt-6">
          These principles define who we are and shape the future of LibraryOne.
        </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  };

  export default FoundingPrinciples;