import './Carousel.css'
import {Children, useState} from 'react'

function Carousel(props)
{
    const childrenArray = Children.toArray(props.children);
    const [slideIndex, setSlide] = useState(0);

    function showNextSlide() {
        setSlide(index => {
            if(index === childrenArray.length - 1) return 0;
            return index + 1;
        });
    };

    function showPrevSlide() {
        setSlide(index => {
            if(index === 0) return childrenArray.length - 1;
            return index - 1;
        })
    }

    return (
        <div className='CarouselBody'>
            <div onClick={showNextSlide} className='CarouselArrowRight'>&larr;</div>
            <div className='CarouselSlide'>{childrenArray[slideIndex]}</div>
            <div onClick={showPrevSlide} className='CarouselArrowLeft'>&rarr;</div>
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