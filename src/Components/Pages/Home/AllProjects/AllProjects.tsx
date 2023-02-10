/* @ts-nocheck */
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import React, { useEffect, useState } from 'react';
import { AiFillStar } from "react-icons/ai";
import { IoLogoHtml5, IoLogoPython } from "react-icons/io";
import { SiDart, SiDocker, SiGithub, SiGoland, SiJavascript, SiTypescript } from "react-icons/si";
import { TbGitFork } from "react-icons/tb";
import { VscTerminalPowershell } from "react-icons/vsc";
import { useGlobalCtx } from '../../../Context/GlobalCtx/GlobalProvider';



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
    const { projects, pageCount } = useGlobalCtx();
    const [page, setPage] = useState(1);
    const [initial, setInitial] = useState(1);
    const [firstIdx, setFirstIdx] = useState(0);
    const [lastIdx, setLastIdx] = useState(10);
    const [loading, setLoading] = useState(false);



    useEffect(() => {
        (async () => {
            try {
                handlePageData(initial);
            }
            catch (err) { console.log(err) }
        })();

    }, [loading]);


    const handlePageData = (value) => {
        if (page > 0 && value > page) {
            setLastIdx(lastIdx + 10);
            setFirstIdx(firstIdx + 10);
        }
        if (page > 0 && value < page) {
            setLastIdx(lastIdx - 10);
            setFirstIdx(firstIdx - 10);
        }
    };

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        try {
            setLoading(true);
            setPage(value);
            setInitial(value);
        }
        catch (err) { console.log(err) }
        finally {
            setLoading(false);
        }
    };

    return (
        <section className='container mx-auto mt-40 relative'>
            <div className='rotate-[270deg] absolute sm:hidden md:hidden lg:block hidden top-48'>
                <h1 className='lg:text-7xl font-extrabold text-white tracking-wider' style={{ fontFamily: 'Pattaya' }}>Projects</h1>
            </div>
            {
                projects.slice(firstIdx, lastIdx).map((d: any, idx: any) => <div key={idx} className='lg:w-[900px] mx-auto mb-16 w-64'>
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
            <div className="flex justify-center mt-28">
                <Stack spacing={2}>
                    <Pagination count={pageCount} page={page} onChange={handleChange} />
                </Stack>
            </div>
        </section>
    );
};

export default AllProjects;