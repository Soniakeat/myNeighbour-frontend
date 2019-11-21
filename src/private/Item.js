import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import itemsApi from "../services/items-service";
import { Link } from "react-router-dom";

class Item extends Component {
  state = {
    item: null
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const item = await itemsApi.getContacts(id);
    //console.log(item)
    this.setState({
      item
    });
  }

  //Add contact to item
  async handleContact() {
    const productId = this.props.match.params.id;
    const newContact = await itemsApi.addContact(productId);
    console.log(newContact);
  }

  //Get owner name
  async getOwner() {
    const { id } = this.props.match.params.id;
  }

  render() {
    const { item } = this.state;
    console.log(item)
    if (item) {
      return (
        <section>
        <div>
          <div className="item-container">
            <h1 className="connect-Neighbour">Item</h1>
          </div>
          <div> 
            <article className="item-card">
            <div>
              <img src={item.image} alt="" />
            </div>
            <div>
              <p>Title: {item.title}</p>
              <p>Description: {item.description}</p>
            </div>
          <div>
            <p>Owner: 
            <Link to={`/profile/${item.owner._id}`}>
              {item.owner.firstName}
            </Link></p>
          </div>
            </article>
          </div>

          <div className="btn-contact">
          <button className="btn" onClick={() => this.handleContact()}>Contact</button>
          </div>
          </div>
        </section>
      );
    } else {
      return <p>Loading ...</p>;
    }
  }
}

export default withAuth(Item);
