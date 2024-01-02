import React, { useState } from 'react';
import classes from './Experience.module.css';
import ModalExperience from 'components/Modals/ModalExperience';

interface Props {
    dateStart: string;
    dateEnd: string;
    title: string;
    duties?: string[];
    companyName?: string;
    technologies: string[];
}


const Experience: React.FC<Props> = (props) => {

    const [showModal, setShowModal] = useState(false);

    return <>
        <div className={classes.container} onClick={() => setShowModal(true)}>
            <p className={classes.dates}>{props.dateStart} - {props.dateEnd}</p>
            <p className={classes.title}>{props.title}</p>
        </div>
        <ModalExperience show={showModal} onClose={() => setShowModal(false)} {...props} />
    </>
}

export default Experience;
