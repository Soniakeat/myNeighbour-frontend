import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Redirect } from "react-router-dom";

import profilesApi from "../services/profiles-service";

class ProfileEdit extends Component {
  state = {
    id: this.props.user._id,
    email: this.props.user.email,
    firstName: this.props.user.firstName,
    lastName: this.props.user.lastName,
    phoneNumber: this.props.user.phoneNumber,
    postalCode: this.props.user.postalCode
  };

  handleFormSubmit = async event => {
    event.preventDefault();
    const { email, firstName, lastName, phoneNumber, postalCode } = this.state;
    const id = this.props.user._id;
    //console.log(id)
    //console.log(this.state)
    await this.props.updateProfile({
      id,
      email,
      firstName,
      lastName,
      phoneNumber,
      postalCode
    });
    //.then(newUser => console.log(newUser))
    this.props.history.push("/profile");
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, firstName, lastName, phoneNumber, postalCode } = this.state;
    return (
      <>
        <div>
          <img className="logo" id="logo" src="/images/Logo.png" alt="" />
        </div>
        <div>
          <form className="form-container" onSubmit={this.handleFormSubmit}>
            <h2 id="connect-Neighbour">Edit Profile</h2>
            <label
              className="text-label"
              className="label-form"
              htmlFor="email"
            >
              Email
            </label>
            <input
              disabled
              className="input-form"
              onChange={this.handleChange}
              name="email"
              type="text"
              value={email}
            />
            <label
              className="text-label"
              className="label-form"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="input-form"
              onChange={this.handleChange}
              name="firstName"
              type="text"
              value={firstName}
            />
            <label
              className="text-label"
              className="label-form"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="input-form"
              onChange={this.handleChange}
              name="lastName"
              type="text"
              value={lastName}
            />
            <label
              className="text-label"
              className="label-form"
              htmlFor="phoneNumber"
            >
              Phone Number
            </label>
            <input
              className="input-form"
              onChange={this.handleChange}
              name="phoneNumber"
              type="text"
              value={phoneNumber}
            />
            <label
              className="text-label"
              className="label-form"
              htmlFor="postalCode"
            >
              Postal Code
            </label>
            <input
              className="input-form"
              onChange={this.handleChange}
              name="postalCode"
              type="text"
              value={postalCode}
            />
            <button className="btn-form">Submit</button>
          </form>
        </div>
      </>
    );
  }
}

export default withAuth(ProfileEdit);
