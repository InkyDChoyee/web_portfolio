import React, { useState } from "react";
import "../resources/css/info_css/info.css";
import MainPhoto from "../components/info_components/MainPhoto";
import AboutMe from "../components/info_components/about_me/AboutMe";
import Skills from "../components/info_components/skills/Skills";
import InfoHeader from "../components/info_components/InfoHeader";

const Info = () => {
  const [currentComponent, setCurrentComponent] = useState("about");

  const showAboutMe = () => {
    setCurrentComponent("about");
  };

  const showSkills = () => {
    setCurrentComponent("skills");
  };

  return (
    <div className="info">
      <InfoHeader
        onAboutMeClick={showAboutMe}
        onSkillsClick={showSkills}
        currentComponent={currentComponent}
      />
      <MainPhoto currentComponent={currentComponent} />
      {currentComponent === "about" ? (
        <AboutMe onSkillsClick={showSkills} />
      ) : (
        <Skills onAboutMeClick={showAboutMe} />
      )}
    </div>
  );
};

export default Info;
