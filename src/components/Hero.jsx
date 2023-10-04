import React from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/Taylor-Randall-Headshot.jpg";

function Hero() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <div id="Hero" className="lg:px-24 px-16 h-auto">
      <div className="text-left flex flex-col md:flex-row md:items-center md:justify-center">
        <div className="md:w-1/2 xl:w-1/3">
          <h1 className="font-serif text-metal-dark dark:text-purple-light text-4xl duration-500 lg:text-5xl pointer-events-auto">
            Randall Taylor
          </h1>
          <p className="typewriter anim-typewriter text-ice-dark dark:text-ice pointer-events-auto">
            Full-Stack Dev.
          </p>
          <div className="hidden md:flex justify-center items-center mt-8">
            <button
              onClick={handleClick}
              className="explore-btn rounded-full hover:bg-ice-light hover:text-magenta-dark bg-ice-dark py-2 px-8 text-steel-light text-3xl font-serif dark:hover:bg-magenta-dark dark:hover:text-ice-light dark:hover:after:border-yellow-dark pointer-events-auto"
            >
              Explore
            </button>
          </div>
        </div>
        <div className="md:w-1/2 xl:w-1/3">
          <img
            className="rounded-3xl w-auto my-4 pointer-events-auto"
            src={heroImage}
            alt="A headshot of Randall Taylor, developer."
          />
        </div>
        <div className="flex justify-center md:hidden">
          <button
            onClick={handleClick}
            className="explore-btn rounded-full hover:bg-steel-dark bg-ice-dark py-2 px-8 text-steel-light text-3xl font-serif pointer-events-auto"
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
