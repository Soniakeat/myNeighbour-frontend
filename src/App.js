import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import AuthProvider from './lib/AuthProvider';

import Navbar from './components/Navbar';

import Login from './Pages/Login';
import Signup from './Pages/Signup';
import SignupNext from './Pages/SignupNext';
import Private from './components/PrivateRoute'

import AnonRoute from './components/AnonRoute';
import PrivateRoute from './components/PrivateRoute';


class App extends Component {
  render() {
    return (
      <AuthProvider>

        <div>
          <Switch>
            <AnonRoute path="/signup" exact component={Signup} />
            <AnonRoute path="/login" exact component={Login} />
            <PrivateRoute path="/signup/next" exact component={SignupNext} />
          </Switch>
        </div>

      </AuthProvider>
    )
  }
}


export default App;
