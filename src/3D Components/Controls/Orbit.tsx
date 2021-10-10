
import React, { useRef } from 'react';
import { extend, ReactThreeFiber, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


extend({ OrbitControls })

declare global {
    namespace JSX {
        interface IntrinsicElements {
            orbitControls: ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>
        }
    }
}

interface OrbitControlsProps {
    isOrbitControlsEnabled?: boolean,
    enableZoom?: boolean,
    autoRotate?: boolean,
    zoomSpeed?: number,
    rotateSpeed?: number,
}

/** 
    this a component that wraps the three.js orbitControls, 
    this component allow you to control the camera with the mouse
**/
const Orbit: React.FC<OrbitControlsProps> = (props) => {
    const { camera, gl } = useThree();

    const orbitRef = useRef<OrbitControls>();

    useFrame(() => {
        orbitRef.current?.update();
    })

    return <orbitControls
        ref={orbitRef}
        attach="orbitControls"
        args={[camera, gl.domElement]}
        enabled={props.isOrbitControlsEnabled}
        enableZoom={props.enableZoom}
        autoRotate={true}
        enablePan={false}
        zoomSpeed={props.zoomSpeed}
        autoRotateSpeed={props.rotateSpeed}
    />
}
export default Orbit;



