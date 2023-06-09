import React from "react";
import "../CompStyles/Mobile.css";

function Mobile(props) {
  const handleMenu = () => {
    props.setIsOpen(false);
  };
  return (
    <div className="mobile">

      <div className="close-icon" onClick={handleMenu}>
        <i class="fi fi-br-cross"></i>
      </div>


      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#project">
            <i class="fi fi-rr-edit option-icon"></i>Projects
          </a>
        </div>

        <div className="mobile-option">
          <a href="#skills">
            <i class="fi fi-rr-laptop option-icon"></i>Skills
          </a>
        </div>

        <div className="mobile-option">
        <a href='#certfications'>
        <i class="fi fi-rr-graduation-cap"></i>&nbsp;Certifications
          </a>
        </div>

        <div className="mobile-option">
          <a href="#work">
            <i class="fi fi-rr-briefcase option-icon"></i>Work
          </a>
        </div>

        <div className="mobile-option">
          <a href="#contact">
            <i class="fi fi-br-user option-icon"></i>Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
