import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import FindEmail from "./pages/FindEmail";
import FindPassword from "./pages/FindPassword";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/findemail" component={FindEmail} />
        <Route exact path="/findpassword" component={FindPassword} />
      </Switch>
    </Router>
  );
}

export default App;
