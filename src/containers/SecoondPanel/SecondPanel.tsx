import FloatingKnowledge from '3D Components/Scenes/FloatingKnowledge';
import Switch from 'components/forms/switch/Switch';
import React from 'react';
import classes from './SecondPanel.module.css';
import ProjectsScene from '3D Components/Scenes/ProjectsScene';
import BackGround from '3D Components/BackGround/BackGround';
import { useAppStore } from 'store/App.store';


import Email from 'components/ui/Email/Email';


const SecondPanel: React.FC = () => {

    const {isOnProjects, setIsOnProjects, setExpandedInfo } = useAppStore();
    
    return <div className={classes.secondPanel}>
        <BackGround
            width={"100%"}
            height={"100%"}
            cameraPosition={[-20, 0, 0]}
            eneableZoom={false}
            autoRotate={true}
            rotateSpeed={isOnProjects ? 0.5 : 3}
            isOrbitControls={!isOnProjects}>
            {isOnProjects ? <ProjectsScene /> : <FloatingKnowledge />}
        </BackGround>
        <Switch
            optionLeft="knowledge"
            optionRight="Projects"
            isLeft={!isOnProjects}
            onSwitch={isOptionLeft => {
                let themeColor = isOptionLeft ? '#009e89' : '#cc8800';
                let themeColorDark = isOptionLeft ? 'rgb(1, 134, 117)' : '#af7500';
                document.documentElement.style.setProperty('--color2', themeColor);
                document.documentElement.style.setProperty('--color2-dark', themeColorDark);
                setIsOnProjects(!isOptionLeft);
                setExpandedInfo(false);
            }}
        />
        <Email />
    </div>
}



export default SecondPanel;
