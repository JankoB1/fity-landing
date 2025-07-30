import logo from '../assets/images/logo.png';
import apple from '../assets/icons/apple-logo.svg';
import android from '../assets/icons/android-logo.svg';
import cup from '../assets/images/hero-1.png';
import mobile from '../assets/images/hero-2.png';
import ring from '../assets/icons/ring-icon.svg';
import heart from '../assets/images/heart-fity.svg';

const Hero = () => {
    return (
        <section className="hero relative pb-20">
            <div className="container w-3/5">
                <img src={logo} className="hero-logo w-[65px]" alt="logo"/>
                <h1 className="font-bold text-[40px] pb-5 w-6/7">Budi fit uz lični plan ishrane bez <br/>striktnih dijeta, odricanja i gladovanja</h1>
                <h3 className="text-[26px] pb-8">Fity je <strong>mobilna aplikacija</strong> koja ti omogućava da kreiraš i pratiš <br/>plan ishrane prema tvojim ciljevima po ceni od <strong>575 RSD mesečno.</strong></h3>
                <ul>
                    <li className="text-[16px] md:text-[20px] font-medium pb-2.5">Brzi, zdravi i ukusni obroci</li>
                    <li className="text-[16px] md:text-[20px] font-medium pb-2.5">Automatska šoping lista namirnica</li>
                    <li className="text-[16px] md:text-[20px] font-medium pb-2.5">Lako praćenje plana, kalorija i napretka</li>
                    <li className="text-[16px] md:text-[20px] font-medium pb-2.5">Sloboda izbora namirnica</li>
                </ul>
                <div className="flex w-[400px] hero-button mt-8 justify-center">
                    <p className="text-white pr-4 text-[18px] font-medium">Postani Fity Starter i ostvari benefite</p>
                    <img src={heart} alt="heart icon" />
                </div>
                <div className="flex gap-2 items-center pb-32 pl-5">
                    <p className="text-base">Uskoro dostupno za <strong>android i IOS uređaje</strong></p>
                    <img src={apple} alt="apple" className="w-[50]"/>
                    <img src={android} alt="android" />
                </div>
            </div>
            <img src={cup} alt="cup" className="cup-hero absolute w-[400px] top-0 right-1/4" />
            <img src={mobile} alt="mobile" className="mobile-hero absolute w-1/3 bottom-0 right-0" />
        </section>
    );
};

export default Hero;
