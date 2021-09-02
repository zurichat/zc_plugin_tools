import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Githubgivepermission from './containers/Githubgivepermission';

const Github = () => {
  return <>
    <Router>
    <Switch>
      <Route exact path='/github/githubgivepermission' component={Githubgivepermission} />
    </Switch>
  </Router>
  </>;
};

export default Github;
