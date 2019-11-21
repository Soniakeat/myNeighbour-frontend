import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Redirect } from "react-router-dom";
import itemsApi from "../services/items-service";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";

class ItemsAdd extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      redirect: false,
      path: "",
      avatar: "",
      isUploading: false,
      progress: 0,
      avatarURL: ""
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { title, description, avatarURL } = this.state;
    itemsApi
      .addItem({ title, description, avatarURL })
      .then(this.redirect("/items"))
      .catch(error => console.log(error));
  };

  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleUploadSuccess = filename => {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ avatarURL: url }));
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
    const { title, description, redirect } = this.state;
    return (
      <>
        <div className="form-add-item">
          <form className="form-container" onSubmit={this.handleFormSubmit}>
            <h1>Add Item</h1>
            <img width="60" src={this.state.avatarURL} />
            {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
            <label
              style={{
                backgroundColor: "#4bd2d6",
                color: "white",
                padding: 10,
                borderRadius: 4,
                cursor: "pointer"
              }}
            >
              Upload a picture!
              <FileUploader
                hidden
                accept="image/*"
                storageRef={firebase.storage().ref("images")}
                onUploadStart={this.handleUploadStart}
                onUploadError={this.handleUploadError}
                onUploadSuccess={this.handleUploadSuccess}
                onProgress={this.handleProgress}
              />
            </label>
            <label
              className="text-label"
              className="label-form"
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
              className="text-label"
              className="label-form"
              htmlFor="description"
            >
              {" "}
              Description
            </label>
            <textarea
              onChange={this.handleChange}
              name="description"
              type="text"
              value={description}
              
            ></textarea>
            <button className="btn-edit btn-add">Submit</button>
          </form>
          {redirect ? (
            <Redirect to={this.state.path} props={this.props} />
          ) : null}
        </div>
      </>
    );
  }
}

export default withAuth(ItemsAdd);
