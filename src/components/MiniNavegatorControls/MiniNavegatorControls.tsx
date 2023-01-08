import React, { useEffect, useState } from 'react';
import classes from './MiniNavegatorControls.module.css';


const MiniNavegatorControls: React.FC = () => {

    const [sectionSelected, setSectionSelected] = useState<number>(0);
    const [showTooltip, setShowTooltip] = useState<number | null>(null);
    
    const scrollTo = (pixel: number) => {
        window.scrollTo({
            top: pixel,
            behavior: 'smooth'
        })
    }

    const selectSectionHandler = (section: number) => {
        setSectionSelected(section);
        switch (section) {
            case 0:
                scrollTo(0);
                break;
            case 1:
                scrollTo(1400);
                break;
            case 2:
                scrollTo(document.body.scrollHeight);
                break;
        }
    }

    
    const handleOnScroll = () => {
        let section = null;
        if (window.scrollY < 800) {
            document.documentElement.style.setProperty('--color2', '#009e89');
            document.documentElement.style.setProperty('--color2-dark', 'rgb(1, 134, 117)');
            section = 0;
        } else if (window.scrollY >= 700 && window.scrollY < 3000) {
            document.documentElement.style.setProperty('--color2', '#cc8800');
            document.documentElement.style.setProperty('--color2-dark', '#af7500');
            section = 1;
        } else {
            document.documentElement.style.setProperty('--color2', '#f28579');
            document.documentElement.style.setProperty('--color2-dark', 'rgb(1, 134, 117)');
            section = 2;
        }
        if (sectionSelected !== section) {
            setSectionSelected(section);
            setShowTooltip(section);
            setTimeout(() => {
                setShowTooltip(null);
            }, 1500);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleOnScroll);
        return () => {
            return window.removeEventListener('scroll', handleOnScroll);
        }
    }, []);

    return <div className = {classes.base} >
        <div style = {{position: 'relative'}}>
            <div className={`${classes.circle}  ${sectionSelected === 0 && classes.fill}`}
                onClick={() => selectSectionHandler(0)}
            />
            <span className={`${classes.tooltip} ${showTooltip === 0 ? classes.show : ''}`}>
                knowledge
            </span>
        </div>
        <div className={classes.line}/>
        <div style={{ position: 'relative' }}>
            <div className={`${classes.circle}  ${sectionSelected === 1 && classes.fill}`}
                onClick={() => selectSectionHandler(1)}
            />
              <span className={`${classes.tooltip} ${showTooltip === 1 ? classes.show : ''}`}>
                Projects
            </span>
        </div>
        <div className={classes.line}/>
        <div style={{ position: 'relative' }}>
            <div className={`${classes.circle}  ${sectionSelected === 2 && classes.fill}`}
                onClick={() => selectSectionHandler(2)}
            />
              <span className={`${classes.tooltip} ${showTooltip === 2 ? classes.show : ''}`}>
                Contact-me
            </span>
        </div>
    </div>
}
export default MiniNavegatorControls;