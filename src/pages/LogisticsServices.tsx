// src/pages/LogisticsServices.tsx
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const LogisticsServices = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <header className="relative bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-white" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-400 drop-shadow">
            Logistics Services
          </h1>
          <p className="text-blue-400 text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Reliable and scalable transport and freight solutions across West Africa
          </p>
        </div>
      </header>

      <main className="flex-grow px-4 py-10 max-w-6xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/img/services/logistics.png"
            alt="Logistics"
            className="w-full h-full object-cover rounded-lg shadow mb-8"
          />

          <section className="space-y-6 text-gray-800">
            <p>
              Philotes Maritime Services provides intelligent logistics tailored for a wide range of industries. With a strong
              national and regional network, we help businesses optimize supply chains and simplify operations.
            </p>

            <h2 className="text-xl font-bold text-blue-900">We help move your products forward</h2>
            <p>
              Our expertise lies in creating seamless end-to-end shipping and logistics flows, connecting partners around
              the globe with reliable local presence. We support customers across key West African regions including
              Togo, Burkina Faso, Mali, Ghana, and Sierra Leone.
            </p>

            <p>
              Whether you're looking to expand your warehousing or need support with customs clearing, we have
              the infrastructure and local knowledge to deliver.
            </p>

            <ul className="list-disc list-inside ml-4 text-gray-700">
              <li><strong>Packaging and Storage</strong></li>
              <li><strong>Warehousing Services</strong></li>
              <li><strong>Customs and Freight Forwarding</strong></li>
              <li><strong>Ground Transportation</strong></li>
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <img
                src="/img/services/west_africa_coverage.png"
                alt="West Africa coverage"
                className="rounded-lg object-cover w-full h-full"
              />
              <div className="flex flex-col justify-center">
                <p className="text-lg font-semibold text-[#ff3c41] mb-2">
                  We simplify and connect complex logistics.
                </p>
                <p className="text-gray-700">
                  Our real-time tracking and commitment to on-time delivery help you gain a competitive edge.
                  Trust Philotes Maritime Services to support your cargo — from port to warehouse to customer.
                </p>
              </div>
            </div>
          </section>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default LogisticsServices;
