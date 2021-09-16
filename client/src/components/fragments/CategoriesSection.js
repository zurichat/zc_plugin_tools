import React from 'react'
import styles from "./CategoriesSection.module.css"
import DownArrow from "../../assets/down-arrow-icon.svg"

const CategoriesSection = () => {
    return (
      <div className={styles.all_box}>
        <h3 className={styles.title}>all</h3>
        <div className={styles.categories_box}>
          <div className={styles.box}>
            <p className="text">Categories</p>
            <img src={DownArrow} alt=""  className={styles.icon}/>
          </div>
          <div className={styles.box}>
            <p className="text">Staff Picks</p>
            <img src={DownArrow} alt="" className={styles.icon} />
          </div>
          <div className={styles.box}>
            <p className="text">Tool Collections</p>
            <img src={DownArrow} alt=""  className={styles.icon}/>
          </div>
        </div>
      </div>
    );
}

export default CategoriesSection
