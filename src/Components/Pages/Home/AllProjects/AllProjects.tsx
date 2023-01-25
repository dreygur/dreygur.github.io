import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { TbGitFork } from "react-icons/tb";
import { AiFillStar } from "react-icons/ai";
import { IoLogoHtml5, IoLogoPython } from "react-icons/io";
import { SiGoland, SiJavascript, SiDart, SiTypescript, SiDocker, SiGithub } from "react-icons/si";
// import Paginations from '../../../Shared/Pagination/Paginations';
import { VscTerminalPowershell } from "react-icons/vsc";

// Projects from Static file
import projects from '../../../../assets/projects.json';

const icons = {
  'python': <IoLogoPython className='inline' />,
  'go': <SiGoland className='inline' />,
  'shell': <VscTerminalPowershell className='inline' />,
  'html': <IoLogoHtml5 className='inline' />,
  'javascript': <SiJavascript className='inline' />,
  'dart': <SiDart className='inline' />,
  'typescript': <SiTypescript className='inline' />,
  'dockerfile': <SiDocker className='inline' />,
};

const AllProjects = () => {
  return (
    <section className='container mx-auto mt-40 relative'>
      <div className='rotate-[270deg] absolute sm:hidden md:hidden lg:block hidden top-40'>
        <h1 className='lg:text-7xl font-extrabold text-white tracking-wider' style={{ fontFamily: 'Pattaya' }}>Projects</h1>
      </div>
      {
        projects.map((d, idx) =>
          <div key={idx} className='lg:w-[900px] mx-auto mb-16 w-64'>
            <h1 className='text-white text-left'>
              <span className='text-[#79CFFF] pr-2'><PlayArrowIcon /></span>
              <a href={d["html_url"]} target="_blank" rel='noopener noreferrer'>{d["name"]}</a>
              <span className='pl-6 '><TbGitFork className='inline mr-2' /></span>
              <span className='font-bold'>{d["forks"]}</span>
              <span className='pl-6'><AiFillStar className='inline mr-2' /></span>
              <span className='font-bold'>{d["stargazers_count"]}</span>
              <span className='pl-6'>{icons[(String(d["language"])).toLowerCase()] || ""}</span>
              <span className='font-bold pl-6'><a href={d["html_url"]} target="_blank" rel='noopener noreferrer'><SiGithub className='inline' /></a></span>
            </h1>
            <p className="mt-7 text-white lg:text-justify text-justify md:text-justify pl-2">{d["description"]}</p>
          </div>)
      }
      {/* <div className="flex justify-center mt-28">
        <Paginations />
      </div> */}
    </section>
  );
};

export default AllProjects;