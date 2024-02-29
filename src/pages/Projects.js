import React from "react";
import ProjectHeader from "../components/ProjectHeader";
import "../resources/css/project.css";
import ProjectFooter from "../components/ProjectFooter";
import ProjectList from "../components/ProjectList";

const Project = () => {
  return (
    <div className="project">
      <ProjectHeader />
      <ProjectList />
      <ProjectFooter />
    </div>
  );
};

export default Project;
