import React, { useEffect } from "react";
import { useBox } from "@react-three/cannon";
import { usePhysicsBoxesStore } from "store/PhysicsBoxes.store";
import * as THREE from "three";
import { Vector3 } from "three";

import { getRandomInt } from "../../tools/mathTools";
import { useLoader } from "@react-three/fiber";

import { projects } from "tools/informationProjects";

interface BoxPhysicsProps {
    id: number;
}

const BoxPhysics: React.FC<BoxPhysicsProps> = (props) => {


    const texture = useLoader(THREE.TextureLoader, projects[props.id].img);

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
        }, (state) => state.positions[props.id]);

        usePhysicsBoxesStore.subscribe((value: boolean) => {
            if (value) {
                api.mass?.set(0);
            } else {
                api.mass?.set(1);
            }
        }, (state) => state.dragging === props.id);

    }, [api, props.id]);

    return <mesh ref={ref} castShadow receiveShadow>
        <boxBufferGeometry args={[3, 3, 3]} />
        <meshBasicMaterial map={texture} />
    </mesh>
}

export default React.memo(BoxPhysics);



