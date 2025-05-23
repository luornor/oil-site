import { BrowserRouter as Router, Routes, Route,useLocation  } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import LogisticsServices from "./pages/LogisticsServices";
import PortStevedores from "./pages/PortStevedoresService";
import Contact from "./pages/Contact";
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
import AgencyBulkCargo from "./pages/AgencyBulkCargo";
import ClearingForwarding from "./pages/ClearingForwarding";
import LiquidCargoAgency from "./pages/LiquidCargoAgency";
import ShipManagementService from "./pages/ShipManagementService";
import BondedTerminal from "./pages/BondedTerminal";
import RealEstateService from "./pages/RealEstateService";
import ShippingAgency from "./pages/ShippingAgency";
import RouteChangeTracker from "./components/RouteChangeTracker";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState  } from "react";


function AppRoutes() {
  const location = useLocation();
  const [delayedLocation, setDelayedLocation] = useState(location);

  useEffect(() => {
    const timer = setTimeout(() => setDelayedLocation(location), 400); // 400ms delay
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={delayedLocation} key={delayedLocation.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shipping-agency-husbandry" element={<ShippingAgency />} />
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
        <Route path="/agency-on-bulk-cargo" element={<AgencyBulkCargo />} />
        <Route path="/clearing-and-forwarding" element={<ClearingForwarding />} />
        <Route path="/agency-on-liquid-cargo" element={<LiquidCargoAgency />} />
        <Route path="/bonded-terminal" element={<BondedTerminal />} />
        <Route path="/ship-management" element={<ShipManagementService />} />
        <Route path="/real-estate-service" element={<RealEstateService />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <RouteChangeTracker />
      <AppRoutes />
    </Router>
  );
}

export default App;


