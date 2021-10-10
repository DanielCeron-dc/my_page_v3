import React from 'react';
import Dragable from '../Controls/Dragable';
import BoxPhysics from './BoxPhysics';
import { usePhysicsBoxesStore } from "store/PhysicsBoxes.store";

const BoxexPhysicsDragable: React.FC = () => {
    const { boxesNumber } = usePhysicsBoxesStore();
    return <>
        {new Array(boxesNumber).fill(0).map((_, i) => <Dragable key={i} id={i}>
            <BoxPhysics id={i} />
        </Dragable>)}
    </>
}
export default BoxexPhysicsDragable;