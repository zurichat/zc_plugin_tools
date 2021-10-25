import React from "react";
import ss1 from "../assets/ss1.png";
import ss2 from "../assets/ss2.png";
import ss3 from "../assets/ss3.png";
import styles from "../styles/FigmaAbout.module.css";
function Screenshots() {
  return (
    <div>
      <div className={styles.screenshots_title}>
        <h4>Screenshots</h4>
      </div>
      <div className={styles.screenshots_container}>
        <img src={ss1}></img>
        <img src={ss2}></img>
        <img src={ss3}></img>
      </div>
    </div>
  );
}

export default Screenshots;
