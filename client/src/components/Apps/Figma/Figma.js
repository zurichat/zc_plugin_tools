import React from "react";

const Figma = () => {
	const localHostUrl =
		"https://www.figma.com/oauth?client_id=V2IvPlEApDfBT9uNS5Rbrf&redirect_uri=http://localhost:3000/authenticate/&scope=file_read&state=state&response_type=code";
	const deployedUrl =
		"https://www.figma.com/oauth?client_id=V2IvPlEApDfBT9uNS5Rbrf&redirect_uri=http://externaltools.zuri.chat/authenticate/&scope=file_read&state=state&response_type=code";
	const vercelUrl =
		"https://www.figma.com/oauth?client_id=V2IvPlEApDfBT9uNS5Rbrf&redirect_uri=https://zc-plugin-tools2.vercel.app/authenticate/&scope=file_read&state=state&response_type=code";
	return (
		<div>
			<h2 className="text-lg text-gray-600 font-bold">FIGMA HOME PAGE</h2>
			<div className="mt-6">
				<a
					className="px-4 py-2 bg-gray-700 text-white rounded-sm"
					href={vercelUrl}>
					Connect to figma
				</a>
			</div>
		</div>
	);
};

export default Figma;
