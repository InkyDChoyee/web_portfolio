const BackEndPart = () => {
  const back_end = [
    { id: "java_logo", src: require("../../../resources/img/java_logo.png") },
    { id: "jsp_logo", src: require("../../../resources/img/jsp_logo.png") },
    {
      id: "lombok_logo",
      src: require("../../../resources/img/lombok_logo.png"),
    },
    { id: "maven_logo", src: require("../../../resources/img/maven_logo.png") },
    {
      id: "spring_logo",
      src: require("../../../resources/img/spring_logo.png"),
    },
    {
      id: "spring_boot_logo",
      src: require("../../../resources/img/spring_boot_logo.png"),
    },
    {
      id: "thymeleaf_logo",
      src: require("../../../resources/img/thymeleaf_logo.png"),
    },
  ];

  return (
    <div className="back_end_part">
      <p>back-end</p>
      {back_end.map((img, id) => (
        <img key={id} src={img.src} />
      ))}
    </div>
  );
};

export default BackEndPart;
