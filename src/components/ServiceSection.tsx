// src/components/ServicesSection.tsx
const services = [
  {
    title: "Air Freight",
    image: "/img/service-1.jpg",
    description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
  },
  {
    title: "Ocean Freight",
    image: "/img/service-2.jpg",
    description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
  },
  {
    title: "Road Freight",
    image: "/img/service-3.jpg",
    description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
  },
  {
    title: "Train Freight",
    image: "/img/service-4.jpg",
    description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
  },
  {
    title: "Customs Clearance",
    image: "/img/service-5.jpg",
    description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
  },
  {
    title: "Warehouse Solutions",
    image: "/img/service-6.jpg",
    description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-white px-6 md:px-16 py-10">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h6 className="text-blue-400 text-sm font-bold uppercase mb-2">Our Services</h6>
          <h2 className="text-4xl font-bold text-black">Explore Our Services</h2>
        </div>

        {/* Service Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group/card bg-white p-6 shadow-md hover:shadow-lg transition rounded-lg overflow-hidden relative"
            >
              {/* Image with Zoom on Card Hover */}
              <div className="overflow-hidden mb-4 rounded">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover rounded transform transition-transform duration-500 group-hover/card:scale-110"
                />
              </div>

              {/* Title & Description */}
              <h4 className="text-2xl font-bold mb-2 text-black">{service.title}</h4>
              <p className="text-gray-600 mb-6">{service.description}</p>

              {/* Button with slide animation */}
              <a
                href="#"
                className="group/button flex items-center overflow-hidden bg-red-500 text-white transition-all duration-300 w-10 hover:bg-blue-600 group-hover/card:w-36"
              >
                <div className="flex items-center justify-center w-10 h-10">
                  <svg
                    className="w-10 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 3.293a1 1 0 011.414 0L18 7.586a1 1 0 010 1.414l-4.293 4.293a1 1 0 01-1.414-1.414L14.586 9H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                
                <span className="ml-2 whitespace-nowrap opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                  Read More
                </span>
                
              </a>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
