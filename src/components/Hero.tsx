// src/components/Hero.tsx
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/img/carousel-1.png", // New image with port and cargo ops
    headline: "Your Maritime Logistics Powerhouse",
    subtext: "From port handling to global transport, Philotes delivers seamless solutions across oceans.",
  },
  {
    image: "/img/carousel-2.png", // New image with oil terminal and marine infrastructure
    headline: "Integrated Services for Every Vessel",
    subtext: "Trust Philotes for security, bunkering, certification, underwater works, and much more.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative h-[85vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
          index === current ? "opacity-100 z-20" : "opacity-0 z-10"
        }`}
        >
          <div
            className={`w-full h-full bg-cover bg-center scale-100 animate-zoom relative`}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.headline}</h1>
                <p className="text-lg md:text-xl mb-6">{slide.subtext}</p>
                <div className="flex justify-center gap-4 flex-wrap">
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
