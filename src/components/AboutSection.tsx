// src/components/AboutSection.tsx
import { motion } from "framer-motion";
import aboutImage from "/img/about.jpg";
import { Globe, Clock4 } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="overflow-hidden py-20 bg-white">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Animated Image Side */}
          <motion.div
            className="h-[550px] w-full"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut"}}
          >
            <img
              src={aboutImage}
              alt="About ShipMaster"
              className="w-full h-full object-cover shadow-lg"
            />
          </motion.div>

          {/* Animated Text Side */}
          <motion.div
            className="about-text"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          >
            <h6 className="text-blue-400 text-sm uppercase mb-3 font-semibold">About Us</h6>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-blue-900">
              Quick Transport and Logistics Solutions
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At ShipMaster, we specialize in providing reliable, on-time shipping and logistics services across borders. 
              From warehousing to global freight, we deliver efficient solutions tailored to your business needs.
            </p>

            {/* Feature Icons */}
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col items-start">
                <Globe className="text-blue-600 w-10 h-10 mb-3" />
                <h5 className="text-lg font-semibold mb-1">Global Coverage</h5>
                <p className="text-sm text-gray-600">
                  We connect you to over 150+ countries with streamlined customs and freight options.
                </p>
              </div>
              <div className="flex flex-col items-start">
                <Clock4 className="text-blue-600 w-10 h-10 mb-3" />
                <h5 className="text-lg font-semibold mb-1">On Time Delivery</h5>
                <p className="text-sm text-gray-600">
                  Our network and tracking systems ensure your shipments arrive exactly when expected.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="/about"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition"
            >
              Explore More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
