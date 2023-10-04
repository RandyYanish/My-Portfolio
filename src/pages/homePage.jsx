import React from "react";
import Hero from "../components/Hero";
import AboutIntro from "../components/About-intro";
import CVDownload from "../components/CV-Download";
import Resume from "../components/Resume";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function HomePage() {
  return (
    <div className="">
      <div id="Home" className="my-4">
        <Hero />
      </div>
      <div id="About">
        <AboutIntro />
      </div>
      <div id="Skills">
        <Resume />
        <CVDownload />
      </div>
      <div id="Projects">
        <Projects />
      </div>
      <div id="Contact">
        <Contact />
      </div>
    </div>
  );
}

export default HomePage;
