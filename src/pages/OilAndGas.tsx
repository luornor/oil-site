// src/pages/OilAndGas.tsx
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const OilAndGas = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <header className="relative bg-center flex items-center justify-center h-[40vh]">
        <div className="absolute inset-0 bg-white" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-400 drop-shadow">
            Oil &amp; Gas Logistics
          </h1>
          <p className="text-blue-400 text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Integrated support for the oil and gas industry — exploration, refining, and distribution
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
            src="/img/services/oilgas.jpg"
            alt="Oil and Gas"
            className="w-full h-80 object-cover rounded-lg shadow mb-8"
          />

          <section className="space-y-6">
            <p>
              At Philotes Maritime Services, we provide specialized logistics and shipping solutions tailored for the oil and gas industry. We serve clients at every stage — from exploration and drilling to transport and distribution.
            </p>

            <h2 className="text-xl font-bold text-blue-900">Industry Challenges We Navigate</h2>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Exploration &amp; Extraction:</strong> Transport of heavy equipment and personnel to remote areas</li>
              <li><strong>Refining:</strong> Secure movement of raw and processed petrochemicals</li>
              <li><strong>Distribution:</strong> Coordinated transport through pipelines, tankers, and road systems</li>
            </ul>

            <h2 className="text-xl font-bold text-blue-900">Why Choose Philotes?</h2>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Expertise:</strong> Decades of experience with hazardous materials and global trade routes</li>
              <li><strong>End-to-End Solutions:</strong> From customs and warehousing to project management</li>
              <li><strong>Real-Time Technology:</strong> Transparent tracking and shipment insights</li>
              <li><strong>Compliance:</strong> We meet all international safety, environmental, and customs standards</li>
              <li><strong>Eco-Focused:</strong> Route optimization and emissions-conscious logistics planning</li>
              <li><strong>Dedicated Support:</strong> Always-on communication and rapid response teams</li>
            </ul>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <img src="/img/services/KING.jpeg" alt="Oil & Gas Office" className="rounded-lg object-cover w-full h-72" />
            </div>

            <p>
              Partnering with Philotes Maritime Services means working with a logistics provider who understands the complexities of energy supply chains. Our team ensures that your cargo — whether liquid, compressed, or bulk — reaches its destination securely and efficiently.
            </p>
          </section>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default OilAndGas;
