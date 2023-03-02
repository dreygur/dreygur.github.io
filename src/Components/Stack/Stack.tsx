import PhpIcon from '@mui/icons-material/Php';
import React from 'react';
import { SiCplusplus, SiGoland, SiJavascript, SiPython, SiSolidity, SiTypescript } from 'react-icons/si';
import { VscTerminalPowershell } from "react-icons/vsc";
import Info from '../../info';

const Stack = () => {
  return (
    <section>
      <div className='container lg:relative  mx-auto  lg:grid lg:grid-cols-5 lg:justify-items-center'>
        <div className=' mx-auto mt-40 lg:col-span-4'>
          <div className='lg:pl-[132px] w-64 lg:w-full text-justify mx-auto md:w-96'>
            <p className='text-white'>{Info.stackDescription}</p>
          </div>
          <div className='mt-20 lg:grid lg:grid-cols-3 lg:justify-items-center flex justify-center gap-1 md:gap-16'>
            <div className=''>
              <p className='text-white py-2 text-sm lg:text-md lg:text-left'> <span className='text-[#79CFFF]'><SiGoland className='inline mr-1' /></span> Go</p>
              <p className='text-white py-2 text-sm lg:text-md lg:text-left'> <span className='text-[#79CFFF]'><SiPython className='inline mr-1' /></span> Python</p>
              <p className='text-white py-2 text-sm lg:text-md lg:text-left'> <span className='text-[#79CFFF]'><SiJavascript className='inline mr-1' /></span> JavaScript</p>
            </div>
            <div className=''>
              <p className='text-white py-2 text-sm lg:text-md lg:text-left'> <span className='text-[#79CFFF]'><SiTypescript className='inline mr-1' /></span> TypeScript</p>
              <p className='text-white py-2 text-sm lg:text-md lg:text-left'> <span className='text-[#79CFFF]'><SiSolidity className='inline mr-1' /></span> Solidity</p>
              <p className='text-white py-2 text-sm lg:text-md lg:text-left'> <span className='text-[#79CFFF]'><PhpIcon className='inline mr-1' /></span> PHP</p>
            </div>
            <div className=''>
              <p className='text-white py-2 text-sm lg:text-md lg:text-left'> <span className='text-[#79CFFF]'><SiCplusplus className='inline mr-1' /></span> C/C++</p>
              <p className='text-white py-2 text-sm lg:text-md lg:text-left'> <span className='text-[#79CFFF]'><VscTerminalPowershell className='inline mr-1' /></span> Bash/Shell</p>
              <p className='text-white py-2 text-sm lg:text-md lg:text-left'> <span className='text-[#79CFFF]'><SiJavascript className='inline mr-1' /></span> JavaScript</p>
            </div>
          </div>
        </div>
        <div className='hidden lg:block lg:absolute lg:-right-16 lg:col-span-1 lg:top-72'>
          <h1 style={{ fontFamily: 'Pattaya' }} className='lg:text-7xl lg:tracking-wider text-white rotate-[90deg] font-extrabold'>MY Stack</h1>
        </div>
      </div>
    </section>
  );
};

export default Stack;

