import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <div>
        {isLoggedin ? (
          <div>
            <div className="nav-container">
              <Link className="nav-links" to="/items">
                {" "}
                Home
              </Link>
              <Link className="nav-links" to="/profile">
                myProfile
              </Link>
              <button className="nav-logout" onClick={logout}>
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* <Link to="/login"> <button>Login</button> </Link>
              <br />
              <Link to="/signup"> <button>Signup</button> </Link> */}
          </div>
        )}
      </div>
    );
  }
}

export default withAuth(Navbar);
