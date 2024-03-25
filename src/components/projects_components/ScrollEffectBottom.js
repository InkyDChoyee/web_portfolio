import React, { useState, useEffect } from "react";

const ScrollEffectBottom = ({ listBoxRef }) => {
  const [width, setWidth] = useState(0); // 초기값을 숫자로 변경

  useEffect(() => {
    const handleScroll = () => {
      if (!listBoxRef || !listBoxRef.current) return;

      const listBox = listBoxRef.current;
      const scrollTop = listBox.scrollTop;
      const scrollHeight = listBox.scrollHeight;
      const clientHeight = listBox.clientHeight;

      const scrollPercentage =
        (scrollTop / (scrollHeight - clientHeight)) * 100;

      setWidth(scrollPercentage); // % 단위로 설정하지 않음
    };

    if (listBoxRef.current) {
      listBoxRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (listBoxRef.current) {
        listBoxRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [listBoxRef]);

  return (
    <div
      className="scroll_effect_bottom"
      style={{
        width: `${width}%`,
        backgroundColor: "#effaff",
      }}
    ></div>
  );
};

export default ScrollEffectBottom;
