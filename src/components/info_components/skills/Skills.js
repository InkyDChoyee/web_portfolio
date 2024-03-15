import React, { useState, useEffect } from "react";
import "../../../resources/css/info_css/skills.css";
import DbServerPart from "./DbServerPart";
import ToolPart from "./ToolPart";
import BackEndPart from "./BackEndPart";
import FrontEndPart from "./FrontEndPart";
import SkillTop from "./SkillTop";

const Skills = ({ onAboutMeClick }) => {
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setExpanded1(true);
    }, 0);
    const timer2 = setTimeout(() => {
      setExpanded2(true);
    }, 500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className={`skills_box ${expanded1 ? "expanded" : ""}`}>
      <div className={`skills ${expanded2 ? "expanded" : ""}`}>
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
