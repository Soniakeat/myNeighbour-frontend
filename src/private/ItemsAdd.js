import React, { Component } from 'react';
import { withAuth } from '../lib/AuthProvider';
import { Redirect } from "react-router-dom";
import itemsApi from '../services/items-service'

class ItemsAdd extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            description: "",
            redirect: false,
            path: ""

        };
    }

    handleFormSubmit = event => {
        event.preventDefault();
        const { title, description } = this.state;
        itemsApi.addItem({ title, description }).then(this.redirect('/items')).catch(error => console.log(error))
    };

    redirect = path => {
        this.setState({
            redirect: true,
            path
        })
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        const { title, description, redirect } = this.state
        return (
            <div>
                <h1>Add Item</h1>
                <div >
                <form className="form-container" onSubmit={this.handleFormSubmit} >
                    <label htmlFor="title">Title</label>
                    <input onChange={this.handleChange} name="title" type="text" value={title} />
                    <label htmlFor="description">Description</label>
                    <input onChange={this.handleChange} name="description" type="text" value={description} />
                    <button>Submit</button>
                </form>
                {redirect ? <Redirect to={this.state.path} props={this.props} /> : null}
                </div>
            </div>
        )
    }
}

export default withAuth(ItemsAdd);