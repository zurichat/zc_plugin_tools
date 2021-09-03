import React, { useState } from "react";
import styles from "./GoogleDrive.module.css";
import Messages from "./Messages/Messages";
import About from "./About/About";
import { useHistory } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
// import ToolsHeader from "../../toolsheader/toolsheader";

const GoogleDrive = () => {
  const [page, setPage] = useState("messages");
  const history = useHistory();

  // const handleClick = () => {
  //   history.push("/");
  // };
  // console.log(page);

  return (
    <>
      {/* <div
        onClick={handleClick}
        className="cursor-pointer p-2 flex space-x-2 bg-gray-500 w-max m-4 rounded-full text-white"
      >
        <div>
          <FontAwesomeIcon icon={faAngleDoubleLeft} className="" />
        </div>
        <div className="">back to main</div>
      </div> */}
      {/* <ToolsHeader /> */}
      <div className={styles.container}>
        <div className={styles.layer1}></div>

        <div className={styles.layer2}>
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
        <React.Fragment>
          {page === "messages" ? <Messages /> : null}
          {page === "about" ? <About /> : null}
        </React.Fragment>
      </div>
    </>
  );
};

export default GoogleDrive;
