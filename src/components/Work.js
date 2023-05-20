import React from "react";
import "../CompStyles/Work.css";
import Seperator from "../components/Seperator";
import { WorkData } from "../Data/WorkData";
import Workcard from "./Work-card";

function Work() {
  const data = WorkData;
  return (
    <div className="work">
      <Seperator />
      <label className="section-title">Work</label>
      <div className="work-list">{data.map((item) => {
        return <Workcard item={item}/>
      })}
      </div>
    </div>
  );
}

export default Work;
