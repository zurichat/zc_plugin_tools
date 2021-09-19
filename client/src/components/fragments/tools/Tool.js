import React from "react";

import styles from "./Tools.module.css";
import { Link } from "react-router-dom";

const Tool = ({ icon, title, text, btn, pad, item }) => {
  let editUrl;
  if (item.url && window.location.href.includes("localhost")) {
    editUrl = item.url.replace("https://externaltools.zuri.chat", "");
    if (editUrl === "/google-drive") {
      editUrl = editUrl.replace("-", "");
    }
  } else {
    editUrl = item.url;
    if (editUrl === "/google-drive") {
      editUrl = newUrl.replace("-", "");
    }
  }
  const url = editUrl && editUrl.length > 0 && editUrl;
  return (
    <div className={styles.tool}>
      {url ? (
        <Link to={url}>
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
