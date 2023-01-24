import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Info from '../../info'

const Stack = () => {
  return (
    <section className='container lg:relative  mx-auto  lg:grid lg:grid-cols-5 lg:justify-items-center'>
      <div className=' mx-auto mt-40 lg:col-span-4'>
        <div className='lg:pl-[132px] w-64 lg:w-full text-justify mx-auto md:w-96'>
          <p className='text-white'>{Info.stackDescription}</p>
        </div>
        <div className='mt-20 lg:grid lg:grid-cols-3 lg:justify-items-center flex justify-center gap-1 md:gap-16'>
          <div className=''>
            <p className='text-white py-2 text-sm lg:text-md'> <span className='text-[#79CFFF]'><PlayArrowIcon /></span> Go</p>
            <p className='text-white py-2 text-sm lg:text-md'> <span className='text-[#79CFFF]'><PlayArrowIcon /></span> Python</p>
            <p className='text-white py-2 text-sm lg:text-md pl-5'> <span className='text-[#79CFFF]'><PlayArrowIcon /></span> JavaScript</p>
          </div>
          <div className=''>
            <p className='text-white py-2 text-sm lg:text-md'> <span className='text-[#79CFFF]'><PlayArrowIcon /></span> TypeScript</p>
            <p className='text-white py-2 text-sm lg:text-md'> <span className='text-[#79CFFF]'><PlayArrowIcon /></span> Solidity</p>
            <p className='text-white py-2 text-sm lg:text-md pl-5'> <span className='text-[#79CFFF]'><PlayArrowIcon /></span> PHP</p>
          </div>
          <div className=''>
            <p className='text-white py-2 text-sm lg:text-md'> <span className='text-[#79CFFF]'><PlayArrowIcon /></span> C/C++</p>
            <p className='text-white py-2 text-sm lg:text-md'> <span className='text-[#79CFFF]'><PlayArrowIcon /></span> Bash/Shell</p>
            <p className='text-white py-2 text-sm lg:text-md pl-5'> <span className='text-[#79CFFF]'><PlayArrowIcon /></span> JavaScript</p>
          </div>
        </div>
      </div>
      <div className='hidden lg:block lg:absolute lg:-right-16 lg:col-span-1 lg:top-80'>
        <h1 style={{ fontFamily: 'Pattaya' }} className='lg:text-7xl lg:tracking-wider text-white rotate-[90deg] font-extrabold'>MY Stack</h1>
      </div>
    </section>
  );
};

export default Stack;

