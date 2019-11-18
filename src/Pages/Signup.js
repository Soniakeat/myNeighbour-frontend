import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withAuth } from '../lib/AuthProvider';


class Signup extends Component {
    state = {
        email: "",
        password: "",
        signUpNext: false,
        firstName: "",
        lastName: "",
        phoneNumber: "",
        postalCode: ""

    }

    handleFormSubmit = event => {
        event.preventDefault();
        const { email, password, firstName, lastName, phoneNumber, postalCode } = this.state;
        this.props.signup({ email, password, firstName, lastName, phoneNumber, postalCode });
    };
    handleFirstForm = event => {
        event.preventDefault();
        const { email, password } = this.state
        this.setState({ signUpNext: true, email, password })
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {

        const { email, password, firstName, lastName, phoneNumber, postalCode, signUpNext } = this.state;
        return (

            <  >
                {signUpNext ?
                    <div>
                        <h1> SignupNext</h1>
                        <div className="form-container" id="signupNext-container">
                            <form onSubmit={this.handleFormSubmit}>
                                <div className="label-form">
                                    <label className="text-label">First Name</label>
                                </div>
                                <div>
                                    <input className="input-form" type="text" placeholder="first name" name="firstName" value={firstName} onChange={this.handleChange} />
                                </div>
                                <div className="label-form">
                                    <label className="text-label">Last Name:</label>
                                </div>
                                <div>
                                    <input className="input-form" type="text" placeholder="last name" name="lastName" value={lastName} onChange={this.handleChange} />
                                </div>
                                <div className="label-form">
                                    <label className="text-label">Phone Number:</label>
                                </div>
                                <div>
                                    <input className="input-form" type="text" placeholder="phone number" name="phoneNumber" value={phoneNumber} onChange={this.handleChange} />
                                </div>
                                <div className="label-form">
                                    <label className="text-label">Postal Code:</label>
                                </div>
                                <div>
                                    <input className="input-form" type="text" placeholder="postal code" name="postalCode" value={postalCode} onChange={this.handleChange} />
                                </div>
                                <div className="btn-form">
                                    <input type="submit" value="Signup" />
                                </div>
                            </form>

                        </div>
                        <div className="link-form">
                            <p>Already have account?</p>
                            <Link to={"login"}>Login</Link>
                        </div>
                    </div> : <div>
                        <h1>Signup</h1>
                        <div className="form-container">
                            <form onSubmit={this.handleFirstForm}>
                                <div className="label-form">
                                    <label className="text-label">Email:</label>
                                </div>
                                <div>
                                    <input className="input-form" type="text" placeholder="email" name="email" value={email} onChange={this.handleChange} />
                                </div>
                                <div className="label-form">
                                    <label className="text-label">Password:</label>
                                </div>
                                <div>
                                    <input className="input-form" type="password" name="password" placeholder="*****" value={password} onChange={this.handleChange} />
                                </div>
                                <div className="btn-form">
                                    <input type="submit" value="Continue" />
                                </div>
                            </form>

                        </div>
                        <div className="link-form">
                            <p>Already have account?</p>
                            <span><Link to={"login"}>Login</Link></span>
                        </div></div>}






            </ >
        )
    }

}



export default withAuth(Signup);
