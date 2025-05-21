// src/pages/ArmedMenOnboard.tsx
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const ArmedMenOnboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <header className="relative bg-center flex items-center justify-center h-[40vh]">
        <div className="absolute inset-0 bg-white" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-400 drop-shadow">
            Armed Men Onboard
          </h1>
          <p className="text-blue-400 text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Providing expert security personnel for the protection of your crew, cargo, and vessel
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
            src="/img/services/armed-men.jpg"
            alt="Armed Security"
            className="w-full h-80 object-cover rounded-lg shadow mb-8"
          />

          <section className="space-y-6">
            <p>
              Security at sea is a top priority for modern shipping companies. At Philotes Maritime Services, we provide trained and certified armed personnel onboard vessels operating in high-risk areas. Their presence ensures protection from piracy, smuggling, armed robbery, and other maritime threats.
            </p>

            <h2 className="text-xl font-bold text-blue-900">Why Armed Men Onboard Matters</h2>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Visible Deterrence:</strong> Armed security discourages potential attackers</li>
              <li><strong>Immediate Threat Response:</strong> Our personnel are trained to neutralize threats in real-time</li>
              <li><strong>Boosted Crew Morale:</strong> Peace of mind lets crew focus fully on duties</li>
              <li><strong>Insurance Compliance:</strong> Many policies require onboard security for dangerous routes</li>
            </ul>

            <h2 className="text-xl font-bold text-blue-900">Why Philotes Maritime Services?</h2>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Trained Experts:</strong> Security staff with tactical training and crisis response certifications</li>
              <li><strong>Custom Plans:</strong> Each vessel’s risk profile informs a tailored security approach</li>
              <li><strong>Modern Equipment:</strong> Communications, surveillance, and deterrent tools</li>
              <li><strong>Regulatory Compliance:</strong> ISPS Code and international maritime security standards</li>
              <li><strong>Proactive Monitoring:</strong> Threat assessments and evolving security strategy</li>
              <li><strong>Crew Preparedness:</strong> We train your crew with drills and security briefings</li>
            </ul>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <img src="/img/services/KING.jpeg" alt="Security" className="rounded-lg object-cover w-full h-72" />
            </div>

            <p>
              Whether crossing piracy-prone waters or transporting high-value cargo, Philotes ensures your voyage is protected with expert onboard defense. We understand the stakes — and deliver confidence on every deck.
            </p>
          </section>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default ArmedMenOnboard;
