import React from 'react';
import { usePhysicsBoxesStore } from 'store/PhysicsBoxes.store';


const BoxexPhysicsDragable: React.FC = () => {

    const {boxes} = usePhysicsBoxesStore(); 

    return <>
        {boxes}
    </>
}
export default BoxexPhysicsDragable;