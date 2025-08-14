import plate1 from '../assets/images/Nenaslovljeni dizajn (5) 1.png';
import plate2 from '../assets/images/chicken-6262038_1280 1.png';
import message from "../assets/images/message.svg";
import check from '../assets/images/check.svg';
import timer from '../assets/images/timer.svg';
import {useEffect, useState} from "react";
import axios from "axios";

const Launch = () => {

    const TZ = 'Europe/Belgrade';

    function nowInTZMs(tz: string): number {
        const dtf = new Intl.DateTimeFormat('en-US', {
            timeZone: tz,
            hour12: false,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });
        const parts = Object.fromEntries(
            dtf.formatToParts(new Date()).map(p => [p.type, p.value])
        );
        const y = Number(parts.year);
        const m = Number(parts.month);
        const d = Number(parts.day);
        const h = Number(parts.hour);
        const mi = Number(parts.minute);
        const s = Number(parts.second);
        return Date.UTC(y, m - 1, d, h, mi, s);
    }

    function targetSept1Ms(tz: string): number {
        const dtf = new Intl.DateTimeFormat('en-US', {
            timeZone: tz,
            year: 'numeric',
        });
        const y = Number(dtf.formatToParts(new Date()).find(p => p.type === 'year')?.value);
        const targetThis = Date.UTC(y, 8 /* Sept */, 1, 0, 0, 0); // 8 = septembar (0-indeksirano)
        const nowMs = nowInTZMs(tz);
        return nowMs <= targetThis ? targetThis : Date.UTC(y + 1, 8, 1, 0, 0, 0);
    }

    function computeDHm(tz: string) {
        const now = nowInTZMs(tz);
        const target = targetSept1Ms(tz);
        let diff = Math.max(0, target - now);

        const dayMs = 24 * 60 * 60 * 1000;
        const hourMs = 60 * 60 * 1000;
        const minMs = 60 * 1000;

        const days = Math.floor(diff / dayMs); diff %= dayMs;
        const hours = Math.floor(diff / hourMs); diff %= hourMs;
        const minutes = Math.floor(diff / minMs);

        const dStr = String(days).padStart(2, '0').slice(-2);
        const hStr = String(hours).padStart(2, '0');
        const mStr = String(minutes).padStart(2, '0');

        return { days, hours, minutes, dStr, hStr, mStr };
    }

    const [t, setT] = useState(() => computeDHm(TZ));

    useEffect(() => {
        const id = setInterval(() => setT(computeDHm(TZ)), 1000);
        return () => clearInterval(id);
    }, []);

    axios.get("https://api.mailerlite.com/api/v2/groups/161884797311910956", {
        headers: {
            "X-MailerLite-ApiKey": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiYTRjMDAwNTgzNjZlMDEzMDI0MzMyNzJjOTgwYTA0NzMxMzViNDMxNjZhNzFiZGMwZjQ3ODY4MDFiODgwZDI5OTU4NDI1NTVjNDk5MjgyNTkiLCJpYXQiOjE3NTUxOTc5MTAuNDAxMzMsIm5iZiI6MTc1NTE5NzkxMC40MDEzMzMsImV4cCI6NDkxMDg3MTUxMC4zOTc2OCwic3ViIjoiODA1NDMyIiwic2NvcGVzIjpbXX0.WHVKyWScwktAHSdWtYEnCwPjMdmj10BPsb-xnhVtdIJZw3CBorz4gusjXukavPucBBslNbOL2RPXntvb50fp2riCPQn_AUo6jzEXIkmlivILqDtl_0KiIdjXlsO3oLA2CqlPG6hWDAjmmtO3ELGNN732akMxzjJY8qvOKXU5GBkpoC1E3jDrptU3sLmjkcSmGo19Avsc2jRRAmJLRb6WecAFkZzCzB9Esp-QLUOQaotOFzOz9zcC5XLW_ob1ktoa0hwWQItSFFBAOxz6nQteppsBSP7URk_7awd7BbsJrvY1bUGzxDkmawcfI9j_b7YCSCiCZltecSG25ofg_MQddHPmdLSKVgMaixCEW8PeMtg-zS4NH0l_OyW5TkzNzvQcoY7o9-lzNUWCbkqcupHo9HULUxZPpa2I9sl1-Ln7-YL98GBKUu_Uvhb0SPCOa3kfa-Zve2tJwdHyYi8uiA1FlLyU1wP8DF3JgCoz6fTF1pSWUGkk3YmVsKj18H-re2IqJfTveLurUfPuGbIknracxoQtxomgTovthofXEMZlHLmjuU6LeA2gynVOBrb-ssJM9BQ3bBoMWHelnbAk3Yg4aOu4m4UKfu-CaBxAi7CCQohmdWbtO84U2d1IwdjR8xfOZHt4MMaJJT19NAiL7rVn27tMdHgypME53Z9BAu0Pr3Y",
        },
    })
        .then(res => console.log(res.data))
        .catch(err => console.error(err));


    return (
    <section className="relative" id="launch">
        <img src={plate1} alt="plate" className="w-1/5 absolute left-0 bottom-72" />
        <img src={plate2} alt="plate" className="w-1/5 absolute right-0 top-0" />
        <div className="launch w-full">
            <div className="launch-central">
                <h2 className="color-natural font-bold text-[36px] text-center mb-[40px]">Fity App biće dostupna 1. septembra!<br/> Budi deo Starter ekipe i ostvari benefite.</h2>
                <p className="m-auto w-3/5 text-[26px] text-center color-natural">300 najbržih korisnika koji se prijave do 31. avgusta i aktiviraju pretplatu postaju deo <strong>Fity Starter</strong> ekipe i dobijaju ekskluzivne pogodnosti.</p>
            </div>
            <div className="launch-row md:grid block grid-cols-2 gap-24">
                <div className="reservation-box md:mb-0 mb-12">
                    <h5>Broj rezervacija</h5>
                    <div className="numbers">
                        <div className="flex justify-between items-center">
                            <p className="num-bold ">0 <span className="num-light"> / 300</span></p>
                            <span className="num-resto">300 mesta ostalo</span>
                        </div>
                    </div>
                    <div className="numbers-line"><div className="line-inner"></div></div>
                    <div className="timer">
                        <div className="grid grid-cols-8 gap-5">
                            <div className="timer-number">{t.dStr[0]}</div>
                            <div className="timer-number">{t.dStr[1]}</div>

                            <div className="timer-number timer-dots">:</div>

                            <div className="timer-number">{t.hStr[0]}</div>
                            <div className="timer-number">{t.hStr[1]}</div>

                            <div className="timer-number timer-dots">:</div>

                            <div className="timer-number">{t.mStr[0]}</div>
                            <div className="timer-number">{t.mStr[1]}</div>
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
                    <p className="flex gap-5"><img src={check} alt=""/>Kompletan program vežbanja za početnike</p>
                    <a href="/upitnik" className="flex w-[430px] hero-button mt-8 justify-center">
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
