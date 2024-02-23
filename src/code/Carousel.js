import './Carousel.css'
import React, {Children, useState} from 'react'
import {useSpring, animated} from 'react-spring'

function Carousel(props)
{
    const childrenArray = Children.toArray(props.children);
    const [slideIndex, setSlide] = useState(0);
    const [runAnim, setAnim] = React.useState(true);

    const mainAnim = useSpring({
        opacity: runAnim ? 1 : 0, from: {opacity: 0}
    });

    function showPrevSlide() {
        setSlide(index => {
            if(index === childrenArray.length - 1) 
            {
                return 0;
            }
            return index + 1;
        });
    };

    function showNextSlide() {
        setSlide(index => {

            if(index === 0) 
            {
                return childrenArray.length - 1;
            }
            return index - 1;
        })
    }

    return (
        <div className='CarouselBody'>
            <div onClick={showNextSlide} className='CarouselArrowLeft'>&larr;</div>
            <div className='CarouselSlide'>{childrenArray[slideIndex]}</div>
            <div onClick={showPrevSlide} className='CarouselArrowRight'>&rarr;</div>
            <div className='CarouselIndicatorText'>{slideIndex + 1} / {childrenArray.length}</div>
        </div>
    )
}

export function CarouselSlide(props)
{
    return (

        <div>{props.children}</div>

    );
}

export default Carousel;