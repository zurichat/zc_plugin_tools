import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useRouteMatch,
} from "react-router-dom";
import "./../../searchbar.component";
import FigmaAbout from "./about-secttion/FigmaAbout";
import FigmaMessages from "./messages-section/FigmaMessages";
import FigmaDownload from "./downloads-section/FigmaDownload";
import logo from "./images/fignaLogo.png";
import "./css/Figma.css";
// import ToolsHeader from "../../toolsheader/toolsheader";

const Figma = () => {
  const [page, setPage] = useState(`about`);
  let { path, url } = useRouteMatch();

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

      <Router>
        <div className='welcome-nav'>
          <Link to={`${url}/messages`}>
            <h4
              onClick={() => {
                setPage(`messages`);
              }}
              className={page === "about" || "download" ? "" : "selected"}
            >
              Messages
            </h4>
          </Link>
          <Link to={`${url}/about`}>
            <h4
              onClick={() => {
                setPage(`about`);
              }}
              className={page === "about" ? "selected" : ""}
            >
              About
            </h4>
          </Link>
          <Link to={`${url}/download`}>
            <h4
              onClick={() => {
                setPage(`download`);
              }}
              className={page === "download" ? "selected" : ""}
            >
              Download
            </h4>
          </Link>
        </div>
        <Switch>
          <Route exact path={`/figma/about`} component={FigmaAbout} />
          <Route path={`/figma/download`} component={FigmaDownload} />
          <Route path={`/figma/messages`} component={FigmaMessages} />
          <Route path={`/*`} component={FigmaDownload} />
        </Switch>
      </Router>
      {/* {this.state.page == "about" ? (
          <FigmaAbout />
        ) : this.state.page == "download" ? (
          <FigmaDownload />
        ) : (
          <FigmaMessages />
        )} */}
    </>
  );
};

export default Figma;
