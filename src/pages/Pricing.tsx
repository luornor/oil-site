// src/pages/Services.tsx
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PriceSection from "../components/PriceSection";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <header className="relative bg-[url('/img/carousel-1.jpg')] bg-cover bg-center h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-6 text-white text-start">
          <h1 className="text-4xl md:text-5xl font-bold">Pricing Plan</h1>
        </div>
      </header>

      <PriceSection />

      <Footer />
    </div>
  );
};

export default Services;
