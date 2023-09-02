import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    FaBars,
    FaGithub,
    FaLinkedin,
    FaTimes,
} from 'react-icons/fa'
import './Navbar.css';

export const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <h1 className=' font-thin text-2xl italic font-serif'>Randall Taylor</h1>
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
            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* Mobile menu */}
            <ul
                className={
                    !nav
                        ? 'hidden'
                        : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
                }
            >
                <li className='py-6 text-4xl'>
                    <NavLink onClick={handleClick} to='/'>
                        Home
                    </NavLink>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <NavLink onClick={handleClick} to='/about'>
                        About
                    </NavLink>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <NavLink onClick={handleClick} to='/skills'>
                        Skills
                    </NavLink>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <NavLink onClick={handleClick} to='/projects'>
                        Projects
                    </NavLink>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <NavLink onClick={handleClick} to='/contact'>
                        Contact
                    </NavLink>
                </li>
            </ul>
            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://www.linkedin.com/in/randalltaylor98/'
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://github.com/randyyanish'
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
