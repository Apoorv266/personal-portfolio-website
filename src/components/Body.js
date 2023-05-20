import React from "react";
import "../CompStyles/Body.css";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Work from "./Work";
import Contact from "./Contact";
import Certificate from "./Certificate"

function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>

      <section id="project">
        <Projects />
      </section>

      <section id="skills">
        <Skills/>
      </section>

      <section id="certfications">
        <Certificate/>
      </section>

      <section id="work">
        <Work/>
      </section>

      <section id="contact">
        <Contact/>
      </section>
    </div>
  );
}

export default Body;
