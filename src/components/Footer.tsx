import React from 'react';
import instagram from '../assets/icons/instagram-icon.svg';
import facebook from '../assets/icons/facebook-icon.svg';
import tiktok from '../assets/icons/tiktok-icon.svg';
import apple from "../assets/images/apple-btn.svg";
import android from "../assets/images/google-btn.svg";

const Footer = () => {
    return (
        <footer>
            <div className="mt-[20px] flex gap-5 justify-center items-center pb-14 pl-0">
                <a href="https://apps.apple.com/us/app/fity-meals/id6753711257" target="_blank"><img src={apple} alt="apple" className="w-[50]"/></a>
                <a href="https://play.google.com/store/apps/details?id=app.getfity" target="_blank"><img src={android} alt="android" /></a>
            </div>
            <div className="socials flex mb-[20px] justify-center w-[100%]">
                <a href="https://www.facebook.com/getfityapp" target="_blank" className="mr-[30px]">
                    <img src={facebook} alt="facebook" />
                </a>
                <a href="https://www.tiktok.com/@getfityapp" target="_blank" className="mr-[30px]">
                    <img src={tiktok} alt="tiktok" />
                </a>
                <a href="https://www.instagram.com/getfityapp/" target="_blank">
                    <img src={instagram} alt="instagram" />
                </a>
            </div>
            <div className="flex mb-[20px] justify-center w-[100%]">
                <a href="/politika-privatnosti" className="color-fity-green mr-[30px] font-medium text-[12px]">Politika privatnosti</a>
                <a href="/uslovi-koriscenja" className="color-fity-green mr-[30px] font-medium text-[12px]">Uslovi korišćenja</a>
                <a href="/politika-kolacica" className="color-fity-green font-medium text-[12px]">Politika kolačića</a>
            </div>
            <div>
                <p className="text-center">© 2025 Fity App. Sva prava zadržana.</p>
            </div>
        </footer>
    );
};

export default Footer;
