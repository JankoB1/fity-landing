import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import About from "../components/About";
import Aplication from "../components/Aplication";
import WaitingList from "../components/WaitingList";
import Manifesto from "../components/Manifesto";
import Launch from "../components/Launch";
import Footer from "../components/Footer";
import React from "react";

function Home() {
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

export default Home;
