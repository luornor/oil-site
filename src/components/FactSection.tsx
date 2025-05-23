import { Headphones, Users, Ship, Star } from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const FactSection = () => {
  return (
    <section className="py-10 px-4 sm:px-6 md:px-10 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT SIDE - Text + Call */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h6 className="text-blue-400 text-sm uppercase mb-3 font-semibold">Why Choose Philotes</h6>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
              Empowering Maritime Logistics Across West Africa
            </h1>
            <p className="text-gray-700 mb-8 leading-relaxed">
              At Philotes Maritime Services, we specialize in connecting oceans, ports, and people with precision.
              From vessel agency and crew services to bulk cargo, bunkering, and real estate infrastructure,
              we deliver complete logistics support you can count on.
            </p>

            {/* Contact Box */}
            <div className="flex items-center text-white p-5">
              <div className="bg-red-600 p-3">
                <Headphones className="w-6 h-6" />
              </div>
              <div className="ml-4">
                <h6 className="text-sm text-black">Call for maritime assistance</h6>
                <h3 className="text-xl font-bold text-red-600">+233 501 234 567</h3>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Counters */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {/* Box 1 */}
            <div className="bg-red-500 p-6 rounded-lg shadow-md text-white">
              <Users className="w-8 h-8 mb-3" />
              <h2 className="text-3xl font-bold mb-1">
                <CountUp end={1640} duration={2.5} />
              </h2>
              <p className="text-sm">Satisfied Clients</p>
            </div>

            {/* Box 2 */}
            <div className="bg-green-600 p-6 rounded-lg shadow-md text-white">
              <Star className="w-8 h-8 mb-3" />
              <h2 className="text-3xl font-bold mb-1">
                <CountUp end={3200} duration={2.5} />
              </h2>
              <p className="text-sm">Verified Reviews</p>
            </div>

            {/* Box 3 */}
            <div className="bg-blue-400 p-6 rounded-lg shadow-md text-white sm:col-span-1">
              <Ship className="w-8 h-8 mb-3" />
              <h2 className="text-3xl font-bold mb-1">
                <CountUp end={7850} duration={2.5} />
              </h2>
              <p className="text-sm">Shipments Managed</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FactSection;
