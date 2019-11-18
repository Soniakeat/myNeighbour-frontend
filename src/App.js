import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import AuthProvider from './lib/AuthProvider';

import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Items from './private/Items';
import ItemsAdd from './private/ItemsAdd';


import AnonRoute from './components/AnonRoute';
import PrivateRoute from './components/PrivateRoute';


import './App.css';
import Typography from 'typography'
import lincolnTheme from 'typography-theme-lincoln'

const typography = new Typography(lincolnTheme)


class App extends Component {


  render() {
    return (
      <AuthProvider>

        <div>
          <Navbar />
          <Switch>
            <AnonRoute path="/signup" exact component={Signup} />
            <AnonRoute path="/login" exact component={Login} />
            <PrivateRoute path="/items" exact component={Items} />
            <PrivateRoute path="/items/add" exact component={ItemsAdd} />

          </Switch>
        </div>

      </AuthProvider>
    )
  }
}


export default App;
