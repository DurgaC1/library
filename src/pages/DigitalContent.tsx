import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const DigitalContent = () => {
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
              <span className="text-foreground font-medium">Digital Content</span>
            </nav>

            <h1 className="text-3xl font-bold mb-6 text-foreground">Digital Content</h1>
 
        <p className="text-muted-foreground mb-6">
          <strong>LibraryOne</strong> offers a unified digital content platform for
          public libraries—supporting eBooks, audiobooks, magazines, newspapers,
          and more. Designed to simplify collection management and enhance patron
          experience, our platform provides seamless access on any device.
        </p>
 
        <h2 className="text-xl font-semibold mt-6 mb-3">What We Offer</h2>
 
        <ul className="list-disc ml-6 text-muted-foreground space-y-2">
          <li>Extensive collection of eBooks across genres and age groups</li>
          <li>High-quality audiobooks with accessible playback features</li>
          <li>Global news and magazine access through select partners</li>
          <li>Smart recommendations and curated reading lists</li>
          <li>Flexible lending models to suit library budgets</li>
        </ul>
 
        <h2 className="text-xl font-semibold mt-6 mb-3">Benefits for Libraries</h2>
 
        <ul className="list-disc ml-6 text-muted-foreground space-y-2">
          <li>Lower operational overhead with automated workflows</li>
          <li>Real-time analytics for circulation and patron engagement</li>
          <li>Customizable content collections</li>
          <li>Accessible reading tools supporting diverse communities</li>
        </ul>
 
        <p className="text-muted-foreground mt-6">
          To learn more or request a demo, contact:
          <br />
          <strong className="text-foreground">digital@libraryone.com</strong>
        </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  };

  export default DigitalContent;