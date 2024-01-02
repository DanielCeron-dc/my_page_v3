import React from 'react';
import ModalContainer from './ModalContainer';


interface Props {
    onClose: () => void;
    show: boolean;
    dateStart: string;
    dateEnd: string;
    title: string;
    duties?: string[];
    companyName?: string;
    technologies: string[];
}

const ModalExperience: React.FC<Props> = (props) => {

    return <ModalContainer show={props.show} onClose={props.onClose} >

        <p style={styles.dates}>{props.dateStart} - {props.dateEnd}</p>
        <p style={styles.title}>{props.title}</p>
        {props.companyName && <p style={styles.companyName}>{props.companyName}</p>}
        <div style={styles.duties}>
            {props.duties?.map((duty, index) => <div key={index} >{'•	' + duty}</div>)}
        </div>
        <p style={styles.title}>
            Technologies:
        </p>
        <div style={styles.projects}>
            {props.technologies.map((tech, index) => <div key={index} >{'• ' + tech}</div>)}
        </div>

    </ModalContainer>
}

const styles = {
    dates: {
        fontSize: 20,
        fontWeight: 600,
        margin: '10px 0'
    } as React.CSSProperties,
    title: {
        fontSize: 25,
        fontWeight: 600,
        margin: '10px 0'
    } as React.CSSProperties,
    companyName: {
        fontSize: 20,
        fontWeight: 600,
        margin: '10px 0'
    } as React.CSSProperties,
    duties: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        fontSize: 15,
        fontWeight: 600,
        margin: '10px 0'
    } as React.CSSProperties,
    projects: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        fontSize: 15,
        fontWeight: 600,
        margin: '10px 0'
    } as React.CSSProperties,
}

export default ModalExperience;