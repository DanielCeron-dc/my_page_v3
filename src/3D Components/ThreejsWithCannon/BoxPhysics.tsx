import React, { Suspense, useEffect } from "react";
import * as THREE from "three";
import { Vector3 } from "three";
import { useBox } from "@react-three/cannon";
import { useLoader } from "@react-three/fiber";

import { usePhysicsBoxesStore } from "store/PhysicsBoxes.store";
import { getRandomInt } from "../../tools/mathTools";
import { useAppStore } from "store/App.store";

interface BoxPhysicsProps {
    id: number;
    img: string;
}

const BoxPhysics: React.FC<BoxPhysicsProps> = (props) => {
    const { setSelectedProject, setIsExpanded, isOnProjects} = useAppStore();
    const texture = useLoader(THREE.TextureLoader, props.img);

    const [ref, api] = useBox(() => ({
        mass: 1,
        position: [getRandomInt(13), 15 + getRandomInt(15), getRandomInt(13)],
        args: [3, 3, 3]
    }));

    useEffect(() => {
        let position: [number, number, number] = [0, 0, 0];
        usePhysicsBoxesStore.subscribe( (state) => state.positions[props.id] ,(newPosition: [number, number, number]) => {
            position = newPosition;
            api.position?.copy(new Vector3(position[0], position[1], position[2]));
        });

        usePhysicsBoxesStore.subscribe((state) => state.dragging === props.id, (value: boolean) => {
            if (value) {
                api.mass?.set(0);
            } else {
                api.mass?.set(1);
            }
        });

    }, [api, props.id]);


    return <Suspense fallback = {null} >
        <mesh ref={ref}
            castShadow
            receiveShadow
            onClick={() => {
                if (!isOnProjects) return; 
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



