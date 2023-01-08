import React, { CSSProperties } from 'react';
import classes from './MiniNavegatorControls.module.css';


const MiniNavegatorControls:React.FC<{ selected?: number, onSelect: (index: number) => void}> = (props) => {
    
    return <div className = {classes.base} >
        <div style = {{position: 'relative'}}>
            <div className={`${classes.circle}  ${props.selected === 0 && classes.fill}`}
                onClick={() => props.onSelect(0)}
            />
            <span className={classes.tooltip}>
                knowledge
            </span>
        </div>
        <div className={classes.line}/>
        <div style={{ position: 'relative' }}>
            <div className={`${classes.circle}  ${props.selected === 1 && classes.fill}`}
                onClick={() => props.onSelect(1)}
            />
            <span className={classes.tooltip}>
                Projects
            </span>
        </div>
        <div className={classes.line}/>
        <div style={{ position: 'relative' }}>
            <div className={`${classes.circle}  ${props.selected === 2 && classes.fill}`}
                onClick={() => props.onSelect(2)}
            />
            <span className={classes.tooltip}>
                Contact-me
            </span>
        </div>
    </div>
}
export default MiniNavegatorControls;