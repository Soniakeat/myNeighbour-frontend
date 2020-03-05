import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div>
          <img id="logo-land" src="/images/Logo.png" alt="" />
        </div>
        <div id="connect-Neighbour-land">
          <p>Connect to your POMME de TERRE!</p>
        </div>
        <div id="link-land">
          <Link to={'signup'}>
            <button className="btn-land btn-edit">Signup</button>
          </Link>
          <Link to={'login'}>
            <button className="btn-land btn-edit">Login</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default withAuth(Landing);
