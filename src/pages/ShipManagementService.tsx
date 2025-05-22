// src/pages/ShipManagementService.tsx
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const ShipManagementService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <header className="relative bg-center flex items-center justify-center h-[40vh]">
        <div className="absolute inset-0 bg-white" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-400 drop-shadow">
            Ship Management
          </h1>
          <p className="text-blue-400 text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Full-service ship management built on compliance, performance, and operational confidence
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
            src="/img/services/ship_management_banner.jpeg"
            alt="Ship Management"
            className="w-full h-80 object-cover rounded-lg shadow mb-8"
          />

          <section className="space-y-6">
            <p>
              At Philotes Maritime Services, we handle the complete lifecycle of vessel operations — from technical
              oversight and crew management to regulatory compliance and budgeting. Our management structure is built to
              keep vessels efficient, profitable, and ready to sail in full alignment with maritime law.
            </p>

            <h2 className="text-xl font-bold text-blue-900">The Value of Expert Ship Management</h2>
            <ul className="list-disc list-inside ml-4">
              <li>Maximize uptime and performance by coordinating maintenance and fuel optimization</li>
              <li>Ensure crew welfare, training, and safety standards</li>
              <li>Maintain full compliance with global maritime safety and environmental regulations</li>
              <li>Control OPEX through financial oversight and service scheduling</li>
            </ul>

            <h2 className="text-xl font-bold text-blue-900">Why Choose Philotes Maritime Services?</h2>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li><strong>Comprehensive Services:</strong> We handle technical support, crewing, ISM safety, repairs, dry-docking, audits, and more</li>
              <li><strong>Regional Strength:</strong> We operate across 11 West African countries and understand local port dynamics</li>
              <li><strong>Certified Crew Management:</strong> We recruit, train, and care for your onboard teams with full compliance and transparency</li>
              <li><strong>Technical Oversight:</strong> Scheduled inspections, daily reporting, and regulatory audits help us prevent costly issues</li>
              <li><strong>Compliance Focused:</strong> We align operations with IMO, MARPOL, SOLAS, and regional maritime frameworks</li>
              <li><strong>Financial Management:</strong> Real-time fuel monitoring, repair budgeting, and port cost optimization built-in</li>
              <li><strong>Transparent Reporting:</strong> You receive ongoing updates covering performance, cost, safety, and schedule compliance</li>
              <li><strong>Tailored Solutions:</strong> Whether a single vessel or a multi-vessel fleet, our strategies scale to your operational size</li>
            </ul>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <img src="/img/services/KING.jpeg" alt="Managed Fleet" className="rounded-lg object-cover w-full h-72" />
            </div>

            <p>
              Our goal is simple — to manage your ships as efficiently and safely as if they were our own. Through proactive support and strong global partnerships, we ensure your vessel fleet performs reliably across global seas.
            </p>
          </section>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default ShipManagementService;
