import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Landing extends Component {
  render() {
    return (
      <div>
      <div>
        <img id="logo-land" src="/images/Logo.png" alt=""/>
      </div>
      <div id="connect-Neighbour-land">
        <p>Connect to your NEIGHBOUR!</p>
      </div>
      <div id="link-land">
        <Link to={"signup"}>
            <button className="btn-land">Signup</button>
        </Link>
        <Link to={"login"}>
            <button className="btn-land">Login</button>
        </Link>
      </div>
      </div>
    );
  }
}

export default withAuth(Landing);
