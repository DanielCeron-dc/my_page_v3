import React, { useEffect, useState, useRef } from 'react';
import { useThree, extend, ReactThreeFiber } from "@react-three/fiber";
import { DragControls } from "three/examples/jsm/controls/DragControls";
import { Group, Object3D } from 'three';

import { usePhysicsBoxesStore } from "store/PhysicsBoxes.store";


extend({ DragControls });

declare global {
    namespace JSX {
        interface IntrinsicElements {
            dragControls: ReactThreeFiber.Object3DNode<DragControls, typeof DragControls>
        }
    }
}

//let dragoLocal

const Dragable: React.FC<{ id?: number }> = (props) => {

    const { camera, gl } = useThree();
    const [children, setChildren] = useState<Object3D[]>([]);
    const groupRef = useRef<Group>();
    const controlRef = useRef<DragControls>();

    const { setDragging, setPosition, dragging } = usePhysicsBoxesStore();

    useEffect(() => {
        setChildren(groupRef.current?.children ?? []);
    }, []);

    useEffect(() => {
        const currentControls = controlRef.current;
        if (!currentControls) return;
        currentControls.addEventListener("dragstart", () => {
            if (dragging === -1) {
                props.id !== undefined && setDragging(props.id, true);
            }
        });
        currentControls.addEventListener("dragend", () => {
            props.id !== undefined && setDragging(-1, false);
        });
        currentControls.addEventListener("drag", (e) => {
            if (e.object.position.y < 1) {
                e.object.position.y = 1;
            }; // prevent y-axis from going under ground
            props.id !== undefined && setPosition(props.id, [e.object.position.x, e.object.position.y, e.object.position.z]);
        });
    }, [children, dragging, props.id, setPosition, setDragging]);

    return <group ref={groupRef} >
        <dragControls ref={controlRef} args={[children, camera, gl.domElement]} />
        {props.children}
    </group>
}
export default Dragable;