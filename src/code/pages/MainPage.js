import '../Block.css'
import '../NavigationBar.css'
import React from 'react'
import {useSpring, animated} from 'react-spring'
import githubLogo from '../../textures/github_logo.png'
import linkedInLogo from '../../textures/linkedIn_logo.png'
import {
    Link,
} from "react-router-dom";

import Carousel from '../Carousel'

function MainPage ()
{
    const mainAnim = useSpring({
        to: {opacity: 1,
            transform: "translateX(0px)"},
        from: {opacity: 0,
            transform: "translateX(-100dvh)"},
        delay: 0,
        transform: "translateX(100%)",
        config: {duration: 2000}
    });

    const secondaryAnim = useSpring({
        to: {opacity: 1,
            transform: "translateX(0px)"},
        from: {opacity: 0,
            transform: "translateX(-100dvh)"},
        delay: 200,
        transform: "translateX(100%)",
        config: {duration: 2000}
    });

    const thirdAnim = useSpring({
        to: {opacity: 1,
            transform: "translateX(0px)"},
        from: {opacity: 0,
            transform: "translateX(-100dvh)"},
        delay: 400,
        transform: "translateX(100%)",
        config: {duration: 2000}
    });

    const logoBlockAnim = useSpring({
        to: {opacity: 1, 
            transform: "translateY(0px)"},
        from: {opacity: 0,
            transform: "translateY(-100dvh)"},
        delay: 0,
        transform: "translateY(100%)",
        config: {duration: 2000}
    });

    return (
        <div>
        <table className='Block'>
        <div className='AnimatedMainText'>
            <animated.div style={mainAnim}>
                <h1>ゲーム開発を勉強し、WEBやシステムにも向け。</h1>
            </animated.div>
            <animated.div style={secondaryAnim}>
                <h3>様々なプロジェクトを通じ、技能の知識を深めていくことを目標とし。</h3>
                <text>プログラミングに熱心な気持ちを抱き、これからも頑張ります！</text>
            </animated.div>
        </div>

        <animated.div style={thirdAnim}>
            <div className='MainSender'>
                <text className='AnimatedMainText'>さて、プロジェクトをご覧になりましょうか？</text>
                <text className='MainSenderButton'><Link to='/portfolio-site/Projects'>プロジェクトへ</Link></text>
            </div>
        </animated.div>

        <animated.div style={logoBlockAnim} className={'logoImageBlock'}>
            <a href='https://www.linkedin.com/in/david-wingqvist-228742271/' target='_blank' rel='noreferrer'><img src={linkedInLogo} className='logoImage'></img></a>
            <a href='https://github.com/davidwingqvist' target='_blank' rel='noreferrer'><img src={githubLogo} className='logoImage'></img></a>
        </animated.div>
    </table>
    </div>
    );
}

export default MainPage;