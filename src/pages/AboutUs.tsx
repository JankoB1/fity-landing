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
                    {/*<a href="/"><img src={arrow} alt=""/>Vrati se na početnu stranicu</a>*/}
                </div>
                <h1 style={{ paddingTop: '200px', textAlign: 'center' }}>O nama</h1>
                <p style={{ textAlign: 'center' }}>Fity je prva aplikacija u regionu koja na lokalnom jeziku kreira personalizovane planove ishrane za vaše ciljeve – brzo, jednostavno i povoljno. U samo nekoliko minuta dobijate jelovnik prilagođen vašim navikama i preferencama, sa zdravim, ukusnim i praktičnim receptima.</p>
                <p style={{ textAlign: 'center' }}>Pored recepata, aplikacija vam nudi alate za planiranje obroka, liste za kupovinu, vođenje dnevnika ishrane i praćenje napretka – sve na jednom mestu. Bez komplikovanih dijeta, odricanja i gladovanja.</p>
                <p style={{ textAlign: 'center', paddingBottom: '150px' }}>Fity su kreirali nutricionisti, lekari, treneri i kulinarski stručnjaci kako bi vam omogućili bezbedan i održiv put ka boljem zdravlju, formi i energiji. Naš cilj je da pravilna ishrana postane jednostavna i dostupna svima – za dugoročne rezultate i kvalitetniji život.</p>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Thanks;
