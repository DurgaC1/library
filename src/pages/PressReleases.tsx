import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const PressReleases = () => {
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
              <span className="text-foreground font-medium">Press Releases</span>
            </nav>

            <h1 className="text-3xl font-bold mb-6 text-foreground">Press Releases</h1>
 
        <p className="text-muted-foreground mb-6">
          Stay informed with the latest announcements, product updates, industry
          insights, and news from <strong>LibraryOne</strong>. Our press releases
          highlight key innovations, partnerships, and initiatives that support
          libraries and digital learning communities.
        </p>
 
        <h2 className="text-xl font-semibold mt-6 mb-3">Latest Announcements</h2>
 
        <div className="space-y-6">
          <div className="p-4 border rounded-lg bg-background shadow-sm">
            <h3 className="text-lg font-semibold">LibraryOne Launches New Digital Lending Dashboard</h3>
            <p className="text-muted-foreground mt-2">
              A powerful new dashboard designed to help libraries manage digital
              circulation, budget forecasting, patron demand tracking, and more.
            </p>
            <p className="text-sm text-muted-foreground mt-1">Date: January 2025</p>
          </div>
 
          <div className="p-4 border rounded-lg bg-background shadow-sm">
            <h3 className="text-lg font-semibold">
              LibraryOne Expands Partnerships With Global Content Providers
            </h3>
            <p className="text-muted-foreground mt-2">
              New agreements provide libraries with broader access to eBooks,
              audiobooks, and global publications.
            </p>
            <p className="text-sm text-muted-foreground mt-1">Date: December 2024</p>
          </div>
        </div>
 
        <p className="text-muted-foreground mt-8">
          For media inquiries, contact: <br />
          <strong className="text-foreground">press@libraryone.com</strong>
        </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  };

  export default PressReleases;