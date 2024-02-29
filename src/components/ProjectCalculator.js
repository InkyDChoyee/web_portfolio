const ProjectCalculator = () => {
  const projectCalculator = {
    title: "Calculator",
    with: "Python",
    src: require("../resources/img/calculator.PNG"),
  };
  return (
    <div className="calculator">
      <div className="project_preview">
        <img src={projectCalculator.src} alt="calculator" />
      </div>
      <div className="project_info">
        <p className="project_title">
          project: <span>{projectCalculator.title}</span>
        </p>
        <p className="project_with">
          with:&nbsp;<span>{projectCalculator.with}</span>
        </p>
      </div>
    </div>
  );
};

export default ProjectCalculator;
