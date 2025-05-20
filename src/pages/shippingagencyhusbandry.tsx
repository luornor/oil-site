// src/pages/ShippingAgency.tsx
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const ShippingAgency = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <header className="relative flex items-center justify-center">
        <div className="absolute inset-0 bg-white" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-2xl sm:text-3xl md:text-3xl font-extrabold text-blue-400 drop-shadow">
            Full Ship Agency &amp; Husbandry
          </h1>
          <p className="text-blue-400 text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Professional port coordination and marine support services, delivered with reliability and global standards.
          </p>
        </div>
      </header>

      <main className="flex-grow px-6 py-12 max-w-6xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/img/services/husbandry.jpg"
            alt="Ship husbandry"
            className="w-full h-96 object-cover rounded-lg shadow mb-8"
          />

          <section className="space-y-6 text-gray-800">
            <p>
              Philotes Maritime Services offers comprehensive ship agency and husbandry services, acting as your
              on-the-ground representative. We handle vessel arrivals, departures, port stays, and liaise with port
              authorities on documentation, immigration, customs, and health clearance.
            </p>

            <h2 className="text-2xl font-bold text-blue-900">Assessment Procedures</h2>
            <p>
              Before departure or during stopovers, vessels undergo cleanliness and seaworthiness checks. Our
              husbandry team facilitates everything from hull inspections to leak detection—ensuring ships meet
              international marine standards.
            </p>

            <h2 className="text-2xl font-bold text-blue-900">Ship Maintenance</h2>
            <p>
              Whether minor repairs or major overhauls, we coordinate all levels of ship maintenance:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Cleaning of container, cargo, tanker, and military vessels</li>
              <li>In-port repairs or inspections as scheduled or on demand</li>
              <li>Underwater services: hull cleaning, welding, polishing, coating, and repainting</li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-900">Preparation &amp; Notifications</h2>
            <p>
              We handle pre-arrival coordination, berth bookings, and clearances to reduce delays. All documentation is
              prepared and submitted to port authorities on your behalf for a seamless port experience.
            </p>

            <p>
              At Philotes Maritime Services, we pride ourselves on our attention to detail and the ability to handle all
              vessel types across tramping and regular line operations. Our team is highly trained and equipped with
              modern systems to exceed international standards.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">We Arrange On Your Behalf:</h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg text-[#ff3c41]">Crew Handling</h4>
                <ul className="list-disc list-inside ml-4 text-sm text-gray-700">
                  <li>Visa arrangements and sign-on/off protocols</li>
                  <li>Air/sea travel tickets, medicals, and launch boat services</li>
                  <li>Hotel bookings and port transfers</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-[#ff3c41]">Logistics &amp; Procurement</h4>
                <ul className="list-disc list-inside ml-4 text-sm text-gray-700">
                  <li>Custom clearance for ship spares and tax exemptions</li>
                  <li>Supply boat coordination</li>
                  <li>Final mile delivery within port</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-[#ff3c41]">Marine Support Coordination</h4>
                <ul className="list-disc list-inside ml-4 text-sm text-gray-700">
                  <li>Class survey and P&amp;I Insurance services</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-[#ff3c41]">Technical &amp; Navigation Support</h4>
                <ul className="list-disc list-inside ml-4 text-sm text-gray-700">
                  <li>Deslopping and waste oil removal</li>
                  <li>Freshwater supply and garbage handling</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-[#ff3c41]">Estimated Port Disbursement (EPDA)</h4>
                <ul className="list-disc list-inside ml-4 text-sm text-gray-700">
                  <li>Port authority dues and pilotage charges</li>
                  <li>Launch hire and miscellaneous fees</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="mt-10 border-t pt-6 text-sm text-gray-600">
            <p><strong>Note:</strong> All services are recorded in an Agency Service Report signed by the Master or Superintendent for transparency and billing accuracy.</p>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default ShippingAgency;
