import React from 'react';
import classes from './FirstPanel.module.css';

const FirstPanel:React.FC= () => {
    
    return <div className={classes.firstPanel}>
        <div className={classes.content}>
            <p>
                Bienvenido, soy un programador frontend y en este humilde portafolio te quiero mostrar los diferentes trabajos que he hecho y mis conocimientos :D
            </p>
            <h1>
                Hello World
            </h1>
        </div>
    </div>
}
export default FirstPanel;