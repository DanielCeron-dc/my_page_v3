import React from 'react';

import Dragable from '3D Components/Controls/Dragable';
import BoxPhysics from './BoxPhysics';
import { textures } from '../boxesTextures';

const projectsIds:string[] = [
    '6171dd08f7d6ee634030c375',
    '6172e1d49596e5f63c13022e',
    '6172e2a79596e5f63c130231',
    '6175ada55593b3c5a47b56af', 
]; 

const BoxexPhysicsDragable: React.FC = () => {

    return <>
        {new Array(textures.length).fill(0).map((_, i) => {
            return <Dragable key={i} id={i}>
                <BoxPhysics index = {i} id={projectsIds[i]} img={textures[i]} />
            </Dragable>
        })}
    </> 
}
export default  React.memo(BoxexPhysicsDragable, () => true);