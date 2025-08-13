import people from '../assets/images/fity-kulinarstvo.png';
import heart from '../assets/images/heart-fity.svg';

const WaitingList = () => {
    return (
        <section className="waiting-list pt-[90px] pb-[130px] relative">
            <div className="w-full block md:flex flex-wrap justify-between">
                <div className="w-1/1 md:w-1/2 pr-0 md:pr-[40px] mt-auto mb-auto">
                    <h2 className="text-[32px] font-bold color-natural mb-8">Fity predstavlja spoj nutricionizma, <br/>kulinarstva i tehnologije</h2>
                    <p className="pr-0 md:pr-20 text-[26px] color-natural">Svi alati za planiranje, pripremu i praćenje plana ishrane su sigurni, bezbedni i zdravi.<br/><br/>Aplikacija je kreirana od strane stručnih lica, među kojima su eminentni nutricionisti, fitnes zajednica, psiholozi, IT stručnjaci i kulinarski majstori.</p>
                    <a href="#launch" className="flex w-[400px] hero-button mt-10 justify-center">
                        <p className="text-white pr-0 md:pr-4 text-[18px] font-medium">Postani Fity Starter i ostvari benefite</p>
                        <img src={heart} alt="ring icon" />
                    </a>
                </div>
                <div className="w-1/1 md:w-1/2 pl-0 md:pl-[40px] mt-auto mb-auto">
                    <img className="w-[100%]" src={people} alt="people" />
                </div>
            </div>
        </section>
    );
};

export default WaitingList;
