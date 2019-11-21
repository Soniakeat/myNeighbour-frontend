import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import profilesApi from "../services/profiles-service";
import itemsApi from "../services/items-service";
import { Link } from "react-router-dom";

class Profile extends Component {
  state = {
    profile: { items: [] }
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const profile = await profilesApi.getUser(id);
    this.setState({
      profile
    });
  }

  render() {
    const { profile } = this.state;
    if (profile) {
      return (
        <section className="item-container">
          <article>
            <h4 className="title-profile">NEIGHBOUR's Profile</h4>
          </article>

          <article className="items-owner">
            <h1 className="title-profile">Items</h1>
            {!(profile.items.length === 0) ? (
              profile.items.map((item, index) => (
                <Link to={`/items/${item._id}`}>
                  <div className="cards-items-owner">
                    <img
                      width="200"
                      key={index}
                      src={item.image}
                      alt="item"
                    ></img>
                    <p>Title: {item.title}</p>
                    <p>Interested users:</p>
                    {item.contacts.map(contact => (
                      <p>{contact.firstName}</p>
                    ))}
                  </div>
                </Link>
              ))
            ) : (
              <p>User has no items</p>
            )}
          </article>
        </section>
      );
    } else {
      return <p>Loading ...</p>;
    }
  }
}

export default withAuth(Profile);
