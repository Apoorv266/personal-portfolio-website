import React from "react";
import "../CompStyles/Project-card.css";

function CerficateCard(props) {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{props.certi.title}</label>
        <div className="project-links">
          {/* {props.project.demo && (
            <a className="project-link" href={props.project.demo}>
              <div className="link-button">
                <i class="fi-rr-globe"></i>Demo
              </div>
            </a>
          )}

          {props.project.github && (
            <a className="project-link" href={props.project.github}>
              <div className="link-button">
                <i class="devicon-github-original colored"></i>Github
              </div>
            </a>
          )} */}
        </div>
        <p>{props.certi.about}</p>
        {/* <div className="project-tags">
          {props.project.tags.map((tags) => {
            return <label className="tag">{tags}</label>;
          })}

        </div> */}
      </div>
      <img src={props.certi.image} alt="" className="project-photo" />
    </div>
  );
}

export default CerficateCard;
