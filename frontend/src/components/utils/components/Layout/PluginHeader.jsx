import React from "react";
import hashLogo from "../../assets/hash-icon.svg";
import person1 from "../../assets/person1.svg";
import person2 from "../../assets/person2.svg";
import person3 from "../../assets/person3.svg";

import styles from "../../styles/pluginHeader.module.css";
import DownArrowIcon from "../DownArrowIcon";

function PluginHeader(props) {
  return (
    <div className={styles.header}>
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
          <img width="30" height="30" src={person1} alt="" />
        </div>
        <div>
          <img width="30" height="30" src={person2} alt="" />
        </div>
        <div>
          <img width="30" height="30" src={person3} alt="" />
        </div>
        <span className={styles.people_count}>300</span>
      </div>
    </div>
  );
}

export default PluginHeader;
