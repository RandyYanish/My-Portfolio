import React, {useState} from 'react';
import {
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa'

function Footer() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <footer className='bottom-0 w-full h-[80px] flex justify-evenly items-center px-4 bg-steel-dark text-grey-light dark:bg-ice-dark'>

            <div className=''>
                <a
                    className='flex items-center w-full text-gray-300 hover:text-ice-light hover:scale-125 duration-150'
                    href='https://www.linkedin.com/in/randalltaylor98/'
                    target='_blank' // Open in a new tab
                    rel='noopener noreferrer' // Security best practice
                >
                    <FaLinkedin size={40} />
                </a>
            </div>
            <div>
                <button className='bg-ice-dark dark:bg-magenta-dark  p-2 px-4 rounded-full font-sans hover:scale-125 hover:shadow-2xl hover:shadow-ice duration-150' onClick={handleClick} to='/' >Contact</button>
            </div>
            <div className=''>
                <a
                    className='flex items-center w-full text-gray-300 hover:text-ice-light hover:scale-125 duration-150'
                    href='https://github.com/randyyanish'
                    target='_blank' // Open in a new tab
                    rel='noopener noreferrer' // Security best practice
                >
                    <FaGithub size={40} />
                </a>
            </div>

        </footer>
    );
};

export default Footer;
