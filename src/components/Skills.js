import React from "react";
import "../resources/css/info/skills.css";
import DbServerPart from "./DbServerPart";
import ToolPart from "./ToolPart";
import BackEndPart from "./BackEndPart";
import FrontEndPart from "./FrontEndPart";
import SkillTop from "./SkillTop";

const Skills = ({ onAboutMeClick }) => {
  return (
    <div className="skills_box">
      <div className="skills">
        <SkillTop onAboutMeClick={onAboutMeClick} />
        <FrontEndPart />
        <BackEndPart />
        <ToolPart />
        <DbServerPart />
      </div>
    </div>
  );
};

export default Skills;
