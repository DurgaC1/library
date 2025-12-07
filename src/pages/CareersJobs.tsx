import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CareersJobs = () => {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 pt-20 overflow-visible">
          <div className="container mx-auto py-10 max-w-4xl px-4">
            <h1 className="text-3xl font-bold mb-6 text-foreground">Careers & Jobs</h1>
 
            <p className="text-muted-foreground mb-6">
              At <strong className="text-foreground">LibraryOne</strong>, we build digital solutions that empower
              libraries and communities. If you're passionate about technology,
              literacy, and meaningful impact, you'll feel right at home here.
            </p>
 
            <h2 className="text-xl font-semibold mt-6 mb-3 text-foreground">Why Work With Us?</h2>
            <ul className="list-disc ml-6 text-muted-foreground space-y-2">
              <li>Mission-driven work supporting libraries and readers worldwide.</li>
              <li>Hybrid technology + library culture with room for creativity.</li>
              <li>Professional growth, mentorship, and conference opportunities.</li>
              <li>Inclusive environment with flexible work models.</li>
            </ul>
 
            <h2 className="text-xl font-semibold mt-6 mb-3 text-foreground">Current Openings</h2>
            <ul className="list-disc ml-6 text-muted-foreground space-y-2">
              <li>Software Engineer – Frontend (React, TypeScript)</li>
              <li>Implementation Specialist – Library Solutions</li>
              <li>Customer Success Manager – Public Libraries</li>
            </ul>
 
            <p className="text-muted-foreground mt-4">
              Don't see the perfect role? We still encourage you to reach out.
            </p>
 
            <h2 className="text-xl font-semibold mt-6 mb-3 text-foreground">How to Apply</h2>
            <p className="text-muted-foreground">
              Send your resume and short introduction to:
              <br />
              <strong className="text-foreground">careers@libraryone.com</strong>
            </p>
 
            <h2 className="text-xl font-semibold mt-6 mb-3 text-foreground">Our Commitment to Inclusion</h2>
            <p className="text-muted-foreground">
              LibraryOne is an equal opportunity employer. We welcome applicants
              from all backgrounds and identities.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  };

  export default CareersJobs;