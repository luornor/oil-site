// src/pages/PortStevedores.tsx
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const PortStevedores = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <header className="relative bg-center flex items-center justify-center h-[30vh]">
        <div className="absolute inset-0 bg-white" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-400 drop-shadow">
            Port Stevedores Services
          </h1>
          <p className="text-blue-400 text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Professional terminal and cargo handling throughout West Africa
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
            src="/img/services/port_service.png"
            alt="PortStevedores"
            className="w-full h-full object-cover rounded-lg shadow mb-8"
          />
          
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Port Expertise Across the Region</h2>
          <p>
            Philotes Maritime Services delivers a full spectrum of stevedoring and terminal services. Operating from our
            head office in Lagos and regional locations across Togo, Ghana, and Cotonou, our trained local teams deliver
            around-the-clock assistance under ISO 9001-certified quality standards.
          </p>

          <ul className="list-disc list-inside mt-4">
            <li>Bonded terminals for temporary goods storage</li>
            <li>Bulk cargo handling including grain, liquid, and raw materials</li>
            <li>Reefer, breakbulk, and container vessel support</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-900 mt-8">Warehouse Solutions and Benefits</h2>
          <p>
            Our strategically located warehouses provide safety, efficiency, and access to key trading corridors. We
            support landlocked nations like Mali, Niger, and Burkina Faso by managing trade through seaports with nearby
            warehousing capacity.
          </p>

          <ul className="list-disc list-inside mt-4">
            <li><strong>Safety & Preservation:</strong> Goods are protected from spoilage, theft, and environmental damage</li>
            <li><strong>Efficient Handling:</strong> Equipped with loading docks, cranes, and automated systems</li>
            <li><strong>Continuous Supply:</strong> Warehousing ensures product availability year-round</li>
            <li><strong>Access for Small Traders:</strong> Affordable storage with added marketing and labeling services</li>
            <li><strong>Location Advantage:</strong> Warehouses near ports, rails, and airports reduce delivery cost</li>
            <li><strong>Job Creation:</strong> Warehousing supports logistics, finance, and packaging sectors</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-900 mt-8">Customs & Cargo Operations</h2>
          <p>
            From freezones to container yards, our customs team offers all-round management for oversized and special
            project cargo. We manage:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Customs management and load supervision</li>
            <li>Land transport and terminal handling</li>
            <li>Bulk, liquid, and oversized cargo expertise</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-900 mt-8">Unloading, Loading & Ship Support</h2>
          <p>
            We ensure efficient loading/unloading of cargo via ro/ro, grabs, and mobile cranes. Our experienced
            Supercargoes oversee safety and operational precision.
          </p>

          <p className="mt-4">
            Our company maintains certifications such as <strong>ISO 9001</strong> and <strong>ISO 14001</strong>, ensuring
            quality, environmental care, and occupational safety throughout the supply chain.
          </p>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default PortStevedores;
