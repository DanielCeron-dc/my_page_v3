import React from 'react';
import classes from './Switch.module.css';


type SwitchProps = {
    style?: React.CSSProperties;
    optionLeft: string,
    optionRight: string,
    isLeft: boolean,
    onSwitch: (isLeft: boolean) => void
};

const Switch: React.FC<SwitchProps> = (props) => {

    return <button className={classes.switch} style={{ backgroundColor: props.isLeft ? 'transparent' : 'var(--theme-dark)', ...props.style }}
        onClick={() => props.onSwitch(!props.isLeft)}
    >
        <div className={`${classes.switch__option}  ${classes.cut} `} style={{ backgroundColor: props.isLeft ? 'var(--theme)' : 'var(--color1)' }}>
            {props.optionLeft}
        </div>
        <div className={`${classes.switch__option}`}>
            {props.optionRight}
        </div>
    </button>
}
export default Switch;