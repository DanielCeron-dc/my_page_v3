
import React, { useEffect } from 'react';
import { useAppStore } from 'store/App.store';
import classes from './SubContent.module.css';
import { ReactComponent as EastSvg } from "assets/svg/east.svg";
import Button from 'components/forms/Button/Button';

import ProjectsSubSection from 'components/ProjectsSubSection/ProjectsSubSection';

const SubContent:React.FC = () => {
    
    const { selectedProject  } = useAppStore();
    const divRef = React.useRef<HTMLDivElement>(null);

    const ScrollTo = (yPosition:number) => {
        if(divRef.current) {
            divRef.current.scrollTo({
                top: yPosition,
                behavior: 'smooth'
            });
        }
    }

    useEffect(() => {
        if(selectedProject>=0) {
            ScrollTo((selectedProject * 384) - 100);
        }
    }, [selectedProject]); 

    const handleScrollDown = () => {
        if(divRef.current) {
            //scroll down 500px
        divRef.current.scroll({
            top: divRef.current.scrollTop +  500,
            left: 0,
            behavior: 'smooth'
        })

        }
    }


    const handleScrollUp = () => {
        if(divRef.current) {
            //scroll down 500px
        divRef.current.scroll({
            top: divRef.current.scrollTop -  500,
            left: 0,
            behavior: 'smooth'
        })

        }
    }


    return <div style={{ position: 'relative', display: 'flex', width: '30vw'}}>
        <div className={classes.SubContent} ref ={divRef} style ={{width: '30rem'}}>
            <div style={{ direction: 'ltr', width: '100%'}}>
                <ProjectsSubSection/>
            </div>
        </div>
        <div style ={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <Button className={classes.scrollUpButton} onClick={handleScrollUp}>
                <EastSvg className={classes.svg} />
            </Button>
            <Button className={classes.scrollDownButton} onClick={handleScrollDown}>
                <EastSvg className={classes.svg} />
            </Button>
        </div>
    </div>
}
export default SubContent;