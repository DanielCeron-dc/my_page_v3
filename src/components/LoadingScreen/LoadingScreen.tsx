import React, { useEffect, useState } from 'react';
import textureBack from 'assets/textures/dark-brick-wall.png';
import Loader from 'components/Loader/Loader';
import { useAppStore } from 'store/App.store';
import useWindow from 'hooks/useWindowDimensions';


const LoadingScreen: React.FC = () => {
    const [loaded, setLoaded] = useState(false);
    const { setIsOnProjects } = useAppStore();
    const { isDesktop } = useWindow();

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
        gap: '2rem',
        alignItems: 'center',
    }}>
        <Loader />
        {isDesktop ? <h1 style={{
            color: 'var(--theme)',
            fontSize: '1rem',
            fontWeight: 'bold',
            letterSpacing: '0.2rem',
            textTransform: 'uppercase',
            textAlign: 'center',
        }}>
            this page is also responsive ✅
        </h1> : null}

    </div> : null;
}
export default LoadingScreen;