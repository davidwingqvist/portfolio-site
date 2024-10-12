import NavBarButtonComponent from './NavBarButtonComponent';
import './TopBarComponent.css'

/*
    Top bar component that is persistent between pages.
*/
function TopBarComponent ()
{
    return (<div className="top-body">
        <NavBarButtonComponent text="HOME" link="home"/>
        <NavBarButtonComponent text="PROJECTS" link="projects"/>
        <NavBarButtonComponent text="WORK" link="work"/>
        <NavBarButtonComponent text="ABOUT ME" link="aboutme"/>
        <NavBarButtonComponent text="CONTACT" link="contact"/>
    </div>)
}

export default TopBarComponent;