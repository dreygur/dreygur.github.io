import React from 'react';
import footerImg from '../../../assets/footer.png';

const Footer = () => {
    return (
        <footer className='bg-[#021F3B] mt-20 lg:mt-52 lg:h-80 flex'>
            <div className='text-center m-auto'>
                <img className='lg:block' src={footerImg} alt="" />
            </div>
        </footer>
    );
};

export default Footer;