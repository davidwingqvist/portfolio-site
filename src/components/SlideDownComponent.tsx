import React, { useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './SlideDownComponent.css'

interface SlideDownProps {
    text: string,
    delay: number,
    texture: string
}


/*
    Will slide down items from top to bottom in desired order,
    for starter left to right.
*/
const SlideDownComponent: React.FC<SlideDownProps> = ({ text, delay, texture }) => {
    const [isVisible, setIsVisible] = React.useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    const animProps = useSpring({
        to: { transform: isVisible ? 'translateY(0px)' : 'translateY(-100vh)' },
        config: { duration: 1000 }, // Remove delay here
    });

    return (<animated.div className='slide-down-body' style={animProps}>
        <img
            src={texture}
            alt="Masked"
            className="slide-masked-image"
            draggable="false"
        />
         <div className="slide-centered-text">{text}</div>
    </animated.div>);
}

export default SlideDownComponent;