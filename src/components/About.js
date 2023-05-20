import React from "react";
import "../CompStyles/About.css";
import Social from "./Social";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hi there iam,
          <br />
          <span className="info-name">Apoorv</span><br />
          Frontend + Design enthusiast
        </div>
        <div className="about-photo">
          <img src={"../Assets/code.png"} alt="" className="picture" />
        </div>
      </div>
      <Social/>
    </div>
  );
}

export default About;
