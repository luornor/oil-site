// src/pages/SecurityBoatServices.tsx
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const SecurityBoatServices = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <header className="relative bg-center flex items-center justify-center h-[40vh]">
        <div className="absolute inset-0 bg-white" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-400 drop-shadow">
            Security &amp; Boat Services
          </h1>
          <p className="text-blue-400 text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Dedicated vessel protection, crew transfers, and port operations across West Africa
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
            src="/img/services/maxresdefault-4.jpg"
            alt="Security Boat"
            className="w-full h-80 object-cover rounded-lg shadow mb-8"
          />

          <section className="space-y-6">
            <p>
              In today’s maritime environment, ensuring the safety of vessels, crew, and cargo is essential. Philotes Maritime Services provides fully integrated security and boat services to reduce risk, enhance port operations, and provide operational confidence throughout your voyage.
            </p>

            <h2 className="text-xl font-bold text-blue-900">Why Security &amp; Boat Services Matter</h2>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li><strong>Maritime Security:</strong> Active threats such as piracy and smuggling make protective measures necessary for vessels transiting high-risk zones, particularly the Gulf of Guinea.</li>
              <li><strong>Boat Services:</strong> Ship-to-shore operations like crew transfers, pilotage, and resupply are essential to keep maritime activity on schedule and safe.</li>
            </ul>

            <h2 className="text-xl font-bold text-blue-900">Why Choose Philotes Maritime Services?</h2>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>
                <strong>Comprehensive Maritime Protection:</strong> We offer onboard armed guards, coastal escort vessels, and patrol boat operations tailored to your route and cargo.
              </li>
              <li>
                <strong>Regional Intelligence:</strong> With deep operational knowledge across 11 West African nations, we anticipate risks and adapt to local conditions effectively.
              </li>
              <li>
                <strong>Rapid 24/7 Response:</strong> Our dispatch teams and boat crews are available around the clock to handle emergencies or resupply operations.
              </li>
              <li>
                <strong>Efficient Crew Transfer &amp; Logistics:</strong> Fast, reliable transfers and provisioning to reduce turnaround time while docked or at anchorage.
              </li>
              <li>
                <strong>Pilotage &amp; Towing Services:</strong> Skilled pilots and tug support for safe vessel maneuvering into tight berths or shallow ports.
              </li>
              <li>
                <strong>Certified Equipment &amp; Crew:</strong> All vessels and personnel meet IMO standards, and are trained to handle complex port logistics and boarding procedures.
              </li>
              <li>
                <strong>Tailored Operations:</strong> Whether you need daily shuttle runs, offshore monitoring, or specialized escort service, we design the right solution.
              </li>
              <li>
                <strong>Strong Local Partnerships:</strong> Our relationships with port authorities and naval agencies allow us to deliver fast, coordinated protection and services.
              </li>
            </ul>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <img src="/img/services/west_africa_coverage.png" alt="Patrol & Support" className="rounded-lg object-cover w-full h-72" />
            </div>

            <p>
              Philotes Maritime Services is the trusted security and support provider for vessels in West Africa. Whether alongside, in transit, or at offshore anchorages, we provide the protection and logistical excellence needed to keep maritime operations safe and efficient.
            </p>
          </section>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default SecurityBoatServices;
