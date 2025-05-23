// src/pages/MooringRopes.tsx
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const MooringRopes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <header className="relative bg-center flex items-center justify-center h-[30vh]">
        <div className="absolute inset-0 bg-white" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-400 drop-shadow">
            Mooring Ropes Supply
          </h1>
          <p className="text-blue-400 text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed drop-shadow">
            High-strength mooring solutions for safe and reliable vessel operations
          </p>
        </div>
      </header>

      <main className="flex-grow px-4 py-10 max-w-6xl mx-auto space-y-10 text-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/img/services/Mooring-Rope.png"
            alt="Mooring Rope"
            className="w-full h-full object-cover rounded-lg shadow mb-8"
          />

          <section className="space-y-6">
            <p>
              Mooring ropes are critical in ensuring that vessels remain securely docked regardless of environmental
              conditions. At Philotes Maritime Services, we supply high-performance ropes that deliver durability,
              flexibility, and compliance with global standards.
            </p>

            <h2 className="text-xl font-bold text-blue-900">Why Mooring Ropes Matter</h2>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Vessel Stability:</strong> Keeps ships steady against current, wind, and tide</li>
              <li><strong>Safe Maneuvering:</strong> Supports smooth docking and departure processes</li>
              <li><strong>Weather Resistance:</strong> Built to endure UV rays, salt, and rough seas</li>
              <li><strong>High Load Capacity:</strong> Tested for strength to manage large vessel displacement</li>
              <li><strong>International Compliance:</strong> Certified ropes meet all maritime authority guidelines</li>
            </ul>

            <h2 className="text-xl font-bold text-blue-900">Why Choose Philotes Maritime Services?</h2>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Superior Quality:</strong> Our ropes are made of the finest synthetic fibers or steel wire, with options for every application</li>
              <li><strong>Versatile Options:</strong> Wide selection including 3/4/8/12/24 strand, UHMWPE, and double braided mooring ropes</li>
              <li><strong>Compliance Assured:</strong> Our mooring lines are approved by classification societies and meet IMO standards</li>
              <li><strong>Expert Advice:</strong> Our team will guide you in choosing the right specification based on your vessel type and operational conditions</li>
              <li><strong>Custom Supply:</strong> Tailored length, thickness, and fittings for specialized needs</li>
              <li><strong>Prompt Delivery:</strong> Stock availability and fast shipping through our regional network</li>
            </ul>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <img src="/img/services/west_africa_coverage.png" alt="Rope Supply" className="rounded-lg object-cover w-full h-80" />
            </div>

            <p>
              Whether you're outfitting a new vessel or restocking port-side supplies, Philotes delivers certified, trusted
              mooring rope solutions that withstand the toughest environments and support safe, compliant operations.
            </p>
          </section>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default MooringRopes;
