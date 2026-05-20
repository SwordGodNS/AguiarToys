import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import Brinquedos from "./pages/Brinquedos";
import Gelo from "./pages/Gelo";
import ComoFunciona from "./pages/ComoFunciona";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brinquedos" element={<Brinquedos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/gelo" element={<Gelo />} />
        <Route path="/como-funciona" element={<ComoFunciona />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

      <WhatsAppButton />
      <Footer />
    </BrowserRouter>
  );
}