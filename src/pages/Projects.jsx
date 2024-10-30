import {projects} from "../constant/index.js";
import {Link} from "react-router-dom";
import {arb, ary} from '../assets/icons'
import {useTheme} from "../theme/ThemeContext.jsx";
import Footer from "../components/Footer.jsx";

const Projects = ()=>{
    const { theme, toggleTheme } = useTheme();

    return(
        <>
        <section className="max-container">
            <h1 className="head-text">
                <span
                    className="blue-gradient_text2 dark:yellow-gradient_text font-semibold drop-shadow">My Projects</span>
            </h1>

            <p className='text-slate-500 dark:text-slate-300 mt-2 leading-relaxed'>
                These are the projects I’ve invested my time and passion in, and I’m excited to share them with you. A
                lot of them are open-source, so if anything catches your interest, you’re more than welcome to explore
                the code and contribute your ideas. I appreciate your collaboration!
            </p>

            <h3 className="subhead-text mt-10">
                <span className="text-blue-500 dark:text-yellow-400 font-semibold">Blog</span>
            </h3>

            <div className='flex flex-wrap my-10 gap-16'>
                {projects.filter(p => p.type === 'blog').map((project) => (
                    <div className='lg:w-[400px] w-full dark:text-white' key={project.name}>
                        <div className='block-container w-12 h-12'>
                            <div className={`btn-back rounded-xl ${project.theme}`}/>
                            <div className='btn-front rounded-xl flex justify-center items-center'>
                                <img
                                    src={project.iconUrl}
                                    alt='threads'
                                    className='w-1/2 h-1/2 object-contain'
                                />
                            </div>
                        </div>

                        <div className='mt-5 flex flex-col'>
                            <h4 className='text-2xl font-poppins font-semibold'>
                                {project.name}
                            </h4>
                            <p className='mt-2 text-slate-500 dark:text-slate-300'>{project.description}</p>
                            <div className='mt-5 flex items-center gap-2 font-poppins'>
                                <Link
                                    to={project.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='font-semibold text-blue-600 dark:text-yellow-400'
                                >
                                    Link To
                                </Link>
                                <img
                                    src={theme === 'dark' ? ary : arb}
                                    alt='arrow'
                                    className='w-4 h-4 object-contain'
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <h3 className="subhead-text mt-10">
                <span className="text-blue-500 dark:text-yellow-400 font-semibold">Website</span>
            </h3>

            <div className='flex flex-wrap my-10 gap-16'>
                {projects.filter(p => p.type === 'web').map((project) => (
                    <div className='lg:w-[400px] w-full dark:text-white' key={project.name}>
                        <div className='block-container w-12 h-12'>
                            <div className={`btn-back rounded-xl ${project.theme}`}/>
                            <div className='btn-front rounded-xl flex justify-center items-center'>
                                <img
                                    src={project.iconUrl}
                                    alt='threads'
                                    className='w-1/2 h-1/2 object-contain'
                                />
                            </div>
                        </div>

                        <div className='mt-5 flex flex-col'>
                            <h4 className='text-2xl font-poppins font-semibold'>
                                {project.name}
                            </h4>
                            <p className='mt-2 text-slate-500 dark:text-slate-300'>{project.description}</p>
                            <div className='mt-5 flex items-center gap-2 font-poppins'>
                                <Link
                                    to={project.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='font-semibold text-blue-600 dark:text-yellow-400'
                                >
                                    Link To
                                </Link>
                                <img
                                    src={theme === 'dark' ? ary : arb}
                                    alt='arrow'
                                    className='w-4 h-4 object-contain'
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default Projects