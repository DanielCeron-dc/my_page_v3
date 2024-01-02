import React from 'react';
import classes from './ThreeDPanel.module.css';

import Switch from 'components/forms/switch/Switch';
import BackGround from '3D Components/CustomCanvas/CustomCanvas';
import { useAppStore } from 'store/App.store';
import Email from 'components/ui/Email/Email';
import SelectTheme from 'components/Dropdowns/SelectTheme';

const SecondPanel: React.FC = () => {

    const { isOnProjects, setIsOnProjects, setIsExpanded } = useAppStore();

    return <div className={classes.secondPanel}>
        <BackGround
            updateCamera={true}
            width={"100%"}
            height={"100%"}
            cameraPosition={[-20, 0, 0]}
            eneableZoom={false}
            autoRotate={true}
            isOrbitControls={!isOnProjects}
            showProjects={isOnProjects}
        />

        <Switch
            optionLeft="knowledge"
            optionRight="Projects"
            isLeft={!isOnProjects}
            onSwitch={isOptionLeft => {

                setIsOnProjects(!isOptionLeft);
                setIsExpanded(false);
            }}
        />
        <div style={{
            position: 'absolute',
            top: '1%',
            right: '1%',
            display: 'flex',
            gap: '1rem',
            flexDirection: 'row',
            height: '5%',
        }}>
            <Email />
            <SelectTheme />
        </div>
    </div>
}



export default SecondPanel;
