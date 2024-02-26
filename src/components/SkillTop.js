const SkillTop = ({ onAboutMeClick }) => {
  const skills_icon = [
    { id: "about", src: require("../resources/img/aboutme.png") },
    { id: "skill", src: require("../resources/img/skill.png") },
  ];

  return (
    <div className="skills_top">
      <div className="skills_title">
        <p>SKILLS</p>
        <img src={skills_icon[1].src} />
      </div>
      <div className="skills_switching_about">
        <button onClick={onAboutMeClick}>
          <img src={skills_icon[0].src} />
          <p>about</p>
        </button>
      </div>
    </div>
  );
};

export default SkillTop;
