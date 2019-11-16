import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {withAuth} from '../lib/AuthProvider';

class SignupNext extends Component {
    state = { 
        firstName:"",
        lastName:"",
        phoneNumber:"",
        postalCode:""
    }

    handleFormSubmit = event => {
        event.preventDefault();
        const { firstName, lastName,phoneNumber, postalCode } = this.state;
        this.props.signup({ firstName, lastName,phoneNumber, postalCode });
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        const { firstName, lastName,phoneNumber, postalCode } = this.state;
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>

                <label>firstName</label>
                <input type="text" name="firstname" value={firstName} onChange={this.handleChange}/>

                <label>lastName</label>
                <input type="text" name="lastName" value={lastName} onChange={this.handleChange}/>

                <label>phoneNumber</label>
                <input type="text" name="phoneNumber" value={phoneNumber} onChange={this.handleChange}/>

                <label>postalCode</label>
                <input type="text" name="postalCode" value={postalCode} onChange={this.handleChange}/>

                <input type="submit" value="Signup"/>
                </form>         
                <p>Already have account?</p>
                <Link to={"login"}>Login</Link>      
            </div>
        )
    }
}


export default withAuth(SignupNext); 