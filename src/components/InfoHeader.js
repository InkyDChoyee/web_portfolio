import React from "react";
import "../resources/css/info/infoheader.css";

const InfoHeader = ({ onAboutMeClick, onSkillsClick }) => {
  return (
    <div className="info_header">
      <div className="portfolio_title">
        <p>Choyee's</p>
      </div>
      <div className="switching_btn_box">
        <button onClick={onAboutMeClick}>ABOUT</button>
        <button onClick={onSkillsClick}>SKILL</button>
      </div>
    </div>
  );
};

export default InfoHeader;
