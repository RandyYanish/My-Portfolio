import React from 'react';
import './Hero.css'
import heroImage from '../assets/Taylor-Randall-Headshot.jpg';

function Hero() {
    return (
        <div id='Hero' className='flex align-middle justify-center'>
            <img src={heroImage} alt='A headshot of Randall Taylor, developer.' />
        </div>
    )
};

export default Hero;
