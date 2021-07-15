import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {SignupPage} from './Pages/SignupPage';
import {SigninPage} from './Pages/SigninPage';
import {SignoutPage} from './Pages/SignoutPage';
import { supabaseClient } from './api/supabaseClient';

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
          <HomePage/>
        </Route>
      </Switch>
    </Router>
  );
}

const HomePage = () => {
  const session = supabaseClient.auth.session()
  return <div>
    <h5>HOME</h5>
    {session && `you are logged in as ${session.user.email}`}
  </div>
}

export default App;
