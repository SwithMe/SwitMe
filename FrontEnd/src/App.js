import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import FindEmail from "./pages/FindEmail";
import FindPassword from "./pages/FindPassword";
import StudyList from "./pages/StudyList";

import StopWatch from "./pages/StopWatch";
import StudyDetail from "./pages/StudyDetail";
import Online from "./pages/Online";
import Offline from "./pages/Offline";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/findemail" component={FindEmail} />
        <Route exact path="/findpassword" component={FindPassword} />
        <Route exact path="/studylist" component={StudyList} />

        <Route exact path="/stopwatch" component={StopWatch} />
        <Route exact path="/studydetail" component={StudyDetail} />

        <Route exact path="/online" component={Online} />
        <Route exact path="/offline" component={Offline} />
      </Switch>
    </Router>
  );
}

export default App;
