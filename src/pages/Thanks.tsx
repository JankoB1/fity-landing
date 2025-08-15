import React from "react";
import logo from "../assets/images/logo.png";
import arrow from '../assets/images/arrow-privacy.svg';
import Footer from "../components/Footer";

function Thanks() {
    return (
        <>
            <div className="privacy-page">
                <div className="policy-top">
                    <img src={logo} className="hero-logo w-[65px]" alt="logo"/>
                    <a href="/"><img src={arrow} alt=""/>Vrati se na početnu stranicu</a>
                </div>
                <h1 style={{ paddingTop: '100px' }}>Hvala na prijavi!</h1>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Thanks;
