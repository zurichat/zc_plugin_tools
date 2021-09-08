import React from 'react'
import styles from "../HeroSection/HeroSection.module.css"
import DoubleRightArrow from "../../assets/tool-icon.svg"
import {Link} from "react-router-dom"

const TitleBox = ({title, text, link}) => {
    return (
        <div className={styles.title_box}>
        <p className={styles.title}>{title}</p>
        <Link to={`${link ? "/tools" : ""}`} className={styles.directory_box}>
            <div className={styles.icon}><img src={DoubleRightArrow} alt="double_arrow-icon" /></div>
            <div className={styles.directory_text}>{text}</div>
        </Link>
    </div>
    )
}

export default TitleBox
