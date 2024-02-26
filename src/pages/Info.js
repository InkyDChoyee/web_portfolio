import React, { useState } from "react";
import "../resources/css/info.css";
import MainPhoto from "../components/MainPhoto";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import InfoHeader from "../components/InfoHeader";

const Info = () => {
  const [currentComponent, setCurrentComponent] = useState("about");

  const showAboutMe = () => {
    setCurrentComponent("about");
    document.querySelector(".main_pic").style.height = "65%";
  };

  const showSkills = () => {
    setCurrentComponent("skills");
    document.querySelector(".main_pic").style.height = "30%";
  };

  return (
    <div className="info">
      <InfoHeader onAboutMeClick={showAboutMe} onSkillsClick={showSkills} />
      <MainPhoto />
      {currentComponent === "about" ? (
        <AboutMe onSkillsClick={showSkills} />
      ) : (
        <Skills onAboutMeClick={showAboutMe} />
      )}
    </div>
  );
};

export default Info;
