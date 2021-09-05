import React, { Component } from "react";
import "./../../searchbar.component";
import FigmaAbout from "./about-secttion/FigmaAbout";
import FigmaMessages from "./messages-section/FigmaMessages";
import FigmaDownload from "./downloads-section/FigmaDownload";
import logo from "./images/fignaLogo.png";
import "./css/Figma.css";
// import ToolsHeader from "../../toolsheader/toolsheader";

const initialState = {
	page: "about",
};
class Figma extends Component {
	constructor() {
		super();
		this.state = initialState;
	}

	render() {
		return (
			<>
				{/* <ToolsHeader /> */}
				<div className="Start-title">
					<div className="figmalogo-container">
						<img src={logo} />
					</div>
					<h4 className="Logo-tag">Figma</h4>
					<div className="arrow-down">^</div>
				</div>

				<div className="welcome-nav">
					<h4
						onClick={() => {
							this.setState({ page: "messages" });
						}}
						className={
							this.state.page === "about" || "download" ? "" : "selected"
						}>
						Messages
					</h4>

					<h4
						onClick={() => {
							this.setState({ page: "about" });
						}}
						className={this.state.page === "about" ? "selected" : ""}>
						About
					</h4>
					<h4
						onClick={() => {
							this.setState({ page: "download" });
						}}
						className={this.state.page === "download" ? "selected" : ""}>
						Download
					</h4>
				</div>
				{this.state.page == "about" ? (
					<FigmaAbout />
				) : this.state.page == "download" ? (
					<FigmaDownload />
				) : (
					<FigmaMessages />
				)}
			</>
		);
	}
}

export default Figma;
