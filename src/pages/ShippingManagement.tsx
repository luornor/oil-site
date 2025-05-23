// src/pages/ShippingManagement.tsx
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const ShippingManagement = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <header className="relative bg-center flex items-center justify-center h-[40vh]">
        <div className="absolute inset-0 bg-white" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-400 drop-shadow">
            Shipping Management
          </h1>
          <p className="text-blue-400 text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Reliable shipping operations powered by expertise, innovation, and end-to-end visibility
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
            src="/img/services/future-of-ship-management-software.jpg"
            alt="Shipping Management"
            className="w-full h-80 object-cover rounded-lg shadow mb-8"
          />

          <section className="space-y-6">
            <p>
              In today’s fast-paced trade landscape, efficient shipping management is the backbone of reliable global commerce. At Philotes Maritime Services, we empower our clients with seamless solutions — balancing operational excellence, regulatory compliance, and supply chain agility.
            </p>

            <h2 className="text-xl font-bold text-blue-900">The Pillars of Shipping Management</h2>

            <h3 className="font-semibold mt-4">1. Logistics Coordination</h3>
            <p>
              From dispatch to final delivery, we plan, track, and optimize cargo movement to ensure timely and cost-effective results. Our logistics team ensures every shipment flows through ports and borders without delay.
            </p>

            <h3 className="font-semibold mt-4">2. Fleet Oversight</h3>
            <p>
              Our experts manage routing, vessel health, maintenance schedules, and documentation across our global fleet — reducing downtime and maximizing vessel uptime.
            </p>

            <h3 className="font-semibold mt-4">3. Regulatory Compliance</h3>
            <p>
              With deep knowledge of international customs, maritime safety, and environmental standards, our teams handle all required permits and documentation so your shipments stay compliant and protected.
            </p>

            <h3 className="font-semibold mt-4">4. Risk Management</h3>
            <p>
              From weather delays to customs bottlenecks and piracy zones, we assess and manage risk using proactive contingency planning and tailored insurance support.
            </p>

            <h2 className="text-xl font-bold text-blue-900">Why Partner With Philotes?</h2>

            <ul className="list-disc list-inside ml-4">
              <li><strong>Industry Experience:</strong> Decades of navigating global logistics complexities</li>
              <li><strong>Comprehensive Solutions:</strong> Freight, documentation, vessel handling, and coordination</li>
              <li><strong>Technology Driven:</strong> Real-time tracking, digital dashboards, proactive alerts</li>
              <li><strong>Sustainability Focused:</strong> Route optimization and eco-conscious fuel planning</li>
              <li><strong>24/7 Support:</strong> A dedicated team to keep your operations moving anytime, anywhere</li>
              <li><strong>Client First:</strong> Tailored strategies, transparent pricing, and reliable execution</li>
            </ul>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <img src="/img/services/west_africa_coverage.png" alt="Shipping Office" className="rounded-lg object-cover w-full h-72" />
            </div>

            <p>
              With Philotes Maritime Services, you gain a trusted shipping partner who understands your routes, your cargo, and your goals. Our deep local presence combined with global standards makes us a preferred name in West African maritime logistics.
            </p>
          </section>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default ShippingManagement;
