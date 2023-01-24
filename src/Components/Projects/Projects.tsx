import React, { useEffect, useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { TbGitFork } from "react-icons/tb";
import { AiFillStar } from "react-icons/ai";
import { IoLogoHtml5, IoLogoPython } from "react-icons/io";
import { DiGo } from "react-icons/di";

const icons = {
  'python': <IoLogoPython className='inline' />,
  'go': <DiGo className='inline' />,
  'shell': <DiGo className='inline' />,
  'html': <IoLogoHtml5 className='inline' />,
  'javascript': <IoLogoHtml5 className='inline' />,
  'dart': <IoLogoHtml5 className='inline' />,
  'typescript': <IoLogoHtml5 className='inline' />,
  'dockerfile': <IoLogoHtml5 className='inline' />,
};

const Projects = () => {
  const [projects, setProjects] = useState([Object]);
  useEffect(() => {
    fetch('https://api.github.com/users/dreygur/repos')
      .then(response => response.json())
      .then(res => setProjects(res))
  });
  return (
    <section className='container mx-auto mt-40 relative'>
      <div className='rotate-[270deg] absolute sm:hidden md:hidden lg:block hidden top-48'>
        <h1 className='lg:text-7xl font-extrabold text-white tracking-wider' style={{ fontFamily: 'Pattaya' }}>Projects</h1>
      </div>
      {
        projects.map((d, idx) => <div key={idx} className='lg:w-[900px] mx-auto mb-16 w-64'>
          <h1 className='text-white'>
            <span className='text-[#79CFFF] pr-2'><PlayArrowIcon /></span>
            {d["name"]}
            <span className='pl-6 '><TbGitFork className='inline mr-2' /></span>
            <span className='font-bold'>{d["forks"]}</span>
            <span className='pl-6'><AiFillStar className='inline mr-2' /></span>
            <span className='font-bold'>{d["stargazers_count"]}</span>
            <span className='pl-6'>{icons[(String(d["language"])).toLowerCase()] || ""}</span>
          </h1>
          <p className="mt-7 text-white lg:text-justify text-justify md:text-justify">{d["description"]}</p>
        </div>)
      }
    </section>
  );
};

export default Projects;