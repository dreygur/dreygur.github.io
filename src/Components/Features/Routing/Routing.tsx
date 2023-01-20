import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
            </Routes>
        </div>
    );
};

export default Routing;