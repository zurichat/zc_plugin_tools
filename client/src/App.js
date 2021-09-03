import ToolsHeader from "./components/toolsheader/toolsheader";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ToolsView from "./components/ToolsViewPage/ToolsView";
import ToolsDirectory from "./components/ToolsDirectory/ToolsDirectory";
import Gmail from "./components/Apps/Gmail/Gmail";
import Figma from "./components/Apps/Figma/Figma";
import Github from "./components/Apps/Github/Github";
import Giphy from "./components/Apps/Giphy/Giphy";
import Authenticate from "./components/Apps/Figma/subRoutes/Authenticate";
import GoogleDrive from "./components/Apps/GoogleDrive/GoogleDrive";
import FigmaSubRoutes from "./components/Apps/Figma/SubRoute";
import Layout from "./components/layout/layout";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route exact path="/" component={ToolsView} />
            <ToolsHeader>
              <Route exact path="/tools" component={ToolsDirectory} />
              <Route path="/gmail" component={Gmail} />
              <Route path="/figma/:subroute" component={FigmaSubRoutes} />
              <Route path="/figma" component={Figma} />
              <Route path="/github" component={Github} />
              <Route path="/giphy" component={Giphy} />
              <Route path="/googledrive" component={GoogleDrive} />
            </ToolsHeader>
          </Layout>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
