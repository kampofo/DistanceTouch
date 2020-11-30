import React from 'react';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

// pages
import Home from './pages/home/Home';
import Employee from './pages/employee/Employee';
import CheckIn from './pages/checkIn/CheckIn';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Employee" component={Employee}/>
          <Route exact path="/CheckIn" component={CheckIn}/>
        </Switch>
        
      </div>
    </Router>);
}

export default App;
