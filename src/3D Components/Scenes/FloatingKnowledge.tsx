import SpriteText from '3D Components/Text/SpriteText';
import React from 'react';
import { useAppStore } from 'store/App.store';

const FloatingKnowledge: React.FC = () => {
    const {isOnProjects } = useAppStore(); 
    
    return !isOnProjects ? <>
        <SpriteText position={[0, 0, 11]} fontSize={100} color="#00d6b9">
            Typescript
        </SpriteText>
        <SpriteText position={[11, 0, 0]} fontSize={100} color="#00d6b9">
            React
        </SpriteText>
        <SpriteText position={[-11, 0, 0]} fontSize={100} >
            Flutter
        </SpriteText>
        <SpriteText position={[0, 0, -11]} fontSize={100}>
            C#
        </SpriteText>
        <SpriteText position={[5, 7, -5]} fontSize={100} color="#00d6b9">
            MongoDb
        </SpriteText>
        <SpriteText position={[5, -7, 5]} fontSize={100} color="#00d6b9">
            Zustand
        </SpriteText>
        <SpriteText position={[-5, 7, 5]} fontSize={100}>
            ThreeJs
        </SpriteText>
        <SpriteText position={[-5, -7, -5]} fontSize={100} >
            Java
        </SpriteText>
        <SpriteText position={[-5, 7, -5]} fontSize={100}>
            Node
        </SpriteText>
        <SpriteText position={[5, -7, -5]} fontSize={100} color="#00d6b9">
            Blender
        </SpriteText>
        <SpriteText position={[5, 7, 5]} fontSize={100}>
            Express
        </SpriteText>
        <SpriteText position={[-5, -7, 5]} fontSize={100} color="#00d6b9">
            React-Context
        </SpriteText>
    </> : null; 
}
export default FloatingKnowledge;