const GoToHome = () => {
  const home_icon = {
    id: "home",
    src: require("../resources/img/home.png"),
    href: "../main",
  };
  return (
    <div className="home_icon_box">
      <a href={home_icon.href}>
        <img src={home_icon.src} />
      </a>
    </div>
  );
};

export default GoToHome;
