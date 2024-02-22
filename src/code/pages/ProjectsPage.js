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
    return (
        <div className='ProjectsPage'>
            <div className='MainProjectsBlock'>
                <h1 className='MainText'>主にゲームの開発に集中し、WEBやシステム開発にも向けて。</h1>
                <Carousel>
                    <CarouselSlide>
                        <img src={homehearthScreenShot} className='CarouselPicture'></img>
                        <h2>HomeHearth</h2>
                    </CarouselSlide>
                    <CarouselSlide>
                        <img src={prodigiumScreenShot} className='CarouselPicture'></img>
                        <h2>Prodigium</h2>
                    </CarouselSlide>
                    <CarouselSlide>
                        <img src={budgetIsaacScreenShot} className='CarouselPicture'></img>
                        <h2>Budget Isaac</h2>
                    </CarouselSlide>
                    <CarouselSlide>
                        <img src={mortemScreenShot} className='CarouselPicture'></img>
                        <h2>Mortem</h2>
                    </CarouselSlide>
                    <CarouselSlide>
                        <img src={wildPixelsScreenShot} className='CarouselPicture'></img>
                        <h2>Wild Pixels</h2>
                    </CarouselSlide>
                </Carousel>
            </div>
            <div className='ProjectsBlock'>
                <h1>Under Construction</h1>
            </div>
        </div>
    );
}

export default ProjectsPage;