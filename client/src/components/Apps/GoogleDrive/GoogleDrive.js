import React, { useState } from "react";
import styles from "./GoogleDrive.module.css";
import Messages from "./Messages/Messages";
import About from "./About/About";
import DownloadPage from "./DownloadPage/DownloadPage.js"
import googleDriveLogo from './assets/logos_google-drive.png'
import arrowDown from './assets/arrow down.png'

const GoogleDrive = () => {
  const [page, setPage] = useState("download");


  return (
    <>
      <div className={styles.container}>
        <div className={styles.layer1}>
          <div className={styles.logoWrapper}>
            <img src={googleDriveLogo} alt="google drive logo" />
          </div>
          <div className={styles.googleDriveWrapper}>
            <h2>Google Drive</h2>
            <img src={arrowDown} alt='arrow down'/>
          </div>
        </div>
          <div className={styles.layer2}>
            <div className={styles.rightLayer2}>
            <h3
                className={page === "download" ? styles.markGreen : null}
                onClick={() => setPage("download")}>
                Download
              </h3>

              <h3 className={page === "messages" ? styles.markGreen : null}
                onClick={() => setPage("messages")}>
                Messages
              </h3>
              <h3
                className={page === "about" ? styles.markGreen : null}
                onClick={() => setPage("about")}>
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
        
    </>
  );
};

export default GoogleDrive;
