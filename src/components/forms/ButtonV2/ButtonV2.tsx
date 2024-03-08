import React from 'react';
import classes from './ButtonV2.module.css';

const ButtonV2: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    let propsToPass = { ...props };
    delete propsToPass.className;
    return <button {...propsToPass} className={`${classes.button} ${props.className} `}>
        {props.children}
    </button>
}

export default ButtonV2;

