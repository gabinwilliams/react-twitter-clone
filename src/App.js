import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {SignupPage} from './Pages/SignupPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/signin">
	  	  sign in
        </Route>
        <Route path="/signout">
          sign out 
        </Route>
        <Route path="/">
          Home
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
