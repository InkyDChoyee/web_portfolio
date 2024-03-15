const ToolPart = () => {
  const tool = [
    {
      id: "vscode_logo",
      src: require("../../../resources/img/vscode_logo.png"),
    },
    {
      id: "eclipse_logo",
      src: require("../../../resources/img/eclipse_logo.png"),
    },
    { id: "sts4_logo", src: require("../../../resources/img/sts4_logo.png") },
    { id: "figma_logo", src: require("../../../resources/img/figma_logo.png") },
    {
      id: "github_logo",
      src: require("../../../resources/img/github_logo.png"),
    },
  ];

  return (
    <div className="tool_part">
      <p>tool</p>
      {tool.map((img, id) => (
        <img key={id} src={img.src} alt="tools" />
      ))}
    </div>
  );
};

export default ToolPart;
