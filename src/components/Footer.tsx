// src/components/Footer.tsx
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12 mt-16">
      <div className="container mx-auto px-4 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Philotes Maritime Services</h3>
          <p className="text-sm">
            Leading logistics and shipping company delivering packages across the globe, fast and safe.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> 123 Port Lane, Accra</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +233 123 456 789</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@shipmaster.com</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-300 px-4">
        © {new Date().getFullYear()} ShipMaster. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
