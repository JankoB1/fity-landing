import plate1 from '../assets/images/Nenaslovljeni dizajn (5) 1.png';
import plate2 from '../assets/images/chicken-6262038_1280 1.png';
import message from "../assets/images/message.svg";
import check from '../assets/images/check.svg';
import timer from '../assets/images/timer.svg';

const Launch = () => {
    return (
        <section className="relative" id="launch">
            <img src={plate1} alt="plate" className="w-1/5 absolute left-0 bottom-72" />
            <img src={plate2} alt="plate" className="w-1/5 absolute right-0 top-0" />
            <div className="launch w-full">
                <div className="launch-central">
                    <h2 className="color-natural font-bold text-[36px] text-center mb-[40px]">Fity App biće dostupna 1. avgusta!<br/> Budi deo Starter ekipe i ostvari benefite.</h2>
                    <p className="m-auto w-3/5 text-[26px] text-center color-natural">300 najbržih korisnika koji se prijave do 31. jula i aktiviraju pretplatu postaju deo <strong>Fity Starter</strong> ekipe i dobijaju ekskluzivne pogodnosti.</p>
                </div>
                <div className="launch-row md:grid block grid-cols-2 gap-24">
                    <div className="reservation-box md:mb-0 mb-12">
                        <h5>Broj rezervacija</h5>
                        <div className="numbers">
                            <div className="flex justify-between items-center">
                                <p className="num-bold ">52 <span className="num-light"> / 300</span></p>
                                <span className="num-resto">248 mesta ostalo</span>
                            </div>
                        </div>
                        <div className="numbers-line"><div className="line-inner"></div></div>
                        <div className="timer">
                            <div className="grid grid-cols-8 gap-5">
                                <div className="timer-number">1</div>
                                <div className="timer-number">4</div>
                                <div className="timer-number timer-dots">:</div>
                                <div className="timer-number">1</div>
                                <div className="timer-number">2</div>
                                <div className="timer-number timer-dots">:</div>
                                <div className="timer-number">0</div>
                                <div className="timer-number">2</div>
                            </div>
                            <div className="grid grid-cols-5">
                                <div className="timer-text">Dana</div>
                                <div></div>
                                <div className="timer-text">Sati</div>
                                <div></div>
                                <div className="timer-text">Minuta</div>
                            </div>
                        </div>
                    </div>
                    <div className="lis-box">
                        <p className="flex gap-5"><img src={check} alt=""/>50% niža cena pretplate koja važi zauvek</p>
                        <p className="flex gap-5"><img src={check} alt=""/>Rani pristup novim funkcionalnostima</p>
                        <p className="flex gap-5"><img src={check} alt=""/>Učešće u razvoju aplikacije i predlozima</p>
                        <p className="flex gap-5"><img src={check} alt=""/>Fity Starter poklon paket i bedž na profilu</p>
                        <a href="#launch" className="flex w-[430px] hero-button mt-8 justify-center">
                            <p className="text-white pr-4 text-[18px] font-medium">Popuni upitnik i postani Fity Starter član</p>
                            <img src={message} alt="ring icon" />
                        </a>
                        <span>Upitnik ti neće oduzeti više od 60 sekundi <img src={timer} alt=""/></span>
                    </div>
                </div>
            </div>
            <div className="launch-down pb-[50px] mb-[50px]">
                <h3 className="color-fity-green text-[28px] font-bold text-center mb-[20px]">Paketi pretplate</h3>
                <p className="text-[20px] text-center">Svi novi korisnici moćiće da koriste aplikaciju <strong>7 dana besplatno.</strong></p>
            </div>
            <div className="flex pricing-plan w-3/5 justify-center gap-12 ml-auto mr-auto pb-[110px]">
                <div>
                    <p>1 mesec</p>
                    <h5>1.190 <span>RSD</span></h5>
                </div>
                <div>
                    <p>12 meseci</p>
                    <h5>6.900 <span>RSD</span></h5>
                </div>
                {/*<div>*/}
                {/*    <p>3 meseca</p>*/}
                {/*    <h5>2.490 <span>RSD</span></h5>*/}
                {/*</div>*/}
            </div>
        </section>
    );
};

export default Launch;
