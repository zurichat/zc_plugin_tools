import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GithubHome from './containers/GithubHome';

const Github = () => {
  return (
    <>
      {/* Placeholder searchbar start */}
      <div>this part comes from zc main</div>
      {/* Place holder search bar stop */}
      <Router>
        <Switch>
          <Route exact path='/github' component={GithubHome} />
        </Switch>
      </Router>
    </>
  );
};

export default Github;
