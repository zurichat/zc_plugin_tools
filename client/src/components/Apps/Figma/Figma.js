import React, { Component } from "react";
import "./../../searchbar.component";
import SearchBar from "./../../searchbar.component";
import FigmaAbout from "./about-secttion/FigmaAbout";
import FigmaMessages from "./messages-section/FigmaMessages";
import logo from "./images/fignaLogo.png";
import "./css/Figma.css";
import ToolsHeader from "../../toolsheader/toolsheader";

const initialState = {
  page: "about",
};
class Figma extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  render() {
    const localHostUrl =
      "https://www.figma.com/oauth?client_id=V2IvPlEApDfBT9uNS5Rbrf&redirect_uri=http://localhost:3000/figma/authenticate/&scope=file_read&state=state&response_type=code";
    const deployedUrl =
      "https://www.figma.com/oauth?client_id=V2IvPlEApDfBT9uNS5Rbrf&redirect_uri=http://externaltools.zuri.chat/figma/authenticate/&scope=file_read&state=state&response_type=code";

    return (
      <>
        <ToolsHeader />
        <SearchBar />
        <div className="Start-title">
          <div className="figmalogo-container">
            <img src={logo} />
          </div>
          <h4 className="Logo-tag">Figma</h4>
          <div className="arrow-down">^</div>
        </div>
        <div className="mb-1.5">
          <a
            className="px-4 py-2 bg-gray-700 text-white rounded-sm"
            href={deployedUrl}
          >
            Connect to figma
          </a>
        </div>
        <div className="welcome-nav">
          <h4
            onClick={() => {
              this.setState({ page: "messages" });
            }}
            className={this.state.page === "about" ? "" : "selected"}
          >
            Messages
          </h4>
          <h4
            onClick={() => {
              this.setState({ page: "about" });
            }}
            className={this.state.page === "about" ? "selected" : ""}
          >
            About
          </h4>
        </div>
        {this.state.page === "about" ? <FigmaAbout /> : <FigmaMessages />}
      </>
    );
  }
}

export default Figma;
