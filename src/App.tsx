import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './pages/Home';
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import CookiesTerms from "./pages/CookiesTerms";
import Thanks from "./pages/Thanks";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/politika-privatnosti" element={<PrivacyPolicy />} />
      <Route path="/uslovi-koriscenja" element={<Terms />} />
      <Route path="/politika-kolacica" element={<CookiesTerms />} />
      <Route path="/hvala-na-prijavi" element={<Thanks />} />
      <Route path="/o-nama" element={<AboutUs />} />
  </Routes>
  );
};

export default App;
