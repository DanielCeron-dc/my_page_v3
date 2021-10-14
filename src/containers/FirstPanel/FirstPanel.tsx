import React, { useEffect, useState } from 'react';
import classes from './FirstPanel.module.css';
import { ReactComponent as EastSvg } from "assets/svg/east.svg";
import { useAppStore } from 'store/App.store';
import Button from 'components/forms/Button/Button';
import SubContent from './SubContent/SubContent';


import perfilgif from 'assets/img/perfil.gif';
import perfilImg from 'assets/img/Perfil0.png';
import ContactButtons from 'components/ContactButtons/ContactButtons';



const FirstPanel:React.FC= () => {
    
    const [onHover, setOnHover] = useState(false); 
    const { isOnProjects, isexpandedInfo, setExpandedInfo , setSelectedProject} = useAppStore();    

    return <div className={`${classes.firstPanel} ${isexpandedInfo ? classes.expanded: ''}`} onMouseOver ={() => setOnHover(true)} onMouseLeave ={() => setOnHover(false)}>
        <div style={{ position: 'relative' }}>
            
            <section className={classes.content}>
                <SubContent />
                <div className={classes.content__main}>
                    <h1 className ={classes.h1}>
                        Daniel Cerón
                    </h1>
                    <div className={classes.blackBackground}>
                        <img src={onHover ? perfilgif : perfilImg  } alt=""/>
                        <p >
                            Bienvenido, soy un programador FullStack, y estaria feliz de ayudarte a materializar tus ideas.
                        </p>
                    </div>
                    <ContactButtons/>
                </div>
            </section>
            {isOnProjects  && <Button
                className={`${classes.extendButton} ${isexpandedInfo ? classes.expanded : ''}`}
                onClick={() => {
                    setExpandedInfo(!isexpandedInfo);
                    setSelectedProject(-1); 
                }}>
                {!isexpandedInfo && <>  see more about the projects </>}
                <EastSvg className={classes.svg} />
            </Button>}
        </div>
        
    </div>
}
export default FirstPanel;