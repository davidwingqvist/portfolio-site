import SlideDownComponent from '../components/SlideDownComponent';
import './Homepage.css'

import gameImage from '../assets/homehearth_screenshot_closeup.png';
import webImage from '../assets/blackjackscreenshot.png';
import engineImage from '../assets/gameenginescreenshot1.png'
import { useNavigate } from 'react-router-dom';

function HomePage ()
{
    const navigate = useNavigate();

    const handleNavigate = (targetId: any) => {
      navigate('/projects', { state: { targetId } });
    };

    return (<div className="main-body">
        <div className='column-body'>
            <SlideDownComponent delay={300} text="ゲーム" texture={gameImage}/>
            <SlideDownComponent delay={700} text="WEB" texture={webImage}/>
            <SlideDownComponent delay={1000} text="システム" texture={engineImage}/>
        </div>
    </div>);
}

export default HomePage;