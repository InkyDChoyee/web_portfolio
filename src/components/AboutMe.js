import React from "react";
import "../resources/css/about.css";
import AboutTop from "./AboutTop";
import MyName from "./MyName";
import MyPhone from "./MyPhone";
import MyBirth from "./MyBirth";
import MyEmail from "./MyEmail";

const AboutMe = ({ onSkillsClick }) => {
  return (
    <div className="about_me_box">
      <div className="about_me">
        <AboutTop onSkillsClick={onSkillsClick} />
        <div className="about_me_info">
          <MyName />
          <MyPhone />
          <MyBirth />
          <MyEmail />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
