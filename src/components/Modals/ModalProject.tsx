import { IProject } from 'api/IProject';
import React from 'react';
import ModalContainer from './ModalContainer';
import ButtonV2 from 'components/forms/ButtonV2/ButtonV2';
import Label from 'components/ui/Label';
import { ReactComponent as ArrowOutward } from 'assets/svg/arrow_outward.svg';
import useWindow from 'hooks/useWindowDimensions';

interface IProps {
    onClose: () => void;
    show: boolean;
    project: IProject | null;
}

const ModalProject: React.FC<IProps> = (props) => {
    const { isDesktop } = useWindow();

    const content = props.project ? <>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            width: '85%'
        }}>
            <p style={styles.title}>{props.project.title}</p>
            {isDesktop && <ButtonV2 onClick={() => window.open(props.project!.link, '_blank')} >
                View Project
                <ArrowOutward style={{ width: 20, height: 20, marginLeft: 10 }} />
            </ButtonV2>}
        </div>
        <p style={styles.description}>{props.project.description}</p>
        <img src={props.project.imgLink} alt="" style={{ width: '100%', height: '30vh', objectFit: 'cover' }} />
        <div style={styles.projects}>
            {props.project.labels.map((label, index) => <Label key={index} text={label} />)}
        </div>
    </> : null;

    return <ModalContainer show={props.show} onClose={props.onClose}
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            gap: 10,
            padding: 20,
            width: '40vw',
            overflowY: 'auto',
        }}
    >
        {content}
    </ModalContainer>
}

const styles: { [key: string]: React.CSSProperties } = {
    title: {
        color: 'var(--theme)',
        fontSize: 25,
        fontWeight: 600,
        margin: '10px 0'
    },
    description: {
        fontSize: 20,
        fontWeight: 600,
        margin: '10px 0'
    },
    projects: {
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        fontSize: 15,
        fontWeight: 600,
        margin: '10px 0'
    }
}

export default ModalProject;