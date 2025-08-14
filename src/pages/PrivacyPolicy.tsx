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
            <h1>Politika privatnosti</h1>
            <p><strong>Poslednje ažuriranje:</strong> [unesite datum]</p>

            <h3>1. Ko je rukovalac podacima</h3>
            <p>[Rukovalac: naziv firme/preduzetnika]</p>
            <p>[Adresa]</p>
            <p>[PIB/Matični broj, ako primenljivo]</p>
            <p>Kontakt: [e-mail za privatnost] [telefon, opcionalno]</p>

            <h3>2. Koje podatke obrađujemo</h3>
            <ul>
                <li>Ime i prezime</li>
                <li>E-mail adresa</li>
            </ul>
            <p>Ove podatke unosite dobrovoljno putem forme na ovoj stranici.</p>

            <h3>3. Svrha i pravni osnov</h3>
            <ul>
                <li><strong>Svrha:</strong> slanje newslettera, obaveštenja o proizvodu/uslugama, promotivnih informacija i poziva.</li>
                <li><strong>Pravni osnov:</strong> pristanak (član 6(1)(a) GDPR / važeći zakon RS). Pristanak možete uvek povući.</li>
            </ul>

            <h3>4. Kako prikupljamo podatke</h3>
            <p>Podatke unosite u MailerLite formu ugrađenu na ovoj stranici. Sistemi mogu automatski beležiti tehničke podatke (npr. IP adresu i vreme prijave) radi evidencije pristanka i sprečavanja zloupotreba.</p>

            <h3>5. Primaoci / obrađivači (procesori)</h3>
            <ul>
                <li>MailerLite (provajder e-mail marketing platforme) – obrađivač u naše ime.</li>
                <li>[Hosting provajder], ako primenljivo.</li>
            </ul>
            <p>MailerLite može obrađivati podatke na serverima van vaše države. U tom slučaju primenjuju se odgovarajuće mere zaštite (npr. standardne ugovorne klauzule). Detalji su dostupni u njihovoj politici privatnosti i DPA-u.</p>

            <h3>6. Period čuvanja</h3>
            <p>Podatke čuvamo dok god imate aktivnu pretplatu ili dok ne povučete pristanak (odjavom), a potom ih brišemo ili anonimizujemo u razumnom roku. Povremeno uklanjamo neaktivne adrese radi održavanja tačnosti evidencije.</p>

            <h3>7. Vaša prava</h3>
            <ul>
                <li>Pravo na pristup svojim podacima</li>
                <li>Pravo na ispravku</li>
                <li>Pravo na brisanje („pravo na zaborav“)</li>
                <li>Pravo na ograničenje obrade</li>
                <li>Pravo na prenosivost podataka</li>
                <li>Pravo na prigovor (gde je primenljivo)</li>
                <li>Pravo na povlačenje pristanka u svakom trenutku (bez uticaja na zakonitost pre povlačenja)</li>
            </ul>
            <p>Zahtev možete poslati na: <strong>[e-mail za privatnost]</strong>. Takođe, u svakom newsletteru postoji link za odjavu (unsubscribe).</p>
            <p>Ako smatrate da se vaši podaci obrađuju suprotno propisima, možete podneti pritužbu nadležnom nadzornom organu (u RS: Poverenik za informacije od javnog značaja i zaštitu podataka o ličnosti).</p>

            <h3>8. Kolačići i treće strane</h3>
            <p>MailerLite embed može koristiti kolačiće i slične tehnologije radi funkcionalnosti forme i merenja isporučivosti e-pošte. Naša stranica može koristiti osnovne (neophodne) kolačiće. Podešavanja kolačića možete menjati u pregledaču.</p>

            <h3>9. Bezbednost</h3>
            <p>Primenujemo razumne tehničke i organizacione mere zaštite (HTTPS, kontrola pristupa, minimizacija podataka). Ipak, nijedan sistem nije 100% siguran; molimo da koristite jake lozinke i pazite koje podatke delite.</p>

            <h3>10. Dečija privatnost</h3>
            <p>Naše usluge nisu namenjene deci. Ako smatrate da je dete dostavilo podatke bez saglasnosti roditelja/staratelja, kontaktirajte nas radi uklanjanja.</p>

            <h3>11. Izmene ove politike</h3>
            <p>Ovu politiku možemo povremeno ažurirati. Nova verzija važi od objave na ovoj stranici, sa ažuriranim datumom na vrhu.</p>

            <p><strong>Kontakt za privatnost:</strong> [e-mail za privatnost]</p>
        </div>
    );
};

export default PrivacyPolicy;
