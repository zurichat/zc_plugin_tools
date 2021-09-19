import React from "react";
import { Link } from "react-router-dom";

import styles from "./Tools.module.css";

const Tool = ({ icon, title, text, btn, pad, item }) => {
    const { installed, path } = item;
    return (
        <div className={styles.tool}>
            {installed ? (
                <Link to={path}>
                    <div className={styles.icon_title_box}>
                        <figure className={styles.img_box}>
                            <img src={icon} alt='' className={styles.img} />
                        </figure>
                        <div className={styles.title_box}>
                            <h3 className={styles.title}>{title}</h3>
                            <p className={styles.text}>{text}</p>
                        </div>
                    </div>
                </Link>
            ) : (
                <div className={styles.icon_title_box}>
                    <figure className={styles.img_box}>
                        <img src={icon} alt='' className={styles.img} />
                    </figure>
                    <div className={styles.title_box}>
                        <h3 className={styles.title}>{title}</h3>
                        <p className={styles.text}>{text}</p>
                    </div>
                </div>
            )}

            {/* end of title icon box */}
            <button
                style={{
                    backgroundColor: "#F0EFEF",
                    borderRadius: ".2rem",
                    color: "#3A3A3A",
                    textTransform: "capitalize",
                    textAlign: "center",
                    marginTop: ".7rem",
                    padding: `${pad && ".3rem"}`,
                }}
            >
                {btn}
            </button>
        </div>
    );
};

export default Tool;