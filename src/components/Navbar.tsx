// src/components/Navbar.tsx
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/img/logo.jpg";

const services = [
  { label: "SHIPPING AGENCY/HUSBANDRY", path: "/shipping-agency-husbandry" },
  { label: "LOGISTICS", path: "/logistics-services" },
  { label: "PORT STEVEDORES SERVICE", path: "/port-stevedores-service" },
  { label: "SHIP SPARE PARTS SUPPLY-REPAIRS", path: "/ship-spare-parts-supply" },
  { label: "UNDERWATER SERVICES", path: "/underwater-solutions" },
  { label: "SHIP CHANDELLING", path: "/ship-chandelling" },
  { label: "SHIPPING MANAGEMENT", path: "/shipping-management" },
  { label: "OIL & GAS", path: "/oil-gas" },
  { label: "VESSEL MANAGEMENT", path: "/vessel-management" },
  { label: "ARMED MEN ONBOARD", path: "/armed-men-onboard" },
  { label: "BUNKER/FRESH WATER SUPPLY", path: "/bunker-fresh-water-supply" },
  { label: "MOORING ROPES SUPPLY", path: "/mooring-ropes-supply" },
  { label: "SLUDGE/SLOP REMOVAL", path: "/sludge-slop-removal" },
  { label: "CUSTOM CLEARANCE/CERTIFICATION", path: "/custom-clearance-certification" },
  { label: "ADMIRALTY CHARTS PUBLICATION", path: "/admiralty-charts-publication" },
  { label: "SECURITY/BOAT SERVICES", path: "/security-boat-services" },
  { label: "GENERAL MARITIME SERVICES", path: "/general-maritime-services" },
  { label: "AGENCY ON BULK CARGO", path: "/agency-on-bulk-cargo" },
  { label: "CLEARING AND FORWARDING", path: "/clearing-and-forwarding" },
  { label: "AGENCY ON LIQUID CARGO", path: "/agency-on-liquid-cargo" },
  { label: "BONDED TERMINAL", path: "/bonded-terminal" },
  { label: "SHIP MANAGEMENT", path: "/ship-management" },
  { label: "REAL ESTATE SERVICES", path: "/real-estate-service" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    setIsSticky(window.scrollY >= 100); // Use fixed threshold
  };

  handleScroll(); // Initialize state on mount
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <header
      className={`bg-white shadow-md border-b border-gray-200 z-50 px-6 transition-all duration-300 ${
        isSticky ? "fixed top-0 w-full" : "relative"
      }`}
    >
      <motion.nav
        className="container mx-auto px-4 flex justify-between items-center h-[75px]"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Logo and Title */}
        <div className="flex items-center gap-2 flex-shrink-0">
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

        {/* Desktop Nav */}
        <ul className="hidden md:flex flex-grow justify-center space-x-8 font-semibold text-[15px] text-black">
          <li><Link to="/" className="hover:text-[#ff3c41] transition-all">Home</Link></li>
          <li><Link to="/about" className="hover:text-[#ff3c41] transition-all">Who We Are</Link></li>
          <li
            className="relative group"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <span className="flex items-center gap-1 cursor-pointer hover:text-[#ff3c41]">
              Services <ChevronDown className="w-4 h-4" />
            </span>
           <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-10 left-0 bg-white shadow-md w-[260px] z-50 rounded"
                  >
                    <ul className="py-1 max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">

                      {services.map((service, i) => (
                        <li key={i}>
                          <Link
                            to={service.path}
                            className="block px-4 py-1 text-sm hover:text-[#ff3c41] transition-all"
                          >
                            {service.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>

          </li>
          <li><Link to="/contact" className="hover:text-[#ff3c41] transition-all">Contact Us</Link></li>
        </ul>

        {/* Mobile Toggle */}
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
            <Link to="/" className="block py-2 hover:text-[#ff3c41]">Home</Link>
            <Link to="/about" className="block py-2 hover:text-[#ff3c41]">Who We Are</Link>
            <div>
              <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center justify-between w-full py-2">
                <span className="text-left">Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : "rotate-0"}`} />
              </button>
              {servicesOpen && (
                  <ul className="ml-4 space-y-1 max-h-[250px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                    {services.map((service, i) => (
                      <li key={i}>
                        <Link to={service.path} className="block py-1 hover:text-[#ff3c41]">
                          {service.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
            </div>
            <Link to="/contact" className="block py-2 hover:text-[#ff3c41]">Contact Us</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
