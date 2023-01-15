import React, { useEffect, useState } from 'react';
import classes from './MiniNavegatorControls.module.css';

let section: number = 0;
let timeout: NodeJS.Timeout | null = null;

const MiniNavegatorControls: React.FC = () => {

    const [sectionSelected, setSectionSelected] = useState<number>(0);
    const [showTooltip, setShowTooltip] = useState<number | null>(null);

    const scrollTo = (pixel: number) => {
        window.scrollTo({
            top: pixel,
            behavior: 'smooth',
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
        if (window.scrollY < 850) {
            document.documentElement.style.setProperty('--color2', '#009e89');
            document.documentElement.style.setProperty('--color2-dark', 'rgb(1, 134, 117)');
            section = 0;
        } else if (window.scrollY >= 850 && window.scrollY < 4000) {
            document.documentElement.style.setProperty('--color2', '#cc8800');
            document.documentElement.style.setProperty('--color2-dark', '#af7500');
            section = 1;
        } else {
            document.documentElement.style.setProperty('--color2', '#f28579');
            document.documentElement.style.setProperty('--color2-dark', 'rgb(1, 134, 117)');
            section = 2;
        }
        setSectionSelected(s => {
            if (s !== section) {
                setShowTooltip(section);
                if (timeout) {
                    clearTimeout(timeout);
                }
                timeout = setTimeout(() => {
                    setShowTooltip(null);
                }, 3000);
                return section;
            }
            return s;
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', handleOnScroll);
        return () => {
            return window.removeEventListener('scroll', handleOnScroll);
        }
    }, []);

    return <div className={classes.base} >
        <div style={{ position: 'relative' }}>
            <div className={`${classes.circle}  ${sectionSelected === 0 && classes.fill}`}
                onClick={() => selectSectionHandler(0)}
            />
            <span className={`${classes.tooltip} ${showTooltip === 0 ? classes.show : ''}`}>
                knowledge
            </span>
        </div>
        <div className={classes.line} />
        <div style={{ position: 'relative' }}>
            <div className={`${classes.circle}  ${sectionSelected === 1 && classes.fill}`}
                onClick={() => selectSectionHandler(1)}
            />
            <span className={`${classes.tooltip} ${showTooltip === 1 ? classes.show : ''}`}>
                Projects
            </span>
        </div>
        <div className={classes.line} />
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