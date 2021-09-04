import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Authenticate() {
	const { search } = useLocation();
	const { id } = useParams();
	const queryParams = new URLSearchParams(search);
	const code = queryParams.get("code");
	const state = queryParams.get("state");
	const clientId = "V2IvPlEApDfBT9uNS5Rbrf";

	const [generated, setGenerated] = useState(false);
	const [isLoading, setisLoading] = useState(false);
	const [accessToken, setAccessToken] = useState("");

	const localHostCallBackURI = "http://localhost:3000/figma/authenticate/";

	const deployedCallBackURI =
		"http://externaltools.zuri.chat/figma/authenticate/";

	const clientSecret = "V3CDaxZOdHJqFedUFdaR3JbFUS1Abd";

	const fetchAccesskey = async (e) => {
		e.preventDefault();
		setisLoading(true);

		const result = await axios({
			method: "POST",
			url: `https://www.figma.com/api/oauth/token?client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${
				window.location.hostname == "localhost"
					? localHostCallBackURI
					: deployedCallBackURI
			}&code=${code}&grant_type=authorization_code`,
		})
			.then((response) => {
				console.log(response);
				setGenerated(true);
				setisLoading(false);
				setAccessToken(response.data.access_token);
			})
			.catch((error) => {
				console.log(error.response);
			});
	};
	return (
		<div>
			<h1>Authenticate</h1>
			<h1>{state}</h1>
			<button
				className="px-4 py-2 bg-gray-700 text-white rounded-sm"
				onClick={fetchAccesskey}>
				Generate Api key
			</button>
			{isLoading && <h1>Loading</h1>}

			{generated && <h1> Access-token: {accessToken}</h1>}
		</div>
	);
}

export default Authenticate;
