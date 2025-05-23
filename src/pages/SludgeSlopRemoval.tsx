// src/pages/SludgeSlopRemoval.tsx
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const SludgeSlopRemoval = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <header className="relative bg-center flex items-center justify-center h-[40vh]">
        <div className="absolute inset-0 bg-white" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-400 drop-shadow">
            Sludge / Slop Removal
          </h1>
          <p className="text-blue-400 text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Environmentally compliant waste handling and marine gas supply for vessels
          </p>
        </div>
      </header>

      <main className="flex-grow px-6 py-12 max-w-6xl mx-auto space-y-10 text-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/img/services/image33.jpg"
            alt="Sludge Slop Removal"
            className="w-full h-80 object-cover rounded-lg shadow mb-8"
          />

          <section className="space-y-6">
            <p>
              Philotes Maritime Services offers professional sludge and slop removal as part of its waste management
              commitment. We help shipowners maintain MARPOL compliance while ensuring safe, hygienic, and efficient
              operations at sea and in port.
            </p>

            <h2 className="text-xl font-bold text-blue-900">Why It Matters</h2>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Compliance:</strong> Meet international pollution control regulations</li>
              <li><strong>Safety:</strong> Prevent environmental contamination and onboard health risks</li>
              <li><strong>Operational Readiness:</strong> Prevent holding tank overflow and delay during port calls</li>
            </ul>

            <h2 className="text-xl font-bold text-blue-900">Comprehensive Gas Support</h2>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Industrial Gases:</strong> Oxygen, nitrogen, acetylene for welding and repair</li>
              <li><strong>Refrigerants:</strong> For cold chain cargo including Freon and ammonia</li>
              <li><strong>Fire Suppression:</strong> CO2 and other extinguishing systems for onboard safety</li>
              <li><strong>Medical Gases:</strong> For onboard healthcare and remote emergency use</li>
            </ul>

            <h2 className="text-xl font-bold text-blue-900">Why Philotes Maritime Services?</h2>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Complete Supply:</strong> Wide inventory of essential gases with certified refill support</li>
              <li><strong>Wide Coverage:</strong> Delivery and waste handling across 11+ West African ports</li>
              <li><strong>Trained Professionals:</strong> All services handled by certified technicians and crew</li>
              <li><strong>IMO & Environmental Compliance:</strong> Adhering to MARPOL, safety, and emissions standards</li>
              <li><strong>Custom Services:</strong> Tailored solutions for ship types, sizes, and usage frequency</li>
              <li><strong>Eco-Conscious:</strong> We promote sustainable operations with low-emission and safe discharge solutions</li>
            </ul>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <img src="/img/services/west_africa_coverage.png" alt="Sludge removal" className="rounded-lg object-cover w-full h-72" />
            </div>

            <p>
              Our team helps reduce environmental impact, meet your compliance needs, and maintain a clean and efficient
              onboard environment. Partner with us for reliable waste management and marine utility support wherever your
              routes take you.
            </p>
          </section>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default SludgeSlopRemoval;
