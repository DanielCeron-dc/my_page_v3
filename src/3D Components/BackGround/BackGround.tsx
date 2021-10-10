import React, { Suspense } from 'react';
import { Canvas, extend } from "@react-three/fiber";
import Orbit from '../Controls/Orbit';
import Spinner from 'components/ui/Spinner/Spinner';


extend(Canvas);

export type BackGroundProps = {
    cameraPosition?: [number, number, number],
    backGroundColor?: string,
    axeshelper?: boolean,
    eneableZoom?: boolean,
    isOrbitControls?: boolean,
    ambientLightIntensity?: number,
    height?: number | string,
    width?: number | string,
    autoRotate?: boolean,
    zoomSpeed?: number,
    rotateSpeed?: number,
    display?: string
};

/** 
 * This is the BackGround component with a 3D canvas, it is a simple container for 3D objects. 
 * it has a 3d camera and a 3d scene.
**/
const BackGround: React.FC<BackGroundProps> = (props) => {
    return <div style={{ height: props.height ?? '100vh', width: props.width ?? '100vw', display: props.display }}>
        <Suspense fallback={Spinner}>
            <Canvas
                style={{ background: props.backGroundColor ?? 'rgba(0,0,0,0)' }}
                shadows
                camera={{ position: props.cameraPosition }}
            >
                {props.children}
                {props.axeshelper && <axesHelper args={[10]} />}


                <Orbit
                    isOrbitControlsEnabled={props.isOrbitControls}
                    enableZoom={props.eneableZoom}
                    autoRotate={props.autoRotate}
                    zoomSpeed={props.zoomSpeed}
                    rotateSpeed={props.rotateSpeed}
                />

            </Canvas>
        </Suspense>

    </div>
}


export default BackGround;