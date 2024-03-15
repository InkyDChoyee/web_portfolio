import React from "react";
import "../../resources/css/info_css/infoheader.css";

const InfoHeader = ({ onAboutMeClick, onSkillsClick, currentComponent }) => {
  return (
    <div className="info_header">
      <div className="portfolio_title">
        <p>Choyee's</p>
      </div>
      <div className="switching_btn_box">
        <button
          className={currentComponent === "about" ? "active" : ""}
          onClick={onAboutMeClick}
        >
          ABOUT
        </button>
        <button
          className={currentComponent === "skills" ? "active" : ""}
          onClick={onSkillsClick}
        >
          SKILL
        </button>
      </div>
    </div>
  );
};

export default InfoHeader;
