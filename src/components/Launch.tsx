import plate1 from '../assets/images/Nenaslovljeni dizajn (5) 1.png';
import plate2 from '../assets/images/chicken-6262038_1280 1.png';
import message from "../assets/images/message.svg";
import check from '../assets/images/check.svg';
import timer from '../assets/images/timer.svg';
import nameIcon from '../assets/images/name-surname.svg';
import emailIcon from '../assets/images/email.svg';
import money from '../assets/images/money.svg';
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useNavigation} from "react-router-dom";

const Launch = () => {

    const TZ = 'Europe/Belgrade';
    const [activeCount, setActiveCount] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

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
    const navigate = useNavigate();

    const createSubscriber = () => {
        if(!name || !email) {
            alert('Molimo vas unesite ime i email adresu.');
            return;
        }

        axios.post("https://connect.mailerlite.com/api/subscribers", {
            email: email,
            fields: {
                name: name,
            },
            groups: ['163897145551750345'],
            resubscribe: true,
        }, {
            headers: {
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiYTRjMDAwNTgzNjZlMDEzMDI0MzMyNzJjOTgwYTA0NzMxMzViNDMxNjZhNzFiZGMwZjQ3ODY4MDFiODgwZDI5OTU4NDI1NTVjNDk5MjgyNTkiLCJpYXQiOjE3NTUxOTc5MTAuNDAxMzMsIm5iZiI6MTc1NTE5NzkxMC40MDEzMzMsImV4cCI6NDkxMDg3MTUxMC4zOTc2OCwic3ViIjoiODA1NDMyIiwic2NvcGVzIjpbXX0.WHVKyWScwktAHSdWtYEnCwPjMdmj10BPsb-xnhVtdIJZw3CBorz4gusjXukavPucBBslNbOL2RPXntvb50fp2riCPQn_AUo6jzEXIkmlivILqDtl_0KiIdjXlsO3oLA2CqlPG6hWDAjmmtO3ELGNN732akMxzjJY8qvOKXU5GBkpoC1E3jDrptU3sLmjkcSmGo19Avsc2jRRAmJLRb6WecAFkZzCzB9Esp-QLUOQaotOFzOz9zcC5XLW_ob1ktoa0hwWQItSFFBAOxz6nQteppsBSP7URk_7awd7BbsJrvY1bUGzxDkmawcfI9j_b7YCSCiCZltecSG25ofg_MQddHPmdLSKVgMaixCEW8PeMtg-zS4NH0l_OyW5TkzNzvQcoY7o9-lzNUWCbkqcupHo9HULUxZPpa2I9sl1-Ln7-YL98GBKUu_Uvhb0SPCOa3kfa-Zve2tJwdHyYi8uiA1FlLyU1wP8DF3JgCoz6fTF1pSWUGkk3YmVsKj18H-re2IqJfTveLurUfPuGbIknracxoQtxomgTovthofXEMZlHLmjuU6LeA2gynVOBrb-ssJM9BQ3bBoMWHelnbAk3Yg4aOu4m4UKfu-CaBxAi7CCQohmdWbtO84U2d1IwdjR8xfOZHt4MMaJJT19NAiL7rVn27tMdHgypME53Z9BAu0Pr3Y",
            },
        })
            .then(res => {
                setName('');
                setEmail('');
                navigate('/hvala-na-prijavi', { replace: true });
            })
            .catch(err => {
                console.error(err);
                alert('Došlo je do greške prilikom prijave. Molimo vas pokušajte ponovo.');
            });
    }

    useEffect(() => {
        const id = setInterval(() => setT(computeDHm(TZ)), 1000);
        return () => clearInterval(id);
    }, []);

    useEffect(() => {
        axios.get("https://connect.mailerlite.com/api/groups", {
            headers: {
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiYTRjMDAwNTgzNjZlMDEzMDI0MzMyNzJjOTgwYTA0NzMxMzViNDMxNjZhNzFiZGMwZjQ3ODY4MDFiODgwZDI5OTU4NDI1NTVjNDk5MjgyNTkiLCJpYXQiOjE3NTUxOTc5MTAuNDAxMzMsIm5iZiI6MTc1NTE5NzkxMC40MDEzMzMsImV4cCI6NDkxMDg3MTUxMC4zOTc2OCwic3ViIjoiODA1NDMyIiwic2NvcGVzIjpbXX0.WHVKyWScwktAHSdWtYEnCwPjMdmj10BPsb-xnhVtdIJZw3CBorz4gusjXukavPucBBslNbOL2RPXntvb50fp2riCPQn_AUo6jzEXIkmlivILqDtl_0KiIdjXlsO3oLA2CqlPG6hWDAjmmtO3ELGNN732akMxzjJY8qvOKXU5GBkpoC1E3jDrptU3sLmjkcSmGo19Avsc2jRRAmJLRb6WecAFkZzCzB9Esp-QLUOQaotOFzOz9zcC5XLW_ob1ktoa0hwWQItSFFBAOxz6nQteppsBSP7URk_7awd7BbsJrvY1bUGzxDkmawcfI9j_b7YCSCiCZltecSG25ofg_MQddHPmdLSKVgMaixCEW8PeMtg-zS4NH0l_OyW5TkzNzvQcoY7o9-lzNUWCbkqcupHo9HULUxZPpa2I9sl1-Ln7-YL98GBKUu_Uvhb0SPCOa3kfa-Zve2tJwdHyYi8uiA1FlLyU1wP8DF3JgCoz6fTF1pSWUGkk3YmVsKj18H-re2IqJfTveLurUfPuGbIknracxoQtxomgTovthofXEMZlHLmjuU6LeA2gynVOBrb-ssJM9BQ3bBoMWHelnbAk3Yg4aOu4m4UKfu-CaBxAi7CCQohmdWbtO84U2d1IwdjR8xfOZHt4MMaJJT19NAiL7rVn27tMdHgypME53Z9BAu0Pr3Y",
            },
        })
            .then(res => setActiveCount(res.data.data[1].active_count + res.data.data[2].active_count))
            .catch(err => console.error(err));
    });

    return (
    <section className="relative" id="launch">
        <img src={plate1} alt="plate" className="w-1/5 absolute left-0 bottom-72" />
        <img src={plate2} alt="plate" className="w-1/5 absolute right-0 top-0" />
        <div className="launch w-full">
            <div className="launch-central">
                <h2 className="color-natural font-bold text-[36px] text-center mb-[40px]">Postani deo Fity ekipe</h2>
                <p className="m-auto w-3/5 text-[26px] text-center color-natural">Prijavi se na newsletter listu i budi u toku sa novim dešavanjima, ponudama, receptima i savetima za zdravu i pametnu ishranu.</p>
            </div>
            <div className="launch-row md:grid block relative">
                <div className="submit-form md:grid md:grid-cols-3 md:gap-4">
                    <div className="form-group">
                        <input placeholder="Ime i prezime" onChange={(e) => setName(e.target.value)} type="text" name="name" value={name}/>
                        <img src={nameIcon} alt=""/>
                    </div>
                    <div className="form-group">
                        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} type="email" name="email" value={email}/>
                        <img src={emailIcon} alt=""/>
                    </div>
                    <button onClick={createSubscriber}>Prijavi se na newsletter listu <img src={check} style={{ filter: 'brightness(0) invert(1)' }} alt=""/></button>
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
