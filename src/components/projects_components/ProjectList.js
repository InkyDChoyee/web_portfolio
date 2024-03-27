// ProjectList.js
import React, { useRef, useEffect, useState } from "react";
import "../../resources/css/projects_css/projectlist.css";
import ProjectCalculator from "./portfolios/ProjectCalculator";
import ProjectLibrary from "./portfolios/ProjectLibrary";
import ProjectPetShop from "./portfolios/ProjectPetShop";
import ProjectToDoList from "./portfolios/ProjectToDoList";
import ScrollEffect from "./ScrollEffect";
import ProjectWebPortfolio from "./portfolios/ProjectWebPortfolio";
import ProjectFooter from "./ProjectFooter"; // ProjectFooter 컴포넌트를 import 합니다.

const ProjectList = () => {
  const projectListBoxRef = useRef(null);
  const [projects, setProjects] = useState([
    <ProjectWebPortfolio />,
    <ProjectLibrary />,
    <ProjectPetShop />,
    <ProjectToDoList />,
    <ProjectCalculator />,
  ]);

  useEffect(() => {
    const handleScroll = () => {
      const listBox = projectListBoxRef.current;
      const scrollTop = listBox.scrollTop;
      const scrollHeight = listBox.scrollHeight;
      const clientHeight = listBox.clientHeight;

      const isAtBottom = scrollTop >= scrollHeight - clientHeight;

      const arrowElement = document.querySelector(".scroll_arrow");
      if (arrowElement) {
        if (isAtBottom) {
          arrowElement.classList.add("hidden");
        } else {
          arrowElement.classList.remove("hidden");
        }
      }
    };

    const listBox = projectListBoxRef.current;
    listBox.addEventListener("scroll", handleScroll);

    const initialDelay = 2700;
    const delayIncrement = 700;
    const projectElements = Array.from(listBox.children);

    projectElements.forEach((project, index) => {
      const delay = initialDelay + index * delayIncrement;
      setTimeout(() => {
        project.classList.add(index % 2 === 0 ? "slide-right" : "slide-left");
      }, delay);
    });

    return () => {
      listBox.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="project_list">
      <div
        className="project_list_box"
        ref={projectListBoxRef}
        onScroll={() => {}}
      >
        {projects}
      </div>
      <ScrollEffect listBoxRef={projectListBoxRef} />
      <ProjectFooter listBoxRef={projectListBoxRef} />{" "}
    </div>
  );
};

export default ProjectList;
