import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";	

class Footer extends Component {
  render() {

    return (
      <div className="footer">
       
      </div>
    );
  }
}

export default withAuth(Footer);