import React from "react";
import logo from "../assets/images/logo.png";
import arrow from '../assets/images/arrow-privacy.svg';
import Footer from "../components/Footer";

function CookiesTerms() {
    return (
        <>
            <div className="privacy-page">
                <div className="policy-top">
                    <img src={logo} className="hero-logo w-[65px]" alt="logo"/>
                    <a href="/"><img src={arrow} alt=""/>Vrati se na početnu stranicu</a>
                </div>
                <h1>Politika kolačića</h1>
                <p><strong>Poslednje ažuriranje:</strong> 15.08.2025.</p>

                <h3>1. Šta su kolačići</h3>
                <p>Kolačići su male tekstualne datoteke koje veb-sajt čuva na vašem uređaju radi poboljšanja funkcionalnosti i korisničkog iskustva.</p>

                <h3>2. Ko postavlja kolačiće</h3>
                <ul>
                    <li><strong>Prvi kolačići:</strong> postavljamo ih mi (Sajt) radi osnovne funkcionalnosti.</li>
                    <li><strong>Kolačići trećih strana:</strong> postavljaju servisi koje koristimo (npr. MailerLite) za ugrađene forme i statistiku isporuke e-pošte.</li>
                </ul>

                <h3>3. Vrste kolačića koje koristimo</h3>
                <ul>
                    <li><strong>Neophodni kolačići:</strong> omogućavaju osnovne funkcije Sajta i bezbednost.</li>
                    <li><strong>Funkcionalni kolačići:</strong> pamte vaše izbore (npr. jezik).</li>
                    <li><strong>Analitički kolačići:</strong> pomažu nam da razumemo korišćenje Sajta i unapredimo sadržaj.</li>
                    <li><strong>Marketinški kolačići:</strong> koriste se za merenje efikasnosti kampanja i relevantno oglašavanje (ako je primenljivo).</li>
                </ul>

                <h3>4. Kako koristimo kolačiće</h3>
                <ul>
                    <li>Za osnovno funkcionisanje i bezbednost Sajta.</li>
                    <li>Za prikaz i rad MailerLite ugrađene forme (može uključiti kolačiće i slične tehnologije trećih strana).</li>
                    <li>Za agregirane statistike posećenosti i performansi (ako je primenljivo).</li>
                </ul>

                <h3>5. Upravljanje kolačićima</h3>
                <p>Kolačiće možete kontrolisati i/ili obrisati u podešavanjima pregledača. Ako blokirate određene kolačiće, delovi Sajta možda neće raditi ispravno.</p>
                <ul>
                    <li>Instrukcije za brisanje/blokiranje pronađite u pomoći vašeg pregledača (Chrome, Firefox, Safari, Edge).</li>
                    <li>Za kolačiće trećih strana (npr. MailerLite) pogledajte njihove politike privatnosti i opcije odjave.</li>
                </ul>

                <h3>6. E-pošta i praćenje</h3>
                <p>MailerLite može koristiti piksele za praćenje otvaranja i klikova u newsletteru. Pristanak za newsletter možete povući u svakom trenutku putem linka za odjavu.</p>

                <h3>7. Izmene politike</h3>
                <p>Možemo povremeno ažurirati ovu Politiku kolačića. Nova verzija važi od objave, sa ažuriranim datumom na vrhu.</p>

                <h3>8. Kontakt</h3>
                <p>Za pitanja o kolačićima pišite na: <strong>marko@barbell.rs</strong></p>
            </div>
            <Footer></Footer>
        </>
    );
};

export default CookiesTerms;
