import React from 'react';
import Info from '../../info';
import dreygur from '../../assets/dreygur2.png';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className='container mx-auto mt-32 lg:mt-80 sm:mt-48 md:mt-36'>
      <div className='lg:grid grid grid-cols-1 justify-items-center lg:grid-cols-2 lg:justify-items-center sm:grid sm:grid-cols-1 sm:justify-items-center'>
        <div className='w-60 lg:w-[391px] rounded-xl '>
          <img className='card-img h-full w-full' src={dreygur} alt="" />
        </div>
        <div className='text-2xl sm:mt-10 lg:w-full sm:w-96 w-64 sm:text-justify lg:-ml-24'>
          <h1 className='text-white lg:text-6xl font-extrabold sm:tracking-wider lg:tracking-wider sm:text-3xl sm:mb-10' style={{ fontFamily: 'Pattaya' }}>Hi there !</h1>
          <p className='text-[16px] text-white lg:mt-10 sm:text-[18px] text-justify'>I’m Rakibul Yeasin.<br/>{Info.description}</p>
        </div>
      </div>
    </section >
  );
};

export default HeroSection;