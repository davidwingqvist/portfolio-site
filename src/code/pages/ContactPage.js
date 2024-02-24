import './ContactPage.css'

export default function Contact()
{
    return (
        <div className="MainPage">
            <div className='InfoBlock'>
                <h className='InfoHeader'>
                    Contact/
                    連絡
                </h>
                <button className='InfoText'>
                    Email/メール
                </button>
                <button className='InfoText'>
                    LinkedIn
                </button>
                <button className='InfoText'>
                    Github
                </button>
            </div>
        </div>
    );
}