import React, {Suspense, useEffect} from 'react'
import {Canvas} from "@react-three/fiber";
import Loader from "../components/Loader";
import Model from "../components/Model";
import TypingText from "../components/TypingText";


const Home = ()=>{

    return (
        <main className="w-full h-screen bg-cover bg-natural flex items-center justify-between">
            <div className="w-1/2 h-full flex justify-center items-center">
                <Canvas
                    camera={{position: [-2.9, -0.06, -3.13], fov: 80, near: 0.1, far: 700}}
                >
                    <directionalLight position={[1, 1, 1]} intensity={1}/>
                    <ambientLight intensity={1}/>
                    <pointLight/>
                    <spotLight/>
                    <Suspense fallback={<Loader/>}>
                        <Model position={[10, -10, 9]} rotation={[0, -2.4, 0]}/>
                    </Suspense>
                </Canvas>
            </div>
            <div className="w-1/2 h-ful pr-8">
                <TypingText/>
            </div>
        </main>
    )
}

export default Home