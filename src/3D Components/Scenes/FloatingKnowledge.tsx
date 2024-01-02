import SpriteText from '3D Components/Text/SpriteText';
import React from 'react';
import { useAppStore } from 'store/App.store';
import { shadeColor } from 'tools/colors';

const FloatingKnowledge: React.FC = () => {

    const { theme } = useAppStore();

    const colorLight = shadeColor(theme.primary, 10);

    return <>
        <SpriteText position={[0, 0, 11]} fontSize={100} color={theme.primary}>
            Typescript
        </SpriteText>
        <SpriteText position={[11, 0, 0]} fontSize={100} color={theme.primary}>
            React
        </SpriteText>
        <SpriteText position={[-11, 0, 0]} fontSize={100} >
            Flutter
        </SpriteText>
        <SpriteText position={[0, 0, -11]} fontSize={100}>
            C#
        </SpriteText>
        <SpriteText position={[5, 7, -5]} fontSize={100} color={theme.primary}>
            MongoDb
        </SpriteText>
        <SpriteText position={[5, -7, 5]} fontSize={100} color={theme.primary}>
            Zustand
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
        <SpriteText position={[5, -7, -5]} fontSize={100} color={theme.primary}>
            MySQl
        </SpriteText>
        <SpriteText position={[5, 7, 5]} fontSize={100}>
            Express
        </SpriteText>
        <SpriteText position={[-5, -7, 5]} fontSize={100} color={theme.primary}>
            React Native
        </SpriteText>
    </>;
}
export default React.memo(FloatingKnowledge, (prevProps, nextProps) => true);