import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Navbar extends Component {
  render() {

    const { user, logout, isLoggedin } = this.props;
    return (
      <div style={{ padding: '30px', 
        background: 'rgb(75, 210, 214)' }}>
        {
          isLoggedin ?
            (<div>
              <div>
              <Link to="/items"> <button>Home</button> </Link>             
              <Link to="/profile"> <button>Profile</button> </Link>
              </div>            
              <div>
              <button onClick={logout}>Logout</button>

              </div>

            </div>)
            :
            (<div>
              {/* <Link to="/login"> <button>Login</button> </Link>
              <br />
              <Link to="/signup"> <button>Signup</button> </Link> */}

            </div>)
        }
      </div>
    );
  }
}

export default withAuth(Navbar);