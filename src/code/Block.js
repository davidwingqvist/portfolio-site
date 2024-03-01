import './NavigationBar.css'
import React, {useState} from 'react'
import './pages/MainPage'
import MainPage from './pages/MainPage';
import './pages/ProjectsPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import ShowcasePage from './pages/ShowcasePage';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate,
} from "react-router-dom";

const Navi = () => {
    return (    
            <ul className='NavBar'>
                <li className='NavItem'><Link to='/portfolio-site/'>Home</Link></li>
                <li className='NavItem'><Link to='/portfolio-site/Projects'>Projects</Link></li>
                <li className='NavItem'><Link to='/portfolio-site/Showcase'>Showcase</Link></li>
                <li className='NavItem'><Link to='/portfolio-site/Contact'>Contact</Link></li>
                <text className='NavText'>David Wingqvist</text>
            </ul>
    );
}

function Block()
{
    return (
        <>
        <Navi />
            <Routes>
                <Route path="/portfolio-site/" element={<MainPage />}></Route>
                <Route path="/portfolio-site/Projects" element={<ProjectsPage />}/>
                <Route path="/portfolio-site/Contact" element={<ContactPage />}/>
                <Route path="/portfolio-site/Showcase" element={<ShowcasePage/>}/>
                <Route
                        path="*"
                        element={<Navigate to="/portfolio-site/" replace={true} />}
                />
            </Routes>
        </>
    );
}

export default Block;