import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {withAuth} from '../lib/AuthProvider';


class Login extends Component {
    state = { username: "", password: ""};

handleFormSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.login({ email, password});
};

handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
};

    render() {
        const { email, password } = this.state;

        return (
            <div>
            <form onSubmit={this.handleFormSubmit}>
                <label>Email:</label>
                <input type="text" name="email" value={email} onChange={this.handleChange}/>

                <label>Password:</label>
                <input type="text" name="password" value={password} onChange={this.handleChange}/>

                <input type="submit" value="Login"/>
            </form>

            <p>No registered?</p>
                <Link to={"signup"}>Signup</Link>
            </div>
        )
    }
}


export default withAuth(Login);