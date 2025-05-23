// src/components/FeatureSection.tsx
import { Globe2, Clock, PackageSearch, MapPinned } from "lucide-react";
import { motion } from "framer-motion";
import featureImg from "/img/feature.png";

const features = [
  {
    icon: <Globe2 className="w-8 h-8 text-red-500" />,
    title: "Multinational Port Access",
    description:
      "Philotes provides streamlined vessel and cargo handling across major West African terminals, with deep regional presence and global reach.",
  },
  {
    icon: <Clock className="w-8 h-8 text-red-500" />,
    title: "Real-Time Coordination",
    description:
      "Through 24/7 ops control, tracking systems, and agent communication, we ensure vessels, shipments, and inland movement stay punctual.",
  },
  {
    icon: <PackageSearch className="w-8 h-8 text-red-500" />,
    title: "Customs & Compliance Expertise",
    description:
      "Our team facilitates smooth customs clearance, certification, and regulatory alignment across international and ECOWAS maritime policies.",
  },
  {
    icon: <MapPinned className="w-8 h-8 text-red-500" />,
    title: "Heavy Haulage & Last Mile",
    description:
      "We operate trailers and flatbeds for safe movement of containers, bulk, and liquid cargo from port to inland destination with precision.",
  },
];

const FeatureSection = () => {
  return (
    <section className="py-10 bg-white px-4">
      {/* Centered Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h6 className="text-blue-400 text-sm uppercase font-bold mb-2">Our Strengths</h6>
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Your End-to-End Maritime & Logistics Powerhouse
        </h2>
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left - Features */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-6 max-w-xl mx-auto md:mx-0">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div>{feature.icon}</div>
                <div>
                  <h4 className="text-lg font-bold mb-1 text-black">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right - Image */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden"
        >
          <img
            src={featureImg}
            alt="Philotes Maritime Services"
            className="w-full h-full object-cover rounded-sm shadow"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
