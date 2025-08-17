import weight from '../assets/icons/solar_body-shape-broken.svg';
import muscle from '../assets/icons/icon-park-outline_muscle.svg';
import form from '../assets/icons/iconoir_weight-alt.svg';
import cook from '../assets/images/cook.svg';

const Benefits = () => {
    return (
        <section className="benefits mt-[-80px] z-10 relative">
            <div className="w-1/1 md:w-3/5">
                <h4 className="fity-help text-[18px] font-bold color-fity-green pb-[30px]">KOME FITY POMAŽE</h4>
                <h2 className="text-[20px] md:text-[30px] text-white mb-20 lh-cus">Ukoliko se dugo mučiš sa restriktivnim dijetama, odricanjem od hrane ili nemaš vremena, volje i
                    znanja da samostalno sastaviš i pratiš plan ishrane koji će te odvesti do cilja, Fity je pravo
                    rešenje za tebe.</h2>
                <div className="block md:flex flex-wrap justify-between gap-y-12">
                    <div className="li-benefits flex w-3">
                        <img src={weight} alt="weight reduction" className="w-[60px] mr-4" />
                        <div>
                            <h5 className="block">Redukuj telesnu masu</h5>
                            <p>Zategni telo i smanji masti</p>
                        </div>
                    </div>
                    <div className="li-benefits flex w-3">
                        <img src={muscle} alt="muscles" className="w-[60px] mr-4" />
                        <div>
                            <h5 className="block">Uvećaj mišićnu masu</h5>
                            <p>Povećaj snagu i telesnu masu</p>
                        </div>
                    </div>
                    <div className="li-benefits flex w-3">
                        <img src={form} alt="top form" className="w-[60px] mr-4" />
                        <div>
                            <h5 className="block">Budi u top formi</h5>
                            <p>Budite zdravi i puni energije</p>
                        </div>
                    </div>
                    <div className="li-benefits flex w-3">
                    <img src={cook} alt="cooking" className="w-[60px] mr-4" />
                        <div>
                            <h5 className="block">Hrani se pravilno</h5>
                            <p>Stvori zdrave navike u ishrani</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
