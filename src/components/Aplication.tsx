import weight from "../assets/icons/solar_body-shape-broken.svg";
import muscle from "../assets/icons/icon-park-outline_muscle.svg";
import form from "../assets/icons/iconoir_weight-alt.svg";
import cook from "../assets/icons/icon-park-outline_cook.svg";
import woman from "../assets/images/Group 6.png";
import {Pagination} from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import people from "../assets/images/fity-kulinarstvo.png";

const Aplication = () => {
    return (
        <section className="aplication relative">
            <div className="w-full">
                <div className="fity-aplication">
                    <h4 className="fity-help text-[18px] font-bold color-fity-green pb-[30px] text-center">KAKO FUNKCIONIŠE APLIKACIJA</h4>
                    <h2 className="text-[32px] font-bold color-natural mb-8 text-center">Fity svakodnevno bavljenje ishranom <br/> čini lakšim i jednostavnijim</h2>
                </div>

                <div className="block md:hidden">
                    <Swiper
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        spaceBetween={16}
                        slidesPerView={1.2}
                        style={{ paddingBottom: 32 }}
                    >
                        <SwiperSlide>
                            <div className="aplication-funcionality flex">
                                <div>
                                    <div className="green-numbers">1</div>
                                    <h5 className="block">Unesi cilj i podatke</h5>
                                    <p>Unesi svoj cilj i osnovne podatke poput visine, težine, godina, nivoa fizičke aktivnosti i ličnih preferenci.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="aplication-funcionality flex">
                                <div>
                                    <div className="green-numbers">2</div>
                                    <h5 className="block">Generiši plan ishrane</h5>
                                    <p>Na osnovu unetih informacija Fity App kreira tvoj lični plan obroka uz recepte i preporučene porcije.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="aplication-funcionality flex">
                                <div>
                                    <div className="green-numbers">3</div>
                                    <h5 className="block">Nabavi namirnice</h5>
                                    <p>Dobijaš listu potrebnih namirnica kako bi nedeljna kupovina bila brza i jednostavna, bez suvišnih troškova.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="aplication-funcionality flex">
                                <div>
                                    <div className="green-numbers">4</div>
                                    <h5 className="block">Kuvaj i prati plan</h5>
                                    <p>Prati plan i beleži svoj napredak u aplikaciji kako bi ostao/la motivisan/a i na pravom putu ka svom cilju.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="block md:hidden w-1/1 md:w-1/2 pl-0 md:pl-[40px] mt-auto mb-auto">
                        <img className="w-[100%]" src={people} alt="people" />
                    </div>
                </div>

                <div className="hidden md:flex w-full mt-[100px]">
                    <div className="w-1/1 mb-10 md:w-1/2 pr-0 md:pr-[40px] mt-auto md:mb-auto">
                        <img src={woman} alt="woman" />
                    </div>
                    <div className="w-1/1 flex flex-wrap justify-between gap-y-8 pl-0 md:pl-[40px] md:w-1/2">
                        <div className="aplication-funcionality flex w-3">
                            <div>
                                <div className="green-numbers">1</div>
                                <h5 className="block">Unesi cilj i podatke</h5>
                                <p>Unesi svoj cilj i osnovne podatke poput visine, težine, godina, nivoa fizičke aktivnosti i ličnih preferenci.</p>
                            </div>
                        </div>
                        <div className="aplication-funcionality flex w-3">
                            <div>
                                <div className="green-numbers">2</div>
                                <h5 className="block">Generiši plan ishrane</h5>
                                <p>Na osnovu unetih informacija Fity App kreira tvoj lični plan obroka uz recepte i preporučene porcije.</p>
                            </div>
                        </div>
                        <div className="aplication-funcionality flex w-3">
                            <div>
                                <div className="green-numbers">3</div>
                                <h5 className="block">Nabavi namirnice</h5>
                                <p>Dobijaš listu potrebnih namirnica kako bi nedeljna kupovina bila brza i jednostavna, bez suvišnih troškova.</p>
                            </div>
                        </div>
                        <div className="aplication-funcionality flex w-3">
                            <div>
                                <div className="green-numbers">4</div>
                                <h5 className="block">Kuvaj i prati plan</h5>
                                <p>Prati plan i beleži svoj napredak u aplikaciji kako bi ostao/la motivisan/a i na pravom putu ka svom cilju.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Aplication;
