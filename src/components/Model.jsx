import {useAnimations, useGLTF} from "@react-three/drei";
import {useEffect, useRef} from "react";

export default function Model({position, rotation}) {
    const group = useRef();
    const { animations,scene } = useGLTF("/elaina.glb");
    const {actions} = useAnimations(animations, group)

    useEffect(() => {
        actions["Action"].play();
    }, [actions]);

    return <primitive ref={group} position={position} rotation={rotation} object={scene} scale={[7,7,7]}/>;
}
