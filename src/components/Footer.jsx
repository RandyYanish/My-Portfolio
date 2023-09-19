import React, {useState} from 'react';
import {
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa'

function Footer() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <footer className='bottom-0 w-full h-[80px] flex justify-between items-center px-4 bg-steel-dark text-grey-light'>

            <div className=''>
                <a
                    className='flex justify-between items-center w-full text-gray-300'
                    href='https://www.linkedin.com/in/randalltaylor98/'
                    target='_blank' // Open in a new tab
                    rel='noopener noreferrer' // Security best practice
                >
                    <FaLinkedin size={40} />
                </a>
            </div>
            <div>
                <button className='bg-ice-dark  p-2 px-4 rounded-full font-sans' onClick={handleClick} to='/' >Contact</button>
            </div>
            <div className=''>
                <a
                    className='flex justify-between items-center w-full text-gray-300'
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
