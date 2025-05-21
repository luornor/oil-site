import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const GeneralMaritimeServices = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <header className="relative bg-center flex items-center justify-center h-[40vh]">
        <div className="absolute inset-0 bg-white" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-400 drop-shadow">
            General Maritime Services
          </h1>
          <p className="text-blue-400 text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Comprehensive marine support solutions delivered across West African ports
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
            src="/img/services/sl010-min.jpg"
            alt="Maritime Services"
            className="w-full h-80 object-cover rounded-lg shadow mb-8"
          />

          <section className="space-y-6">
            <p>
              Philotes Maritime Services delivers dependable and customized support to commercial vessels across West
              Africa. With operational presence in 11 countries, we help shipowners and operators navigate port
              logistics, provisioning, compliance, and onboard operations with ease.
            </p>

            <h2 className="text-xl font-bold text-blue-900">What We Provide</h2>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>
                <strong>Vessel Supply:</strong> Fuel bunkering, fresh water, provisions, and technical spare part delivery
              </li>
              <li>
                <strong>Port Operations:</strong> Docking assistance, loading/unloading support, customs clearance, and immigration
              </li>
              <li>
                <strong>Maritime Security:</strong> Escort services, onboard security, and coordination with naval authorities
              </li>
              <li>
                <strong>Maintenance &amp; Repairs:</strong> Regular inspections, emergency repair, welding, and painting services
              </li>
              <li>
                <strong>Crew Management:</strong> Transfers, welfare checks, medical aid, and training coordination
              </li>
            </ul>

            <h2 className="text-xl font-bold text-blue-900">Why Choose Philotes?</h2>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>
                <strong>Proven Experience:</strong> We’ve supported cargo, offshore, and container fleets for years with unmatched consistency.
              </li>
              <li>
                <strong>Regional Mastery:</strong> In-depth understanding of West African port systems, customs rules, and local service networks.
              </li>
              <li>
                <strong>One-Stop Service:</strong> We consolidate provisioning, documentation, logistics, and port agent services.
              </li>
              <li>
                <strong>24/7 Support:</strong> Our operations team is on-call to support vessels day or night, in port or at anchor.
              </li>
              <li>
                <strong>Custom-Built Solutions:</strong> Every vessel is unique. We build tailored support plans that ensure fast turnaround and optimized operations.
              </li>
              <li>
                <strong>Reputation You Can Rely On:</strong> We’ve earned the trust of global shipping leaders through performance, compliance, and transparency.
              </li>
            </ul>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <img src="/img/services/KING.jpeg" alt="Maritime Ops" className="rounded-lg object-cover w-full h-72" />
            </div>

            <p>
              Whether you need urgent vessel repair, efficient crew coordination, or full port clearance, Philotes
              Maritime Services is your trusted partner. We keep your operations on time, compliant, and fully supported
              every step of the way.
            </p>
          </section>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default GeneralMaritimeServices;
