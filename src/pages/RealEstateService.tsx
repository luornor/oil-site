// src/pages/RealEstateService.tsx
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const RealEstateService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <header className="relative bg-center flex items-center justify-center h-[30vh]">
        <div className="absolute inset-0 bg-white" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-400 drop-shadow">
            Philotes Real Estate Services
          </h1>
          <p className="text-blue-400 text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Regional development and real estate solutions from Philotes Maritime Services
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
            src="/img/services/Real-estate.png"
            alt="Real Estate"
            className="w-full h-full object-cover rounded-lg shadow mb-8"
          />

          <section className="space-y-6">
            <p>
              Philotes Maritime Services has expanded its footprint beyond shipping and logistics into real estate development — offering quality-driven residential, commercial, and industrial infrastructure across West Africa.
            </p>

            <h2 className="text-xl font-bold text-blue-900">Why Real Estate is Booming in West Africa</h2>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Urban Growth:</strong> Cities are expanding rapidly, creating strong demand for homes, offices, and warehousing.</li>
              <li><strong>Investment Migration:</strong> More businesses and individuals are diversifying into property assets for long-term growth.</li>
              <li><strong>Infrastructure Expansion:</strong> Government and private projects are opening new investment corridors.
              </li>
            </ul>

            <h2 className="text-xl font-bold text-blue-900">Why Philotes Maritime Services?</h2>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li><strong>Established Presence:</strong> Active in 11 countries across West Africa, we build where opportunity thrives</li>
              <li><strong>Construction-Backed Experience:</strong> Our background in maritime infrastructure translates to durable, high-quality buildings</li>
              <li><strong>Property Diversity:</strong> Residential communities, commercial offices, retail hubs, logistics parks</li>
              <li><strong>Strategic Location Scouting:</strong> We target high-demand, high-appreciation zones close to ports and trade centers</li>
              <li><strong>Full Lifecycle Support:</strong> From land sourcing to development, leasing, and facility management</li>
              <li><strong>Green Construction:</strong> Sustainable, energy-efficient buildings designed for modern use and resale value</li>
              <li><strong>Clear Communication:</strong> Transparent investment updates, timelines, and performance metrics</li>
              <li><strong>Market-Driven Performance:</strong> Projects tailored to sector demand and rental market dynamics</li>
            </ul>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <img src="/img/services/west_africa_coverage.png" alt="Philotes Property" className="rounded-lg object-cover w-full h-80" />
            </div>
            <p>
              Whether you're expanding into African real estate or launching your first property portfolio, Philotes Maritime Services provides the insight, execution, and regional knowledge to make your investment matter.
            </p>
          </section>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default RealEstateService;
