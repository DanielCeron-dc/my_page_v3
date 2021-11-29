import React, { Suspense, useEffect } from "react";
import * as THREE from "three";
import { Vector3 } from "three";
import { useBox } from "@react-three/cannon";
import { useLoader } from "@react-three/fiber";

import { usePhysicsBoxesStore } from "store/PhysicsBoxes.store";
import { getRandomInt } from "../../tools/mathTools";
import { useAppStore } from "store/App.store";

interface BoxPhysicsProps {
    index: number;
    id: string; 
    img: string;
}

const BoxPhysics: React.FC<BoxPhysicsProps> = (props) => {
    const { setSelectedProject, setIsExpanded} = useAppStore();
    const texture = useLoader(THREE.TextureLoader, props.img);

    const [ref, api] = useBox(() => ({
        mass: 1,
        position: [getRandomInt(13), 15 + getRandomInt(15), getRandomInt(13)],
        args: [3, 3, 3]
    }));

    useEffect(() => {
        let position: [number, number, number] = [0, 0, 0];
        usePhysicsBoxesStore.subscribe((newPosition: [number, number, number]) => {
            position = newPosition;
            api.position?.copy(new Vector3(position[0], position[1], position[2]));
        }, (state) => state.positions[props.index]);

        usePhysicsBoxesStore.subscribe((value: boolean) => {
            if (value) {
                api.mass?.set(0);
            } else {
                api.mass?.set(1);
            }
        }, (state) => state.dragging === props.index);

    }, [api, props.index]);


    return <Suspense fallback = {null} >
        <mesh ref={ref}
            castShadow
            receiveShadow
            onClick={() => {
                setSelectedProject(props.id);
                setIsExpanded(true); 
            }}
        >
            <boxBufferGeometry args={[3, 3, 3]} />
            <meshBasicMaterial map={texture} attach = "material"  />
        </mesh>
    </Suspense>
}

export default React.memo(BoxPhysics);



