// src/pages/ShipSpareParts.tsx
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const ShipSpareParts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <header className="relative bg-center flex items-center justify-center h-[40vh]">
        <div className="absolute inset-0 bg-white" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-400 drop-shadow">
            Ship Spare Parts Supply &amp; Repairs
          </h1>
          <p className="text-blue-400 text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Reliable supply and technical support for vessels, shipyards, and logistics fleets
          </p>
        </div>
      </header>

      <main className="flex-grow px-6 py-12 max-w-6xl mx-auto space-y-12 text-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/img/services/services3.jpg"
            alt="Spare Parts"
            className="w-full h-80 object-cover rounded-lg shadow mb-8"
          />

          <section className="space-y-6">
            <p>
              At Philotes Maritime Services, we maintain strong relationships with top-tier shipyards and suppliers worldwide. We ensure fast delivery of high-quality spare parts, consumables, and repair solutions across every vessel type.
            </p>

            <h2 className="text-xl font-bold text-blue-900">Technical Ship Supply</h2>
            <p>
              Through our extensive network of local and international vendors, we deliver a full range of components including:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc list-inside">
              <li>Engine parts, valves, filters, hoses, pumps, bearings</li>
              <li>Safety gear, electrical units, fire safety equipment</li>
              <li>Paints, chemicals, protective clothing, cleaning materials</li>
              <li>Deck and navigation equipment, nautical instruments</li>
            </ul>

            <h2 className="text-xl font-bold text-blue-900">Cabin, Deck, and Engine Stores</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc list-inside">
              <li>Hand tools, welding machines, and fittings</li>
              <li>Galley equipment and tableware</li>
              <li>Medicine, linens, lavatory supplies</li>
              <li>Rubber products, sealants, watertight packing</li>
            </ul>

            <h2 className="text-xl font-bold text-blue-900">Repairs and Overhauls</h2>
            <p>
              We are equipped for emergency response and scheduled maintenance with a trained crew and stocked inventory. We offer 24/7 dispatch for:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Crane spare parts (MacGregor, Liebherr, IHI, Mitsubishi, etc.)</li>
              <li>Navigation and bridge control system spares</li>
              <li>Hydraulic, pneumatic, and engine system troubleshooting</li>
            </ul>

            <img
              src="/img/services/repairs.jpg"
              alt="Repairs"
              className="w-full h-80 object-cover rounded-lg shadow my-8"
            />

            <h2 className="text-xl font-bold text-blue-900">What We Keep in Stock</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 list-disc list-inside">
              <li>Actuator units and valves</li>
              <li>Burners, boilers, and separators</li>
              <li>Compressors and motors</li>
              <li>Lightning and armatures</li>
              <li>Navigation instruments</li>
              <li>Hydraulic seals, pipes and fittings</li>
              <li>High pressure washers and tacho generators</li>
              <li>Waste management &amp; water treatment units</li>
              <li>Marine steel, sheets, and welding rods</li>
            </ul>

            <h2 className="text-xl font-bold text-blue-900">Why Philotes?</h2>
            <p>
              We bring unmatched reliability to marine logistics. Whether you need a stocked component or critical overhaul,
              we act fast and precisely. Our service includes cargo clearance, technical inspection, supply planning, and
              remote support for urgent repair needs.
            </p>
          </section>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default ShipSpareParts;
