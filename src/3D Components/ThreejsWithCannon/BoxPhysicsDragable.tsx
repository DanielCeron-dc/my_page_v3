import React from 'react';

import Dragable from '3D Components/Controls/Dragable';
import BoxPhysics from './BoxPhysics';
import { textures } from '../boxesTextures';

const BoxexPhysicsDragable: React.FC = () => {

    return <>
        {new Array(textures.length).fill(0).map((_, i) => {
            return <Dragable key={i} id={i}>
                <BoxPhysics id={i} img={textures[i]} />
            </Dragable>
        })}
    </> 
}
export default BoxexPhysicsDragable;