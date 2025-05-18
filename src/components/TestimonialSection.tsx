// src/components/TestimonialsSection.tsx
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import testimonial1 from "/img/testimonial-1.jpg";
import testimonial2 from "/img/testimonial-2.jpg";
import testimonial3 from "/img/testimonial-3.jpg";
import testimonial4 from "/img/testimonial-4.jpg";
import { useState } from "react";

const testimonials = [
  {
    image: testimonial1,
    name: "Client Name",
    title: "Profession",
    text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
  },
  {
    image: testimonial2,
    name: "Client Name",
    title: "Profession",
    text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
  },
  {
    image: testimonial3,
    name: "Client Name",
    title: "Profession",
    text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
  },
  {
    image: testimonial4,
    name: "Client Name",
    title: "Profession",
    text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
  },
];

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    rubberband: false,
    slides: {
      perView: 3,
      spacing: 20,
    },
    
        
    breakpoints: {
      "(max-width: 992px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(max-width: 768px)": {
        slides: { perView: 1, spacing: 10 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },

    
  });

  return (
    <section className="py-10 px-10 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h6 className="text-blue-400 text-sm font-bold uppercase mb-2">Testimonial</h6>
        <h2 className="text-4xl font-bold text-black mb-12">Our Clients Say!</h2>

        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="keen-slider__slide bg-white shadow-lg rounded-lg p-6 relative"
            >
              <i className="absolute top-4 right-6 text-gray-100 text-5xl">”</i>
              <div className="flex items-center mb-4 text-left">
                <img src={item.image} className="w-16 h-16 rounded-full object-cover mr-4" />
                <div>
                  <h5 className="text-lg font-semibold text-black mb-0">{item.name}</h5>
                  <p className="text-sm text-gray-500">{item.title}</p>
                </div>
              </div>
              <p className="text-left text-gray-600 text-sm">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Radio Dots */}
        <div className="mt-6 flex justify-center gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === idx ? "bg-red-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
