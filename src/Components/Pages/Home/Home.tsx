
import React from 'react';
import HeroSection from '../../Hero/HeroSection';
import Projects from '../../Projects/Projects';
import Stack from '../../Stack/Stack';

const Home = () => {
    console.log('hit')
    return (
        <div>
            <HeroSection />
            <Stack />
            <Projects />
        </div>
    );
};

export default Home;