import React from "react";
import go_bottom from "../../resources/img/go_bottom.png";

const ScrollEffect = ({ listBoxRef }) => {
  const scrollToBottom = () => {
    const distanceToScroll = 425;
    listBoxRef.current.scrollTo({
      top: listBoxRef.current.scrollTop + distanceToScroll,
      behavior: "smooth", // 부드러운 스크롤 효과
    });
  };

  return (
    <div className="scroll_arrow">
      <button onClick={scrollToBottom}>
        <img src={go_bottom} alt="아래로 이동" className="arrow_image" />
      </button>
    </div>
  );
};

export default ScrollEffect;
