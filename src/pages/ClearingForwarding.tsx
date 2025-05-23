// src/pages/ClearingForwarding.tsx
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const ClearingForwarding = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <header className="relative bg-center flex items-center justify-center h-[30vh]">
        <div className="absolute inset-0 bg-white" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-400 drop-shadow">
            Clearing &amp; Forwarding
          </h1>
          <p className="text-blue-400 text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Smooth, compliant cargo movement from port to final destination — across borders and borders
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
            src="/img/services/clearing-forwarding.png"
            alt="Clearing Forwarding"
            className="w-full h-full object-cover rounded-lg shadow mb-8"
          />

          <section className="space-y-6">
            <p>
              Philotes Maritime Services provides end-to-end clearing and forwarding services designed to eliminate port delays, ensure customs compliance, and get your cargo delivered faster and more cost-effectively.
            </p>

            <h2 className="text-xl font-bold text-blue-900">What is Clearing &amp; Forwarding?</h2>
            <p>
              <strong>Clearing:</strong> Processing goods through customs — ensuring the right paperwork, duties, and taxes are filed and fulfilled.
            </p>
            <p>
              <strong>Forwarding:</strong> Coordinating cargo from the point of origin to its final destination using air, land, and sea — optimizing routes, schedules, and carriers.
            </p>

            <h2 className="text-xl font-bold text-blue-900">Why Partner With Philotes?</h2>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li><strong>West African Expertise:</strong> On-the-ground presence across 11 countries with deep customs insight</li>
              <li><strong>Documentation &amp; Clearance:</strong> We prepare and file commercial invoices, bills of lading, HS codes, and import licenses</li>
              <li><strong>Import/Export Optimization:</strong> We minimize duties through legal exemptions and pre-clearance strategies</li>
              <li><strong>Flexible Transport:</strong> Use of sea, air, rail, and road freight — with route planning for speed and savings</li>
              <li><strong>Real-Time Tracking:</strong> Get digital updates on your cargo status 24/7 from departure to arrival</li>
              <li><strong>Regulatory Compliance:</strong> We handle inspections, certifications, cargo classification, and duty assessment</li>
              <li><strong>Affordable Solutions:</strong> Transparent rates + reduced detention/storage fees through fast turnaround</li>
              <li><strong>Multi-Industry Experience:</strong> Serving construction, mining, agriculture, retail, oil and gas, and pharma</li>
              <li><strong>Integrated Insurance:</strong> Option for marine and overland coverage against loss or damage</li>
            </ul>
            
            <p>
              With Philotes, you gain more than a broker — you gain a logistics partner who will proactively monitor,
              resolve, and expedite every step of your shipment journey, from paperwork to offloading.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <img src="/img/services/west_africa_coverage.png" alt="Cargo Flow" className="rounded-lg object-cover w-full h-full" />
            </div>

          </section>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default ClearingForwarding;
