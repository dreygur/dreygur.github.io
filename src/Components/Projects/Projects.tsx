import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import React from 'react';
import { AiFillStar } from "react-icons/ai";
import { BiRightArrowAlt } from "react-icons/bi";
import { IoLogoHtml5, IoLogoPython } from "react-icons/io";
import { SiDart, SiDocker, SiGithub, SiGoland, SiJavascript, SiTypescript } from "react-icons/si";
import { TbGitFork } from "react-icons/tb";
import { VscTerminalPowershell } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';
import { useGlobalCtx } from '../Context/GlobalCtx/GlobalProvider';
import Spinner from '../Shared/Spinner/Spinner';
import './Porjects.css';

// Projects from Static file
import projects from '../../assets/projects.json';

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

const Projects = () => {
  const navigate = useNavigate();
  const { projects, isLoading } = useGlobalCtx();

  return (
    <section>
      <div className='container mx-auto mt-40 relative'>
        <div className='rotate-[270deg] absolute sm:hidden md:hidden lg:block hidden top-24'>
          <h1 className='lg:text-7xl font-extrabold text-white tracking-wider' style={{ fontFamily: 'Pattaya' }}>Projects</h1>
        </div>
        <div className='mt-20'>
          {
            isLoading ? <Spinner /> : projects.slice(0, 5).map((d, idx) => <div key={idx} className='lg:w-[900px] mx-auto mb-16 w-64'>
              <h1 className='text-white text-left'>
                <span className='text-[#79CFFF] pr-2'><PlayArrowIcon /></span>
                {d["name"]}
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
        </div>
      </div>
      {isLoading && <Spinner />}
      <div>
        {
          <button onClick={() => navigate('/projects')} className="cta">
            <span>See More</span>
            <BiRightArrowAlt className='inline' />
          </button>
        }
      </div>
    </section>
  );
};

export default Projects;


