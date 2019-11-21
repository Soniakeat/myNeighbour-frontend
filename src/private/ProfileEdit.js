import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Redirect } from "react-router-dom";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import profilesApi from "../services/profiles-service";

class ProfileEdit extends Component {
  state = {
    id: this.props.user._id,
    email: this.props.user.email,
    firstName: this.props.user.firstName,
    lastName: this.props.user.lastName,
    phoneNumber: this.props.user.phoneNumber,
    postalCode: this.props.user.postalCode,
    avatar: "",
    isUploading: false,
    progress: 0,
    avatarURL: this.props.user.image
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

  handleFormSubmit = async event => {
    event.preventDefault();
    const {
      email,
      firstName,
      lastName,
      phoneNumber,
      postalCode,
      avatarURL
    } = this.state;
    const id = this.props.user._id;
    //console.log(id)
    //console.log(this.state)
    await this.props.updateProfile({
      id,
      email,
      firstName,
      lastName,
      phoneNumber,
      postalCode,
      avatarURL
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
          <form className="form-container" onSubmit={this.handleFormSubmit}>
          <h2 id="connect-Neighbour">Edit Profile</h2>
          <img width="60" src={this.state.avatarURL} className="nose"/>
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
            Change Picture
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
            <center>
            <button className="btn-edit btn-add btn-edit-prof">Submit</button>
          </center> 
         </form>
        </div>
      </>
    );
  }
}

export default withAuth(ProfileEdit);
