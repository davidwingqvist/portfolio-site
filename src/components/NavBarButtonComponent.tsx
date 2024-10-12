import React from 'react';
import './NavBarButtonComponent.css';
import { Link } from 'react-router-dom';

interface ButtonComponentProps {
    text: string;
    link?: string;
  }
  
  const NavBarButtonComponent: React.FC<ButtonComponentProps> = ({ text, link}) => {

    return (
      <Link to={"/" + link} style={{ textDecoration: 'none' }}>
        <div className='button-body'>
          {text}
        </div>
      </Link>
    );
  };
  
  export default NavBarButtonComponent;