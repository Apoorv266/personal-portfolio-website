import React from "react";
import "../CompStyles/Social.css";
import SocialData from "../Data/SocialData";



function Social() {
  return (
    <div className="social-contact">
      {SocialData.map((item) => {
        return (
          <a href={item.Link} target="_blank">
            <div className="social-icon-div">
              <img src= {item.Icon} alt="" className="social-icon"/>
              {/* <p>{item.Platform}</p> */}
            </div>
          </a>
        );
      })}
      </div>
  );
}

export default Social;
