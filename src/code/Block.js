import './NavigationBar.css'
import React, {useState} from 'react'
import './pages/MainPage'
import MainPage from './pages/MainPage';
import './ProjectsPage';
import ProjectsPage from './ProjectsPage';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";

const Navi = () => {
    return (    
            <ul className='NavBar'>
                <li className='NavItem'><Link to='/Home'>Home</Link></li>
                <li className='NavItem'><Link to='/Projects'>Projects</Link></li>
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
                <Route path="*" element={<MainPage />}></Route>
                <Route path="/Projects" element={<ProjectsPage />}/>
            </Routes>
        </>
    );
}

export default Block;