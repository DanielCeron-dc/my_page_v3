import React, { useCallback, useEffect, useState } from 'react';
import classes from './Header.module.css';

const Header: React.FC = () => {
    
    const [profession, setProfession] = useState('DEVELOPER')

    const switchAutomatic = useCallback(
        () => {
            setTimeout(() => {
                if (profession === 'DEVELOPER') {
                    setProfession('PROGRAMMER')
                } else {
                    setProfession('DEVELOPER')
                }
            }, 4000);
        },
        [profession],
    ); 

    useEffect(() => {
        switchAutomatic();
    }, [ switchAutomatic])
    
    return <>
        <div className={classes.header}>
            <h3>HEY! I AM</h3>
            <h1>Daniel Cerón</h1>
            <div style ={{display: 'flex', margin: '2rem auto', width: 'auto', minWidth: '2rem', justifyContent: 'center', backgroundColor: 'transparent'}}>
                <h3 className = {classes.h3}>i'm a</h3>
                <div className={classes.typingAnimation}>{profession}.</div>
            </div>
        </div>
    </>;
}
export default Header;