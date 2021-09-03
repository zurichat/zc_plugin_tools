// import React from "react";

// const Github = () => {
//   return <div>This is the github page</div>;
// };

// export default Github;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GithubInstall from "./containers/GithubInstall";

const Github = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='github/github-installed' component={GithubInstall} />
        </Switch>
      </Router>
    </>
  );
};

export default Github;