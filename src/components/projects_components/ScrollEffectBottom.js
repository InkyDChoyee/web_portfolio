import React, { useState, useEffect } from "react";

const ScrollEffectBottom = ({ listBoxRef }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!listBoxRef || !listBoxRef.current) return;

      const listBox = listBoxRef.current;
      const scrollTop = listBox.scrollTop;
      const scrollHeight = listBox.scrollHeight;
      const clientHeight = listBox.clientHeight;

      const scrollPercentage =
        (scrollTop / (scrollHeight - clientHeight)) * 100;

      setWidth(scrollPercentage);
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
