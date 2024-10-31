import React, {Suspense, useEffect, useRef, useState} from 'react'
import {Canvas} from "@react-three/fiber";
import Loader from "../components/Loader";
import Model from "../components/Model";
import {soundoff, soundon} from "../assets/icons/index.js";
import {NavLink} from "react-router-dom";
import {PiFinnTheHumanFill} from "react-icons/pi";
import {HiArchiveBox} from "react-icons/hi2";
import {profiles} from "../constant/index.js";
import {FaGithub, FaInstagram, FaLinkedin, FaSteam} from "react-icons/fa";
import {BsFillSkipForwardFill} from "react-icons/bs";

const Home = ({isPlayingMusic, setIsPlayingMusic})=>{
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [showIcons, setShowIcons] = useState(false); // For conditional rendering of social icons
    const fullTitle = 'Hi, I am Bright 😊';
    const fullDescription = 'A Software engineer from Bangkok. Can’t wait to dive into programming talks with you all! 😄 I’m open to any exciting new opportunities that come my way🌈';

    useEffect(() => {
        if(!showIcons){
            let titleTimeout;
            let descriptionTimeout;
            // Typing effect for the title
            if (title.length < fullTitle.length) {
                titleTimeout = setTimeout(() => {
                    setTitle(fullTitle.slice(0, title.length + 1));
                }, 100); // Adjust typing speed here (180ms per character)
            }

            // Typing effect for the description
            if (title === fullTitle && description.length < fullDescription.length) {
                descriptionTimeout = setTimeout(() => {
                    setDescription(fullDescription.slice(0, description.length + 1));
                }, 100); // Adjust typing speed here (100ms per character)
            }

            // Show icons after the description has fully typed
            if (description === fullDescription) {
                setTimeout(() => {
                    setShowIcons(true)
                }, 500); // Add a slight delay before showing icons
            }

            return () => {
                clearTimeout(titleTimeout);
                clearTimeout(descriptionTimeout);
            };
        }
    }, [title, description, fullTitle, fullDescription]);

    const handleSkip = () => {
        // Set the title and description to full and show icons
        setShowIcons(true);
        setTitle(fullTitle);
        setDescription(fullDescription);
    }

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

                <h1 className="text-3xl font-bold">{title}</h1>
                <p className="mt-2">{description}</p>

                {/* Conditionally render icons after description typing completes */}
                {showIcons && (
                    <>
                        <div className="flex h-10 mt-5 mb-5 items-center animate-slide-up">
                            <NavLink to='/about'
                                     className="w-24 h-10 px-2 mx-3 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
                                <p className="text-black">About</p>
                                <PiFinnTheHumanFill className="pl-2" size="2em"/>
                            </NavLink>
                            <NavLink to='/projects'
                                     className="w-24 h-10 px-2 mx-3 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
                                <p className="text-black">Project</p>
                                <HiArchiveBox className="pl-2" size="2em"/>
                            </NavLink>
                        </div>
                        <div className="flex h-10 mt-20 items-center animate-slide-up">
                            <a href={profiles.githubUrl} target="_blank" rel="noopener noreferrer"
                               className="mx-4 text-green-800 hover:text-green-600">
                                <FaGithub size="2em"/>
                            </a>
                            <a href={profiles.linkedInUrl} target="_blank" rel="noopener noreferrer"
                               className="mx-4 text-blue-700 hover:text-blue-500">
                                <FaLinkedin size="2em"/>
                            </a>
                            <a href={profiles.steamUrl} target="_blank" rel="noopener noreferrer"
                               className="mx-4 text-black hover:text-gray-700">
                                <FaSteam size="2em"/>
                            </a>
                            <a href={profiles.instagramUrl} target="_blank" rel="noopener noreferrer"
                               className="mx-4 text-pink-600 hover:text-pink-400">
                                <FaInstagram size="2em"/>
                            </a>
                        </div>
                    </>
                )}

                <div className="absolute bottom-2 left-2">
                    <img
                        src={!isPlayingMusic ? soundoff : soundon}
                        alt="sound"
                        className="w-10 h-10 cursor-pointer object-contain"
                        onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                    />
                </div>

                {showIcons ? false : <div className="absolute bottom-2 right-2 flex mt-2 mb-2 mx-2 px-2">
                    <p className="mt-2 mx-2">Skip</p>
                    <button onClick={handleSkip}><BsFillSkipForwardFill className="mt-2" size="2em"/></button>
                </div>}
            </div>
        </main>
    )
}

export default Home