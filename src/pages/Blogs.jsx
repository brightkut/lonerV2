

import { soundoff, soundon } from '../assets/icons/index.js'
import { useTheme } from "../theme/ThemeContext.jsx";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import ChatBot from "../components/Chatbot.jsx";
import { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

const blogTopics = [
    { title: 'Scalability', fileName: 'Scalability' },
    { title: 'ACID Theorem', fileName: 'ACID' },
    { title: 'CAP Theorem', fileName: 'CAP' },
    { title: 'API Design Best Practice', fileName: 'api-design' },
    { title: 'Latency vs Throughput', fileName: 'latency' },
    { title: 'What is Rate limit ?', fileName: 'ratelimit' },
    { title: 'How to store index in database table ?', fileName: 'table-store-index' },
];

const Blogs = ({ isPlayingMusic, setIsPlayingMusic }) => {

    const { theme } = useTheme();

    return (
        <>
            <Navbar />
            <section className="max-container">
                <h1 className="head-text">
                    <span
                        className="blue-gradient_text2 dark:yellow-gradient_text font-semibold drop-shadow">Topics</span>
                </h1>
                <ul className="list-none ml-6 mt-10 ">
                    {blogTopics.map((topic) => (
                        <li key={topic.fileName} className='py-3'>
                            <NavLink
                                to={`/blogs/${topic.fileName}`}
                                className="text-2xl underline text-blue-600 dark:text-yellow-400 hover:underline"
                            >
                                {topic.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>

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
            <ChatBot />
        </>
    )
}


export default Blogs
