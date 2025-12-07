import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const RotatingReads = () => {
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
              <span className="text-foreground font-medium">Rotating Reads</span>
            </nav>

            <h1 className="text-3xl font-bold mb-6 text-foreground">Rotating Reads</h1>
 
        <p className="text-muted-foreground mb-6">
          <strong>Rotating Reads</strong> is a fresh and dynamic digital reading
          collection offered by Library One. It provides patrons with regularly
          updated selections of popular titles, curated to encourage exploration
          and discovery.
        </p>
 
        <h2 className="text-xl font-semibold mt-6 mb-3">
          How Rotating Reads Works
        </h2>
 
        <ul className="list-disc ml-6 text-muted-foreground space-y-2">
          <li>Featured titles rotate on a weekly or monthly schedule</li>
          <li>Promotes new authors, genres, and trending topics</li>
          <li>Helps libraries engage readers with limited budgets</li>
          <li>Ideal for community reading programs and discovery initiatives</li>
        </ul>
 
        <p className="text-muted-foreground mt-6">
          Libraries can customize rotation frequency and genres based on
          community needs.
        </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  };

  export default RotatingReads;