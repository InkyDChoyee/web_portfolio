const HeaderSubMenu = () => {
  const projects = {
    선유책숲: "선유책숲",
    멍뭉꼬냥: "멍뭉꼬냥",
    ToDoList: "ToDoList",
    Calculator: "Calculator",
  };
  return (
    <div className="sub_menu">
      <button>{projects.선유책숲}</button>
      <button>{projects.멍뭉꼬냥}</button>
      <button>{projects.ToDoList}</button>
      <button>{projects.Calculator}</button>
    </div>
  );
};

export default HeaderSubMenu;
