import React, { useState } from 'react';
import classes from './PresentationInfo.module.css';

import perfilgif from 'assets/img/perfil.gif';
import perfilImg from 'assets/img/Perfil0.png';
import Experience from './Experience';

import moment from 'moment';

const getCurrentMonthAndYear = () => {
    return moment().format('MMM YYYY');
}

const PresentationInfo: React.FC = () => {

    const [onHover, setOnHover] = useState(false);

    return <div
        className={classes.PresentationInfo}
        onMouseOver={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}>
        <div className={classes.blackBackground}>
            <img src={onHover ? perfilgif : perfilImg} alt="" />
            <p >
                Experience
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
                <Experience
                    dateStart='Jan 2021'
                    dateEnd='Nov 2021'
                    title='Freelancer'
                    duties={[
                        'Teach React',
                        'Collaborate with the work of different individuals (fix errors related to React or MySQL).',
                        'Develop a web application for a company that provides services to the elderly.',
                    ]}
                    technologies={['React', 'ThreeJs', 'NodeJS', 'TypeScript', 'MongoDB', 'MYSQL']}
                />
                <Experience
                    dateStart='Nov 2021'
                    dateEnd={getCurrentMonthAndYear()}
                    title='ITOESTE'
                    duties={[
                        'Develop frontend apps with React/React Native, well-optimized for mobile and web.',
                        'Maintain backend apps with Express/NodeJS/MySQL/Java/Spring Boot.',
                        'Deploy applications on Linux servers (Digital Ocean).',
                    ]}
                    technologies={['React', 'ThreeJs', 'NodeJS', 'TypeScript', 'MongoDB', 'MYSQL']}
                />
            </div>
        </div>




    </div>
}
export default PresentationInfo;