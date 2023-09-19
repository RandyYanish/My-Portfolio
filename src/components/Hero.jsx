import React from 'react';
import './Hero.css'
import heroImage from '../assets/Taylor-Randall-Headshot.jpg';

function Hero() {
    return (
        <div id='Hero' className='flex-col justify-items-center px-4 h-auto'>
            <div className='text-left'>
                <h1 className='font-serif text-metal-dark text-5xl duration-500 flex-nowrap'>Randall Taylor</h1>
                <p className='text-left font-sans text-xl'>Thanks for stopping by!</p>
            </div>
            <img className='rounded-3xl w-auto my-8' src={heroImage} alt='A headshot of Randall Taylor, developer.' />
            <div className=''>
                <button className='bg-ice-dark rounded-full py-2 px-6 text-steel-light text-3xl'>Explore</button>
            </div>
        </div>
    )
};

export default Hero;
