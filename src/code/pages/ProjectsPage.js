import './ProjectsPage.css'
import homehearthScreenShot from '../../textures/homehearth_screenshot.png'
import prodigiumScreenShot from '../../textures/prodigium_screenshot.png'
import budgetIsaacScreenShot from '../../textures/Editor2.png'
import mortemScreenShot from '../../textures/Mortem_screenshot.png'
import wildPixelsScreenShot from '../../textures/wildpixels_screenshot.png'
import githubLogo from '../../textures/github_logo.png'
import linkedInLogo from '../../textures/linkedIn_logo.png'
import Carousel, { CarouselSlide } from '../Carousel'





function ProjectsPage() 
{
    // preloadings the images?
    const images = [homehearthScreenShot, prodigiumScreenShot, budgetIsaacScreenShot, mortemScreenShot,
        wildPixelsScreenShot];

    return (
        <div className='ProjectsPage'>
            <text className='HintDownText'>下はもっと見られます。</text>
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
                </Carousel>
            </div>
            <div className='ProjectsBlock'>
                <h1>工事中</h1>
                <h1>Under Construction</h1>
            </div>
        </div>
    );
}

export default ProjectsPage;