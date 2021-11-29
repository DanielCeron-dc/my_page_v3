import React, { useEffect, useState } from 'react';
import textureBack from 'assets/textures/dark-brick-wall.png'; 
import Loader from 'components/Loader/Loader';
import { useAppStore } from 'store/App.store';


const LoadingScreen:React.FC = () => {
    const [loaded, setLoaded] = useState(false);
    const { setIsOnProjects } = useAppStore(); 

    useEffect(() => {
        setTimeout(() => {
            setIsOnProjects(true);
        }, 1000);

        setTimeout(() => {
            setIsOnProjects(false);
            setLoaded(true);
        }, 3000);
    }, [setIsOnProjects]);
    
    return !loaded ? <div style={{
        position: 'fixed',
        zIndex: 9999,
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'var(--color1)',
        backgroundImage: `url(${textureBack})`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <Loader />
    </div> : null; 
}
export default LoadingScreen;