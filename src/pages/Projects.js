import React, { useRef } from "react";
import ProjectHeader from "../components/projects_components/ProjectHeader";
import ProjectFooter from "../components/projects_components/ProjectFooter";
import ProjectList from "../components/projects_components/ProjectList";
import "../resources/css/projects_css/project.css";

const Project = () => {
  const projectListBoxRef = useRef(null);

  return (
    <div className="project">
      <ProjectHeader />
      <ProjectList listBoxRef={projectListBoxRef} />
      <ProjectFooter listBoxRef={projectListBoxRef} />
    </div>
  );
};

export default Project;
