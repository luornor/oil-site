// src/pages/About.tsx
import TestimonialSection from "../components/TestimonialSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Testimonials = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <header className="relative bg-[url('/img/carousel-2.jpg')] bg-cover bg-center h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-6 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Testimonial</h1>
        </div>
      </header>

      <main className="flex-grow">
        <TestimonialSection />
      </main>

      <Footer />
    </div>
  );
};

export default Testimonials;
