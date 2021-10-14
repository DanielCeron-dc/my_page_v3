import React from 'react';
import { ReactComponent as NodeSvg } from 'assets/svg/nodejs.svg';
import { ReactComponent as ReactSvg } from 'assets/svg/react.svg'; 
import { ReactComponent as FlutterSvg } from 'assets/svg/flutter.svg';


const KnoledgeSubSection:React.FC = () => {
    
    return <div style={{ display: 'flex', height: '100vh', flexDirection: 'column', justifyContent: 'space-evenly' }}>
        <NodeSvg style={{position: 'absolute', top: '20%' , left: '40%' , width: 100 , height: 100 , fill: 'black'}}/>
        <ReactSvg style={{ position: 'absolute', top: '80%', left: '20%', width: 100, height: 100, fill: 'black'}}/>
        <FlutterSvg style={{ position: 'absolute', top: '70%', left: '80%', width: 100, height: 100, fill: 'black'}}/>

        <h1 style={{
        
            border: '5px solid var(--color1)',
            borderRadius: '2rem',
            width: '80%',
            color: 'var(--color1)',
            margin: '0 1rem 0 auto',
            padding: '1rem',
            boxSizing: 'border-box',
            fontFamily: 'ui-serif'
        }}>
            mas de tres años en la <br />
            programación, conozco diferentes patrones de programación <br />
            tanto funcional como de objetos <br />
        </h1>
    </div>
}
export default KnoledgeSubSection;