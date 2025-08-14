import React from "react";
import logo from "../assets/images/logo.png";
import arrow from '../assets/images/arrow-privacy.svg';
import Footer from "../components/Footer";

function Terms() {
    return (
        <>
            <div className="privacy-page">
                <div className="policy-top">
                    <img src={logo} className="hero-logo w-[65px]" alt="logo"/>
                    <a href="/"><img src={arrow} alt=""/>Vrati se na početnu stranicu</a>
                </div>
                <h1>Uslovi korišćenja</h1>
                <p><strong>Poslednje ažuriranje:</strong> 15.08.2025.</p>

                <h3>1. Uvod</h3>
                <p>Ovi Uslovi korišćenja uređuju upotrebu veb-sajta [naziv sajta/domena] (u daljem tekstu: „Sajt”). Korišćenjem Sajta prihvatate ove Uslove. Ako se ne slažete, nemojte koristiti Sajt.</p>

                <h3>2. Rukovalac i kontakt</h3>
                <p>[Naziv pravnog lica/preduzetnika]</p>
                <p>[Adresa sedišta]</p>
                <p>Kontakt: [e-mail za podršku]</p>

                <h3>3. Definicije</h3>
                <ul>
                    <li>„Korisnik” – svako lice koje pristupa ili koristi Sajt.</li>
                    <li>„Sadržaj” – svi tekstovi, slike, video, informacije i drugi materijali na Sajtu.</li>
                    <li>„Newsletter” – elektronske poruke koje šaljemo korisnicima koji su dali pristanak.</li>
                </ul>

                <h3>4. Prihvatanje uslova</h3>
                <p>Pristupom Sajtu potvrđujete da ste punoletni i poslovno sposobni ili da imate ovlašćenje zakonskog zastupnika.</p>

                <h3>5. Korišćenje Sajta</h3>
                <ul>
                    <li>Obavezujete se da Sajt nećete koristiti protivno važećim propisima.</li>
                    <li>Nećete pokušavati neovlašćen pristup (npr. hakovanje, zaobilaženje bezbednosti).</li>
                    <li>Nećete postavljati štetan ili nezakonit sadržaj.</li>
                </ul>

                <h3>6. Nalog i newsletter</h3>
                <p>Ako se prijavite putem MailerLite forme za newsletter, odgovorni ste za tačnost dostavljenih podataka. Pristanak možete povući u svakom trenutku putem linka za odjavu u e-porukama.</p>

                <h3>7. Intelektualna svojina</h3>
                <p>Sadržaj na Sajtu je zaštićen autorskim i srodnim pravima. Nije dozvoljeno kopiranje, distribucija ili korišćenje bez našeg prethodnog pisanog odobrenja, osim u meri dozvoljenoj zakonom.</p>

                <h3>8. Sadržaj trećih lica i linkovi</h3>
                <p>Sajt može sadržati linkove ka sajtovima trećih lica (npr. MailerLite). Ne snosimo odgovornost za njihove sadržaje i politike.</p>

                <h3>9. Odricanje od odgovornosti</h3>
                <ul>
                    <li>Sajt se pruža „takav kakav jeste”, bez garancija bilo koje vrste.</li>
                    <li>Ne garantujemo neprekidnu dostupnost ili odsustvo grešaka.</li>
                </ul>

                <h3>10. Ograničenje odgovornosti</h3>
                <p>U meri dozvoljenoj zakonom, ne odgovaramo za indirektnu, slučajnu ili posledičnu štetu nastalu korišćenjem Sajta.</p>

                <h3>11. Naknada štete</h3>
                <p>Saglasni ste da ćete nas obeštetiti za sve zahteve trećih lica proistekle iz vašeg nezakonitog korišćenja Sajta.</p>

                <h3>12. Izmene uslova</h3>
                <p>Zadržavamo pravo izmene Uslova. Izmenjeni Uslovi važe od objave na ovoj stranici, sa ažuriranim datumom.</p>

                <h3>13. Važeće pravo i nadležnost</h3>
                <p>Na ove Uslove primenjuje se pravo Republike Srbije. Za sporove je nadležan sud prema sedištu rukovaoca, osim ako obavezni propisi ne nalažu drugačije.</p>

                <h3>14. Kontakt</h3>
                <p>Za pitanja u vezi sa ovim Uslovima pišite na: <strong>marko@barbell.rs</strong></p>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Terms;
