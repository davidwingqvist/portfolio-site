import './ProjectsPage.css'
import homehearthScreenShot from '../../textures/homehearth_screenshot.png'

function ProjectsPage() 
{
    return (
        <div className='ProjectsPage'>
            <div className='MainProjectsBlock'>
                <h1 className='MainText'>主にゲームの開発に集中し、WEBやシステム開発にも向けて。</h1>
                <ul>
                    <img src={homehearthScreenShot} className='ShowCaseImage'></img>
                    <li>HomeHearth</li>
                    <li>Prodigium</li>
                    <li>HearthEngine</li>
                </ul>
            </div>
            <div className='ProjectsBlock'>
                <text>Under Construction</text>
            </div>
        </div>
    );
}

export default ProjectsPage;