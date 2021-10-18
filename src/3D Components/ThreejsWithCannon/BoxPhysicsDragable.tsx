import React from 'react';

import Dragable from '3D Components/Controls/Dragable';
import BoxPhysics from './BoxPhysics';
import { projects } from 'tools/informationProjects';


const BoxexPhysicsDragable: React.FC = () => {

    return <>
        {new Array(projects.length).fill(0).map((_, i) => {
            return <Dragable key={i} id={i}>
                <BoxPhysics id={i} img ={projects[i].img} />
            </Dragable>
        })}
    </>
}
export default BoxexPhysicsDragable;