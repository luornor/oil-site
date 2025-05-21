// src/pages/ShipChandelling.tsx
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const ShipChandelling = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <header className="relative bg-center flex items-center justify-center h-[40vh]">
        <div className="absolute inset-0 bg-white" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-400 drop-shadow">
            Ship Chandelling
          </h1>
          <p className="text-blue-400 text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Supplying vessels with everything they need, from food to fuel and technical equipment
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
            src="/img/services/chandelling1.jpg"
            alt="Chandelling"
            className="w-full h-80 object-cover rounded-lg shadow mb-8"
          />

          <section className="space-y-6">
            <p>
              Ship chandelling plays a vital role in maintaining a vessel’s readiness and operational efficiency. It ensures ships are stocked with provisions, spare parts, and critical supplies needed for their voyage.
            </p>

            <h2 className="text-xl font-bold text-blue-900">Key Areas of Supply</h2>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Provisions:</strong> Fresh produce, frozen goods, and beverages for crew sustenance</li>
              <li><strong>Technical Equipment:</strong> Engine parts, navigation instruments, and spare components</li>
              <li><strong>Safety Gear:</strong> Fire extinguishers, medical kits, and life-saving appliances</li>
              <li><strong>Fuel &amp; Lubricants:</strong> Timely delivery of essential fuels and oils</li>
              <li><strong>General Operations:</strong> Cleaning products, stationery, and daily-use items</li>
            </ul>

            <h2 className="text-xl font-bold text-blue-900">Why Choose Philotes Maritime Services?</h2>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Extensive Coverage:</strong> Operating across 11 West African ports</li>
              <li><strong>Reliable Service:</strong> 24/7 delivery, urgent response, and trusted sourcing</li>
              <li><strong>Expertise:</strong> Years of experience in meeting the dynamic needs of ship operators</li>
              <li><strong>Quality Products:</strong> Sourced from certified manufacturers, always up to standard</li>
              <li><strong>Customer-Focused:</strong> Tailored solutions based on your vessel’s specific needs</li>
              <li><strong>Cost-Efficient:</strong> Competitive pricing without compromise on quality</li>
            </ul>

            <p>
              Our ship chandelling services go beyond standard provisioning. We work closely with clients to ensure timely
              and complete delivery of items, enabling vessels to remain compliant, safe, and voyage-ready.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <img src="/img/services/KING.jpeg" alt="Chandelling" className="rounded-lg object-cover w-full h-72" />
            </div>

          </section>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default ShipChandelling;
