import React, { useEffect } from 'react';

import { useAppStore } from 'store/App.store';

import classes from './FirstPanel.module.css';
import Button from 'components/forms/Button/Button';
import ContactButtons from 'components/ContactButtons/ContactButtons';
import Projects from './SubContent/Projects';

import { ReactComponent as EastSvg } from "assets/svg/east.svg";
import PresentationInfo from 'components/PresentationInfo/PresentationInfo';


const FirstPanel: React.FC = () => {

    const { isOnProjects, selectedProject, isExpanded, setIsExpanded } = useAppStore();

    useEffect(() => {
        if (selectedProject === -1) return;
        setIsExpanded(true);
    }, [selectedProject, setIsExpanded]);

    return <div
        className={`${classes.firstPanel} ${isExpanded ? classes.expanded : ''}`}
    >

        <section className={classes.content}>
            <Projects />
            <div className={classes.content__main}>
                <h1>
                    Daniel Cerón
                </h1>
                <PresentationInfo />
                <ContactButtons />
            </div>
        </section>
        {isOnProjects && <div className={`${classes.base}  ${isExpanded ? classes.expanded : ''}`}>
            <Button
                className={`${classes.extendButton} ${isExpanded ? classes.expanded : ''}`}
                onClick={() => {
                    setIsExpanded(!isExpanded);
                }}>
                {!isExpanded && <>  see more about the projects </>}
                <EastSvg className={classes.svg} />
            </Button>
        </div>}

    </div>
}
export default FirstPanel;