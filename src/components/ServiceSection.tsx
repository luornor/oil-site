import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const services = [
  { label: "Shipping Agency", slug: "shipping-agency-husbandry", image: "/img/services/shipping.jpg" },
  { label: "Logistics", slug: "logistics-services", image: "/img/services/logistics.jpg" },
  { label: "Port Stevedores", slug: "port-stevedores-service", image: "/img/services/stevedores.jpg" },
  { label: "Underwater Services", slug: "underwater-solutions", image: "/img/services/underwater.jpg" },
  { label: "Vessel Management", slug: "vessel-management", image: "/img/services/vessel.jpg" },
  { label: "Bulk Cargo", slug: "agency-on-bulk-cargo", image: "/img/services/bulk.jpg" },
  { label: "Custom Clearance", slug: "custom-clearance-certification", image: "/img/services/customs.jpg" },
  { label: "Real Estate", slug: "real-estate-service", image: "/img/services/realestate.jpg" },
];

const ServiceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 8000); // 5 second delay

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.firstElementChild?.clientWidth || 0;
      containerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  }, [index]);

  return (
    <section className="px-4 py-10">
      <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Explore Our Services</h2>

      <div
        ref={containerRef}
        className="flex overflow-x-auto gap-6 snap-x snap-mandatory scroll-smooth hide-scrollbar transition-all duration-[5000ms] ease-in-out"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {services.map((service, i) => (
          <Link
            key={i}
            to={`/${service.slug}`}
            className="w-full sm:min-w-[280px] sm:max-w-[280px] bg-white rounded-xl shadow hover:shadow-md transition snap-start flex-shrink-0"
            style={{ scrollSnapAlign: "start" }}
          >
            <img
              src={service.image}
              alt={service.label}
              className="h-48 w-full object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-blue-900">{service.label}</h3>
              <span className="inline-flex items-center text-sm text-[#ff3c41] mt-2">
                Learn More <ChevronRight className="w-4 h-4 ml-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Inline styles to hide scrollbars */}
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </section>
  );
};

export default ServiceSection;
