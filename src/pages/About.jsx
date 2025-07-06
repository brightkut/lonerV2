import { educations, experiences, skills } from "../constant/index";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { loadSnowPreset } from "tsparticles-preset-snow";
import Particles from "react-particles";
import Footer from "../components/Footer.jsx";
import ChatBot from "../components/Chatbot.jsx";
import { useTheme } from "../theme/ThemeContext.jsx";
import Navbar from "../components/Navbar.jsx";
import React, { useCallback } from "react";
import { soundoff, soundon } from "../assets/icons/index.js";
import { profile } from "../assets/images/index.js";
import { Link } from "react-router-dom";

const options = {
    "fullScreen": {
        "enable": true,
        "zIndex": 1
    },
    "particles": {
        "number": {
            "value": 400,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#BEBEBE"
        },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 10,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 500,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "bottom",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 0.5
                }
            },
            "bubble": {
                "distance": 400,
                "size": 4,
                "duration": 0.3,
                "opacity": 1,
                "speed": 3
            },
            "repulse": {
                "distance": 200
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true,
    "background": {
        "color": "#fffff",
        "image": "",
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "cover"
    },
    style: {
        width: "100%",
        height: "300px",
        position: "relative"
    },
};

const About = ({ isPlayingMusic, setIsPlayingMusic }) => {
    const { theme } = useTheme();

    const getAge = useCallback((birthDateStr) => {
        const birthDate = new Date(birthDateStr);

        // Get the current date
        const currentDate = new Date();

        // Calculate the difference between the current date and the birthdate
        const age = currentDate.getFullYear() - birthDate.getFullYear();

        // Adjust if the birthday hasn't occurred this year yet
        const monthDifference = currentDate.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
            return age - 1;
        }

        return age;
    }, []);

    const customInit = async (engine) => {
        await loadSnowPreset(engine);
    }
    return (
        <>
            <Navbar />
            <section className="max-container">
                <h1 className="head-text">
                    <span
                        className="blue-gradient_text2 dark:yellow-gradient_text font-semibold drop-shadow">Who am I ?</span>
                </h1>

                <div className="mt-5 text-slate-500 dark:text-slate-300">
                    <div className="relative flex justify-center items-center mt-12 mb-12 w-full ">
                        <div className="absolute inset-0 z-0 h-full w-full">
                            <Particles options={options} init={customInit} />
                        </div>

                        <div className="relative z-10 flex justify-center items-center">
                            <img src={profile}
                                alt="profile"
                                className='profile rounded-full w-64 h-64 object-cover hadow-gray-glow dark:shadow-white-glow'
                            />
                        </div>
                    </div>
                    Hello! I’m <span
                        className="text-blue-500 dark:text-yellow-400 font-semibold drop-shadow">Bright 🇹🇭</span>, a
                    software
                    engineer with a passion for learning and exploring new things at {getAge("1997/03/29")}.
                    I enjoy coding and gaming in my free time—especially Dota 2.
                    Don’t hesitate to challenge me to a match! I believe in hard work more than in talent; it’s all
                    about
                    trying and improving.
                </div>

                <div className="py-10 flex flex-col ">
                    <h3 className="subhead-text">
                        <span className="text-blue-500 dark:text-yellow-400 font-semibold">My Skills</span>
                    </h3>
                    <div className='mt-16 flex flex-wrap gap-12'>
                        {skills.map((skill) => (
                            <Link to={skill.link} key={skill.name} className="no-underline">
                                <div className="flex-col w-20 justify-center">
                                    <div className='block-container w-20 h-20'>
                                        <div className='btn-back rounded-xl bg-slate-200' />
                                        <div className='btn-front rounded-xl flex justify-center items-center bg-slate-200'>
                                            <img
                                                src={skill.imageUrl}
                                                alt={skill.name}
                                                className='w-1/2 h-1/2 object-contain'
                                            />
                                        </div>
                                    </div>
                                    <p className="justify-center text-center mt-2 font-medium dark:text-slate-200">{skill.name}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <h3 className='subhead-text'>
                    <span className="text-blue-500 dark:text-yellow-400 font-semibold">Education</span>
                </h3>
                <div className='mt-5 flex flex-col gap-3 text-slate-500 dark:text-slate-300'>
                    <p>
                        I’ve sharpened my skills through my studies, diving into complex topics and collaborating with
                        bright minds. Here's the lowdown on my educational journey:
                    </p>
                </div>

                <div className='mt-12 flex'>
                    <VerticalTimeline lineColor={theme === 'dark' ? 'white' : "black"}>
                        {educations.map((education, index) => (
                            <VerticalTimelineElement
                                visible={true}
                                key={education.location_name}
                                date={education.date}
                                dateClassName="text-black dark:text-white font-semibold"
                                iconStyle={{ background: education.iconBg }}
                                icon={
                                    <div className='flex justify-center items-center w-full h-full'>
                                        <img
                                            src={education.icon}
                                            alt={education.location_name}
                                            className='w-[60%] h-[60%] object-contain'
                                        />
                                    </div>
                                }
                                contentStyle={{
                                    backgroundColor: theme === 'dark' ? '#262C30' : 'white',
                                    borderBottom: "8px",
                                    borderStyle: "solid",
                                    borderBottomColor: theme === 'dark' ? '#FACC15' : '#3B82F6',
                                    boxShadow: "none",
                                }}
                            >
                                <div>
                                    <h3 className='text-black dark:text-white text-xl font-poppins font-semibold'>
                                        {education.title}
                                    </h3>
                                    <p
                                        className='text-black font-medium text-base'
                                        style={{
                                            margin: 0,
                                            color: theme === 'dark' ? '#FACC15' : '#3B82F6',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        {education.location_name}
                                    </p>
                                </div>

                                <ul className='my-5 list-disc ml-5 space-y-2'>
                                    {education.points.map((point, index) => (
                                        <li
                                            key={`experience-point-${index}`}
                                            className={theme === 'dark' ? '!text-slate-400 font-normal pl-1 text-sm' : '!text-zinc-500 font-normal pl-1 text-sm'}
                                        >
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>

                <h3 className='subhead-text mt-10'>
                    <span className="text-blue-500 dark:text-yellow-400 font-semibold">Work Experience</span>
                </h3>
                <div className='mt-5 flex flex-col gap-3 text-slate-500 dark:text-slate-300'>
                    <p>
                        I’ve partnered with different companies, growing my expertise and learning from brilliant
                        teammates.
                        Here’s the breakdown:
                    </p>
                </div>

                <div className='mt-12 flex'>
                    <VerticalTimeline lineColor={theme === 'dark' ? 'white' : "black"}>
                        {experiences.map((experience, index) => (
                            <VerticalTimelineElement
                                visible={true}
                                key={experience.company_name}
                                date={experience.date}
                                dateClassName="text-black dark:text-white font-semibold"
                                iconStyle={{ background: experience.iconBg }}
                                icon={
                                    <div className='flex justify-center items-center w-full h-full'>
                                        <img
                                            src={experience.icon}
                                            alt={experience.company_name}
                                            className='w-[60%] h-[60%] object-contain'
                                        />
                                    </div>
                                }
                                contentStyle={{
                                    backgroundColor: theme === 'dark' ? '#262C30' : 'white',
                                    borderBottom: "8px",
                                    borderStyle: "solid",
                                    borderBottomColor: theme === 'dark' ? '#FACC15' : '#3B82F6',
                                    boxShadow: "none",
                                }}
                            >
                                <div>
                                    <h3 className='text-black dark:text-white text-xl font-poppins font-semibold'>
                                        {experience.title}
                                    </h3>
                                    <p
                                        className='text-black font-medium text-base'
                                        style={{
                                            margin: 0,
                                            color: theme === 'dark' ? '#FACC15' : '#3B82F6',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        {experience.company_name}
                                    </p>
                                </div>

                                <ul className='my-5 list-disc ml-5 space-y-2'>
                                    {experience.points.map((point, index) => (
                                        <li
                                            key={`experience-point-${index}`}
                                            className={theme === 'dark' ? '!text-slate-400 font-normal pl-1 text-sm' : '!text-zinc-500 font-normal pl-1 text-sm'}
                                        >
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>

                <hr className='border-slate-200 mt-10' />

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

export default About
