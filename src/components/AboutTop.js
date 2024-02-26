import React from "react";

const AboutTop = ({ onSkillsClick }) => {
  const about_icon = [
    { id: "about", src: require("../resources/img/aboutme.png") },
    { id: "skill", src: require("../resources/img/skill.png") },
  ];

  return (
    <div className="about_me_top">
      <div className="about_me_title">
        <p>ABOUT ME</p>
        <img src={about_icon[0].src} />
      </div>
      <div className="about_switching_skills">
        <button onClick={onSkillsClick}>
          <img src={about_icon[1].src} />
          <p>skill</p>
        </button>
      </div>
    </div>
  );
};

export default AboutTop;
