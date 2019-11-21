import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";

import profilesApi from "../services/profiles-service";
import itemsAPI from "../services/items-service";

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
        <section>
          <article className="myProfile-container">
            <div className="imgProfile-container">
              <img width="60" src={user.image}></img>
            </div>
            <div className="infoProfile-container">
              <h4>My profile</h4>
              <h5>First name:{user.firstName}</h5>
              <h5>Postal code: {user.postalCode}</h5>
              <div className="btn-editProfile">
                <Link to="/profile/edit">
                  <button>Edit profile</button>
                </Link>
                <Link to="/profile/edit">
                  <button className="btnProfile">Delete profile</button>
                </Link>
              </div>
            </div>
          </article>

          <article className="myProfile-items">
            <div>
              <h4>My Items</h4>
            </div>
            <div>
              {user.items.length > 0 ? (
                <>
                  {user.items.map((item, index) => (
                    <div>
                      <Link to={`/items/${item._id}`}>
                        <h5>Title: {item.title}</h5>
                        <img
                          width="200"
                          key={index}
                          src={item.image}
                          alt="item"
                        ></img>
                      </Link>
                      <div>
                        <Link to={`/items/edit/${item._id}`}>
                          <button>Edit Item</button>
                        </Link>
                        <Link to="/items/add">
                          <button>Add Item</button>
                        </Link>
                      </div>
                      <button onClick={() => this.handleDelete(item._id)}>
                        Delete item
                      </button>
                    </div>
                  ))}
                  {/*   <div>
                    {items.map((item, index) => (
                      <h5>Contacts: {item._id.contacts}</h5>
                    ))}
                  </div> */}
                </>
              ) : (
                <p>Users has no items...</p>
              )}
            </div>

            {/*   <div>
           {items.map((item, index) => (           
           
            )){`/profile/${item.contacts._id}`}>{item.contacts}</Link> 
            </div>   */}
          </article>
        </section>
      </>
    );
  }
}

export default withAuth(MyProfile);
