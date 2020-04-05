import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import './App.css';

import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './components/dashboard/dashboard'

import Login from './components/auth/login'
import Signup from './components/auth/signup'
import ForgotPassword from './components/auth/forgotPassword'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/forgot-password">
            <ForgotPassword />
          </Route>
          <Route path="/">
            <Signup />
          </Route>
          
        </Switch>
    </Router>
    )
  }
}

export default App;
