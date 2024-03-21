import LinkBox from "../LinkBox";

const ProjectWebPortfolio = () => {
  const ProjectWebPortfolio = {
    title: "Web Portfolio",
    with: "React",
    src: require("../../../resources/img/webportfolio.PNG"),
  };
  return (
    <div className="petshop">
      <div className="project_preview">
        <img src={ProjectWebPortfolio.src} />
        <LinkBox projectName="webpofol" />
      </div>
      <div className="project_info">
        <p className="project_title">
          project: <span>{ProjectWebPortfolio.title}</span>
        </p>
        <p className="project_with">
          with:&nbsp;
          <span>{ProjectWebPortfolio.with}</span>
          <br />
        </p>
      </div>
    </div>
  );
};

export default ProjectWebPortfolio;
