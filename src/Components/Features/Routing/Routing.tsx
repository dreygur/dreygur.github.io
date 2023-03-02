import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../../Pages/Home/AboutMe/About';
import AllProjects from '../../Pages/Home/AllProjects/AllProjects';
import Contact from '../../Pages/Home/Contact/Contact';
import Home from '../../Pages/Home/Home';

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/projects' element={<AllProjects />}></Route>
                <Route path='/about' element={<About />}></Route>
            </Routes>
        </div>
    );
};

export default Routing;