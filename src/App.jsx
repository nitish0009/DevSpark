import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import About from "./pages/About";
import Team from "./pages/Team";

// New pages
import PackagingLiteracy from "./pages/PackagingLiteracy";
import EcoProfile from "./pages/EcoProfile";
import AISuggestions from "./pages/AISuggestions";
import EcoGamification from "./pages/EcoGamification";
import BarcodeLookup from "./pages/BarcodeLookup";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/team" element={<Team />} />

      {/* New Feature Pages */}
      <Route path="/literacy" element={<PackagingLiteracy />} />
      <Route path="/eco-profile" element={<EcoProfile />} />
      <Route path="/ai-suggestions" element={<AISuggestions />} />
      <Route path="/gamification" element={<EcoGamification />} />
      <Route path="/barcode-lookup" element={<BarcodeLookup />} />
    </Routes>
  );
}
