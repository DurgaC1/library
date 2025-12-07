import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

export default function AcademicLibraries() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section
        className="relative h-[40vh] w-full bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg ml-6">
          ACADEMIC LIBRARIES
        </h1>
      </section>

      {/* CONTENT SECTION */}
      <section className="container mx-auto px-6 py-16">
        <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-4xl">
          LibraryOne empowers academic institutions with advanced digital tools
          and a broad range of curriculum-aligned content. We support
          universities, colleges, and schools in providing students and faculty
          easy access to essential academic materials.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-4xl">
          Our platform enhances research, supports coursework, and modernizes
          library processes—helping educators and learners stay engaged and
          informed.
        </p>
      </section>

      {/* CARD + DESCRIPTION SECTION */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* CARD */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?auto=format&fit=crop&w=1200&q=80"
              className="w-full h-72 object-cover"
              alt="Digital Learning"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white p-6 rounded-t-2xl shadow-xl">
              <h3 className="text-xl font-semibold mb-2">Digital Learning Tools</h3>
              <Link
                to="/digital-content"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* TEXT SECTION */}
          <div>
            <h2 className="text-4xl font-bold mb-4">Academic Solutions</h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              LibraryOne helps institutions deliver high-quality digital content,
              supporting academic success through modern solutions.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              From research tools to e-learning material, our platform makes it
              easier for educators and students to access what they need.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              We provide tools for smart discovery, LMS integration, and student
              engagement—built for today’s academic world.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
