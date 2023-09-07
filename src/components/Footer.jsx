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
            
        </div>
    );
};
