import React from 'react';
import classes from './RetroDiv.module.css';


type RetrodivProps = {
    
};

const Retrodiv:React.FC<RetrodivProps> = (props) => {
    
    return <div className = {classes.retroDiv}>
        {props.children}
    </div>
}
export default Retrodiv;