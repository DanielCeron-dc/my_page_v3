import React from 'react';
import classes from './Loader.module.css';

const Loading: React.FC = () => {
    return <div className={classes.loader}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <h3>Loading...</h3>
    </div>
}
export default Loading;