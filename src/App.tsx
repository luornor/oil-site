import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import LogisticsServices from "./pages/LogisticsServices";
import PortStevedores from "./pages/PortStevedoresService";
import Contact from "./pages/Contact";
import ShippingAgencyHusbandry from "./pages/ShippingAgencyHusbandry";
import ShipSpareParts from "./pages/ShipSpareParts";
import UnderwaterSolutions from "./pages/UnderwaterSolutions";
import ShipChandelling from "./pages/ShipChandelling";
import ShippingManagement from "./pages/ShippingManagement";
import OilAndGas from "./pages/OilAndGas";
import VesselManagement from "./pages/VesselManagement";
import ArmedMenOnboard from "./pages/ArmenMenOnboard";
import BunkerFreshWater from "./pages/BunkerFreshWater";
import MooringRopes from "./pages/MooringRopes";
import SludgeSlopRemoval from "./pages/SludgeSlopRemoval";
import CustomClearance from "./pages/CustomClearance";
import AdmiraltyCharts from "./pages/AdmiraltyCharts";
import SecurityBoatServices from "./pages/SecurityBoatServices";
import GeneralMaritimeServices from "./pages/GeneralMaritimeServices";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shipping-agency-husbandry" element={<ShippingAgencyHusbandry />} />
        <Route path="/port-stevedores-service" element={<PortStevedores />} />
        <Route path="/logistics-services" element={<LogisticsServices />} />
        <Route path="/ship-spare-parts-supply" element={<ShipSpareParts />} />
        <Route path="/underwater-solutions" element={<UnderwaterSolutions />} />
        <Route path="/ship-chandelling" element={<ShipChandelling />} />
        <Route path="/shipping-management" element={<ShippingManagement />} />
        <Route path="/oil-gas" element={<OilAndGas />} />
        <Route path="/vessel-management" element={<VesselManagement />} />
        <Route path="/armed-men-onboard" element={<ArmedMenOnboard />} />
        <Route path="/bunker-fresh-water-supply" element={<BunkerFreshWater />} />
        <Route path="/mooring-ropes-supply" element={<MooringRopes />} />
        <Route path="/sludge-slop-removal" element={<SludgeSlopRemoval />} />
        <Route path="/custom-clearance-certification" element={<CustomClearance />} />
        <Route path="/admiralty-charts-publication" element={<AdmiraltyCharts />} />
        <Route path="/security-boat-services" element={<SecurityBoatServices />} />
        <Route path="/general-maritime-services" element={<GeneralMaritimeServices />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;


