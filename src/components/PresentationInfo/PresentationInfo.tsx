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
        <div className={classes.blackBackground}>
            <img src={onHover ? perfilgif : perfilImg} alt="" />
            <p>
                Welcome!
                <br /> I am a FullStack developer
                <br /> and I would be happy to help you
                <br /> turn your ideas into reality.
            </p>
        </div>
    </div>
}
export default PresentationInfo;