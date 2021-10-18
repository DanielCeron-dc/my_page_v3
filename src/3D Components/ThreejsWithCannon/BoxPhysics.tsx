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
    const { setSelectedProject } = useAppStore();
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
        }, (state) => state.positions[props.id]);

        usePhysicsBoxesStore.subscribe((value: boolean) => {
            if (value) {
                api.mass?.set(0);
            } else {
                api.mass?.set(1);
            }
        }, (state) => state.dragging === props.id);

    }, [api, props.id]);


    return <Suspense fallback = {null} >
        <mesh ref={ref}
            castShadow
            receiveShadow
            onClick={() => {
                setSelectedProject(props.id);
            }}
        >
            <boxBufferGeometry args={[3, 3, 3]} />
            <meshBasicMaterial map={texture} attach = "material"  />
        </mesh>
    </Suspense>
}

export default React.memo(BoxPhysics);



