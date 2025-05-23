// src/pages/BondedTerminal.tsx
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const BondedTerminal = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <header className="relative bg-center flex items-center justify-center h-[30vh]">
        <div className="absolute inset-0 bg-white" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-400 drop-shadow">
            Bonded Terminal Services
          </h1>
          <p className="text-blue-400 text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Duty-deferred storage and distribution logistics optimized for global trade
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
            src="/img/services/bonded_terminal.png"
            alt="Bonded Terminal"
            className="w-full h-full object-cover rounded-lg shadow mb-8"
          />

          <section className="space-y-6">
            <p>
              Philotes Maritime Services provides secure bonded terminal solutions that support efficient cargo handling, customs clearance, and cost-effective inventory control. With a strategic network across 11 West African countries, we help our clients delay duty payments, facilitate re-export, and streamline logistics operations.
            </p>

            <h2 className="text-xl font-bold text-blue-900">What Is a Bonded Terminal?</h2>
            <p>
              A bonded terminal is a customs-controlled facility where goods can be stored without paying import duties or taxes until they’re cleared for domestic use or re-exported. This gives businesses better control over cash flow, compliance, and inventory.
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Defers duty payments until goods are released</li>
              <li>Enables holding stock for re-export without taxation</li>
              <li>Helps manage inventory volumes and costs</li>
            </ul>

            <h2 className="text-xl font-bold text-blue-900">Why Choose Philotes Maritime Services?</h2>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li><strong>Extensive Terminal Coverage:</strong> Bonded storage in key ports across Nigeria, Ghana, Togo, Benin, and Ivory Coast</li>
              <li><strong>Customs Compliance Expertise:</strong> Duty deferral programs, exemption processing, and port clearance managed end to end</li>
              <li><strong>Cargo Type Flexibility:</strong> Bulk, containerized, specialty cargo (electronics, perishables, pharma, etc.)</li>
              <li><strong>Cash Flow Optimization:</strong> Only pay duties when cargo leaves terminal — useful for resale or strategic distribution</li>
              <li><strong>Fast Documentation Turnaround:</strong> Bills of lading, invoices, origin certificates, customs forms — handled by our team</li>
              <li><strong>Secure &amp; Monitored Facilities:</strong> 24/7 surveillance, access control, climate options for high-value cargo</li>
              <li><strong>Tailored for Any Industry:</strong> Agriculture, construction, electronics, oil &amp; gas, retail — we design bonded solutions by sector</li>
              <li><strong>Live Inventory Management:</strong> Digital tracking and stock-level reports support JIT inventory models and e-commerce flow</li>
            </ul>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <img src="/img/services/west_africa_coverage.png" alt="Terminal Storage" className="rounded-lg object-cover w-full h-72" />
            </div>

            <p>
              With Philotes, your cargo is secure, compliant, and positioned for optimized release. We help you hold, store, and deploy inventory at the right moment — reducing costs, taxes, and inefficiencies.
            </p>
          </section>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default BondedTerminal;
