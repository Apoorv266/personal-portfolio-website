import React from "react";
import "../CompStyles/Work-card.css";
function WorkCard({ item }) {
  return (
    <div className="work-card">
      <img src={item.companyLogo} className="work-logo" />
      <div className="work-info">
        <h3><label className="company-name">{item.company}</label></h3>
        <label className="company-Desig">Role - {item.Designation}</label>
        <div className="work-dates">
          <label>{item.date}{item.Dateend}</label>
        </div>
        <div className="work-desc">
          <p>{item.Work}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
