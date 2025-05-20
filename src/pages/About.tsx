// src/pages/About.tsx
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Globe, ShieldCheck, Users, Eye, Star, Zap } from "lucide-react";


const governance = [
  {
    title: "Health, Safety and Environment",
    description:
      "We prioritize safety, well-being, and environmental responsibility in every aspect of our operations.",
    icon: ShieldCheck,
  },
  {
    title: "Respect",
    description:
      "We honor and value individuals, communities, and cultures across all our global operations.",
    icon: Users,
  },
  {
    title: "Responsibility",
    description:
      "We lead with accountability in every decision, with care for people, environment, and stakeholders.",
    icon: Eye,
  },
  {
    title: "Transparency",
    description:
      "We maintain open, honest communications to build trust with partners, clients, and teams.",
    icon: Globe,
  },
  {
    title: "Integrity",
    description:
      "We uphold our values through consistent and ethical actions at every level of operation.",
    icon: Star,
  },
  {
    title: "Empowerment",
    description:
      "We foster leadership, innovation, and shared growth through collaboration and support.",
    icon: Zap,
  },
];

const About = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <header className="relative bg-[url('/img/carousel-1.jpg')] bg-cover bg-center h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-6 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
          <p className="text-lg mt-4">Your trusted partner in global shipping and logistics.</p>
        </div>
      </header>

      <main className="flex-grow">
        <AboutSection />
      </main>
          {/* Governance Section */}
        <div className="px-10">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900">
              Our Governance Principles
            </h3>
            
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {governance.map(({ title, description, icon: Icon }, i) => (
              <motion.div
                key={i}
                className="p-5 rounded-lg shadow transition hover:shadow-md bg-white"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="text-[#ff3c41] w-6 h-6" />
                  <h4 className="font-semibold text-lg">{title}</h4>
                </div>
                <p className="text-sm leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      <Footer />
    </div>
  );
};

export default About;
