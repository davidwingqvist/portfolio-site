import './ShowcasePage.css'
import React, {Children} from 'react'

function PageBlock(props)
{


    return (
            <div className='PageBlock'>
                {props.children}
            </div>
    )
}

export default function Showcase()
{


    return (
        <>
            <div className='MainBlock'>
                <text className='MainTextShowCase'>
                    こちらのページはプロジェクトのショーケースが見られます。
                    下へスクロールし、次々にプロジェクトの説明や、担当した部分などが
                    現れます。
                </text>

                <text className='PointingArrow'>↓</text>


            </div>
            <div className='FollowUpBlock'></div>
            <PageBlock>
            </PageBlock>
        </>
           )
}