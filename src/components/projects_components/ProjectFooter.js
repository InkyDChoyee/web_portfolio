import React from "react";
import "../../resources/css/projects_css/projectfooter.css";

const ProjectFooter = () => {
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
