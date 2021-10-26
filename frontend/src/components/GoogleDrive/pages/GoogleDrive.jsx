import React, { useState } from "react";
import styles from "../styles/GoogleDrive.module.css";
import Messages from "../components/Messages";
import About from "../components/About";
import DownloadPage from "../components/DownloadPage.jsx";
// import googledrivelogo from "./assets/googledrivelogo.png";
// import arrowdown from "./assets/arrowdown.png";
// import gmailLogo from "./assets/gmailLogo.png";
import googledrive from "../assets/googledrive.png";
import arrowdown from "../assets/arrowdown.svg";

const GoogleDrive = () => {
  const [page, setPage] = useState("download");

  return (
    <div className={styles.container}>
      <div className={styles.layer1}>
        <div className={styles.logoWrapper}>
          <img src={googledrive} alt="google drive logo" />
        </div>
        <div className={styles.googleDriveWrapper}>
          <h2>Google Drive</h2>
          <img src={arrowdown} alt="arrow down" />
        </div>
      </div>
      <div className={styles.layer2}>
        <div className={styles.rightLayer2}>
          <h3
            className={page === "download" ? styles.markGreen : null}
            onClick={() => setPage("download")}
          >
            Download
          </h3>

          <h3
            className={page === "messages" ? styles.markGreen : null}
            onClick={() => setPage("messages")}
          >
            Messages
          </h3>
          <h3
            className={page === "about" ? styles.markGreen : null}
            onClick={() => setPage("about")}
          >
            About
          </h3>
        </div>
      </div>
      <>
        {page === "messages" ? <Messages /> : null}
        {page === "about" ? <About /> : null}
        {page === "download" ? <DownloadPage /> : null}
      </>
    </div>
  );
};

export default GoogleDrive;
