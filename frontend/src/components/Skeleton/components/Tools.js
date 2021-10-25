import React, { useState } from "react";
import styles from "../styles/Tools.module.css";
import Tool from "./Tool";

const Tools = (props) => {
  const { list } = props;
  return (
    <div
      className={`${styles.tool_box} ${list.length > 3 && styles.tool_box_b}`}
    >
      {props.children}
    </div>
  );
};

export default Tools;
