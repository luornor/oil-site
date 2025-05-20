// src/components/ServiceSection.tsx
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const services = [
  { label: "Shipping Agency", slug: "shipping-agency-husbandry", image: "/img/services/shipping.jpg" },
  { label: "Logistics", slug: "logistics-services", image: "/img/services/logistics.jpg" },
  { label: "Port Stevedores", slug: "port-stevedores-service", image: "/img/services/stevedores.jpg" },
  { label: "Underwater Services", slug: "underwater-services", image: "/img/services/underwater.jpg" },
  // ➕ Add more here
];

const ServiceSection = () => {
  return (
    <section className="px-6 py-12 overflow-x-auto">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">Explore Our Services</h2>
      <div className="flex gap-6 w-max">
        {services.map((service, i) => (
          <Link
            key={i}
            to={`/services/${service.slug}`}
            className="min-w-[250px] bg-white rounded-xl shadow hover:shadow-md transition"
          >
            <img src={service.image} alt={service.label} className="h-40 w-full object-cover rounded-t-xl" />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-blue-900">{service.label}</h3>
              <span className="inline-flex items-center text-sm text-[#ff3c41] mt-2">
                Learn More <ChevronRight className="w-4 h-4 ml-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
// src/components/ServiceSection.tsx