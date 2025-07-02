import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import About from "./pages/About";
import Team from "./pages/Team";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/team" element={<Team />} />
    </Routes>
  );
}
