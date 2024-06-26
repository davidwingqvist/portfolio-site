import './ProjectsPage.css'
import homehearthScreenShot from '../../textures/homehearth_screenshot.png'
import prodigiumScreenShot from '../../textures/prodigium_screenshot.png'
import budgetIsaacScreenShot from '../../textures/Editor2.png'
import mortemScreenShot from '../../textures/Mortem_screenshot.png'
import wildPixelsScreenShot from '../../textures/wildpixels_screenshot.png'
import recsScreenShot from '../../textures/recs_screenshot.PNG'
import engineScreenShot from '../../textures/gameenginescreenshot1.PNG'
import dentakuShot from '../../textures/dentaku_saito.PNG'
import unityShot from '../../textures/unityProjectScreenshot.png'
import portfolioShot from '../../textures/portfolio-site.PNG'
import fourInARowShot from '../../textures/four_in_a_row.PNG'
import Carousel, { CarouselSlide } from '../Carousel'
import githubLogo from '../../textures/github_logo.png'
import linkedInLogo from '../../textures/linkedIn_logo.png'
import youtubeLogo from '../../textures/youtube_logo.jpg'
import blackjackShot from '../../textures/blackjack_game.PNG'


function ProjectsPage() 
{
    // preloadings the images?
    const images = [homehearthScreenShot, prodigiumScreenShot, budgetIsaacScreenShot, mortemScreenShot,
        wildPixelsScreenShot, engineScreenShot, recsScreenShot, dentakuShot, unityShot, portfolioShot, fourInARowShot,
        blackjackShot];

    return (
        <div className='ProjectsPage'>
            <text className='HintDownText'>下にもプロジェクト欄があります。</text>
            <text className='SecondHintDownText'>下にもプロジェクト欄があります。</text>
            <div className='MainProjectsBlock'>
                <h1 className='MainText'>主にゲームの開発に集中し、WEBやシステム開発にも向けて。</h1>
                <h2>ゲーム/Game[C++, C#]</h2>
                <Carousel>
                    <CarouselSlide>
                        <a href='https://youtu.be/GrEWl8npL9Y?si=8TJqPfQM_RXs2Ukp' target='_blank' rel='noreferrer'><img src={images[0]} className='CarouselPicture'></img></a>
                        <h2 className='FancyText'>HomeHearth</h2>
                    </CarouselSlide>
                    <CarouselSlide>
                        <a href='https://www.youtube.com/watch?v=rBCvf188pP0' target='_blank' rel='noreferrer'><img src={images[1]} className='CarouselPicture'></img></a>
                        <h2 className='FancyText'>Prodigium</h2>
                    </CarouselSlide>
                    <CarouselSlide>
                        <a href='https://github.com/davidwingqvist/Skriptning_DV1570_Grupp5' target='_blank' rel='noreferrer'><img src={images[2]} className='CarouselPicture'></img></a>
                        <h2 className='FancyText'>Budget Isaac</h2>
                    </CarouselSlide>
                    <CarouselSlide>
                        <a href='https://www.indiedb.com/games/mortem-the-game' target='_blank' rel='noreferrer'><img src={images[3]} className='CarouselPicture'></img></a>
                        <h2 className='FancyText'>Mortem</h2>
                    </CarouselSlide>
                    <CarouselSlide>
                        <a href='https://www.indiedb.com/games/the-wild-pixels' target='_blank' rel='noreferrer'><img src={images[4]} className='CarouselPicture'></img></a>
                        <h2 className='FancyText'>Wild Pixels</h2>
                    </CarouselSlide>
                    <CarouselSlide>
                        <a href='https://www.youtube.com/watch?v=pinMUjK6D8E' target='_blank' rel='noreferrer'><img src={images[8]} className='CarouselPicture'></img></a>
                        <h2 className='FancyText'>Unity Game</h2>
                    </CarouselSlide>
                </Carousel>
            </div>
            <div className='ProjectsBlock'>
                <h1 className='SecondaryText'>WEB[HTML, CSS, ReactJS(JavaScript)]</h1>
                <Carousel>
                    <CarouselSlide>
                        <a href='https://davidwingqvist.github.io/blackjack-on-the-web/' target='_blank' rel='noreferrer'><img src={images[11]} className='CarouselPicture'></img></a>
                        <h2 className='FancyText'>ブラックジャックゲーム</h2>
                    </CarouselSlide>
                    <CarouselSlide>
                        <a href='https://davidwingqvist.github.io/Calculator-Website/' target='_blank' rel='noreferrer'><img src={images[7]} className='CarouselPicture'></img></a>
                        <h2 className='FancyText'>電卓サイト/Calculator Website</h2>
                    </CarouselSlide>
                    <CarouselSlide>
                        <a href='https://github.com/davidwingqvist/portfolio-site' target='_blank' rel='noreferrer'><img src={images[9]} className='CarouselPicture'></img></a>
                        <h2 className='FancyText'>当ポートフォリオサイト</h2>
                    </CarouselSlide>
                    <CarouselSlide>
                        <a href='https://github.com/davidwingqvist/four-in-a-row' target='_blank' rel='noreferrer'><img src={images[10]} className='CarouselPicture'></img></a>
                        <h2 className='FancyText'>簡単なWebゲーム</h2>
                    </CarouselSlide>
                </Carousel>
            </div>
            <div className='ProjectsBlock'>
                <h1 className='ThirdText'>システム開発/System Development</h1>
                <Carousel>
                    <CarouselSlide>
                        <a href='https://github.com/davidwingqvist/HearthEngine' target='_blank' rel='noreferrer'><img src={images[5]} className='CarouselPicture'></img></a>
                        <h2 className='FancyText'>ゲームエンジンHearthEngine</h2>
                    </CarouselSlide>
                    <CarouselSlide>
                        <a href='https://github.com/davidwingqvist/RECS' target='_blank' rel='noreferrer'><img src={images[6]} className='CarouselPicture'></img></a>
                        <h2 className='FancyText'>データ指向型RECSデータ管理システム</h2>
                    </CarouselSlide>
                </Carousel>
            </div>
            <div className='BottomBar'>
                    <a href='https://www.linkedin.com/in/david-wingqvist-228742271/' target='_blank' rel='noreferrer'><img src={linkedInLogo} className='BottomBarLogo'></img></a>
                    <a href='https://github.com/davidwingqvist' target='_blank' rel='noreferrer'><img src={githubLogo} className='BottomBarLogo'></img></a>
                    <a href='https://www.youtube.com/@davidw9321/videos' target='_blank' rel='noreferrer'><img src={youtubeLogo} className='BottomBarLogo'></img></a>
            </div>
        </div>
    );
}

export default ProjectsPage;