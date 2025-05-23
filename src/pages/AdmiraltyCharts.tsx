// src/pages/AdmiraltyCharts.tsx
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const AdmiraltyCharts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <header className="relative bg-center flex items-center justify-center h-[30vh]">
        <div className="absolute inset-0 bg-white" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-400 drop-shadow">
            Admiralty Charts &amp; Publications
          </h1>
          <p className="text-blue-400 text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Accurate nautical charts and navigational resources for safety and regulatory compliance
          </p>
        </div>
      </header>

      <main className="flex-grow px-4 lg:px-0 py-12 max-w-6xl mx-auto space-y-10 text-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/img/services/admiralty.png"
            alt="Admiralty Charts"
            className="w-full h-full object-cover rounded-lg shadow mb-8"
          />

          <section className="space-y-6">
            <p>
              Philotes Maritime Services provides full support for Admiralty chart and publication requirements.
              We source, update, and deliver paper and digital navigation tools trusted by international maritime operators.
            </p>

            <h2 className="text-xl font-bold text-blue-900">What Are Admiralty Charts &amp; Publications?</h2>
            <p>
              Admiralty charts are authoritative marine maps used globally to identify safe navigation routes, hazards,
              sea depths, aids to navigation, and shipping lanes. Published by the UKHO, these are essential tools for
              voyage planning.
            </p>
            <p>
              Admiralty publications expand on these resources with key reference materials such as:
              Sailing Directions, Tide Tables, List of Lights, and Radio Signal Listings. They are required by law for
              all SOLAS-class ships.
            </p>

            <h2 className="text-xl font-bold text-blue-900">Why Choose Philotes Maritime Services?</h2>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>
                <strong>Full Coverage:</strong> We offer a complete set of paper and electronic Admiralty charts and
                publications, from global oceans to local West African coastlines.
              </li>
              <li>
                <strong>Weekly Updates:</strong> Stay compliant and safe with weekly chart corrections, new editions, and notices to mariners.
              </li>
              <li>
                <strong>West African Navigation Experts:</strong> We know the ports, channels, and hazards of Nigeria,
                Ghana, Togo, Benin, and the Ivory Coast better than anyone.
              </li>
              <li>
                <strong>Digital + Print Solutions:</strong> Whether your vessel uses ECDIS or paper charts, we deliver
                exactly what your system requires.
              </li>
              <li>
                <strong>Fast Port Delivery:</strong> We provide express delivery to ports and terminals so you can
                maintain voyage schedules without interruption.
              </li>
              <li>
                <strong>Cost-Effective Solutions:</strong> Our global sourcing and regional distribution keeps prices
                fair while meeting the highest compliance standards.
              </li>
              <li>
                <strong>Tailored Service:</strong> We consult with captains and operators to build voyage-specific
                navigation packs with only what you need.
              </li>
              <li>
                <strong>Environmentally Responsible:</strong> We promote digital alternatives to minimize waste and
                offer sustainable packaging options.
              </li>
            </ul>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <img src="/img/services/west_africa_coverage.png" alt="Charts" className="rounded-lg object-cover w-full h-72" />
            </div>

            <p>
              With Philotes as your Admiralty chart partner, you can be confident that every voyage is
              backed by the most accurate, up-to-date navigation resources available. Stay safe, stay compliant, and stay
              on course with our trusted supply and support.
            </p>
          </section>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default AdmiraltyCharts;
