import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import itemsApi from "../services/items-service";
import { Redirect } from "react-router-dom";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
class ItemEdit extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
      path: "",
      title: "",
      description: "",
      avatar: "",
      isUploading: false,
      progress: 0,
      avatarURL: ""
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const { image, title, description } = await itemsApi.getContacts(id);
    this.setState({ avatarURL: image, title, description });
  }

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

  handleFormSubmit = async event => {
    event.preventDefault();
    const { id } = this.props.match.params;
    const { avatarURL, title, description } = this.state;

    await this.props.updateItem({
      id,
      avatarURL,
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
          <form onSubmit={this.handleFormSubmit}>
            <div className="form-container">
              <h2 className="connect-Neighbour">Edit your Items</h2>
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
                Change this picture
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
