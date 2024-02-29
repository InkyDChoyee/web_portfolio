import React from "react";
import HeaderSubMenu from "./HeaderSubMenu";
import "../resources/css/projectheader.css";

const ProjectHeader = () => {
  return (
    <div className="project_header">
      <div className="project_header_menu">
        <p>
          <span>●</span>
          <span>●</span>
          <span>●</span>
        </p>
        <HeaderSubMenu />
      </div>
      <div className="project_page_title">
        <p>PROJECTS</p>
      </div>
    </div>
  );
};

export default ProjectHeader;
