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
                <h1 style={{ paddingTop: '200px', textAlign: 'center' }}>Podrška i pomoć</h1>
                <h2>Potrebna ti je pomoć?</h2>
                <p>Ukoliko ti je potrebna bilo kakva pomoć u vezi naloga, procesa zakazivanja ili vođenja firme, samo pošalji mejl na adresu getfityapp@gmail.com i naš tim za podršku će ti se vrlo brzo javiti kako bi ti pomogli.</p>
                <h2>Kako da obrišem svoj nalog?</h2>
                <p>Brisanje korisničkog ili vlasničkog naloga na Fity aplikaciji je vrlo lako!
                        Samo pošalji mejl sa upitom za brisanje na adresu getfityapp@gmail.com i naš tim za podršku će ti ubrzo odgovoriti kako bi dovršili brisanje naloga.</p>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Thanks;
