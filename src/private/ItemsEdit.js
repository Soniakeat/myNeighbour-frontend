import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import itemsApi from "../services/items-service";
import { Redirect } from "react-router-dom";

class ItemEdit extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
      path: "",
      image: "",
      title: "",
      description: ""
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const { image, title, description } = await itemsApi.getContacts(id);
    this.setState({ image, title, description });
  }

  handleFormSubmit = async event => {
    event.preventDefault();
    const { id } = this.props.match.params;
    const { image, title, description } = this.state;

    await this.props.updateItem({
      id,   
      image,
      title,
      description
    });

    this.props.history.push("/profile");
  };

  redirect = path => {
    this.setState({
      redirect: true,
      path
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { image, title, description, redirect } = this.state;
    return (
      <>
        <div>
          <img className="logo" src="/images/Logo.png" alt="" />
        </div>
        <div>
          <form onSubmit={this.handleFormSubmit}>
            <div className="form-container">
              <h3 className="connect-Neighbour">Edit your Items</h3>
              <label
                className="label-form"
                className="text-label"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="input-form"
                onChange={this.handleChange}
                name="title"
                type="text"
                value={title}
              />
              <label
                className="label-form"
                className="text-label"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="input-form"
                onChange={this.handleChange}
                name="description"
                type="text"
                value={description}
              ></textarea>
              <button className="btn-form">Submit</button>
            </div>
          </form>
          {redirect ? (
            <Redirect to={this.state.path} props={this.props} />
          ) : null}
        </div>
      </>
    );
  }
}

export default withAuth(ItemEdit);
