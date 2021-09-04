import React, { useState } from "react";
import styles from "./GoogleDrive.module.css";
import Messages from "./Messages/Messages";
import About from "./About/About";
import DownloadPage from "./DownloadPage/DownloadPage.js"
import googleDriveLogo from './assets/logos_google-drive.png'
import arrowDown from './assets/arrow down.png'

const GoogleDrive = () => {
  const [page, setPage] = useState("messages");
  const [display, setDisplay] = useState("main");


  return (
    <>
      {display === 'main' ?
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
            <div className={styles.leftLayer2}>
              <button onClick={() => setDisplay('downloadPage')}>Show download page</button>
            </div>
           </div>   
          <>
            {page === "messages" ? <Messages /> : null}
            {page === "about" ? <About /> : null}
          </>
      </div>
        
        :
        <div className={styles.container}>
          <DownloadPage />
        </div>
       
      }
      
        
    </>
  );
};

export default GoogleDrive;
