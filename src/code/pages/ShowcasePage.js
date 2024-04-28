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
                    現れます。 ---WIP---
                </text>

                <text className='PointingArrow'>↓</text>


            </div>
            <div className='FollowUpBlock'></div>
            <PageBlock>
                <text className='MainTextShowCase'>自己紹介</text>
                <div className='centerText'>
                    <text>
                        はじめまして、デイビッド 「David」と申します。
                        子供の頃から「ゲームを作ろう」と言う熱心な気持ちを
                        初めてのゲームを遊んでから抱くようになりました。
                        高校時代から大学時代にチームで努力し多数ゲームを開発することが
                        できました。
                        コロナの始まりをきっかけとし日本語を勉強しようと思うようになり
                        だんだん日本への興味が高まり2023年1月は東京にある日本語学校を
                        通学し始めました。
                        これからITの知識を深めつつ「意味のある」プロジェクトを
                        開発し人生の様々なレッスンを体験したいと考えております。
                        貴社が「最高のアプリを作ろう」と熱心に考えている社員を
                        必要とされていらっしゃるなら、私へ連絡すると間違いなく後悔することはしません。
                    </text>
                </div>

                <text className='MainTextShowCase'>ガクチカ</text>
                <div className='centerText'>
                    <text>
                        大学を在学中に、HomeHearthと言うゲームを開発していたところ、
                        クライエント側の動作を最適化することを担当しマルチスレッドと言う
                        技術を実装しました。マルチスレッドは低調的な問題への適切な対策であるが、
                        その反面マルチスレッドに特別な諸問題を導入することがあります。
                        その中の一つはスレッドが「競合する状態」の発生可能性が高くあります。
                        スレッドの競合する状態の対策としダブルバッファを利用し同じデータセットを
                        2つに分けることでスレッドが自由に「読む」と「書く」ことができます。
                        マルチスレッドをゲームの開発へ導入したことでCPUフレームレートが3倍も
                        上がることに成功しました。
                    </text>
                </div>

            </PageBlock>
            <PageBlock>
                <h1 className='MainTextShowCase'>「意味のあるものを作れれば作るほど」</h1>
                <h1 className='MainTextShowCase'>と言う視点を重視しております。</h1>

                <div className='CodingExperienceBlock'>
                    <h4 className='vertText'>コーディング経験がある言語</h4>
                    <ul>
                        <li>C++</li>
                        <li>C#</li>
                        <li>Lua</li>
                        <li>JavaScript / ReactJS*</li>
                    </ul>
                    <text>*CSS & HTMLを含む</text>
                    <h4 className='vertText'>ツールの経験</h4>
                    <ul>
                        <li>Trello / HacknPlan</li>
                        <li>Visual Studio/Code</li>
                        <li>Blender</li>
                        <li>RenderDoc</li>
                        <li>Git/Github</li>
                        <li>LaTeX</li>
                    </ul>
                    <h4 className='vertText'>現在勉強中</h4>
                    <ul>
                        <li>SQL/PHP</li>
                        <li>ReactJS / TypeScript</li>
                    </ul>
                </div>
            </PageBlock>

        </>
           )
}