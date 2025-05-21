// src/pages/BunkerFreshWater.tsx
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const BunkerFreshWater = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <header className="relative bg-center flex items-center justify-center h-[40vh]">
        <div className="absolute inset-0 bg-white" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-400 drop-shadow">
            Bunker / Fresh Water Supply
          </h1>
          <p className="text-blue-400 text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Reliable delivery of marine fuel and potable water for vessels across West Africa
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
            src="/img/services/QuantumFlux_72-LG.jpg"
            alt="Bunker & Fresh Water"
            className="w-full h-80 object-cover rounded-lg shadow mb-8"
          />

          <section className="space-y-6">
            <p>
              At Philotes Maritime Services, we understand the importance of timely fuel and water supplies to maintain
              seamless vessel operations. We provide round-the-clock delivery of marine bunker fuel and fresh water
              across major West African ports.
            </p>

            <h2 className="text-xl font-bold text-blue-900">Our Service Capabilities</h2>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Bunker Fuel:</strong> Including MGO, VLSFO, and other compliant marine fuels</li>
              <li><strong>Fresh Water:</strong> Potable and hygienically handled supply, delivered safely dockside or by barge</li>
            </ul>

            <h2 className="text-xl font-bold text-blue-900">Why Choose Philotes?</h2>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Regional Expertise:</strong> Operational coverage across 11 West African countries including Nigeria, Ghana, Togo, and Benin</li>
              <li><strong>Reliable Timing:</strong> Quick turnaround and delivery scheduling to prevent delays</li>
              <li><strong>All-In-One:</strong> Fuel, fresh water, and additional logistics support available on request</li>
              <li><strong>Cost Efficiency:</strong> Competitive rates driven by local knowledge and supplier networks</li>
              <li><strong>IMO Compliant:</strong> All products meet international maritime safety and environmental standards</li>
              <li><strong>24/7 Coordination:</strong> Our dispatch team is always on standby for port calls and special requests</li>
            </ul>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <img src="/img/services/KING.jpeg" alt="Fresh Water Logistics" className="rounded-lg object-cover w-full h-72" />
            </div>

            <p>
              Our bunker and water supply operations are aligned with today’s standards for speed, safety, and environmental compliance. Whether alongside a terminal or at anchor, Philotes ensures your ship remains fuelled, hydrated, and ready for its next journey.
            </p>
          </section>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default BunkerFreshWater;
