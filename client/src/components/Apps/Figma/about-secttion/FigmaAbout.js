import React from "react";
import styles from "./FigmaAbout.module.css";
import MainContent from "./MainContent";
import Screenshots from "./Screenshots";

const FigmaAbout = () => {
  return (
    <>
      <MainContent />
      <Screenshots />
      {/* <div className="screenshots-heading-container">
        <h4>Screenshots</h4>
      </div>
      <div className="screenshots-container">
        <img src={ss1}></img>
        <img src={ss2}></img>
        <img src={ss3}></img>
      </div> */}
    </>
  );
};

export default FigmaAbout;
