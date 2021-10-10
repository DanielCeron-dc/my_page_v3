import React, { useState } from 'react';
import classes from './Switch.module.css';


type SwitchProps = {
    optionLeft: string,
    optionRight: string,
};

const Switch: React.FC<SwitchProps> = (props) => {
    const [isLeft, setIsLeft] = useState(false);


    return <button className={classes.switch} style={{ backgroundColor: isLeft ? 'transparent' : 'var(--color2)' }}  onClick = {() => setIsLeft(e => !e)}>
        <div className={`${classes.switch__option}  ${classes.cut} `}  style={{backgroundColor: isLeft ? 'var(--color2)': 'var(--color1)'}}>
            {props.optionLeft}
        </div>
        <div className={`${classes.switch__option}` }>
            {props.optionRight}
        </div>
    </button>
}
export default Switch;