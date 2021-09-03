import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GithubHome from './containers/GithubHome';

const Github = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/github" component={GithubHome} />
        </Switch>
      </Router>
    </>
  );
};

export default Github;
