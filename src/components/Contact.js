import React from "react";
import Seperator from "./Seperator";
import "../CompStyles/Contact.css";
import Social from "../components/Social"

function Contact() {
  return (
    <div className="contact">
      <Seperator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch ? Contact me on any of these platforms:</p>
          <Social />
        </div>
        <div className="download-btn">
          <a download href={"../Assets/Resume.pdf"}><i class="fi fi-br-download download-icon" />Download My Resume</a>

        </div>
      </div>
    </div>
  );
}

export default Contact;

