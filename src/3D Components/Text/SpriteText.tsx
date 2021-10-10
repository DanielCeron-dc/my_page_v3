import { useFrame } from "@react-three/fiber";
import React, { useMemo, useRef, } from "react";
import { BoxHelper } from "three";



export type TextProps = {
    children: string;
    fontSize?: number;
    color?: string;
    position: [number, number, number];
    scale?: [number, number, number];
};




const SpriteText: React.FC<TextProps> = ({ color = 'white', fontSize = 4.5, children, position }) => {
    const ref = useRef<BoxHelper>();

    const canvas = useMemo(() => {
        var canvas = document.createElement('canvas')
        var context = canvas.getContext('2d')
        if (context) {
            context.textBaseline = 'bottom'
            context.font = `bold ${fontSize}px -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif`
            context.measureText(children) // returns metrics object
            context.lineWidth = 100
            context.fillStyle = color
            context.fillText(children, 0, 100, 300)
        }

        return canvas
    }, [children, color, fontSize]);


    useFrame(() => {
        if (ref.current === undefined) return;
        if (ref.current.position === undefined) return;

        if (position[0] > 0) {
            if (ref.current.position.x < position[0]) {
                ref.current.translateX && ref.current.translateX(0.05);
            }
        } else {
            if (ref.current.position.x > position[0]) {
                ref.current.translateX && ref.current.translateX(-0.05);
            }
        }

        if (position[1] > 0) {
            if (ref.current.position.y < position[1]) {
                ref.current.translateY && ref.current.translateY(0.05);
            }
        }
        else {
            if (ref.current.position.y > position[1]) {
                ref.current.translateY && ref.current.translateY(-0.05);
            }
        }

        if (position[2] > 0) {
            if (ref.current.position.z < position[2]) {
                ref.current.translateZ && ref.current.translateZ(0.05);
            }
        }
        else {
            if (ref.current.position.z > position[2]) {
                ref.current.translateZ && ref.current.translateZ(-0.05);
            }
        }
    });


    return (
        <sprite ref={ref} scale={[4, 2, 10]} >
            <spriteMaterial sizeAttenuation={true} attach="material" >
                <canvasTexture attach="map" image={canvas} />
            </spriteMaterial>
        </sprite>
    )
}

export default SpriteText;