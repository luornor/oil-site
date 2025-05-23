// src/pages/CustomClearance.tsx
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const CustomClearance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <header className="relative bg-center flex items-center justify-center h-[30vh]">
        <div className="absolute inset-0 bg-white" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-400 drop-shadow">
            Custom Clearance &amp; Certification
          </h1>
          <p className="text-blue-400 text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Ensuring swift, compliant cargo movement through every border and checkpoint
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
            src="/img/services/customs-clearance.png"
            alt="Custom Clearance"
            className="w-full h-full object-cover rounded-lg shadow mb-8"
          />

          <section className="space-y-6">
            <p>
              Philotes Maritime Services specializes in delivering efficient and accurate custom clearance and certification services that help clients navigate regulatory hurdles and cross international borders seamlessly.
            </p>

            <h2 className="text-xl font-bold text-blue-900">Why It Matters</h2>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Custom Clearance:</strong> Secure permits, calculate duties, and clear goods quickly through ports</li>
              <li><strong>Certification:</strong> Obtain required documents for origin, health, safety, and compliance</li>
            </ul>

            <h2 className="text-xl font-bold text-blue-900">Our Advantage</h2>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Regional Expertise:</strong> Active in 11+ West African nations with deep port knowledge</li>
              <li><strong>Timely Processing:</strong> Speedy documentation and submission to avoid costly delays</li>
              <li><strong>International Compliance:</strong> Up to date with IMO, customs laws, and trade regulations</li>
              <li><strong>Tailored Solutions:</strong> Documents suited for perishables, hazardous cargo, and high-value freight</li>
              <li><strong>Budget Friendly:</strong> Competitive pricing with full transparency and no hidden costs</li>
              <li><strong>Trusted Across Industries:</strong> Serving shipping, procurement, logistics, and construction sectors</li>
              <li><strong>Certification Services:</strong> We obtain certificates of origin, conformity, quality, safety, and more</li>
              <li><strong>Clear Communication:</strong> Ongoing updates, reports, and customer support through every stage</li>
            </ul>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <img src="/img/services/west_africa_coverage.png" alt="Customs" className="rounded-lg object-cover w-full h-80" />
            </div>

            <p>
              Whether you're exporting industrial machinery or importing perishable cargo, we handle the paperwork,
              certification, and port coordination so your cargo clears without setbacks. Philotes Maritime is your
              trusted link between compliance and commercial success.
            </p>
          </section>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default CustomClearance;
