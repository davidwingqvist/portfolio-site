import './ContactPage.css'

export default function Contact()
{
    return (
        <div className="MainPage">
            <div className='InfoBlock'>
                <h className='InfoHeader'>
                    Contact
                    連絡
                </h>
                <text className='InfoText'> Email: dw123gorde@gmail.com</text>
                <a href='https://www.linkedin.com/in/david-wingqvist-228742271/' target='_blank' rel='noreferrer' className='InfoButton'>
                <div>
                    LinkedIn
                </div>
                </a>
            </div>
        </div>
    );
}