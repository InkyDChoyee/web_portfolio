import React from "react";
import Info from "./Info";
import Project from "./Projects";
// import GoToHome from "../components/GoToHome";

const Main = () => {
  return (
    <div className="container">
      <Info />
      <Project />
      <div className="home_btn">{/* <GoToHome /> */}</div>
    </div>
  );
};

export default Main;
