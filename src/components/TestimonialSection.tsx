import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import "keen-slider/keen-slider.min.css";

const testimonials = [
  {
    image: "/img/testimonials/testimonial-1.png",
    name: "Gregory Page",
    title: "Port Manager",
    text: "Philotes ensured our cargo cleared port ahead of schedule. Their professionalism is unmatched.",
    rating: 4,
  },
  {
    image: "/img/testimonials/testimonial-2.jpg",
    name: "Michael Smith",
    title: "Shipping Agent",
    text: "We've worked with many agents but none offer the dedication and transparency of Philotes.",
    rating: 5,
  },
  {
    image: "/img/testimonials/testimonial-3.jpg",
    name: "Dr Debra Smith",
    title: "Freight Coordinator",
    text: "I’ve never seen such smooth coordination for inland haulage. Absolutely reliable team.",
    rating: 4,
  },
  {
    image: "/img/testimonials/testimonial-4.jpg",
    name: "Jacqueline Bennett",
    title: "Marine Engineer",
    text: "Every call was answered, every challenge resolved — true 24/7 support from Philotes.",
    rating: 4,
  },
  {
    image: "/img/testimonials/testimonial-5.png",
    name: "Diane Roberts",
    title: "Customs Officer",
    text: "Philotes handled our oil & gas logistics with remarkable compliance and efficiency.",
    rating: 4,
  },
  {
    image: "/img/testimonials/testimonial-6.png",
    name: "Dr Irene Bennett",
    title: "Export Manager",
    text: "The team’s knowledge of ECOWAS regulations saved us weeks in clearance.",
    rating: 4,
  },
  {
    image: "/img/testimonials/testimonial-7.png",
    name: "Johny Walker",
    title: "Procurement Lead",
    text: "From paperwork to loading, Philotes is hands-on and accurate.",
    rating: 5,
  },
  {
    image: "/img/testimonials/testimonial-8.png",
    name: "Miss Christine Houghton",
    title: "Logistics Supervisor",
    text: "Trustworthy, punctual, and sharp. Our go-to agency in West Africa.",
    rating: 4,
  },
  {
    image: "/img/testimonials/testimonial-9.png",
    name: "Robert Robinson",
    title: "Operations Director",
    text: "Philotes brings calm to chaos — they simply get the job done.",
    rating: 5,
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

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 px-6 bg-white">
      <motion.div
        className="container mx-auto px-4 text-center"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h6 className="text-blue-400 text-sm font-bold uppercase mb-2">Testimonial</h6>
        <h2 className="text-4xl font-bold text-black mb-12">Our Clients Say!</h2>

        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              className="keen-slider__slide w-full bg-white shadow-lg rounded-lg p-6 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <i className="absolute top-4 right-6 text-gray-100 text-5xl">”</i>
              <div className="flex items-center mb-2 text-left">
                <img src={item.image} className="w-16 h-16 rounded-full object-cover mr-4" />
                <div>
                  <h5 className="text-lg font-semibold text-black mb-0">{item.name}</h5>
                  <p className="text-sm text-gray-500">{item.title}</p>
                  <div className="flex mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 mr-1 ${
                          i < item.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                        fill={i < item.rating ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-left text-gray-600 text-sm">{item.text}</p>
            </motion.div>
          ))}
        </div>

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
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
