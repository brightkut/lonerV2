import {useState, useEffect} from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaSteam } from "react-icons/fa";
import {profiles} from "../constant/index.js";

export default function TypingText() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [showIcons, setShowIcons] = useState(false); // For conditional rendering of social icons

    // const audioRef = useRef(audioRef.current = new Audio('/typing.mp3'));

    const fullTitle = 'Hi, I am Bright 😊';
    const fullDescription = 'A Software engineer from Bangkok. Can’t wait to dive into programming talks with you all! 😄 I’m open to any exciting new opportunities that come my way🌈';

    useEffect(() => {
        let titleTimeout;
        let descriptionTimeout;


        // Typing effect for the title
        if (title.length < fullTitle.length) {
            // audioRef.current.volume = 0.4; // Set volume
            // audioRef.current.loop = true;
            // audioRef.current.play(); // Play the audio
            titleTimeout = setTimeout(() => {
                setTitle(fullTitle.slice(0, title.length + 1));
            }, 100); // Adjust typing speed here (180ms per character)
        }

        // Typing effect for the description
        if (title === fullTitle && description.length < fullDescription.length) {
            // audioRef.current.volume = 0.4; // Set volume
            // audioRef.current.loop = true;
            // audioRef.current.play(); // Play the audio
            descriptionTimeout = setTimeout(() => {
                setDescription(fullDescription.slice(0, description.length + 1));
            }, 100); // Adjust typing speed here (100ms per character)
        }

        // Show icons after the description has fully typed
        if (description === fullDescription) {
            // audioRef.current.pause();
            setTimeout(() => setShowIcons(true), 500); // Add a slight delay before showing icons
        }

        return () => {
            clearTimeout(titleTimeout);
            clearTimeout(descriptionTimeout);
        };
    }, [title, description, fullTitle, fullDescription]);

    return (
        <>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="mt-2">{description}</p>

            {/* Conditionally render icons after description typing completes */}
            {showIcons && (
                <div className="flex h-10 mt-5 mb-5  items-center animate-slide-up">
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
            )}
        </>
    );
}
