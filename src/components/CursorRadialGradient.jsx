import React, { useState, useEffect } from 'react';

const CursorRadialGradient = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    // Update the cursor position state based on mouse movement
    const updateCursorPosition = (event) => {
        setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    // Add an event listener to track mouse movement
    useEffect(() => {
        document.addEventListener('mousemove', updateCursorPosition);
        return () => {
            document.removeEventListener('mousemove', updateCursorPosition);
        };
    }, []);

    // Create a gradient background style
    const gradientStyle = {
        // position: 'fixed',
        // width: '200px', // Adjust the size as needed
        // height: '200px', // Adjust the size as needed
        // borderRadius: '50%',
        // background: 'radial-gradient(circle, transparent 80%)',
        // pointerEvents: 'none',
        // transform: 'translate(-50%, -50%)',
        // mixBlendMode: 'screen', // Optional: To create a blend effect
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
    };

    return (
        <div style={gradientStyle} className="z-0 from-steel-dark bg-gradient-to-t rounded-full -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] fixed pointer-events-none"></div>
    );
};

export default CursorRadialGradient;
