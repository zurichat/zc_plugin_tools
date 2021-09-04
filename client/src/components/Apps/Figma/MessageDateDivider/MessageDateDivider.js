import React from "react";
import styles from "./MessageDateDivider.module.css";

function MessageDateDivider() {
  return (
    <div className={styles.dividercontainer}>
      <div className={styles.line}></div>
      <div className={styles.dividertext}>Today</div>
      <div className={styles.line}></div>
    </div>
  );
}

export default MessageDateDivider;
