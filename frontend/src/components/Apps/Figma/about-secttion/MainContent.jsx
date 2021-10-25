import React from "react";
import styles from "./FigmaAbout.module.css";

import logo from "./../images/figma.svg";

function MainContent() {
  return (
    <div className={styles.main_content}>
      <div className={styles.left_content}>
        <img src={logo} />
        <button>Configuration</button>
        <button>App Homepage</button>
      </div>
      <div className={styles.right_content}>
        <h2>Figma</h2>
        <p>
          Figma is where teams recieve comments and post comments about their
          teams design success for further collaborations. The Figma app for
          Zuri Chat keeps everyone up to date on the latest design work through
          relevant notifications about file updates and comments.
        </p>
        <p>
          With the app, you can receive and reply to file comments directly in
          Zuri Chat. You’ll also get notified when:
        </p>
        <ul>
          <li>someone replies to one of your comments</li>
          <li>You’re tagged in a file</li>
          <li>You’re invited to a new file</li>
          <li>New comments are made to a file you subscribed to</li>
        </ul>
      </div>
    </div>
  );
}

export default MainContent;
