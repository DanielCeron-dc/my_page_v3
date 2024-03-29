import React, { CSSProperties, useEffect, useState } from 'react';

import Header from './Header/Header';
import CustomCanvas from '3D Components/CustomCanvas/CustomCanvas';
import ContactPanel from 'components/ContactPanel/ContactPanel';
import MiniNavegatorControls from 'components/MiniNavegatorControls/MiniNavegatorControls';
import ProjectsCards from 'components/ProjectsCards/ProjectsCards';


const style: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100vw',
}

const verticalSpace = <div style={{ height: '8rem' }} />
const TextStyle: CSSProperties = { color: 'white', maxWidth: '20rem', margin: '0', padding: '0 1.5rem', boxSizing: 'border-box' }


const Mobile: React.FC = () => {

    return <div style={style}>
        <MiniNavegatorControls/>
        <Header />

        {verticalSpace}

        <h2 style={TextStyle}>
            more than 3 years of experience in the field of software development,
            I have worked with a wide range of technologies.
        </h2>

        <CustomCanvas
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

        <CustomCanvas
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

        {verticalSpace}

        <ContactPanel />
    </div>
}
export default Mobile;