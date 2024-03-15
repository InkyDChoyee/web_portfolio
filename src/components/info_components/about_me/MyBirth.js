const MyBirth = () => {
  const birth = {
    birth_logo: { src: require("../../../resources/img/birth.png") },
    birth: "1993. 04. 21",
  };
  return (
    <div className="my_birth">
      <div className="birth_title">
        <img src={birth.birth_logo.src} />
        <p>BIRTHDAY</p>
      </div>
      <div className="birth">
        <p>{birth.birth}</p>
      </div>
    </div>
  );
};

export default MyBirth;
