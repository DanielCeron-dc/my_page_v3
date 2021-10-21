import React, { Suspense, useEffect } from 'react';
import { Canvas, extend, useThree } from "@react-three/fiber";
import Orbit from '../Controls/Orbit';
import { useAppStore } from 'store/App.store';
import Loader from 'components/Loader/Loader';
import ProjectsScene from '3D Components/Scenes/ProjectsScene';
import FloatingKnowledge from '3D Components/Scenes/FloatingKnowledge';

extend(Canvas);

const UpdateCamera = () => {
    const { camera  } = useThree();
    
    useEffect(() => {
        useAppStore.subscribe((value: boolean) => {
            if (value) {
                camera.position.set(19, 10, 10);
                camera.lookAt(0, -20, 0);
                
            } else {
                camera.position.set(-20, 0, 0);
                camera.lookAt(0, 0, 0);

            }
        }, state => state.isOnProjects);
    }, [camera]); 
    return null; 
}

export type CustomCanvasProps = {
    updateCamera: boolean;
    cameraPosition?: [number, number, number],
    BackGround?: string,
    axeshelper?: boolean,
    eneableZoom?: boolean,
    isOrbitControls?: boolean,
    ambientLightIntensity?: number,
    height?: number | string,
    width?: number | string,
    autoRotate?: boolean,
    zoomSpeed?: number,
    rotateSpeed?: number,
    display?: string,
    showProjects?: boolean,
    pointerLock?: boolean,
};

/** 
 * This is the CustomCanvas component with a 3D canvas, it is a simple container for 3D objects. 
 * it has a 3d camera and a 3d scene.
**/
const CustomCanvas: React.FC<CustomCanvasProps> = (props) => {

    useEffect(() => {
        console.log('CustomCanvas component mounted');
    }); 

    return <div style={{ height: props.height ?? '100vh', width: props.width ?? '100vw', display: props.display , pointerEvents: props.pointerLock ?"none" : "unset" }}>
        <Suspense fallback={<Loader/>}>
            <Canvas
                style={{ backgroundColor: props.BackGround ?? 'rgba(0,0,0,0)' }}
                shadows
                camera={{ position: props.cameraPosition }}
            >
                {props.showProjects ? <ProjectsScene /> : <FloatingKnowledge/>}
                <Orbit
                    isOrbitControlsEnabled={props.isOrbitControls}
                    enableZoom={props.eneableZoom}
                    autoRotate={props.autoRotate}
                    zoomSpeed={props.zoomSpeed}
                    rotateSpeed={props.showProjects ? 0.5 : 3}
                />
                {props.updateCamera &&  <UpdateCamera />}
            </Canvas>
        </Suspense>
    </div>
}


export default React.memo<CustomCanvasProps>(CustomCanvas, (prevProps, nextProps) => {
    return prevProps.showProjects === nextProps.showProjects; 
});