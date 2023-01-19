import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { TbGitFork } from "react-icons/tb";
import { AiFillStar } from "react-icons/ai";
import { IoLogoPython } from "react-icons/io";

const Projects = () => {
    return (
        <section className='container mx-auto mt-40'>
            {
                new Array(5).fill('').map((d, idx) => <div key={idx} className='w-[900px] mx-auto mb-16'>
                    <h1 className='text-white'>
                        <span className='text-[#79CFFF] pr-2  '><PlayArrowIcon /></span>
                        Code Bot
                        <span className='pl-6 '><TbGitFork className='inline mr-2' /></span>
                        <span className='pt-9 inline'>5</span>
                        <span className='pl-6'><AiFillStar className='inline mr-2' /></span>
                        <span>5</span>
                        <span className='pl-6'><IoLogoPython className='inline' /></span>
                    </h1>
                    <p className="mt-12 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>)
            }
        </section>
    );
};

export default Projects;