import './Carousel.css'
import {Children} from 'react'

export default function Carousel(props)
{
    const childrenArray = Children.toArray(props.children);


    return (
        <div className='CarouselBody'>
            {childrenArray}
        </div>
    )
}