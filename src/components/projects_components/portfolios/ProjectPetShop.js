const ProjectPetShop = () => {
  const projectPetShop = {
    title: "멍뭉꼬냥",
    with1: "HTML, CSS, JavaScropt",
    with2: "JAVA, JSP, Servlet",
    with3: "OracleDB",
    src: require("../../../resources/img/petshop.PNG"),
  };
  return (
    <div className="petshop">
      <div className="project_preview">
        <img src={projectPetShop.src} />
      </div>
      <div className="project_info">
        <p className="project_title">
          project: <span>{projectPetShop.title}</span>
        </p>
        <p className="project_with">
          with:&nbsp;
          <span>{projectPetShop.with1}</span>
          <br />
          <span>{projectPetShop.with2}</span>
          <br />
          <span>{projectPetShop.with3}</span>
        </p>
      </div>
    </div>
  );
};

export default ProjectPetShop;
