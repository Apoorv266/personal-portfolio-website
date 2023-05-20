import React from "react";
import "../CompStyles/Projects.css";
import {certificatedata} from "../Data/certificatedata";
import Seperator from "./Seperator";
import CerficateCard from "./CerficateCard";

function Certificate() {
  const data = certificatedata;
  return (
    <div className="projects">
      <Seperator/>
      <label className="section-title">Certifications</label>
      <div>
      {data.map((certi) => {
          return <CerficateCard certi={certi}/>;
        })}
      </div>
    </div>
  );
}

export default Certificate

