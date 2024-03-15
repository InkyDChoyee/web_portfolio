import React, { useState, useEffect } from "react";
import "../../../resources/css/info_css/about.css";
import AboutTop from "./AboutTop";
import MyName from "./MyName";
import MyPhone from "./MyPhone";
import MyBirth from "./MyBirth";
import MyEmail from "./MyEmail";

const AboutMe = ({ onSkillsClick }) => {
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setExpanded1(true);
    }, 500);
    const timer2 = setTimeout(() => {
      setExpanded2(true);
    }, 1000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className={`about_me_box ${expanded1 ? "expanded" : ""}`}>
      <div className={`about_me ${expanded2 ? "expanded" : ""}`}>
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
