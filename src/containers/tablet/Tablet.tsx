import { useEffect, useState } from 'react';

import BackGround from '3D Components/CustomCanvas/CustomCanvas';
import ProjectsCards from 'components/ProjectsCards/ProjectsCards';
import React, { CSSProperties } from 'react';
import Header from './Header/Header';
import MiniNavegatorControls from 'components/MiniNavegatorControls/MiniNavegatorControls';
import ContactPanel from 'components/ContactPanel/ContactPanel';
import { setColor } from 'tools/setColor';

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
        <MiniNavegatorControls/>
        {verticalSpace}
        <ContactPanel/>
    </div>
}
export default Tablet;