import './Block.css'
import './NavigationBar.css'
import React, {useState} from 'react'
import {useSpring, animated} from 'react-spring'

function Block()
{
    const mainAnim = useSpring({
        to: {opacity: 1,
            transform: "translateX(0px)"},
        from: {opacity: 0,
            transform: "translateX(-100%)"},
        delay: 500,
        transform: "translateX(100%)",
        config: {duration: 5000}
    });

    const secondaryAnim = useSpring({
        to: {opacity: 1,
            transform: "translateX(0px)"},
        from: {opacity: 0,
            transform: "translateX(-100%)"},
        delay: 1000,
        transform: "translateX(100%)",
        config: {duration: 5000}
    });

    return (
        <div className='HomePage'>
            <ul className='NavBar'>
                <li className='NavItem'>Home</li>
                <li className='NavItem'>Projects</li>
                <li className='NavItem'>Contact</li>
                <text className='NavText'>ゲーム・WEB・システム開発向け</text>
            </ul>
            <table className='Block'>
                <div className='AnimatedMainText'>
                    <animated.div style={mainAnim}>
                        <h1>ゲーム開発を勉強し、WEBやシステムにも向け。</h1>
                    </animated.div>
                    <animated.div style={secondaryAnim}>
                        <text>様々なプロジェクトを通じ、技能の知識を深めていくことを目標とし。</text>
                    </animated.div>
                </div>
            </table>
        </div>
    );
}

export default Block;