import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

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
        <button
          className='explore-btn rounded-full hover:bg-ice-light hover:text-magenta-dark bg-magenta-dark py-2 px-8 text-steel-light text-xl font-serif dark:hover:bg-magenta-dark dark:hover:text-ice-light dark:hover:after:border-yellow-dark pointer-events-auto flex items-center'
          onClick={handleClick}
          to='/'
        >
          Contact
        </button>
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
}

export default Footer;
