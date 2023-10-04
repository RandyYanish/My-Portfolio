import React, { useState, useEffect, useCallback } from "react";
import "./CursorRadialGradient.css";

const CursorRadialGradient = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Update the cursor position state based on mouse movement
  const updateCursorPosition = useCallback((event) => {
    const cursorPosition = {
      x: event.clientX,
      y: event.clientY,
    };
    setCursorPosition(cursorPosition);
  }, []);

  // Add an event listener to track mouse movement
  useEffect(() => {
    document.addEventListener("mousemove", updateCursorPosition);
    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, [updateCursorPosition]);

  return (
    <div
      style={{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
      }}
      className="gradient-style z-0 rounded-full -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] fixed pointer-events-none"
    ></div>
  );
};

export default CursorRadialGradient;
