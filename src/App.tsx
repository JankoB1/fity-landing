import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './pages/Home';
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import CookiesTerms from "./pages/CookiesTerms";
import Thanks from "./pages/Thanks";
import AboutUs from "./pages/AboutUs";
import Support from "./pages/Support";
import Gym from "./pages/Gym";
import GymQr from "./pages/GymQr";

function App() {
  return (
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/politika-privatnosti" element={<PrivacyPolicy />} />
      <Route path="/uslovi-koriscenja" element={<Terms />} />
      <Route path="/politika-kolacica" element={<CookiesTerms />} />
      <Route path="/hvala-na-prijavi" element={<Thanks />} />
      <Route path="/o-nama" element={<AboutUs />} />
      <Route path="/podrska" element={<Support />} />
      <Route path="/gym" element={<Gym />} />
      <Route path="/gym/:code" element={<Gym />} />
      <Route path="/qr/:code" element={<GymQr />} />
  </Routes>
  );
};

export default App;
