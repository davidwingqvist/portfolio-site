import ButtonComponent from './ButtonComponent';
import './TopBarComponent.css'

/*
    Top bar component that is persistent between pages.
*/
function TopBarComponent ()
{
    return (<div className="top-body">
        <ButtonComponent text="HOME"/>
        <ButtonComponent text="PROJECTS"/>
        <ButtonComponent text="WORK"/>
        <ButtonComponent text="ABOUT ME"/>
        <ButtonComponent text="CONTACT"/>
    </div>)
}

export default TopBarComponent;