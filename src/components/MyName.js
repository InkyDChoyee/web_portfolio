const MyName = () => {
  const name = {
    name_logo: { src: require("../resources/img/name.png") },
    name: "Choi Dong Hyun",
  };
  return (
    <div className="my_name">
      <div className="name_title">
        <img src={name.name_logo.src} />
        <p>NAME</p>
      </div>
      <div className="name">
        <p>{name.name}</p>
      </div>
    </div>
  );
};

export default MyName;
