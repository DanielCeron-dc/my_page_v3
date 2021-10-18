import React, { useEffect } from 'react';

import { useAppStore } from 'store/App.store';

import classes from './FirstPanel.module.css';
import Button from 'components/forms/Button/Button';
import ContactButtons from 'components/ContactButtons/ContactButtons';
import Projects from './SubContent/Projects';

import { ReactComponent as EastSvg } from "assets/svg/east.svg";
import PresentationInfo from 'components/PresentationInfo/PresentationInfo';


const FirstPanel: React.FC = () => {

    const { isOnProjects, selectedProject , isExpanded, setIsExpanded} = useAppStore();

    useEffect(() => {
        if(isOnProjects) setIsExpanded(true); 
    }, [selectedProject]);

    return <div
        className={`${classes.firstPanel} ${isExpanded ? classes.expanded : ''}`}
    >
        <div>
            <section className={classes.content}>
                <Projects/>
                <div className={classes.content__main}>
                    <PresentationInfo/>
                    <ContactButtons/>
                </div>
            </section>
            {isOnProjects  && <Button
                className={`${classes.extendButton} ${isExpanded ? classes.expanded : ''}`}
                onClick={() => {
                    setIsExpanded(!isExpanded); 
                }}>
                {!isExpanded && <>  see more about the projects </>}
                <EastSvg className={classes.svg} />
            </Button>}
        </div>
    </div>
}
export default FirstPanel;