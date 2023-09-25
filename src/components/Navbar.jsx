import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
    FaBars,
    FaGithub,
    FaLinkedin,
    FaTimes,
    FaSun,
    FaMoon,
} from 'react-icons/fa'
import './Navbar.css';

function Navbar() {
    const [nav, setNav] = useState(false);
    const [theme, setTheme] = useState(null);

    const handleClick = () => setNav(!nav);

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark').matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

return (
    <div className='w-full h-[80px] flex justify-evenly items-center px-4 bg-steel-dark text-grey-light dark:bg-ice-dark'>
        {/* Dark Mode Switch */}
        <div className='flex px-4 text-grey-light hover:scale-150 duration-150 hover:text-yellow-light'>
            {theme === 'light' ? (
                <FaSun onClick={handleThemeSwitch} className='cursor-pointer' size={30}/>
            ) : (
                <FaMoon onClick={handleThemeSwitch} className='cursor-pointer' size={30}/>
            )}
        </div>
        {/* menu */}
        <ul className='hidden md:flex gap-x-8'>
            <li className='nav-list-item'>
                <NavLink to='/'>
                    Home
                </NavLink>
            </li>
            <li className='nav-list-item'>
                <NavLink to='/about'>
                    About
                </NavLink>
            </li>
            <li className='nav-list-item'>
                <NavLink to='/skills'>
                    Skills
                </NavLink>
            </li>
            <li className='nav-list-item'>
                <NavLink to='/works'>
                    Work
                </NavLink>
            </li>
            <li className='nav-list-item'>
                <NavLink to='/contact'>
                    Contact
                </NavLink>
            </li>
        </ul>
        {/* Empty Spacer */}
        <div className='flex px-4 text-grey-light'></div>
        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* Mobile menu */}
        <ul
            className={
                !nav
                    ? 'hidden'
                    : 'absolute top-0 left-0 w-full h-screen bg-steel-dark dark:bg-ice-dark text-grey-light flex flex-col justify-center items-center p-4'
            }
        >
            <li className='py-6 text-2xl'>
                <NavLink onClick={handleClick} to='/'>
                    Home
                </NavLink>
            </li>
            <li className='py-6 text-2xl'>
                {' '}
                <NavLink onClick={handleClick} to='/about'>
                    About
                </NavLink>
            </li>
            <li className='py-6 text-2xl'>
                {' '}
                <NavLink onClick={handleClick} to='/skills'>
                    Skills
                </NavLink>
            </li>
            <li className='py-6 text-2xl'>
                {' '}
                <NavLink onClick={handleClick} to='/projects'>
                    Projects
                </NavLink>
            </li>
            <li className='py-6 text-2xl'>
                {' '}
                <NavLink onClick={handleClick} to='/contact'>
                    Contact
                </NavLink>
            </li>
        </ul>
        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[150px] h-[60px] flex items-center ml-[-100px] hover:ml-[0px] duration-300 dark:bg-blue-800 bg-blue-600 rounded-r-full overflow-hidden'>
                    <a
                        className='flex justify-between p-2 items-center w-full text-gray-300'
                        href='https://www.linkedin.com/in/randalltaylor98/'
                        target='_blank' // Open in a new tab
                        rel='noopener noreferrer' // Security best practice
                    >
                        Linkedin<FaLinkedin size={40} />
                    </a>
                </li>
                <li className='w-[150px] h-[60px] flex items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#333333] rounded-r-full overflow-hidden'>
                    <a
                        className='flex justify-between p-2 items-center w-full text-gray-300'
                        href='https://github.com/randyyanish'
                        target='_blank' // Open in a new tab
                        rel='noopener noreferrer' // Security best practice
                    >
                        Github<FaGithub size={40} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
);
};

export default Navbar;
