import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ToolsHeader from "../../toolsheader/toolsheader";
import GithubHome from "./containers/GithubHome";
import GithubInstalled from "./containers/GithubInstalled";

const Github = () => {
  return (
    <>
      <ToolsHeader />
      <Router>
        <Switch>
          <Route exact path="/github" component={GithubHome} />
          <Route exact path="/github/github-installed" component={GithubInstalled} />
        </Switch>
      </Router>
    </>
  );
};

export default Github;