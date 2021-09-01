import Layout from "./components/layout";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ToolsView from "./components/ToolsViewPage/ToolsView";
import ToolsDirectory from "./components/ToolsDirectory/ToolsDirectory";
function App() {
  return (
    <div className="">
      <Layout>
        {/* Insert your compoents inside this layout entity */}
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ToolsView} />
            <Route path="/tools" component={ToolsDirectory} />
          </Switch>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
