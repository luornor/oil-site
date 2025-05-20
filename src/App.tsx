import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import LogisticsServices from "./pages/LogisticsServices";
import PortStevedores from "./pages/PortStevedoresService";
import Contact from "./pages/Contact";
import ShippingAgency from "./pages/shippingagencyhusbandry";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shipping-agency-husbandry" element={<ShippingAgency />} />
      
        <Route path="/port-stevedores-service" element={<PortStevedores />} />
        <Route path="/logistics-services" element={<LogisticsServices />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/features" element={<Features />} />

      </Routes>
    </Router>
  );
}

export default App;


