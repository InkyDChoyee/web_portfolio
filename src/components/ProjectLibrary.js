const ProjectLibrary = () => {
  const projectLibrary = {
    title: "선유책숲",
    with1: "HTML, CSS, JavaScropt",
    with2: "JAVA, SpringBoot, Thymeleaf",
    with3: "MySQL",
    src: require("../resources/img/library.PNG"),
  };
  return (
    <div className="library">
      <div className="project_info">
        <p className="project_title">
          project: <span>{projectLibrary.title}</span>
        </p>
        <p className="project_with">
          with:&nbsp;
          <span>{projectLibrary.with1}</span>
          <br />
          <span>{projectLibrary.with2}</span>
          <br />
          <span>{projectLibrary.with3}</span>
        </p>
      </div>
      <div className="project_preview">
        <img src={projectLibrary.src} />
      </div>
    </div>
  );
};

export default ProjectLibrary;
