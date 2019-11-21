import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <>
        {isLoggedin ? (
          
            <div className="nav-container">
              <Link className="nav-links" to="/items">
                {" "}
                Home
              </Link>
              <Link className="nav-links" to="/profile">
                myProfile
              </Link>
              <Link className="nav-links" onClick={logout}>Logout</Link>
              
            </div>
          
        ) : (
          <div>
            {/* <Link to="/login"> <button>Login</button> </Link>
              <br />
              <Link to="/signup"> <button>Signup</button> </Link> */}
          </div>
        )}
      </>
    );
  }
}

export default withAuth(Navbar);
