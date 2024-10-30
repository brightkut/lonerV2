import {NavLink, useLocation} from "react-router-dom";
import {useTheme} from "../theme/ThemeContext.jsx";
import {FaMoon, FaSun} from "react-icons/fa";

const Navbar = ()=>{
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();
    const pathName = location.pathname;

    const handleDarkMode = () => {
        if (theme === "dark") {
            toggleTheme("light");
        } else {
            toggleTheme("dark");
        }
    };

    return (
        <header className='header'>
            <NavLink to='/' className="w-20 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
                <p className="blue-gradient_text dark:yellow-gradient_text">LonEr.</p>
            </NavLink>
            <nav className="flex text-lg gap-7 font-medium">
                <NavLink to="/about" className={({isActive}) => isActive ? 'text-blue-500 dark:text-yellow-500' : 'text-black dark:text-gray-500'}>
                    About
                </NavLink>
                <NavLink to="/projects" className={({isActive}) => isActive ? 'text-blue-500 dark:text-yellow-500' : 'text-black dark:text-gray-500'}>
                    Projects
                </NavLink>
                {pathName === '/' ? false : <ul className="flex items-center">
                    <li className="mx-3">
                        <button
                            className="flex items-center text-blue-500 dark:text-yellow-500 focus:outline-none"
                            onClick={handleDarkMode}
                        >
                            {theme !== "dark" ? <FaSun/> : <FaMoon/>}
                        </button>
                    </li>
                </ul>}

            </nav>
        </header>
    )
}

export default Navbar