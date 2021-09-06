import React from "react";
import ss1 from "./../images/ss1.png";
import logo from "./../images/Figma_logo.png";
import "./../css/messages.css";

const FigmaMessages = () => {
	const localHostUrl =
		"https://www.figma.com/oauth?client_id=V2IvPlEApDfBT9uNS5Rbrf&redirect_uri=http://localhost:3000/figma/authenticate/&scope=file_read&state=state&response_type=code";
	const deployedUrl =
		"https://www.figma.com/oauth?client_id=V2IvPlEApDfBT9uNS5Rbrf&redirect_uri=http://externaltools.zuri.chat/figma/authenticate/&scope=file_read&state=state&response_type=code";

	return (
		<div className="messages pl-8 pt-8 flex justify around">
			<img className="self-start" src={logo}></img>
			<div className="pl-3">
				<div className="pt-1">
					<div className="welcome-info">
						<h4>This conversation is just between the two of you </h4>
						<p className="mt-2">
							Here you can post and recieve comments with <span>@Figma</span>
						</p>
					</div>
				</div>
				<div className="mt-6 fig-connect-btn">
					<a
						className="px-4 py-2  bg-white font-extrabold  rounded-sm"
						href={
							window.location.hostname == "localhost"
								? localHostUrl
								: deployedUrl
						}>
						Connect your account
					</a>
				</div>
			</div>
		</div>
	);
};

export default FigmaMessages;
