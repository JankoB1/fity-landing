import React from 'react';
import './App.css';
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Benefits from "./components/Benefits";
import About from "./components/About";
import Aplication from "./components/Aplication";
import Manifesto from "./components/Manifesto";
import Launch from "./components/Launch";
import WaitingList from "./components/WaitingList";

function App() {
  return (
    <div>
      <Hero />
        <Benefits />
        <About />
        <Aplication />
        <WaitingList />
        <Manifesto />
        <Launch />
      <Footer />
    </div>
  );
};

export default App;
