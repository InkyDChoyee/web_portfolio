import React from "react";
import "../resources/css/projectlist.css";
import ProjectCalculator from "./ProjectCalculator";
import ProjectLibrary from "./ProjectLibrary";
import ProjectPetShop from "./ProjectPetShop";
import ProjectToDoList from "./ProjectToDoList";

const ProjectList = () => {
  return (
    <div className="project_list">
      <div className="project_list_box">
        <ProjectLibrary />
        <ProjectPetShop />
        <ProjectToDoList />
        <ProjectCalculator />
      </div>
    </div>
  );
};

export default ProjectList;
