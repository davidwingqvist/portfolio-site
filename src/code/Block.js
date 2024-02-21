import './NavigationBar.css'
import React, {useState} from 'react'
import './pages/MainPage'
import MainPage from './pages/MainPage';
import './pages/ProjectsPage';
import ProjectsPage from './pages/ProjectsPage';
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
                <li className='NavItem'><Link to='/portfolio-site/Home'>Home</Link></li>
                <li className='NavItem'><Link to='/portfolio-site/Projects'>Projects</Link></li>
                <li className='NavItem'>Contact</li>
                <text className='NavText'>ゲーム・WEB・システム開発向け</text>
            </ul>
    );
}

function Block()
{
    return (
        <>
        <Navi />
            <Routes>
                <Route path="/portfolio-site/Home" element={<MainPage />}></Route>
                <Route path="/portfolio-site/Projects" element={<ProjectsPage />}/>
                <Route
                        path="*"
                        element={<Navigate to="/portfolio-site/Home" replace={true} />}
                />
            </Routes>
        </>
    );
}

export default Block;