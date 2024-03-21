import React, { useEffect, useRef } from "react";
import go_bottom from "../../resources/img/go_bottom.png";

const ScrollEffect = ({ listBoxRef }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const container = listBoxRef.current;
    const button = buttonRef.current;

    const handleHover = () => {
      smoothScroll(container);
    };

    const handleMouseOut = () => {
      cancelSmoothScroll(container);
    };

    button.addEventListener("mouseenter", handleHover);
    button.addEventListener("mouseleave", handleMouseOut);

    return () => {
      button.removeEventListener("mouseenter", handleHover);
      button.removeEventListener("mouseleave", handleMouseOut);
    };
  }, [listBoxRef]);

  let smoothScrollTimer;

  const smoothScroll = (element) => {
    const scrollStep = 3;
    smoothScrollTimer = setInterval(function () {
      element.scrollTop += scrollStep;
      if (element.scrollTop >= element.scrollHeight - element.clientHeight) {
        clearInterval(smoothScrollTimer);
      }
    });
  };

  const cancelSmoothScroll = () => {
    clearInterval(smoothScrollTimer);
  };

  return (
    <div className="scroll_arrow">
      <button ref={buttonRef} className="scroll_button">
        <img src={go_bottom} alt="아래로 이동" className="arrow_image" />
      </button>
    </div>
  );
};

export default ScrollEffect;
