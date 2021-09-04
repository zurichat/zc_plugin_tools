import styles from "./HeroSection.module.css";
import HeroLaptopImg from "../../assets/hero-laptop.png";
import DoubleRightArrow from "../../assets/double-arrow-right-icon.svg";
import { Link } from "react-router-dom";

import React from "react";

const HeroSection = ({ showHeroSection }) => {
  return (
    <div className={styles.hero_section}>
      <div className={styles.title_box}>
        <p className={styles.title}>tools</p>
        <Link to={"/tools"} className={styles.directory_box}>
          <div className={styles.icon}>
            <img src={DoubleRightArrow} alt="double_arrow-icon" />
          </div>
          <div className={styles.directory_text}>Tool Directory</div>
        </Link>
      </div>
      {/* end of title box */}
      <div className={styles.content_box}>
        <span className={styles.cancel} onClick={showHeroSection}>
          &times;
        </span>
        <div className={styles.content_wrap}>
          <div className={styles.title}>
            Powerful tools integrated just for Zuri chat
          </div>
          <p className={styles.text}>
            Tools belong to you and your team, and they provide you extra
            features to make you more productive. Install once and everyone can
            make use of them.
          </p>
          <Link to={"/tools"} className={styles.btn}>
            Browse available tools
          </Link>
        </div>
        {/* end of content-wrap */}
        <div className={styles.image_box}>
          <figure className={styles.img_wrap}>
            <img src={HeroLaptopImg} alt="" className={styles.img} />
          </figure>
        </div>
      </div>
      {/* end of content box */}
    </div>
  );
};

export default HeroSection;

// #242424  Powerful tools integrated just for Zuri chat
// #3A3A3A    Tools belong to you and your team, and they provide you extra features to make you more productive. Install once and everyone can make use of them.
// #009B69   Browse available tools
