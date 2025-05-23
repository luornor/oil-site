// src/pages/LiquidCargoAgency.tsx
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const LiquidCargoAgency = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <header className="relative bg-center flex items-center justify-center h-[30vh]">
        <div className="absolute inset-0 bg-white" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-400 drop-shadow">
            Liquid Cargo Agency Services
          </h1>
          <p className="text-blue-400 text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Safe, certified, and compliant handling of tankers, chemicals, LNG and petroleum products
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
            src="/img/services/liquid_cargo.png"
            alt="Liquid Cargo"
            className="w-full h-full object-cover rounded-lg shadow mb-8"
          />

          <section className="space-y-6">
            <p>
              Liquid cargo operations involve a unique combination of technical expertise, environmental responsibility, and timing precision. At Philotes Maritime Services, we handle everything from crude oil and refined fuels to food-grade liquids and dangerous chemicals — ensuring secure movement and regulatory compliance at every step.
            </p>

            <h2 className="text-xl font-bold text-blue-900">Challenges of Liquid Cargo</h2>
            <p>
              Unlike dry cargo, liquids are sensitive to temperature, contamination, leakage, and handling procedures. Tankers require specific equipment, crew certifications, and procedures aligned with MARPOL and IMO guidelines.
            </p>

            <h2 className="text-xl font-bold text-blue-900">Why Choose Philotes Maritime Services?</h2>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>
                <strong>End-to-End Liquid Expertise:</strong> Petroleum, LNG/LPG, chemicals, edible oils — we manage all classes of liquid bulk cargo with appropriate safety and handling.
              </li>
              <li>
                <strong>Strategic West African Reach:</strong> Operating in 11 countries, we coordinate with terminals, customs, and port regulators across Nigeria, Ghana, Togo, Benin, and Ivory Coast.
              </li>
              <li>
                <strong>Global Safety Standards:</strong> Strict compliance with IMO, MARPOL, and ISGOTT protocols for cargo containment, ship-to-shore transfers, and spill prevention.
              </li>
              <li>
                <strong>Vessel &amp; Terminal Logistics:</strong> Coordinating berths, loading, and documentation while minimizing turnaround time and port dues.
              </li>
              <li>
                <strong>Full-Service Liquid Cargo Agency:</strong> From clearance and pilotage to tank cleaning, discharge monitoring, and real-time reporting.
              </li>
              <li>
                <strong>Risk Control &amp; Insurance:</strong> We advise on risk mitigation, facilitate insurance, and conduct inspection/sampling services.
              </li>
              <li>
                <strong>Reliable Scheduling:</strong> Tight port windows and short laytimes demand punctuality. Our ops team keeps you on track and out of demurrage.
              </li>
              <li>
                <strong>Custom-Built Plans:</strong> Whether it’s one shipment or a recurring contract, we tailor port services to match your cargo’s requirements.
              </li>
            </ul>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <img src="/img/services/west_africa_coverage.png" alt="Tanker Logistics" className="rounded-lg object-cover w-full h-80" />
            </div>

            <p>
              With Philotes, you get more than an agent — you get a specialized logistics partner that understands the complexities of tanker operations and keeps your liquid cargo flowing safely, swiftly, and in full compliance.
            </p>
          </section>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default LiquidCargoAgency;
