import React from 'react';
import './Hero.css'
import heroImage from '../assets/Taylor-Randall-Headshot.jpg';

function Hero() {
    return (
        <div id='Hero' className='flex-col justify-items-center px-4 h-auto'>
            <div className='text-left'>
                <h1
                    className='font-serif text-metal-dark text-5xl duration-500 flex-nowrap'>
                    Randall Taylor
                </h1>
                <p
                    className='line-1 anim-typewriter text-ice-dark'>
                    Thanks for stopping by!
                </p>
            </div>
            <img className='rounded-3xl w-auto my-4' src={heroImage} alt='A headshot of Randall Taylor, developer.' />
            <div className='flex justify-center'>
                <button
                    className='button rounded-full hover:bg-steel-dark bg-ice-dark py-2 px-8 text-steel-light text-3xl font-serif'>
                    Explore
                </button>
            </div>
        </div>
    )
};

export default Hero;
