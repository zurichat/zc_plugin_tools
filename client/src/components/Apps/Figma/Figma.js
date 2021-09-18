import React, { useState } from "react";
import "./../../searchbar.component";
import FigmaAbout from "./about-secttion/FigmaAbout";
import FigmaMessages from "./messages-section/FigmaMessages";
import FigmaDownload from "./downloads-section/FigmaDownload";
import logo from "./images/fignaLogo.png";
import "./css/Figma.css";
// import ToolsHeader from "../../toolsheader/toolsheader";

const Figma = () => {
  const [page, setPage] = useState(`about`);

  return (
    <>
      {/* <ToolsHeader /> */}
      <div className='Start-title'>
        <div className='figmalogo-container'>
          <img src={logo} />
        </div>
        <h4 className='Logo-tag'>Figma</h4>
        <div className='arrow-down'>^</div>
      </div>
      <div className='welcome-nav'>
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
