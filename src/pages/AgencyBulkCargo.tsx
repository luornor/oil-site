// src/pages/AgencyBulkCargo.tsx
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const AgencyBulkCargo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <header className="relative bg-center flex items-center justify-center h-[40vh]">
        <div className="absolute inset-0 bg-white" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-400 drop-shadow">
            Bulk Cargo Agency Services
          </h1>
          <p className="text-blue-400 text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed drop-shadow">
            End-to-end coordination of bulk commodities, from port entry to final delivery
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
            src="/img/services/korab2-scaled-1.jpg"
            alt="Bulk Cargo"
            className="w-full h-80 object-cover rounded-lg shadow mb-8"
          />

          <section className="space-y-6">
            <p>
              Bulk cargo is the engine of global supply chains — and its movement requires precise, compliant, and well-coordinated services. Philotes Maritime Services provides expert bulk cargo agency solutions across West African ports, tailored to both dry and liquid commodities.
            </p>

            <h2 className="text-xl font-bold text-blue-900">Why Bulk Cargo Requires Specialized Management</h2>
            <p>
              From grain and coal to cement, minerals, and petroleum, bulk cargo demands vessel-specific and cargo-sensitive handling to ensure safety, environmental compliance, and port efficiency.
            </p>

            <h2 className="text-xl font-bold text-blue-900">Why Choose Philotes Maritime Services?</h2>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>
                <strong>Proven Experience:</strong> We’ve managed bulk operations ranging from dry minerals to fuel cargo, minimizing risk and reducing handling time.
              </li>
              <li>
                <strong>Regional Strength:</strong> With presence in 11 West African countries and deep port relationships, we coordinate with customs, authorities, and port officials for smooth discharge.
              </li>
              <li>
                <strong>Comprehensive Services:</strong> We handle documentation, customs clearance, stevedoring, warehousing, and transport scheduling under one agency.
              </li>
              <li>
                <strong>Vessel &amp; Port Coordination:</strong> Our team manages vessel berthing, discharge procedures, and load plans to ensure efficient port turnaround.
              </li>
              <li>
                <strong>Custom Plans for Cargo Type:</strong> Whether solid bulk or liquid, we adjust operational plans to fit cargo characteristics and client demands.
              </li>
              <li>
                <strong>Strict Regulatory Adherence:</strong> Our operations follow IMO, SOLAS, and port-specific standards to avoid delays and penalties.
              </li>
              <li>
                <strong>Efficient &amp; Cost-Conscious:</strong> Our bulk agency model reduces demurrage, optimizes delivery time, and prevents handling losses.
              </li>
              <li>
                <strong>Modern Tools &amp; Skilled Crew:</strong> Equipped with the latest tools, our teams ensure fast discharge, safe stowage, and clean documentation.
              </li>
              <li>
                <strong>Industry-Wide Trust:</strong> We serve mining, oil &amp; gas, agricultural, and construction clients across multiple jurisdictions.
              </li>
            </ul>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <img src="/img/services/west_africa_coverage.png" alt="Bulk Ops" className="rounded-lg object-cover w-full h-72" />
            </div>

            <p>
              For reliable bulk cargo discharge, logistics, and compliance services across West Africa, trust Philotes Maritime Services. We ensure every ton is tracked, every timeline respected, and every shipment handled with precision.
            </p>
          </section>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default AgencyBulkCargo;
