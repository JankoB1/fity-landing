import React from 'react';
import instagram from '../assets/icons/instagram-icon.svg';
import facebook from '../assets/icons/facebook-icon.svg';
import tiktok from '../assets/icons/tiktok-icon.svg';

const Footer = () => {
    return (
        <footer>
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
            <div className="cookies-privacy flex mb-[20px] justify-center w-[100%]">
                <a href="/privacy-policy" className="color-fity-green mr-[30px] font-medium text-[12px]">Politika privatnosti</a>
                <a href="#" className="color-fity-green mr-[30px] font-medium text-[12px]">Uslovi korišćenja</a>
                <a href="#" className="color-fity-green font-medium text-[12px]">Politika kolačića</a>
            </div>
            <div>
                <p className="text-center">© 2025 Fity App. Sva prava zadržana.</p>
            </div>
        </footer>
    );
};

export default Footer;
