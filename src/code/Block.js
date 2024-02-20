import './Block.css'
import './NavigationBar.css'
import React, {useState} from 'react'
import {useSpring, animated} from 'react-spring'
import githubLogo from '../textures/github_logo.png'

function Block()
{
    const mainAnim = useSpring({
        to: {opacity: 1,
            transform: "translateX(0px)"},
        from: {opacity: 0,
            transform: "translateX(-100%)"},
        delay: 200,
        transform: "translateX(100%)",
        config: {duration: 3000}
    });

    const secondaryAnim = useSpring({
        to: {opacity: 1,
            transform: "translateX(0px)"},
        from: {opacity: 0,
            transform: "translateX(-100%)"},
        delay: 500,
        transform: "translateX(100%)",
        config: {duration: 3000}
    });

    const logoBlockAnim = useSpring({
        to: {opacity: 1, 
            transform: "translateY(0px)"},
        from: {opacity: 0,
            transform: "translateY(-100vh)"},
        delay: 100,
        transform: "translateY(100%)",
        config: {duration: 3000}
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
                        <h5>様々なプロジェクトを通じ、技能の知識を深めていくことを目標とし。</h5>
                    </animated.div>
                </div>

                <animated.div style={secondaryAnim}>
                    <div className='MainSender'>
                        <text className='AnimatedMainText'>さて、プロジェクトをご覧になりましょうか？</text>
                        <text className='MainSenderButton'>プロジェクトへ</text>
                    </div>
                </animated.div>

                <animated.div style={logoBlockAnim} className={'logoImageBlock'}>
                    <img src={githubLogo} className='logoImage'></img>
                    <img src={githubLogo} className='logoImage'></img>
                    <img src={githubLogo} className='logoImage'></img>
                </animated.div>
            </table>
        </div>
    );
}

export default Block;