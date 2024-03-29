import React from "react";
import HeaderSubMenu from "../projects_components/HeaderSubMenu";
import "../../resources/css/projects_css/projectheader.css";

const ProjectHeader = () => {
  return (
    <div className="project_header">
      <div className="project_header_menu">
        <div className="sub_menu_box">
          <div className="bullet"></div>
          <div className="bullet"></div>
          <div className="bullet"></div>
          <HeaderSubMenu />
        </div>
      </div>
      <div className="project_page_title">
        {/* <p>GREETINGS</p> */}
        <p>PROJECTS</p>
      </div>
    </div>
  );
};

export default ProjectHeader;
