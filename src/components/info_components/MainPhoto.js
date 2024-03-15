import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const MainPhoto = ({ currentComponent }) => {
  const getMainPhotoHeight = () => {
    return currentComponent === "about" ? "65%" : "30%";
  };

  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(1);
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className="main_pic"
      style={{ height: getMainPhotoHeight(), opacity: opacity }}
    ></div>
  );
};

MainPhoto.propTypes = {
  currentComponent: PropTypes.string.isRequired,
};

export default MainPhoto;
