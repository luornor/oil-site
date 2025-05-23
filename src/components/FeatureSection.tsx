// src/components/FeatureSection.tsx
import { Globe2, Truck, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import featureImg from "/img/feature.jpg";

const features = [
  {
    icon: <Globe2 className="w-8 h-8 text-red-500" />,
    title: "Global Maritime Access",
    description:
      "With offices and port coverage across West Africa and beyond, Philotes ensures your cargo reaches every destination with speed and confidence.",
  },
  {
    icon: <Truck className="w-8 h-8 text-red-500" />,
    title: "On-Time Logistics Solutions",
    description:
      "From agency coordination to real-time tracking and customs clearance, our integrated services ensure your timelines are always met.",
  },
  {
    icon: <Headphones className="w-8 h-8 text-red-500" />,
    title: "24/7 Support & Coordination",
    description:
      "Our operations team is always on call — providing real-time assistance for vessel entry, cargo handling, and emergency logistics needs.",
  },
];

const FeatureSection = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-6 md:px-6">
        {/* Left Column - Text + Features */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h6 className="text-blue-400 text-sm uppercase font-bold mb-3">Our Strengths</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
            Your Full-Circle Partner in Maritime, Logistics, and Port Operations
          </h2>

          <div className="space-y-6">
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

        {/* Right Column - Image */}
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
