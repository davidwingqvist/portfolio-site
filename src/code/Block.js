import './Block.css'
import './NavigationBar.css'

function Block()
{
    return (
        <div className='HomePage'>
            <ul className='NavBar'>
                <li className='NavItem'>Home</li>
                <li className='NavItem'>Projects</li>
                <li className='NavItem'>Contact</li>
                <text className='NavText'>ゲーム・WEB・システム開発向け</text>
            </ul>
            <table className='Block'>
                <div className='Main'>
                    <text>David's Portfolio Website</text>
                </div>
            </table>
        </div>
    );
}

export default Block;