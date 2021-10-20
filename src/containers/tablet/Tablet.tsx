import { useEffect, useState } from 'react';

import BackGround from '3D Components/BackGround/BackGround';
import ProjectsCards from 'components/ProjectsCards/ProjectsCards';
import React, { CSSProperties } from 'react';
import Header from './Header/Header';
import MiniNavegatorControls from 'components/MiniNavegatorControls/MiniNavegatorControls';
import ContactPanel from 'components/ContactPanel/ContactPanel';

const style: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100vw',
    height: '100%',
}

const TextStyle: CSSProperties = { color: 'white', maxWidth: '20rem', margin: '0', padding: '0 1.5rem', boxSizing: 'border-box' }

const verticalSpace = <div style={{ height: '8rem' }} />


const Tablet: React.FC = () => {
    const [sectionSelected, setSectionSelected] = useState(0);
    //function that scroll to the pixel i want
    const scrollTo = (pixel: number) => {
        window.scrollTo({
            top: pixel,
            behavior: 'smooth'
        })
    }

    const handleOnScroll = () => {
        if (window.scrollY < 800) {
            document.documentElement.style.setProperty('--color2', '#009e89');
            document.documentElement.style.setProperty('--color2-dark', 'rgb(1, 134, 117)');
            setSectionSelected(0);
        } else if (window.scrollY > 800 && window.scrollY < 2000){
            document.documentElement.style.setProperty('--color2', '#cc8800');
            document.documentElement.style.setProperty('--color2-dark', '#af7500');
            setSectionSelected(1);
        } else {
            document.documentElement.style.setProperty('--color2', '#f28579');
            document.documentElement.style.setProperty('--color2-dark', 'rgb(1, 134, 117)');
            setSectionSelected(2);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleOnScroll);
        return () => {
            return window.removeEventListener('scroll', handleOnScroll);
        }
    }, []);


    return <div style={style} >
        <Header />
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <h2 style={TextStyle}>
                more than 3 years of experience in the field of software development,
                I have worked with a wide range of technologies.
            </h2>

            <BackGround
                cameraPosition={[-20, 0, 0]}
                updateCamera={false}
                width={"60vw"}
                height={"60vh"}
                showProjects={false}
                eneableZoom={false}
                autoRotate={true}
                rotateSpeed={3}
                isOrbitControls={true}
            />
        </div>
        {verticalSpace}
        <h1 style={{ color: 'white', }}> Projects </h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <BackGround
                cameraPosition={[19, 10, 10]}
                updateCamera={false}
                width={"60vw"}
                height={"60vh"}
                showProjects={true}
                eneableZoom={false}
                autoRotate={true}
                rotateSpeed={0.5}
                isOrbitControls={false}
            />
            <h2 style={TextStyle}>
                I have made a lot of projects,
                some of them are listed here.
            </h2>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <ProjectsCards />
        </div>
        <MiniNavegatorControls
            style={{ position: 'fixed', left: 0, bottom: 0 }}
            selected={sectionSelected}
            onSelect={(index) => {
                setSectionSelected(index);
                switch (index) {
                    case 0:
                        scrollTo(0);
                        break;
                    case 1:
                        scrollTo(1000);
                        break;
                    case 2:
                        scrollTo(5000);
                        break;
                }
            }} 
        
        />
        {verticalSpace}
        <ContactPanel/>
    </div>
}
export default Tablet;