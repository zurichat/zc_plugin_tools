import React, { useState } from "react";
import styles from "../HeroSection/HeroSection.module.css";
import DoubleRightArrow from "../../assets/tool-icon.svg";
import { Link } from "react-router-dom";
import FilterPane from "./Filterpane";

const TitleBox = ({ title, text, link, icon, filter, clicked}) => {
  const [expandState, setExpandState] = useState(false);

  const onCloseFilterPane = () => {
    setExpandState(!expandState)
  }

  return (
    <div className={`${styles.title_box} relative`}>
      <p className={styles.title}>{title}</p>
      <Link to={`${link ? "/toolsdirectory" : ""}`} className={styles.directory_box}>
        {icon && (
          <div className={styles.icon} onClick={onCloseFilterPane}>
            <img src={DoubleRightArrow} alt="double_arrow-icon" />
          </div>
        )}
        <div
          className={styles.directory_text}
          onClick={onCloseFilterPane}
        >
          {text}
        </div>
      </Link>
      {filter ? <FilterPane expand={expandState} closepane={onCloseFilterPane} clicked={clicked}/>  : null}
    </div>
  );
};

export default TitleBox;
