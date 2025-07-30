import React from 'react';
import instagram from '../assets/icons/instagram-icon.svg';
import facebook from '../assets/icons/facebook-icon.svg';
import tiktok from '../assets/icons/tiktok-icon.svg';

const Footer = () => {
    return (
        <footer>
            <div className="socials flex mb-[20px] justify-center w-[100%]">
                <a href="#" className="mr-[30px]">
                    <img src={facebook} alt="facebook" />
                </a>
                <a href="#" className="mr-[30px]">
                    <img src={tiktok} alt="tiktok" />
                </a>
                <a href="#">
                    <img src={instagram} alt="instagram" />
                </a>
            </div>
            <div className="cookies-privacy flex mb-[20px] justify-center w-[100%]">
                <a href="#" className="color-fity-green mr-[30px] font-medium text-[12px]">Politika privatnosti</a>
                <a href="#" className="color-fity-green mr-[30px] font-medium text-[12px]">Uslovi korišćenja</a>
                <a href="#" className="color-fity-green font-medium text-[12px]">Politika kolačića</a>
            </div>
            <div>
                <p className="text-center">© 2024 Fity App. Sva prava zadržana.</p>
            </div>
        </footer>
    );
};

export default Footer;
