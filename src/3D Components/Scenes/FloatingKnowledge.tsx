import SpriteText from '3D Components/Text/SpriteText';
import React from 'react';
import { useAppStore } from 'store/App.store';
import { shadeColor } from 'tools/colors';

const FloatingKnowledge: React.FC = () => {

    const { theme } = useAppStore();

    const colorLight = shadeColor(theme.primary, 10);

    return <>
        <SpriteText position={[0, 0, 11]} fontSize={100} color={colorLight}>
            Typescript
        </SpriteText>
        <SpriteText position={[11, 0, 0]} fontSize={100} color={colorLight}>
            React
        </SpriteText>
        <SpriteText position={[-11, 0, 0]} fontSize={100} >
            Flutter
        </SpriteText>
        <SpriteText position={[0, 0, -11]} fontSize={100}>
            C#
        </SpriteText>
        <SpriteText position={[5, 7, -5]} fontSize={100} color={colorLight}>
            MongoDb
        </SpriteText>
        <SpriteText position={[5, -7, 5]} fontSize={100} color={colorLight}>
            Zustand/Redux
        </SpriteText>
        <SpriteText position={[-5, 7, 5]} fontSize={100}>
            SQL
        </SpriteText>
        <SpriteText position={[-5, -7, -5]} fontSize={100} >
            Java
        </SpriteText>
        <SpriteText position={[-5, 7, -5]} fontSize={100}>
            Node
        </SpriteText>
        <SpriteText position={[5, -7, -5]} fontSize={100} color={colorLight}>
            MySQl
        </SpriteText>
        <SpriteText position={[5, 7, 5]} fontSize={100}>
            Express
        </SpriteText>
        <SpriteText position={[-5, -7, 5]} fontSize={100} color={colorLight}>
            React Native
        </SpriteText>
    </>;
}
export default React.memo(FloatingKnowledge, (prevProps, nextProps) => true);