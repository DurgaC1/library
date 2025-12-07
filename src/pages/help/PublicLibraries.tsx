import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

export default function PublicLibraries() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section
        className="relative h-[40vh] w-full bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg ml-6">
          PUBLIC LIBRARIES
        </h1>
      </section>

      {/* CONTENT SECTION */}
      <section className="container mx-auto px-6 py-16">
        <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-4xl">
          LibraryOne offers a one-stop digital experience to public librarians,
          providing a wide selection of services and tools designed to support
          community reading, engagement, and resource discovery. Our goal is to
          empower modern public libraries with technology that enhances access,
          simplifies workflows, and enriches patron experiences.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-4xl">
          Whether your community needs digital books, multimedia content,
          operational support, or reading programs, LibraryOne provides
          innovative and flexible solutions tailored for today’s public
          libraries.
        </p>
      </section>

      {/* CARD SECTION (Library Solutions Style) */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* CARD 1 */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80"
              className="w-full h-72 object-cover"
              alt="Library Solutions"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white p-6 rounded-t-2xl shadow-xl">
              <h3 className="text-xl font-semibold mb-2">Library Solutions</h3>
              <Link
                to="/solutions"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* DESCRIPTION SECTION */}
          <div>
            <h2 className="text-4xl font-bold mb-4">Library Solutions</h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              LibraryOne’s solutions are designed to support public librarians
              in their mission to provide accessible and meaningful resources to
              readers of all ages.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Our tools enhance efficiency, streamline workflows, and help you
              maintain a robust, diverse, and community-centered collection.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              From digital books to content management, outreach tools, and
              analytics, LibraryOne gives public libraries everything they need
              to thrive in a modern reading environment.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
