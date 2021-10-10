import React from 'react';
import { useBox } from "@react-three/cannon";
import * as THREE from 'three';


interface IProps {

    width: number;
    height: number;
    depth: number;
    position: [number, number, number];
    color?: string;
    transparent?: boolean;

}



const PhysicsPlane: React.FC<IProps> = (props) => {

    const [ref] = useBox(() => ({ args: [props.width, props.height, props.depth], position: props.position }));

    return <mesh ref={ref} receiveShadow>
        <boxBufferGeometry args={[props.width, props.height, props.depth]} />
        <meshPhysicalMaterial
            color={props.color ?? "white"}
            thickness={0}
            emissive={new THREE.Color("black")}
            emissiveIntensity={1}

            transparent={props.transparent}
            opacity={0}
        />
    </mesh>
}
export default PhysicsPlane;