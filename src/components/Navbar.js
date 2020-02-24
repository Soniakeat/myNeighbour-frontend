import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Navbar extends Component {
  render() {
    const { logout, isLoggedin } = this.props;
    if (isLoggedin) return <LoggedinNavbar logOut={logout}/>
    else return( <div></div>)
  }
}

function LoggedinNavbar(props) {
  return (<div className="nav-container">
              <Link className="nav-links" to="/items">
                {" "}
                Home
              </Link>
              <Link className="nav-links" to="/profile">
                myProfile
              </Link>
              <Link className="nav-links" onClick={props.logOut}>Logout</Link>              
            </div>)
}

export default withAuth(Navbar);
