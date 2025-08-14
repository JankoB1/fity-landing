import React from "react";
import logo from "../assets/images/logo.png";
import arrow from '../assets/images/arrow-privacy.svg';

function PrivacyPolicy() {
    return (
        <div className="privacy-page">
            <div className="policy-top">
                <img src={logo} className="hero-logo w-[65px]" alt="logo"/>
                <a href="/"><img src={arrow} alt=""/>Vrati se na početnu stranicu</a>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
