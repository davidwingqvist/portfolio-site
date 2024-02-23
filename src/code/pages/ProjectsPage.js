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
import Carousel, { CarouselSlide } from '../Carousel'


function ProjectsPage() 
{
    // preloadings the images?
    const images = [homehearthScreenShot, prodigiumScreenShot, budgetIsaacScreenShot, mortemScreenShot,
        wildPixelsScreenShot, engineScreenShot, recsScreenShot, dentakuShot, unityShot, portfolioShot];

    return (
        <div className='ProjectsPage'>
            <text className='HintDownText'>下にもプロジェクト欄があります。</text>
            <div className='MainProjectsBlock'>
                <h1 className='MainText'>主にゲームの開発に集中し、WEBやシステム開発にも向けて。</h1>
                <h2>ゲーム/Game</h2>
                <Carousel>
                    <CarouselSlide>
                        <a href='https://youtu.be/GrEWl8npL9Y?si=8TJqPfQM_RXs2Ukp' target='_blank' rel='noreferrer'><img src={images[0]} className='CarouselPicture'></img></a>
                        <h2>HomeHearth</h2>
                    </CarouselSlide>
                    <CarouselSlide>
                        <a href='https://www.youtube.com/watch?v=rBCvf188pP0' target='_blank' rel='noreferrer'><img src={images[1]} className='CarouselPicture'></img></a>
                        <h2>Prodigium</h2>
                    </CarouselSlide>
                    <CarouselSlide>
                        <a href='https://github.com/davidwingqvist/Skriptning_DV1570_Grupp5' target='_blank' rel='noreferrer'><img src={images[2]} className='CarouselPicture'></img></a>
                        <h2>Budget Isaac</h2>
                    </CarouselSlide>
                    <CarouselSlide>
                        <a href='https://www.indiedb.com/games/mortem-the-game' target='_blank' rel='noreferrer'><img src={images[3]} className='CarouselPicture'></img></a>
                        <h2>Mortem</h2>
                    </CarouselSlide>
                    <CarouselSlide>
                        <a href='https://www.indiedb.com/games/the-wild-pixels' target='_blank' rel='noreferrer'><img src={images[4]} className='CarouselPicture'></img></a>
                        <h2>Wild Pixels</h2>
                    </CarouselSlide>
                    <CarouselSlide>
                        <a href='https://www.youtube.com/watch?v=pinMUjK6D8E' target='_blank' rel='noreferrer'><img src={images[8]} className='CarouselPicture'></img></a>
                        <h2>Unity Game</h2>
                    </CarouselSlide>
                </Carousel>
            </div>
            <div className='ProjectsBlock'>
                <h1 className='SecondaryText'>WEB</h1>
                <Carousel>
                    <CarouselSlide>
                        <a href='https://davidwingqvist.github.io/Calculator-Website/' target='_blank' rel='noreferrer'><img src={images[7]} className='CarouselPicture'></img></a>
                        <h2>電卓サイト/Calculator Website</h2>
                    </CarouselSlide>
                    <CarouselSlide>
                        <a href='https://github.com/davidwingqvist/portfolio-site' target='_blank' rel='noreferrer'><img src={images[9]} className='CarouselPicture'></img></a>
                        <h2>当ポートフォリオサイト</h2>
                    </CarouselSlide>
                </Carousel>
            </div>
            <div className='ProjectsBlock'>
                <h1 className='ThirdText'>システム開発/System Development</h1>
                <Carousel>
                    <CarouselSlide>
                        <a href='https://github.com/davidwingqvist/HearthEngine' target='_blank' rel='noreferrer'><img src={images[5]} className='CarouselPicture'></img></a>
                        <h2>ゲームエンジンHearthEngine</h2>
                    </CarouselSlide>
                    <CarouselSlide>
                        <a href='https://github.com/davidwingqvist/RECS' target='_blank' rel='noreferrer'><img src={images[6]} className='CarouselPicture'></img></a>
                        <h2>データ指向型RECS</h2>
                    </CarouselSlide>
                </Carousel>
            </div>
        </div>
    );
}

export default ProjectsPage;