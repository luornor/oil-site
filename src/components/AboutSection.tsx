import { motion } from "framer-motion";
import aboutImage from "/img/about.png";
import { Globe, Clock4 } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="overflow-hidden py-10 bg-white">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid md:grid-cols-2 gap-12 items-stretch md:px-4">
          {/* Animated Image Side */}
          <motion.div
            className="w-full h-full"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.img
              src={aboutImage}
              alt="About Philotes"
              className="w-full h-auto object-cover shadow-lg rounded-lg"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* Animated Text Side */}
          <motion.div
            className="about-text"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <h6 className="text-blue-400 text-sm uppercase mb-3 font-semibold">About Us</h6>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-blue-900">
              Delivering Exceptional Maritime Services Since 2007
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Philotes Maritime Services is a globally recognized shipping company, founded by maritime professionals
              committed to excellence. We offer a broad spectrum of logistics and shipping solutions globally.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our base of operations is in Accra, Ghana, with support offices across Africa, Asia, and the Americas.
              This enables us to serve clients globally with unmatched reach and expertise.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed font-semibold">
              Our Vision:
              <span className="font-normal ml-1">
                To become a trusted leader in global maritime and shipping services.
              </span>
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed font-semibold">
              Our Mission:
              <span className="font-normal ml-1">
                To consistently deliver dependable, sustainable, and innovative maritime solutions.
              </span>
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed font-semibold">
              Our Values:
              <span className="font-normal ml-1">
                Integrity, responsibility, respect, transparency, and growth — these guide our culture and client partnerships.
              </span>
            </p>

            {/* Feature Icons */}
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col items-start">
                <Globe className="text-blue-600 w-10 h-10 mb-3" />
                <h5 className="text-lg font-semibold mb-1">Global Reach</h5>
                <p className="text-sm text-gray-600">
                  Our widespread offices and partners offer unbeatable access and knowledge in global ports.
                </p>
              </div>
              <div className="flex flex-col items-start">
                <Clock4 className="text-blue-600 w-10 h-10 mb-3" />
                <h5 className="text-lg font-semibold mb-1">Timely Operations</h5>
                <p className="text-sm text-gray-600">
                  Punctual delivery is our promise — backed by logistics expertise and coordination.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="/about"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition"
            >
              Learn More About Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
