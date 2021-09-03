import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GithubHome from "./containers/GithubHome";
import Githubgivepermission from "./containers/Githubgivepermission";

const Github = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/github' component={GithubHome} />
          <Route exact path='/github/githubgivepermission' component={Githubgivepermission} />
        </Switch>
      </Router>
    </>
  );
};

export default Github;
