// src/pages/About.tsx
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <header className="relative bg-[url('/img/carousel-1.jpg')] bg-cover bg-center h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-6 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
          <p className="text-lg mt-4">Your trusted partner in global shipping and logistics.</p>
        </div>
      </header>

      <main className="flex-grow">
        <AboutSection />

        {/* Mission / Vision */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To revolutionize global shipping by providing seamless, efficient, and sustainable logistics solutions that empower businesses and individuals.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To be the most trusted and innovative logistics partner worldwide, recognized for our reliability, transparency, and commitment to excellence.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
