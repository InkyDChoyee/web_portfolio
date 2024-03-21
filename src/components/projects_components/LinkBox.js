const LinkBox = ({ projectName }) => {
  const gitHublinks = {
    webpofol: "https://github.com/InkyDChoyee/web_portfolio",
    library: "https://github.com/InkyDChoyee/library_homepage",
    petshop: "https://github.com/InkyDChoyee/onlinePetShop",
    todolist: "https://github.com/InkyDChoyee/To_Do_List",
    calculator: "https://github.com/InkyDChoyee/python_calculator",
  };
  return (
    <div className="link_box">
      <p>More Details... </p>
      <a href={gitHublinks[projectName]} target="blank">
        <p>GitHub 저장소로 이동 🔗</p>
      </a>
    </div>
  );
};

export default LinkBox;
