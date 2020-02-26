import React, { Component } from 'react';
import { withAuth } from '../lib/AuthProvider';
import { Link } from 'react-router-dom';

import profilesApi from '../services/profiles-service';
import itemsAPI from '../services/items-service';

class MyProfile extends Component {
  state = {
    user: { items: [] }
  };

  handleDelete = async itemId => {
    const { user } = this.state;
    const itemToDelete = await itemsAPI.deleteItem(itemId);
    for (var i = 0; i < user.items.length; i++)
      if (user.items[i]._id === itemToDelete._id) {
        user.items.splice(i, 1);
        break;
      }

    this.setState({
      user
    });
  };


  async componentDidMount() {
    const { user } = this.props;
    const userFromApi = await profilesApi.getUser(user._id);
    console.log(userFromApi);
    this.setState({
      user: userFromApi,
      avatarURL: user.image
    });
  }

  render() {
    const { user } = this.state;
    console.log(user);
    return (
      <>
        <section className="profil-section">
          <article className="myProfile-container">
            <div className="imgProfile-container">
              <img width="60" src={user.image} alt="myProfile"></img>
            </div>
            <div className="infoProfile-container">
              <h4 className="title-profile">My profile</h4>
              <p>
                <strong>Name:</strong> {user.firstName} {user.lastName}
              </p>
              <p>
                <strong>Postal code:</strong> {user.postalCode}
              </p>
              <p>
                <strong>Phone Number:</strong> {user.phoneNumber}
              </p>

              <div className="btn-editProfile">
                <Link to="/profile/edit">
                  <button className="btn-edit">Edit profile</button>
                </Link>
                <Link to="/profile/edit">
                  <button className="delete-btn btn-edit ">Delete</button>
                </Link>
              </div>
            </div>
          </article>

          <article className="myProfile-items">
            <div>
              <h4 className="title-profile">My Items</h4>
            </div>
            <div>
              {user.items.length > 0 ? (
                <>
                  {user.items.map((item, index) => (
                    <div className="user-item-container">
                      <Link to={`/items/${item._id}`}>
                        <p>
                          <strong>Title:</strong> {item.title}
                        </p>
                        <img
                          width="200"
                          key={index}
                          src={item.image}
                          alt="item"
                        ></img>
                      </Link>
                      <div className="btn-profile-container">
                        <Link to={`/items/edit/${item._id}`}>
                          <button className="btn-edit">Edit Item</button>
                        </Link>
                        <Link to="/items/add">
                          <button className="btn-edit">Add Item</button>
                        </Link>
                      </div>
                      <button
                        className="delete-btn btn-edit"
                        onClick={() => this.handleDelete(item._id)}
                      >
                        Delete item
                      </button>
                      <h5>
                        Contacts:{' '}
                        {item.contacts
                          .map(contact => contact.firstName)
                          .join(', ')}
                      </h5>
                    </div>
                  ))}
                </>
              ) : (
                <p>Users has no items...</p>
              )}
            </div>
          </article>
        </section>
      </>
    );
  }
}

export default withAuth(MyProfile);
