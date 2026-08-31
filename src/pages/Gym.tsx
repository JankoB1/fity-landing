import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import apple from '../assets/images/apple-btn.svg';
import android from '../assets/images/google-btn.svg';
import Footer from '../components/Footer';
import { gtag } from '../gtag';
import { STORE_URLS, IOS_APP_ID } from '../config';
import { usePromoCode } from '../hooks/usePromoCode';

type Platform = 'ios' | 'android' | 'other';

function detectPlatform(): Platform {
    const ua = navigator.userAgent || '';
    if (/Android/i.test(ua)) return 'android';
    if (/iPad|iPhone|iPod/i.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)) {
        return 'ios';
    }
    return 'other';
}

function reasonMessage(reason: string | null): string {
    switch (reason) {
        case 'not_started':
            return 'Ova ponuda uskoro počinje. Skeniraj kod ponovo za par dana.';
        case 'expired':
        case 'inactive':
            return 'Ova ponuda je istekla, ali Fity možeš probati besplatno 7 dana.';
        case 'exhausted':
            return 'Ponuda je iskorišćena, ali Fity možeš probati besplatno 7 dana.';
        default:
            return 'Ovaj kupon kod nije prepoznat, ali Fity možeš probati besplatno 7 dana.';
    }
}

type AccountTab = 'none' | 'has';

function Gym() {
    const { code: rawCode } = useParams<{ code: string }>();
    const code = (rawCode || 'GYM30').toUpperCase();
    const state = usePromoCode(code);
    const [platform, setPlatform] = useState<Platform>('other');
    const [showCopyInstructions, setShowCopyInstructions] = useState(false);
    const [accountTab, setAccountTab] = useState<AccountTab>('none');
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        setPlatform(detectPlatform());
    }, []);

    const handleCopyCode = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
        } catch {
            setCopied(false);
        }
        gtag('event', 'gym_copy_code_click', {
            promo_code: code,
            page_location: window.location.href,
        });
        setShowCopyInstructions(true);
    };

    const available = state.status === 'loaded' ? state.info.valid : true;
    const trialDays = state.status === 'loaded' ? state.info.trial_days : 30;
    const reason = state.status === 'loaded' ? state.info.reason : null;

    // Play Install Referrer isporucuje ovaj string aplikaciji pri prvom
    // pokretanju posle instalacije - Android put koji radi bez ijedne
    // dodatne akcije korisnika.
    const androidUrl = useMemo(() => {
        const referrer = new URLSearchParams({
            utm_source: 'gym',
            utm_medium: 'qr',
            utm_campaign: code.toLowerCase(),
            promo: code,
        }).toString();
        return `${STORE_URLS.android}&referrer=${encodeURIComponent(referrer)}`;
    }, [code]);

    useEffect(() => {
        document.title = `Fity — ${trialDays} dana besplatno`;

        // Smart App Banner: ako se korisnik posle instalacije vrati u Safari,
        // tap na "OPEN" pokrece aplikaciju sa ovim URL-om.
        let meta = document.querySelector('meta[name="apple-itunes-app"]');
        if (!meta) {
            meta = document.createElement('meta');
            meta.setAttribute('name', 'apple-itunes-app');
            document.head.appendChild(meta);
        }
        meta.setAttribute(
            'content',
            `app-id=${IOS_APP_ID}, app-argument=${window.location.href}`
        );

        return () => {
            meta?.remove();
        };
    }, [trialDays]);

    const trackStoreClick = (store: 'apple' | 'android') => {
        gtag('event', 'gym_store_button_click', {
            store,
            promo_code: code,
            page_location: window.location.href,
        });
    };

    // Na mobilnom se prikazuje samo dugme za tu platformu; na desktopu
    // (platform === 'other') oba teksta dugmeta se sklanjaju u korist
    // standardnih App Store / Google Play znacki ispod.
    const showAndroid = platform === 'android';
    const showIos = platform === 'ios';

    return (
        <>
            <div
                className="min-h-screen flex items-center justify-center px-6 py-14"
                style={{
                    background:
                        'linear-gradient(160deg, rgba(157,208,48,0.85) 0%, #19B888 100%)',
                }}
            >
                <div className="w-full max-w-[420px] text-center text-white">
                    <img src={logo} className="mx-auto w-[52px] mb-8" alt="Fity" />

                    {available ? (
                        <>
                            <p className="uppercase tracking-widest text-[13px] font-bold opacity-90 mb-3">
                                Poklon za članove teretane
                            </p>
                            <h1 className="text-[34px] leading-[1.1] font-bold mb-4">
                                {trialDays} dana Fity-ja
                                <br />
                                besplatno
                            </h1>
                            <p className="text-[16px] opacity-95 mb-8">
                                Personalizovan plan ishrane, recepti i lista za kupovinu.
                                Bez plaćanja i bez obaveze — otkaži kad god želiš.
                            </p>

                            <div className="flex flex-col gap-3 mb-8">
                                {showAndroid && (
                                    <a
                                        href={androidUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => trackStoreClick('android')}
                                        className="bg-white text-[#12805E] font-bold rounded-2xl py-4 px-6 text-[17px]"
                                    >
                                        Preuzmi za Android
                                    </a>
                                )}
                                {showIos && (
                                    <a
                                        href={STORE_URLS.ios}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => trackStoreClick('apple')}
                                        className="rounded-2xl py-4 px-6 text-[17px] font-bold border-2 border-white/70"
                                    >
                                        Preuzmi za iPhone
                                    </a>
                                )}
                                {platform === 'other' && (
                                    <div className="flex gap-4 justify-center mt-2">
                                        <a href={STORE_URLS.ios} target="_blank" rel="noopener noreferrer" onClick={() => trackStoreClick('apple')}>
                                            <img src={apple} alt="App Store" className="w-[50px]" />
                                        </a>
                                        <a href={STORE_URLS.android} target="_blank" rel="noopener noreferrer" onClick={() => trackStoreClick('android')}>
                                            <img src={android} alt="Google Play" />
                                        </a>
                                    </div>
                                )}
                            </div>

                            <button
                                type="button"
                                onClick={handleCopyCode}
                                className="w-full bg-black/15 rounded-2xl py-4 px-5 mb-8 text-left"
                            >
                                <p className="text-[13px] opacity-85 mb-1.5">Tvoj kupon kod</p>
                                <div className="flex items-center justify-between gap-3">
                                    <p className="text-[26px] font-bold tracking-[0.16em]">{code}</p>
                                    <span className="flex-none text-[13px] font-bold bg-white/20 rounded-full py-2 px-4">
                                        {copied ? 'Kopirano ✓' : 'Kopiraj'}
                                    </span>
                                </div>
                            </button>

                            <ul className="text-left text-[14px] opacity-90 space-y-2.5">
                                <li className="flex gap-2.5">
                                    <span className="flex-none w-[22px] h-[22px] rounded-full bg-white/20 grid place-items-center text-[12px] font-bold">1</span>
                                    Preuzmi aplikaciju sa dugmeta iznad
                                </li>
                                <li className="flex gap-2.5">
                                    <span className="flex-none w-[22px] h-[22px] rounded-full bg-white/20 grid place-items-center text-[12px] font-bold">2</span>
                                    Pri registraciji unesi kod sa ove stranice (na Androidu će često biti već upisan)
                                </li>
                                <li className="flex gap-2.5">
                                    <span className="flex-none w-[22px] h-[22px] rounded-full bg-white/20 grid place-items-center text-[12px] font-bold">3</span>
                                    {trialDays} dana kreće odmah
                                </li>
                            </ul>
                        </>
                    ) : (
                        <>
                            <h1 className="text-[28px] leading-[1.15] font-bold mb-4 mt-6">
                                Ponuda trenutno nije aktivna
                            </h1>
                            <p className="text-[16px] opacity-95 mb-8">{reasonMessage(reason)}</p>
                            <div className="flex flex-col gap-3">
                                {showAndroid && (
                                    <a
                                        href={STORE_URLS.android}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => trackStoreClick('android')}
                                        className="bg-white text-[#12805E] font-bold rounded-2xl py-4 px-6 text-[17px]"
                                    >
                                        Preuzmi za Android
                                    </a>
                                )}
                                {showIos && (
                                    <a
                                        href={STORE_URLS.ios}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => trackStoreClick('apple')}
                                        className="rounded-2xl py-4 px-6 text-[17px] font-bold border-2 border-white/70"
                                    >
                                        Preuzmi za iPhone
                                    </a>
                                )}
                                {platform === 'other' && (
                                    <div className="flex gap-4 justify-center mt-2">
                                        <a href={STORE_URLS.ios} target="_blank" rel="noopener noreferrer" onClick={() => trackStoreClick('apple')}>
                                            <img src={apple} alt="App Store" className="w-[50px]" />
                                        </a>
                                        <a href={STORE_URLS.android} target="_blank" rel="noopener noreferrer" onClick={() => trackStoreClick('android')}>
                                            <img src={android} alt="Google Play" />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>

            {showCopyInstructions && (
                <div
                    className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 px-4 py-6"
                    onClick={() => setShowCopyInstructions(false)}
                >
                    <div
                        className="w-full max-w-[420px] bg-white rounded-3xl p-6 text-[#0F4A3B]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-1">
                            <p className="text-[13px] font-bold uppercase tracking-widest opacity-60">
                                {copied ? 'Kod je kopiran' : 'Tvoj kod'}
                            </p>
                            <button
                                type="button"
                                onClick={() => setShowCopyInstructions(false)}
                                aria-label="Zatvori"
                                className="text-[20px] leading-none opacity-50 px-2"
                            >
                                ✕
                            </button>
                        </div>
                        <p className="text-[22px] font-bold tracking-[0.12em] mb-5">{code}</p>

                        <div className="flex bg-[#F2F2F2] rounded-full p-1 mb-5">
                            <button
                                type="button"
                                onClick={() => setAccountTab('none')}
                                className={`flex-1 rounded-full py-2.5 text-[13px] font-bold transition-colors ${
                                    accountTab === 'none' ? 'bg-[#19B888] text-white' : 'text-[#0F4A3B]/70'
                                }`}
                            >
                                Nemam nalog
                            </button>
                            <button
                                type="button"
                                onClick={() => setAccountTab('has')}
                                className={`flex-1 rounded-full py-2.5 text-[13px] font-bold transition-colors ${
                                    accountTab === 'has' ? 'bg-[#19B888] text-white' : 'text-[#0F4A3B]/70'
                                }`}
                            >
                                Već imam nalog
                            </button>
                        </div>

                        {accountTab === 'none' ? (
                            <ul className="text-left text-[14px] space-y-3 mb-6">
                                <li className="flex gap-3">
                                    <span className="flex-none w-[22px] h-[22px] rounded-full bg-[#19B888]/15 text-[#19B888] grid place-items-center text-[12px] font-bold">1</span>
                                    <span>Preuzmi Fity aplikaciju sa dugmeta na ovoj stranici i pokreni registraciju.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="flex-none w-[22px] h-[22px] rounded-full bg-[#19B888]/15 text-[#19B888] grid place-items-center text-[12px] font-bold">2</span>
                                    <span>Iznad dugmeta „Započni probni period" nalepi kod koji si upravo kopirao/la (na Androidu će često biti već upisan).</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="flex-none w-[22px] h-[22px] rounded-full bg-[#19B888]/15 text-[#19B888] grid place-items-center text-[12px] font-bold">3</span>
                                    <span>{trialDays} dana besplatno kreće odmah po registraciji.</span>
                                </li>
                            </ul>
                        ) : (
                            <ul className="text-left text-[14px] space-y-3 mb-6">
                                <li className="flex gap-3">
                                    <span className="flex-none w-[22px] h-[22px] rounded-full bg-[#19B888]/15 text-[#19B888] grid place-items-center text-[12px] font-bold">1</span>
                                    <span>Otvori Fity aplikaciju i uloguj se na svoj nalog.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="flex-none w-[22px] h-[22px] rounded-full bg-[#19B888]/15 text-[#19B888] grid place-items-center text-[12px] font-bold">2</span>
                                    <span>
                                        Idi na <strong>Profil → Unesi kupon kod</strong>. Ako ti je probni period već istekao, isti unos te čeka na ekranu za pretplatu, pod „Imam kupon kod".
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="flex-none w-[22px] h-[22px] rounded-full bg-[#19B888]/15 text-[#19B888] grid place-items-center text-[12px] font-bold">3</span>
                                    <span>Nalepi kod i potvrdi sa „Primeni" — {trialDays} dana kreće odmah.</span>
                                </li>
                            </ul>
                        )}

                        <button
                            type="button"
                            onClick={() => setShowCopyInstructions(false)}
                            className="w-full bg-[#19B888] text-white font-bold rounded-2xl py-3.5 text-[15px]"
                        >
                            Razumem
                        </button>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
}

export default Gym;
