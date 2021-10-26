import React, { useState } from "react";
import "../components/searchbar.component";
import FigmaAbout from "./FigmaAbout";
import FigmaMessages from "./FigmaMessages";
import FigmaDownload from "./FigmaDownload";
import logo from "../assets/figma.svg";
import downArrow from "../assets/down-arrow-icon.svg";
import "../styles/Figma.css";
// import ToolsHeader from "../../toolsheader/toolsheader";

const Figma = () => {
  const [page, setPage] = useState(`about`);

  return (
    <>
      {/* <ToolsHeader /> */}
      <div className="Start-title">
        <div className="figmalogo-container">
          <img src={logo} />
        </div>
        <div class="flex items-center">
          <h4 className="Logo-tag">Figma</h4>
          <img style={{ padding: "5px 0px 0px 5px" }} src={downArrow} />
        </div>
      </div>
      <div className="welcome-nav">
        <div>
          <h4
            onClick={() => {
              setPage(`messages`);
            }}
            className={page === "messages" ? "selected" : ""}
          >
            Messages
          </h4>
        </div>
        <div>
          <h4
            onClick={() => {
              setPage(`about`);
            }}
            className={page === "about" ? "selected" : ""}
          >
            About
          </h4>
        </div>
        <div>
          <h4
            onClick={() => {
              setPage(`download`);
            }}
            className={page === "download" ? "selected" : ""}
          >
            Download
          </h4>
        </div>
      </div>
      <>
        {page === "messages" && <FigmaMessages />}
        {page === "download" && <FigmaDownload />}
        {page === "about" && <FigmaAbout />}
      </>
    </>
  );
};

export default Figma;
