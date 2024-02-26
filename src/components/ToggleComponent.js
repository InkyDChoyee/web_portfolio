import React, { useState } from "react";
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";

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
