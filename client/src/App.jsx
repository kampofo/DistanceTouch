import React from 'react';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

// pages
import Home from './pages/home/Home';
import Employee from './pages/employee/Employee';
import CheckIn from './pages/checkIn/CheckIn';
import Schedule from './pages/schedule/Schedule';
import LogIn from './pages/logIn/LogIn';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/LogIn" render={(props) => <LogIn />} />
          <Route exact path="/Employee" render={(props) => <Employee />} />
          <Route exact path="/Schedule" component={Schedule} />
          <Route exact path="/CheckIn" component={CheckIn} />
        </Switch>

      </div>
    </Router>);
}

export default App;
