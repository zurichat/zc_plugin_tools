import React, { useState } from "react";
import styles from "./GoogleDrive.module.css";
import Messages from "./Messages/Messages";
import About from "./About/About";
import ToolsHeader from "../../toolsheader/toolsheader";
import DownloadPage from "./DownloadPage/DownloadPage.js"

const GoogleDrive = () => {
  const [page, setPage] = useState("messages");
  const [display, setDisplay] = useState("main");
  
 

  return (
    <>
      {display === 'main' ?
      <div className={styles.container}>
        <div className={styles.layer1}></div>
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
