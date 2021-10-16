import React, { Suspense } from 'react';
import { Physics } from "@react-three/cannon";

import PhysicsPlane from '3D Components/ThreejsWithCannon/PhysicsPlane';
import BoxexPhysicsDragable from '3D Components/ThreejsWithCannon/BoxPhysicsDragable';
import PointLight from '3D Components/PointLight';
import Loader from 'components/Loader/Loader';


const ProjectsScene: React.FC = () => {


    return <Suspense fallback={<Loader />}>
            <Physics>
            <PointLight position={[0, 12, 0]} intensity={6} colorHexadecimal={"#cc8800"} />
                <BoxexPhysicsDragable />
                <PhysicsPlane width={30} height={1} depth={30} position={[0, -1, 0]} />
                {/* Walls */}
                <PhysicsPlane width={1} height={100} depth={100} position={[13, 0, 0]} color={"red"} transparent />
                <PhysicsPlane width={1} height={100} depth={100} position={[-13, 0, 0]} color={"red"} transparent />
                <PhysicsPlane width={100} height={100} depth={1} position={[0, 0, 13]} color={"red"} transparent />
                <PhysicsPlane width={100} height={100} depth={1} position={[0, 0, -13]} color={"red"} transparent />
                {/* Walls */}
            </Physics>
        </Suspense>
}
export default ProjectsScene;