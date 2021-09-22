import React from "react";
import hashLogo from "../../assets/hash-icon.svg";
const person1 = "http://localhost:8500/media/static/person1.png";
const person2 = "http://localhost:8500/media/static/person2.png";
const person3 = "http://localhost:8500/media/static/person3.png";

import styles from "./pluginHeader.module.css";
import DownArrowIcon from "../Icons/DownArrowIcon";

function PluginHeader(props) {
  return (
    <div className={styles.header} >
      <div className="flex items-center relative col-auto">
        <img
          width="20"
          height="20"
          src={hashLogo}
          alt="External Tools Home Page"
        />
        <span className={styles.route}>External Tools</span>
        <DownArrowIcon />
      </div>
      <div className={styles.people_div}>
        <div>
          <img width="50" height="50" src={person1} alt="" />
        </div>
        <div>
          <img width="50" height="50" src={person2} alt="" />
        </div>
        <div>
          <img width="50" height="50" src={person3} alt="" />
        </div>
      </div>
    </div>
  );
}

export default PluginHeader;
