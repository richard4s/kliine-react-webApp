import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './components/dashboard/dashboard'

import Login from './components/auth/login'
import Signup from './components/auth/signup'
import ForgotPassword from './components/auth/forgotPassword'

import Plans from './components/dashboard/plans'

// import { createStore, combineReducers } from "redux";
// import { Provider, connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>

          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/plans">
            <Plans />
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
