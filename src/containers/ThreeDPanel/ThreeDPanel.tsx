import React from 'react';
import classes from './ThreeDPanel.module.css';

import Switch from 'components/forms/switch/Switch';
import BackGround from '3D Components/BackGround/BackGround';
import { useAppStore } from 'store/App.store';


import Email from 'components/ui/Email/Email'; 

const SecondPanel: React.FC = () => { 

    const {isOnProjects, setIsOnProjects, setIsExpanded } = useAppStore();
    
    return <div className={classes.secondPanel}>
        <BackGround
            updateCamera = {true}
            width={"100%"}
            height={"100%"}
            cameraPosition={[-20, 0, 0]}
            eneableZoom={false}
            autoRotate={true}
            rotateSpeed={isOnProjects ? 0.5 : 3}
            isOrbitControls={!isOnProjects}
            showProjects={isOnProjects}
        />
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
                setIsExpanded(false);
            }}
        />
        <Email />
    </div>
}



export default SecondPanel;
