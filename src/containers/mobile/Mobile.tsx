import BackGround from '3D Components/BackGround/BackGround';
import ContactPanel from 'components/ContactPanel/ContactPanel';
import MiniNavegatorControls from 'components/MiniNavegatorControls/MiniNavegatorControls';
import ProjectsCards from 'components/ProjectsCards/ProjectsCards';
import React, { CSSProperties, useEffect, useState } from 'react';
import Header from './Header/Header';


const style: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100vw',
}

const verticalSpace = <div style={{ height: '8rem' }} />
const TextStyle: CSSProperties = { color: 'white', maxWidth: '20rem', margin: '0', padding: '0 1.5rem', boxSizing: 'border-box' }


const Mobile: React.FC = () => {

    const [sectionSelected, setSectionSelected] = useState(0);


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
        } else if (window.scrollY >= 700 && window.scrollY < 3000) {
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


    return <div style={style}>
        <Header />

        {verticalSpace}

        <h2 style={TextStyle}>
            more than 3 years of experience in the field of software development,
            I have worked with a wide range of technologies.
        </h2>

        <BackGround
            cameraPosition={[-20, 0, 0]}
            updateCamera={false}
            width={"100vw"}
            height={"60vh"}
            showProjects={false}
            eneableZoom={false}
            autoRotate={true}
            rotateSpeed={3}
            isOrbitControls={true}
            pointerLock
        />

        {verticalSpace}
        <h1 style={{ color: 'white', }}> Projects </h1>

        <BackGround
            cameraPosition={[19, 10, 10]}
            updateCamera={false}
            width={"100vw"}
            height={"60vh"}
            showProjects={true}
            eneableZoom={false}
            autoRotate={true}
            rotateSpeed={0.5}
            isOrbitControls={false}
            pointerLock
        />
        <h2 style={TextStyle}>
            I have made a lot of projects,
            some of them are listed here.
        </h2>

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
                        scrollTo(1400);
                        break;
                    case 2:
                        scrollTo(4000);
                        break;
                }
            }}
        />
        {verticalSpace}
        <ContactPanel />
    </div>
}
export default Mobile;