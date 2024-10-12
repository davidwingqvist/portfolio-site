import React from 'react';
import './ButtonComponent.css';

interface ButtonComponentProps {
    text: string;
    func?: () => void;
  }
  
  const ButtonComponent: React.FC<ButtonComponentProps> = ({ text, func }) => {
    const handleClick = () => {
      if (func) {
        func();
      }
    };
  
    return (
      <div onClick={handleClick} className='button-body'>
        {text}
      </div>
    );
  };
  
  export default ButtonComponent;