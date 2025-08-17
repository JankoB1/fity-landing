import desktopVideo from '../assets/images/promo-video.mp4';

const Manifesto = () => {
    return (
        <section className="manifesto w-full">
            <video
                className="desktop"
                src={desktopVideo}
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="bg"></div>
            <div className="container w-1/1 pl-2.5 pr-2.5 md:pl-0 md:pr-0 md:w-3/5 ml-auto mr-auto">
                <h4 className="font-bold text-center text-[18px] color-fity-green">FITY MANIFESTO</h4>
                <h2 className="text-white font-bold text-[36px] text-center mb-12">Hrana pokreće život</h2>
                <p className="text-[26px] text-center text-white">Naša misija je da ljudima omogućimo alate, resurse i podršku za jednostavno planiranje i praćenje pravilne ishrane. <br/><br/>Verujemo da se ciljevi i dugoročne promene navika u ishrani mogu ostvariti bez invazivnih dijeta, skupih tretmana, gladovanja, i uz minimalan utrošak vremena i novca.</p>
            </div>
        </section>
    );
};

export default Manifesto;

