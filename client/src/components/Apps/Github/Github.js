import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ToolsHeader from "../../toolsheader/toolsheader";
import GithubHome from "./containers/GithubHome";

const Github = () => {
  return (
    <>
      <ToolsHeader />
      <Router>
        <Switch>
          <Route exact path="/github" component={GithubHome} />
        </Switch>
      </Router>
    </>
  );
};

export default Github;
