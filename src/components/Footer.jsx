import {FaGithub, FaInstagram, FaLinkedin ,FaSteam} from "react-icons/fa";
import React from "react";
import {profiles} from "../constant/index.js";

const Footer= ()=>{

    return (
        <footer>
            <div className="flex h-10 mb-5 justify-center items-center">
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
        </footer>

    );
}

export default Footer