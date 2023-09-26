import React from 'react';
// import './About-intro.css';
import { useNavigate } from 'react-router-dom';
import credlyBadge from '../assets/credlyBadge.png';

function AboutIntro() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/about');
    };

    return (
        <div className='flex-col items-center lg:px-24 px-4 h-auto'>
            <div className='text-left flex flex-col md:flex-row md:items-center p-4'>
                <div className=''>
                    <h1 className='font-serif text-metal-dark dark:text-purple-light text-5xl duration-500 flex-nowrap'>
                        Randall Taylor
                    </h1>
                    <div className=''>
                        <p className='text-ice-dark dark:text-ice font-sans text-xl p-4'>
                            Randall Taylor is a skilled Full-Stack Engineer with a strong foundation in both front-end and back-end development. He holds a Full-Stack Software Engineering Certificate from the University of Minnesota, demonstrating his commitment to continuous learning and growth in the field.
                        </p>
                        <p className='text-ice-dark dark:text-ice font-sans text-xl p-4'>
                            Randall's technical skills encompass a wide range of technologies, including HTML, CSS, JavaScript, React, Node.js, Express, SQL, MongoDB, and many more. His proficiency extends to version control with Git and GitHub, as well as testing with Jest and design with Figma.
                        </p>
                        <p className='text-ice-dark dark:text-ice font-sans text-xl p-4'>
                            Throughout his career, Randall has successfully translated his technical expertise into practical application. As a Full-Stack Developer, he worked on projects like "123-Shop!" and "Event-Planner," showcasing his ability to collaborate, innovate, and deliver high-quality web applications. His problem-solving skills and meticulous approach to development have consistently produced outstanding results.
                        </p>
                        <p className='text-ice-dark dark:text-ice font-sans text-xl p-4'>
                            Beyond software engineering, Randall has a diverse professional background. During his time at Target, he displayed his organizational prowess by designing and implementing efficient back-room storage systems, optimizing labor utilization across multiple departments. His adaptability and strong interpersonal skills have enabled him to thrive in different roles, from being the Head Lighting Designer and Production Manager at Purple Hat Productions to excelling as a Mortgage Banker at Network Capital.
                        </p>
                        <p className='text-ice-dark dark:text-ice font-sans text-xl p-4'>
                            Notably, Randall received the President's Award in 2019 for his exceptional sales leadership at a Honda dealership, emphasizing his ability to build strong customer relationships and exceed performance goals. He has also generously contributed his time to the community, volunteering extensively with the Fargo-Moorhead Community Theatre.
                        </p>
                        <p className='text-ice-dark dark:text-ice font-sans text-xl p-4'>
                            Randall is a versatile and accomplished professional, known for his technical prowess, problem-solving abilities, and dedication to both personal and community growth. His journey as a Full-Stack Software Engineer is marked by continuous learning, adaptability, and commitment to excellence.
                        </p>
                    </div>
                    <div className=''>
                        {/* Add the link to your Credly badge here */}
                        <div className='flex justify-center scale-75' >
                            <a
                                href='https://www.credly.com/badges/f942e08a-7310-4ffb-8d05-e23612003ed5/'
                                target='_blank'  // Opens in a new tab
                                rel='noopener noreferrer' // Security best practice
                            >
                                <img src={credlyBadge} alt='Credly Badge for Full Stack Web Development Certificate from the University of Minnesota' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center md:hidden'>
                    <button
                        onClick={handleClick}
                        className='explore-btn rounded-full hover:bg-steel-dark bg-ice-dark py-2 px-8 text-steel-light text-3xl font-serif'>
                        Explore
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AboutIntro;
