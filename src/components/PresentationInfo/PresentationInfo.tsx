import React, { useState } from 'react';
import classes from './PresentationInfo.module.css';

import perfilgif from 'assets/img/perfil.gif';
import perfilImg from 'assets/img/Perfil0.png';

const PresentationInfo: React.FC = () => {

    const [onHover, setOnHover] = useState(false);

    return <div
        className={classes.PresentationInfo}
        onMouseOver={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}>
        <h1 className={classes.h1}>
            Daniel Cerón
        </h1>
        <div className={classes.blackBackground}>
            <img src={onHover ? perfilgif : perfilImg} alt="" />
            <p>
                Bienvenido, <br /> soy un programador FullStack, <br />
                y estaria feliz de ayudarte <br />
                a materializar tus ideas.
            </p>
        </div>
    </div>
}
export default PresentationInfo;