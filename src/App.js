import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { AddUser } from "./components/AddUser";
import React from "react";
import { UserList } from "./components/UserList";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/add">
            <AddUser />
          </Route>
          <Route path="/edit/:id">
            <AddUser isEdit={true} />
          </Route>
          <Route path="/" exact={true}>
            <UserList />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
