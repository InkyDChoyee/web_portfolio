const FrontEndPart = () => {
  const front_end = [
    { id: "html_logo", src: require("../resources/img/html_logo.png") },
    { id: "css_logo", src: require("../resources/img/css_logo.png") },
    { id: "js_logo", src: require("../resources/img/javascript_logo.png") },
    { id: "jquery_logo", src: require("../resources/img/jquery_logo.png") },
    { id: "react_logo", src: require("../resources/img/react_logo.png") },
  ];
  return (
    <div className="front_end_part">
      <p>front-end</p>
      {front_end.map((img, id) => (
        <img key={id} src={img.src} />
      ))}
    </div>
  );
};

export default FrontEndPart;
