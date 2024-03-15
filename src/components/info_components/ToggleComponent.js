import React, { useState } from "react";
import Skills from "../../info_components/skills/Skills";
import AboutMe from "../../info_components/about_me/AboutMe";

const ToggleComponent = () => {
  const [showAboutMe, setShowAboutMe] = useState(true);

  const toggleComponent = () => {
    setShowAboutMe(!showAboutMe);
  };

  return (
    <div>
      <button onClick={toggleComponent}>
        {showAboutMe ? "Show Skills" : "Show About Me"}
      </button>
      {showAboutMe ? <AboutMe /> : <Skills />}
    </div>
  );
};

export default ToggleComponent;
