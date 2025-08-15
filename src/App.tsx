import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './pages/Home';
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import CookiesTerms from "./pages/CookiesTerms";
import Thanks from "./pages/Thanks";

function App() {
  return (
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/politika-privatnosti" element={<PrivacyPolicy />} />
      <Route path="/uslovi-koriscenja" element={<Terms />} />
      <Route path="/politika-kolacica" element={<CookiesTerms />} />
      <Route path="/upitnik/hvala-na-prijavi" element={<Thanks />} />
  </Routes>
  );
};

export default App;
