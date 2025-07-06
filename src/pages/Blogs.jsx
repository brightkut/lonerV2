

import { soundoff, soundon } from '../assets/icons/index.js'
import { useTheme } from "../theme/ThemeContext.jsx";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import { useEffect, useState } from "react";

const Blogs = ({ isPlayingMusic, setIsPlayingMusic }) => {

    const { theme } = useTheme();


    return (
        <>
            <Navbar />
            <section className="max-container">

            </section>
            <Footer />
            <div className="w-1/2 h-ful pr-8">
                <div className="fixed bottom-2 left-2">
                    <img
                        src={!isPlayingMusic ? soundoff : soundon}
                        alt="sound"
                        className="w-10 h-10 cursor-pointer object-contain"
                        onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                    />
                </div>
            </div>
        </>
    )
}


export default Blogs
