// src/pages/UnderwaterSolutions.tsx
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const UnderwaterSolutions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <header className="relative bg-center flex items-center justify-center h-[40vh]">
        <div className="absolute inset-0 bg-white" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-400 drop-shadow">
            Underwater Services
          </h1>
          <p className="text-blue-400 text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Certified divers, precision repairs, and global-class underwater maintenance
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
            src="/img/services/banner-1.jpg"
            alt="Underwater Service"
            className="w-full h-80 object-cover rounded-lg shadow mb-8"
          />

          <section className="space-y-6">
            <p>
              Since 2000, Philotes Maritime Services has provided professional underwater services through a globally certified diving team. From marine equipment repair to full underwater maintenance, we operate across energy, navy, and commercial shipping segments.
            </p>

            <p>
              With a dedicated OEM-certified diving crew and access to proprietary parts and procedures, we offer a full range of underwater services — minimizing downtime, eliminating drydock, and delivering high performance in critical situations.
            </p>

            <h2 className="text-xl font-bold text-blue-900">Core Areas of Expertise</h2>
            <ul className="list-disc list-inside ml-4">
              <li>Underwater propulsion &amp; shaft systems</li>
              <li>Machinery maintenance below sea level</li>
              <li>Shell plating and hull integrity repair</li>
              <li>Sealing systems, oil &amp; gas diving operations</li>
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <img src="/img/services/underwater-1.webp" alt="Underwater ops" className="rounded-lg object-cover w-full h-72" />
              <img src="/img/services/underwater-2.png" alt="Hull cleaning" className="rounded-lg object-cover w-full h-72" />
            </div>

            <h2 className="text-xl font-bold text-blue-900">Hull Cleaning &amp; Propeller Polishing</h2>
            <p>
              Drag caused by marine buildup drastically reduces fuel efficiency. Our certified divers clean and inspect hulls using multi-brush tools — restoring vessel performance while docked or at anchor.
            </p>

            <h2 className="text-xl font-bold text-blue-900">Available Underwater Services</h2>
            <ul className="list-disc list-inside ml-4">
              <li>Thruster, rudder, and stabilizer repair/replacement</li>
              <li>Sensor (ICCP, speed log) and hull-mounted system fixes</li>
              <li>Welded structural fixes, including cofferdam patching</li>
              <li>Propeller and hull cleaning with real-time video feedback</li>
              <li>Diver consultancy and marine inspection support</li>
            </ul>

            <h2 className="text-xl font-bold text-blue-900">Why Choose Philotes?</h2>
            <p>
              Our certified welders and engineers are available 24/7 to respond to emergency repairs, backed by stocked supplies and mobile deployment capabilities. Whether on-site or offshore, we ensure vessels are operational, safe, and compliant.
            </p>

            <p>
              We’re proudly certified by international diving and marine standards agencies and deliver all operations under strict safety, environmental, and occupational standards.
            </p>

            <img
              src="/img/services/underwater-3.webp"
              alt="Wartsila underwater"
              className="w-full h-80 object-cover rounded-lg shadow my-8"
            />

            <h2 className="text-xl font-bold text-blue-900">Our Promise</h2>
            <p>
              From hull repairs to thruster replacement, Philotes Maritime Services provides efficient, safe, and certified underwater solutions trusted by shipowners, managers, and insurers.
            </p>
          </section>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default UnderwaterSolutions;
// 