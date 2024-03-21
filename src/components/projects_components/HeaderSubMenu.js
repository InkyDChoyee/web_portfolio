const HeaderSubMenu = () => {
  const projects = [
    {
      name: "WebPortfolio",
      key: "webpofol",
      link: "https://github.com/InkyDChoyee/web_portfolio",
    },
    {
      name: "선유책숲",
      key: "library",
      link: "https://github.com/InkyDChoyee/library_homepage",
    },
    {
      name: "멍뭉꼬냥",
      key: "petshop",
      link: "https://github.com/InkyDChoyee/onlinePetShop",
    },
    {
      name: "ToDoList",
      key: "todolist",
      link: "https://github.com/InkyDChoyee/To_Do_List",
    },
    {
      name: "Calculator",
      key: "calculator",
      link: "https://github.com/InkyDChoyee/python_calculator",
    },
  ];

  return (
    <div className="sub_menu">
      {projects.map((project) => (
        <a key={project.key} href={project.link} target="_blank">
          <button>{project.name}</button>
        </a>
      ))}
    </div>
  );
};

export default HeaderSubMenu;
