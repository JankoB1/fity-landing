import heart from '../assets/images/heart-fity.svg';
import orange from "../assets/images/Frame 26.png";
import blue from "../assets/images/Frame 99.png";
import green from "../assets/images/Frame 100.png";
import apricot from "../assets/images/Frame 104.png";
import purple from "../assets/images/auts.png";
import pink from "../assets/images/pink.png";


const About = () => {
    return (
        <section className="about-fity">
            <div className="pl-[10px] pr-[10px] w-1/1 md:w-3/5 items-center ml-auto mr-auto md:pl-[70px] md:pr-[70px]">
                <h2 className="text-center text-[26px] md:text-[36px] font-bold mt-3 mb-8">Uštedi novac, vreme i energiju potrebnu za planiranje i praćenje obroka</h2>
                <p className="text-[18px] md:text-[23px] text-center">Fity ti predlaže šta, koliko i kada da jedeš, u odnosu na tvoje ciljeve, preference i potrebe. Obroci su zdravi, ukusni i brzi. <br/><br/>Za tebe generiše šoping listu namirnica i daje ti mogućnost da pratiš napredak. I još mnogo toga, za već <strong>od 575 RSD mesečno.</strong></p>
                <a href="#launch" className="flex w-[400px] hero-button mt-10 justify-center mr-auto ml-auto">
                    <p className="text-white pr-4 text-[18px] font-medium">Postani Fity Starter i ostvari benefite</p>
                    <img src={heart} alt="ring icon" />
                </a>
            </div>
            <div className="block md:flex flex-wrap content-between mt-[50px] md:mt-[150px] fity-features">
                <div className="w-1/1 md:w-1/2 mt-auto mb-auto pl-0 pr-0 md:pl-[100px] md:pr-[40px]">
                    <h6>Personalizovan plan ishrane</h6>
                    <p>Bilo da želiš da smršaš, izgradiš mišićnu masu ili održiš formu, Fity uzima u obzir tvoje ciljeve, kalorijske potrebe, preference i za par minuta kreira plan ishrane skrojen prema tebi.</p>
                </div>
                <div className="orange-section w-1/1 md:w-1/2 pl-0 mt-[30px] md:mt-0 md:pl-[40px]">
                    <img src={orange} alt="orange section"/>
                </div>
            </div>
            <div className="block md:flex flex-wrap content-between mt-[50px] md:mt-[150px] fity-features">
                <div className="order-unset md:block orange-section w-1/1 md:w-1/2 pr-0 md:pr-[40px]">
                    <img src={blue} alt="blue section"/>
                </div>
                <div className="w-1/1 md:w-1/2 mt-auto mb-auto pr-0 pl-0 md:pr-[100px] md:pl-[40px]">
                    <h6>Brzi, zdravi i ukusni obroci</h6>
                    <p>Plan ishrane se kreira od zdravih i ukusnih namirnica i jednostavnih recepata. Priprema obroka traje od 5 do 20 minuta, uz jasne instrukcije u svakom koraku.</p>
                </div>
                <div className="hidden mt-[30px] md:mt-0 md:hidden orange-section w-1/1 md:w-1/2 pr-0 md:pr-[40px]">
                    <img src={blue} alt="blue section"/>
                </div>
                <div className="block md:flex flex-wrap content-between t-[50px] md:mt-[150px] fity-features">
                    <div className="mt-[50px] md:mt-auto w-1/1 md:w-1/2 mb-auto pl-0 pr-0 md:pl-[100px] md:pr-[40px]">
                        <h6>Automatska šoping lista</h6>
                        <p>Fity štedi tvoje vreme i na osnovu plana ishrane automatski generiše šoping listu, kategoriše namirnice prema vrsti ili obroku i olakšava ti njihovu nabavku.</p>
                    </div>
                    <div className="mt-[30px] md:mt-0 w-1/1 pl-0 orange-section md:w-1/2 md:pl-[40px]">
                        <img src={purple} alt="orange section"/>
                    </div>
                </div>
                <div className="block md:flex flex-wrap content-between mt-[50px] md:mt-[150px] fity-features">
                    <div className="order-unset md:block w-1/1 pr-0 green-section md:w-1/2 md:pr-[40px]">
                        <img src={green} alt="green section"/>
                    </div>
                    <div className="w-1/1 md:w-1/2 mt-auto mb-auto pr-0 pl-0 md:pr-[100px] md:pl-[40px]">
                        <h6>Sloboda izbora namirnica</h6>
                        <p>Više ne moraš da se ograničavaš. Fity ti omogućava da u plan ishrane uključiš više zdravih namirnica koje voliš i izbaciš one koje jednostavno ne želiš.</p>
                    </div>
                    <div className="hidden mt-[30px] md:mt-0 md:hidden w-1/1 pr-0 green-section md:w-1/2 md:pr-[40px]">
                        <img src={green} alt="green section"/>
                    </div>
                </div>
                <div className="block md:flex flex-wrap content-between mt-[50px] md:mt-[150px] fity-features">
                    <div className="w-1/1 md:w-1/2 mt-auto mb-auto pl-0 pr-0 md:pl-[100px] md:pr-[40px]">
                        <h6>Prati plan, kalorije i napredak</h6>
                        <p>Na jednom mestu imaš sve alate za lako praćenje obroka, unetih kalorija i napretka. Fity te osnažuje da istraješ i ostaneš na putu stvaranja zdravih navika u ishrani.</p>
                    </div>
                    <div className="mt-[30px] md:mt-0 w-1/1 orange-section md:w-1/2 pl-0 md:pl-[40px]">
                        <img src={pink} alt="orange section"/>
                    </div>
                </div>
                <div className="block md:flex flex-wrap content-between mt-[50px] md:mt-[150px] fity-features">
                    <div className="order-unset md:block w-1/1 apricot-section md:w-1/2 pr-0 md:pr-[40px]">
                        <img src={apricot} alt="apricot section"/>
                    </div>
                    <div className="w-1/1 md:w-1/2 mt-auto mb-auto pr-0 pl-0 md:pr-[100px] md:pl-[40px]">
                        <h6>Saveti i podrška u toku procesa</h6>
                        <p>Koliko je važno ostvariti lične ciljeve, podjednako važno je naučiti i trajno usvojiti zdrave navike u vezi ishrane. Fity kroz stručne savete i podršku to čini mogućim.</p>
                    </div>
                    <div className="hidden mt-[30px] md:mt-0 md:hidden w-1/1 apricot-section md:w-1/2 pr-0 md:pr-[40px]">
                        <img src={apricot} alt="apricot section"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
