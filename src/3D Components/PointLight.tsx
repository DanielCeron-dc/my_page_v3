import { useFrame } from '@react-three/fiber';
import React, { useState } from 'react';
import * as THREE from 'three';

export interface PointLightProps {

    position?: [number, number, number];
    colorHexadecimal?: string;
    intensity?: number;
}



const PointLight: React.FC<PointLightProps> = (props) => {

    const color = new THREE.Color(props.colorHexadecimal);
    const [intensity, setIntensity] = useState(0.001)



    useFrame(() => {
        if (intensity < 6)
            setIntensity((i) => i + 0.005);
    });


    return <mesh position={props.position}>
        <meshPhongMaterial emissive={color} refractionRatio={0.1} />
        <pointLight castShadow color={props.colorHexadecimal} intensity={intensity} distance={19} />
    </mesh>
}
export default PointLight;