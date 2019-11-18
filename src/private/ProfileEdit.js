import React, { Component } from 'react';
import { withAuth } from '../lib/AuthProvider';
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

import itemsApi from '../services/items-service';
import profilesApi from '../services/profiles-service';

class ProfileEdit extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            phoneNumber: "",
            postalCode: "",
        };
    }

    handleFormSubmit = event => {
        event.preventDefault();
        const { email, password, firstName, lastName, phoneNumber, postalCode } = this.state;
        profilesApi.addItem({ email, password, firstName, lastName, phoneNumber, postalCode })
                   .then(this.redirect('/items'))
                   .catch(error => console.log(error))
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        const { email, password, firstName, lastName, phoneNumber, postalCode } = this.state
        return (
            <div>
                <h1>Edit Profile</h1>
                <div >
                <form className="form-container" onSubmit={this.handleFormSubmit} >
                    <label htmlFor="email">Email</label>
                    <input onChange={this.handleChange} name="email" type="text" value={email} />
                    <label htmlFor="password">Password</label>
                    <input onChange={this.handleChange} name="password" type="text" value={password} />
                    <label htmlFor="firstName">First Name</label>
                    <input onChange={this.handleChange} name="firstName" type="text" value={firstName} />
                    <label htmlFor="lastName">Last Name</label>
                    <input onChange={this.handleChange} name="lastName" type="text" value={lastName} />
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input onChange={this.handleChange} name="phoneNumber" type="text" value={phoneNumber} />
                    <label htmlFor="postalCode">Postal Code</label>
                    <input onChange={this.handleChange} name="postalCode" type="text" value={postalCode} />                   
                    <button>Submit</button>
                </form>              
                </div>
            </div>
        )
    }
}

export default withAuth(ProfileEdit);