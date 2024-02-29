const ProjectToDoList = () => {
  const projectToDoList = {
    title: "To Do List",
    with: "HTML, CSS, JavaScript",
    src: require("../resources/img/todolist.PNG"),
  };
  return (
    <div className="todolist">
      <div className="project_info">
        <p className="project_title">
          project: <span>{projectToDoList.title}</span>
        </p>
        <p className="project_with">
          with:&nbsp;<span>{projectToDoList.with}</span>
        </p>
      </div>
      <div className="project_preview">
        <img src={projectToDoList.src} alt="calculator" />
      </div>
    </div>
  );
};

export default ProjectToDoList;
