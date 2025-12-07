import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const PressReader = () => {
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
              <span className="text-foreground font-medium">Press Reader</span>
            </nav>

            <h1 className="text-3xl font-bold mb-6 text-foreground">Press Reader</h1>
 
        <p className="text-muted-foreground mb-6">
          Library One integrates with <strong>Press Reader</strong> to offer patrons
          access to thousands of newspapers and magazines from around the world.
          With easy digital access, readers can stay informed on global news,
          trends, culture, and entertainment.
        </p>
 
        <h2 className="text-xl font-semibold mt-6 mb-3">Key Features</h2>
 
        <ul className="list-disc ml-6 text-muted-foreground space-y-2">
          <li>Access to 7,000+ global publications</li>
          <li>Full-color, full-format periodicals</li>
          <li>Mobile-friendly reading experience</li>
          <li>Multi-language support for diverse communities</li>
        </ul>
 
        <p className="text-muted-foreground mt-6">
          To enable Press Reader for your library, contact:
          <br />
          <strong className="text-foreground">solutions@libraryone.com</strong>
        </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  };

  export default PressReader;