// src/pages/VesselManagement.tsx
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const VesselManagement = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <header className="relative bg-center flex items-center justify-center h-[40vh]">
        <div className="absolute inset-0 bg-white" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-400 drop-shadow">
            Vessel Management
          </h1>
          <p className="text-blue-400 text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Efficient operations and safety-focused services across your maritime fleet
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
            src="/img/services/What-is-Vessel-Management-System-1.png"
            alt="Vessel Management"
            className="w-full h-80 object-cover rounded-lg shadow mb-8"
          />

          <section className="space-y-6">
            <p>
              At Philotes Maritime Services, vessel management is more than a process — it’s a strategic service designed to ensure your fleet remains efficient, compliant, and profitable. Our team handles operations, maintenance, compliance, and more to deliver seamless performance at sea.
            </p>

            <h2 className="text-xl font-bold text-blue-900">Our Core Areas of Vessel Management</h2>

            <h3 className="font-semibold mt-4">1. Operational Oversight</h3>
            <p>
              From voyage planning to route optimization and crew schedules, we manage day-to-day operations to reduce cost and maximize delivery accuracy.
            </p>

            <h3 className="font-semibold mt-4">2. Technical Services</h3>
            <p>
              We implement preventive maintenance schedules and conduct inspections to ensure your fleet remains fully operational — reducing the risk of breakdowns or downtime.
            </p>

            <h3 className="font-semibold mt-4">3. Regulatory &amp; Safety Compliance</h3>
            <p>
              Compliance with IMO, MARPOL, and other global standards is essential. We manage safety protocols and ensure your documentation is always audit-ready.
            </p>

            <h3 className="font-semibold mt-4">4. Skilled Crew Management</h3>
            <p>
              We recruit and manage certified, experienced crew members, offering training and welfare support that keeps teams motivated and effective.
            </p>

            <h3 className="font-semibold mt-4">5. Cost Efficiency &amp; Reporting</h3>
            <p>
              Budgeting, cost control, and transparent financial reports ensure that every decision is informed and sustainable for your shipping business.
            </p>

            <h2 className="text-xl font-bold text-blue-900">Why Work With Philotes?</h2>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Decades of Experience:</strong> Proven capability managing mixed fleets globally</li>
              <li><strong>Full Service Offering:</strong> Operations, compliance, maintenance, finance, and crew</li>
              <li><strong>Smart Technology:</strong> Real-time tracking and vessel analytics</li>
              <li><strong>Sustainability Driven:</strong> Fuel optimization and environmentally responsible practices</li>
              <li><strong>Dedicated Client Support:</strong> Our team ensures you're always informed and in control</li>
            </ul>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <img src="/img/services/KING.jpeg" alt="Fleet Support" className="rounded-lg object-cover w-full h-72" />
            </div>

            <p>
              We empower shipping companies to stay competitive in a complex global environment. From large vessel operators to boutique marine fleets, Philotes Maritime Services provides reliable, future-ready management that makes your business stronger.
            </p>
          </section>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default VesselManagement;
