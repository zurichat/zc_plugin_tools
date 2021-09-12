import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Githubgivepermission from "./containers/Githubgivepermission";
// import ToolsHeader from "../../toolsheader/toolsheader";
import GithubHome from "./containers/GithubHome";
import GitMessage from "./containers/GitMessage";

const Github = () => {
  return (
    <>
      {/* <ToolsHeader /> */}
      <Router>
        <Switch>
          <Route exact path='/github/githubgivepermission' component={Githubgivepermission} />
          <Route exact path='/github' component={GithubHome} />
          <Route
            exact
            path='/github/github-message'
            component={GitMessage}
          />
        </Switch>
      </Router>
    </>
  );
};

export default Github;
