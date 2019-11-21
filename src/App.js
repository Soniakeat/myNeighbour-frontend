// const typography = new Typography(lincolnTheme)
import React, { Component } from "react";
import { Switch } from "react-router-dom";
import AuthProvider from "./lib/AuthProvider";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Items from "./private/Items";
import ItemsAdd from "./private/ItemsAdd";
import Item from "./private/Item";
import Profile from "./private/Profile";
import MyProfile from "./private/MyProfile";
import ProfileEdit from "./private/ProfileEdit";
import ItemsEdit from "./private/ItemsEdit";

import Footer from "./components/Footer";
import Landing from "./components/Landing";

import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div>
          <Navbar />
          <Switch>
            <AnonRoute path="/" exact component={Landing} />
            <AnonRoute path="/signup" exact component={Signup} />
            <AnonRoute path="/login" exact component={Login} />
            <PrivateRoute path="/items" exact component={Items} />
            <PrivateRoute path="/items/add" exact component={ItemsAdd} />
            <PrivateRoute path="/items/edit/:id" exact component={ItemsEdit} />
            <PrivateRoute path="/items/:id" exact component={Item} />
            <PrivateRoute path="/profile" exact component={MyProfile} />
            <PrivateRoute path="/profile/edit" exact component={ProfileEdit} />
            <PrivateRoute path="/profile/:id" exact component={Profile} />
          </Switch>
          <Footer />
        </div>
      </AuthProvider>
    );
  }
}

export default App;
