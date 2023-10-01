import React, { useState, useCallback } from 'react';
import './RadialWaves.css';

const RadialWaves = () => {
    const [waves, setWaves] = useState([]);

    // Add a new wave on click
    const handleClick = useCallback((event) => {
        const wave = {
            x: event.clientX,
            y: event.clientY,
        };
        setWaves([...waves, wave]);
    }, [waves])

    return (
        <div
            className='water-drop-container pointer-events-auto'
            onClick={handleClick}
        >
            {waves.map((wave, index) => (
                <div
                    key={index}
                    className='wave'
                    style={{
                        left: `${wave.x}px`,
                        top: `${wave.y}px`,
                    }}
                ></div>
            ))}
        </div>
    );
};

export default RadialWaves;
