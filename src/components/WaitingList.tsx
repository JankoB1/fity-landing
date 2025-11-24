import people from '../assets/images/fity-kulinarstvo.png';
import heart from '../assets/images/heart-fity.svg';
import apple from "../assets/images/apple-btn.svg";
import android from "../assets/images/google-btn.svg";

const WaitingList = () => {
    return (
        <section className="waiting-list pt-[90px] pb-[130px] relative">
            <div className="w-full block md:flex flex-wrap justify-between">
                <div className="w-1/1 md:w-1/2 pr-0 md:pr-[40px] mt-auto mb-auto">
                    <h2 className="text-[32px] font-bold color-natural mb-8">Fity predstavlja spoj nutricionizma, <br/>kulinarstva i tehnologije</h2>
                    <p className="pr-0 md:pr-20 text-[24px] color-natural">Svi alati za planiranje, pripremu i praćenje plana ishrane su sigurni, bezbedni i zdravi.<br/><br/>Aplikacija je kreirana od strane stručnih lica, među kojima su eminentni nutricionisti, fitnes zajednica, psiholozi, IT stručnjaci i kulinarski majstori.</p>
                    <div className="mt-[60px] flex gap-5 items-center pb-20 pl-0">
                        <a href="https://apps.apple.com/us/app/fity-meals/id6753711257" target="_blank"><img src={apple} alt="apple" className="w-[50]"/></a>
                        <a href="https://play.google.com/store/apps/details?id=app.getfity" target="_blank"><img src={android} alt="android" /></a>
                    </div>
                </div>
                <div className="hidden md:block w-1/1 md:w-1/2 pl-0 md:pl-[40px] mt-auto mb-auto">
                    <img className="w-[100%]" src={people} alt="people" />
                </div>
            </div>
        </section>
    );
};

export default WaitingList;
