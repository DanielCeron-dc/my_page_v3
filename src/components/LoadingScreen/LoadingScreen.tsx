import React from 'react';
import textureBack from 'assets/textures/dark-brick-wall.png'; 
import Loader from 'components/Loader/Loader';


const LoadingScreen:React.FC = () => {
    
    return <div style={{
        position: 'fixed',
        zIndex: 9999,
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'var(--color1)',
        backgroundImage: `url(${textureBack})`,
        display: 'grid',
        placeItems: 'center'
    }}>
        <Loader />
    </div>
}
export default LoadingScreen;