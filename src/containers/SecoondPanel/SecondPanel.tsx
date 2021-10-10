import FloatingKnowledge from '3D Components/CompleteCreations/FloatingKnowledge';
import Switch from 'components/forms/switch/Switch';
import React from 'react';
import classes from './SecondPanel.module.css';

const SecondPanel:React.FC = () => {
    
    return <div className={classes.secondPanel}>
        <FloatingKnowledge />
        <Switch optionLeft="knowledge" optionRight="Projects" />
    </div>
}
export default SecondPanel;