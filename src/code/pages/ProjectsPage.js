import './ProjectsPage.css'
import homehearthScreenShot from '../../textures/homehearth_screenshot.png'
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
                        <text>This is Slide One</text>
                    </CarouselSlide>
                    <CarouselSlide>
                        <text>This is Slide Two</text>
                    </CarouselSlide>
                </Carousel>
            </div>
            <div className='ProjectsBlock'>
                <text>Under Construction</text>
            </div>
        </div>
    );
}

export default ProjectsPage;