import Layout from "./components/layout";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ToolsView from "./components/ToolsViewPage/ToolsView";
import ToolsDirectory from "./components/ToolsDirectory/ToolsDirectory";
import Gmail from "./components/Apps/Gmail/Gmail";
import Figma from "./components/Apps/Figma/Figma";
import Github from "./components/Apps/Github/Github";
import Giphy from "./components/Apps/Giphy/Giphy";
import Authenticate from "./components/Apps/Figma/Authenticate";
import GoogleDrive from "./components/Apps/GoogleDrive/GoogleDrive";
function App() {
	return (
		<div className="">
			<Layout>
				{/* Insert your compoents inside this layout entity */}
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={ToolsView} />
						<Route exact path="/tools" component={ToolsDirectory} />
						<Route path="/gmail" component={Gmail} />
						<Route path="/figma" component={Figma} />
						<Route path="/github" component={Github} />
						<Route path="/authenticate" component={Authenticate} />
						<Route path="/giphy" component={Giphy} />
						<Route path="/googledrive" component={GoogleDrive} />
					</Switch>
				</BrowserRouter>
			</Layout>
		</div>
	);
}

export default App;
