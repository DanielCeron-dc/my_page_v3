import React, { useCallback, useEffect, useRef, useState } from 'react';
import classes from './Header.module.css';

const Header: React.FC = () => {

    const [profession, setProfession] = useState('DEVELOPER');
    const professionRef = useRef(profession);

    const switchAutomatic = useCallback(() => {
        setTimeout(() => {
            if (professionRef.current === 'DEVELOPER') {
                setProfession('PROGRAMMER');
                professionRef.current = 'PROGRAMMER';
            } else {
                setProfession('DEVELOPER');
                professionRef.current = 'DEVELOPER';
            }
            switchAutomatic();
        }, 4000);
    }, []);

    useEffect(() => {
        switchAutomatic();
    }, []);

    return <>
        <div className={classes.header}>
            <h3>HEY! I AM</h3>
            <h1>Daniel Cerón</h1>
            <div style={{ display: 'flex', margin: '2rem auto', width: 'auto', minWidth: '2rem', justifyContent: 'center', backgroundColor: 'transparent' }}>
                <h3 className={classes.h3}>i'm a</h3>
                <div className={classes.typingAnimation}>{profession}.</div>
            </div>
        </div>
    </>;
}
export default Header;