import React from "react";
import "../CompStyles/Skills.css";
import { SkillsData } from "../Data/SkillsData";
import Seperator from "./Seperator";

function Skills() {
  const data = SkillsData;
  return (
    <div className="skills">
      <Seperator />
      <label className="section-title">Skills</label>
      <div className="skills-container">
        {data.map((item) => {
          return (
            <div className="skills-section">
              <label className="skills-section-title">{item.Skill}</label>
              <div className="skills-list">
                {item.List.map((skill) => {
                  return (
                    <div className="skill-card">
                      <div className="skill-icon">{skill.icon}</div>
                      <div className="skill-name">{skill.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
