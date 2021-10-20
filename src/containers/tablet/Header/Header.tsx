import React, { useEffect, useState } from 'react';



import ContactButtons from 'components/ContactButtons/ContactButtons';
import PresentationInfo from 'components/PresentationInfo/PresentationInfo';
import classes from './Header.module.css';




const Header: React.FC = () => {

    const [hidePresentationInfo, setHidePresentationInfo] = useState(false);

    const handleScroll = (e: Event) => {
        const currentY = (e.currentTarget as any).scrollY;
        if (currentY > 100) {
            setHidePresentationInfo(true);
        }
        else {
            setHidePresentationInfo(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return <header className={`${classes.header}  ${hidePresentationInfo ? classes.recorted : ''}  `   }>
        <div className={`${classes.details}  ${hidePresentationInfo ? classes.reposition : classes.normalPosition}`}>
            <h1>
                Daniel Cerón
            </h1>
            <ContactButtons />
        </div>
        <div className = {hidePresentationInfo ? classes.fadeOut : classes.fadeIn}>
            <PresentationInfo />
        </div>
    </header>
}
export default Header;