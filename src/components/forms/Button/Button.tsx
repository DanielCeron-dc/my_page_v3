import React from 'react';
import classes from './Button.module.css'; 


const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    
    let propsToPass = { ...props };
    delete propsToPass.className;
    return <button {...propsToPass} className = {`${classes.button} ${props.className} `}>

    </button>
}
export default Button;