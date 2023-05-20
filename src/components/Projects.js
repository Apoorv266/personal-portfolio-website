import React from "react";
import "../CompStyles/Projects.css";
import { Projectdata } from "../Data/Projectsdata";
import ProjectCard from "./Project-card";
import Seperator from "./Seperator";

function Projects() {
  const data = Projectdata;
  return (
    <div className="projects">
      <Seperator/>
      <label className="section-title">Projects</label>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project}/>;
        })}
      </div>
    </div>
  );
}

export default Projects;
