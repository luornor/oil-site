// src/components/Hero.tsx
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/img/carousel-1.jpg",
    headline: "Your Reliable Shipping Partner",
    subtext: "Fast, secure, and global freight solutions at your fingertips.",
  },
  {
    image: "/img/carousel-2.jpg",
    headline: "Delivering Beyond Borders",
    subtext: "Connecting continents with efficient cargo movement.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000); // auto-slide
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[85vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          {/* Zoom background image */}
          <div
            className={`w-full h-full bg-cover bg-center scale-100 animate-zoom relative`}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.headline}</h1>
                <p className="text-lg md:text-xl mb-6">{slide.subtext}</p>
                <div className="flex justify-center gap-4 flex-wrap">
                  <a
                    href="/quote"
                    className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-medium transition"
                  >
                    Get Quote
                  </a>
                  <a
                    href="/contact"
                    className="border border-white px-6 py-3 rounded-xl font-medium hover:bg-white hover:text-blue-600 transition"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full z-30"
      >
        <ChevronLeft className="text-white w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full z-30"
      >
        <ChevronRight className="text-white w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;
