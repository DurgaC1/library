import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Webinar = () => {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 pt-20 overflow-visible">
          <div className="container mx-auto py-10 max-w-4xl px-4">
            <h1 className="text-3xl font-bold mb-6 text-foreground">Webinars & Live Sessions</h1>
 
            <p className="text-muted-foreground mb-6">
              Stay informed about the newest updates in digital libraries, collection
              development strategies, and engagement tools. LibraryOne hosts regular
              webinars to support librarians and digital service teams.
            </p>
 
            <h2 className="text-xl font-semibold mt-6 mb-3 text-foreground">Upcoming Webinars</h2>
 
            <div className="space-y-6">
              <div className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="text-lg font-semibold text-foreground">
                  Maximizing Your Digital Collection on a Budget
                </h3>
                <p className="text-muted-foreground mt-2">
                  Learn how to balance holds, budgets, and patron demand using
                  analytics and flexible lending models.
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Date: Coming Soon
                </p>
              </div>
 
              <div className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="text-lg font-semibold text-foreground">
                  Engaging Readers with Personalized Discovery
                </h3>
                <p className="text-muted-foreground mt-2">
                  Explore recommendation tools, curated lists, and engagement
                  strategies to increase circulation.
                </p>
              </div>
            </div>
 
            <h2 className="text-xl font-semibold mt-6 mb-3 text-foreground">On-Demand Sessions</h2>
            <ul className="list-disc ml-6 text-muted-foreground space-y-2">
              <li>Getting Started with LibraryOne</li>
              <li>Digital Literacy Programs for All Ages</li>
              <li>Accessibility & Inclusive Design in Digital Libraries</li>
            </ul>
 
            <p className="text-muted-foreground mt-6">
              For registration or archived webinars, contact:
              <br />
              <strong className="text-foreground">events@libraryone.com</strong>
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  };

  export default Webinar;