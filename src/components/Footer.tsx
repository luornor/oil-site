// src/components/Footer.tsx
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12 mt-16">
      <div className="container mx-auto px-4 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4">Philotes Maritime Services</h3>
          <p className="text-sm">
            Philotes Maritime Services is your trusted partner in comprehensive shipping, logistics, 
            and port solutions across West Africa. We deliver reliable, timely, and compliant services
            tailored to your maritime needs.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Community 2 TDC Tower</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +233 245 995 456</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +233 200 871 025</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> philotesmaritimeservices@gmail.com</li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 text-center text-sm text-gray-300 px-4"
      >
        © {new Date().getFullYear()} Philotes Maritime Services. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
