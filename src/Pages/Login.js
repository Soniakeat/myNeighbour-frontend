import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

import "../App.css";

class Login extends Component {
  state = { email: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.login({ email, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <>
        <div>
          <form className="form-container" onSubmit={this.handleFormSubmit}>
            <div>
              <img className="logo" src="/images/Logo.png" alt="" />
            </div>
            <div className="label-form">
              <label className="text-label">Email:</label>
            </div>
            <div>
              <input
                className="input-form"
                type="text"
                name="email"
                placeholder="email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
            <div className="label-form">
              <label className="text-label">Password:</label>
            </div>
            <div>
              <input
                className="input-form"
                type="password"
                name="password"
                placeholder="*****"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <div className="btn-form">
              <button>
                <input type="submit" value="LOGIN" />
              </button>
            </div>
          </form>
        </div>

        <div className="link-form">
          <p>No registered?</p>
          <span>
            <Link to={"signup"}>Signup</Link>{" "}
          </span>
        </div>
      </>
    );
  }
}

export default withAuth(Login);
