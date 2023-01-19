import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Stack = () => {
    return (
        <section className='container lg:relative  mx-auto  lg:grid lg:grid-cols-5 lg:justify-items-center'>
            <div className=' mx-auto mt-40 lg:col-span-4'>
                <div className='lg:pl-[132px] w-64 lg:w-full text-justify mx-auto md:w-96'>
                    <p className='text-white'>I’m Rakibul Yeasin, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='mt-20 lg:grid lg:grid-cols-3 lg:justify-items-center flex justify-center gap-1 md:gap-16'>
                    <div>
                        <p className='text-white py-2 text-sm lg:text-md'> <span className='text-[#79CFFF]'><PlayArrowIcon /></span> Python</p>
                        <p className='text-white py-2 text-sm lg:text-md'> <span className='text-[#79CFFF]'><PlayArrowIcon /></span> Golang</p>
                        <p className='text-white py-2 text-sm lg:text-md'> <span className='text-[#79CFFF]'><PlayArrowIcon /></span> JavaScript</p>
                    </div>
                    <div>
                        <p className='text-white py-2 text-sm lg:text-md'> <span className='text-[#79CFFF]'><PlayArrowIcon /></span> Python</p>
                        <p className='text-white py-2 text-sm lg:text-md'> <span className='text-[#79CFFF]'><PlayArrowIcon /></span> Golang</p>
                        <p className='text-white py-2 text-sm lg:text-md'> <span className='text-[#79CFFF]'><PlayArrowIcon /></span> JavaScript</p>
                    </div>
                    <div>
                        <p className='text-white py-2 text-sm lg:text-md'> <span className='text-[#79CFFF]'><PlayArrowIcon /></span> Python</p>
                        <p className='text-white py-2 text-sm lg:text-md'> <span className='text-[#79CFFF]'><PlayArrowIcon /></span> Golang</p>
                        <p className='text-white py-2 text-sm lg:text-md'> <span className='text-[#79CFFF]'><PlayArrowIcon /></span> JavaScript</p>
                    </div>
                </div>
            </div>
            <div className='hidden lg:block lg:absolute lg:-right-16 lg:col-span-1 lg:top-80'>
                <h1 style={{ fontFamily: 'Pattaya' }} className='lg:text-7xl lg:tracking-wider text-white rotate-[90deg]'>MY Stack</h1>
            </div>
        </section>
    );
};

export default Stack;

