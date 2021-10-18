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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <Loader />
        <h1 style = {{color: 'white'}}>Si no tienes tarjeta grafica decente esta pagina puede ir mal</h1>
    </div>
}
export default LoadingScreen;