import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
