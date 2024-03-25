// ProjectFooter.js
import React from "react";
import "../../resources/css/projects_css/projectfooter.css";
import ScrollEffectBottom from "./ScrollEffectBottom";

const ProjectFooter = ({ listBoxRef }) => {
  const copyright = "Copyrightⓒ 2024. Choyee. All right reserved.";
  const bottomLink = [
    {
      id: "github_btn",
      href: "https://github.com/InkyDChoyee",
      src: require("../../resources/img/github.PNG"),
    },
    {
      id: "blog_btn",
      href: "https://choyee.tistory.com/",
      src: require("../../resources/img/tistory.png"),
    },
  ];
  return (
    <div className="project_footer">
      <ScrollEffectBottom listBoxRef={listBoxRef} />
      <p>{copyright}</p>
      <div className="footer_links_box">
        {bottomLink.map((link) => (
          <a className={link.id} key={link.id} href={link.href}>
            <img src={link.src} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectFooter;
