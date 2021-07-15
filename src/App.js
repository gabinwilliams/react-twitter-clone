import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {SignupPage} from './Pages/SignupPage';
import {SigninPage} from './Pages/SigninPage';
import {SignoutPage} from './Pages/SignoutPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/signin">
	  	  <SigninPage/>
        </Route>
        <Route path="/signout">
          <SignoutPage/>
        </Route>
        <Route path="/">
          Home
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
