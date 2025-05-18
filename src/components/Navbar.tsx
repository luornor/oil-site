import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/img/logo.jpg";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  return (
    <header className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50 px-10">
      {/* Red top bar */}

      {/* Main Nav */}
      <motion.nav
        className="container mx-auto px-4 flex justify-between items-center h-[75px] relative z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Logo + Text */}
        <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
          <Link to="/">
            <img src={logo} alt="Philotes" className="h-8 md:h-10 w-auto object-contain" />
          </Link>
          <div className="leading-tight text-left">
            <span className="font-semibold text-xs sm:text-sm md:text-base text-[#333] block">
              Philotes Maritime Services
            </span>
            <p className="text-[10px] sm:text-xs md:text-sm text-gray-500">
              Tides of Excellence
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-grow justify-center">
          <ul className="flex space-x-8 items-center font-medium text-black">
            <li><Link to="/" className="hover:text-[#ff3c41]">HOME</Link></li>
            <li><Link to="/about" className="hover:text-[#ff3c41]">ABOUT</Link></li>
            <li><Link to="/services" className="hover:text-[#ff3c41]">SERVICES</Link></li>

            {/* Dropdown */}
            <li
              className="relative group"
              onMouseEnter={() => setPagesOpen(true)}
              onMouseLeave={() => setPagesOpen(false)}
            >
              <span className="flex items-center gap-1 cursor-pointer hover:text-[#ff3c41]">
                PAGES <ChevronDown className="w-4 h-4" />
              </span>
              <AnimatePresence>
                {pagesOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-10 left-0 bg-white text-black w-48 rounded shadow-md py-2 z-50"
                  >
                    <li><Link to="/pricing" className="block px-4 py-2 hover:text-[#ff3c41]">Pricing Plan</Link></li>
                    <li><Link to="/features" className="block px-4 py-2 hover:text-[#ff3c41]">Features</Link></li>
                    <li><Link to="/team" className="block px-4 py-2 hover:text-[#ff3c41]">Our Team</Link></li>
                    <li><Link to="/testimonials" className="block px-4 py-2 hover:text-[#ff3c41]">Testimonial</Link></li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <li><Link to="/contact" className="hover:text-[#ff3c41]">CONTACT</Link></li>
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white px-4 pb-4 space-y-2 text-sm text-black overflow-hidden"
          >
            <Link to="/" className="block py-2 hover:text-[#ff3c41]">HOME</Link>
            <Link to="/about" className="block py-2 hover:text-[#ff3c41]">ABOUT</Link>
            <Link to="/services" className="block py-2 hover:text-[#ff3c41]">SERVICES</Link>
            <details className="group">
              <summary className="py-2 cursor-pointer flex justify-between items-center">
                PAGES
              </summary>
              <div className="ml-4 space-y-1">
                <Link to="/pricing" className="block hover:text-[#ff3c41]">Pricing Plan</Link>
                <Link to="/features" className="block hover:text-[#ff3c41]">Features</Link>
                <Link to="/team" className="block hover:text-[#ff3c41]">Our Team</Link>
                <Link to="/testimonials" className="block hover:text-[#ff3c41]">Testimonial</Link>
              </div>
            </details>
            <Link to="/contact" className="block py-2 hover:text-[#ff3c41]">CONTACT</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
