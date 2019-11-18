import React, { Component } from 'react';
import { withAuth } from '../lib/AuthProvider';
import itemsApi from '../services/items-service';
import { Link } from "react-router-dom";

class Item extends Component {
  state = {
    item: null
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const item = await itemsApi.getItem(id);
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
  async getOwner () {
    const { id } = this.props.match.params.id; 

  }
    


  render() {   
    const { item } = this.state;
    if (item) {
      return (
        <section>
        <div>
        <h1>Item</h1>
          <article>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>         
            <p>{item.description}</p>
          </article>
        </div>

        <div>
            <h1>Owner</h1>
            <Link to={`/profile/${item._id}`}>{item.owner.firstName}</Link>
        </div>

        <div>

        </div>
           

          
          <button onClick={() => this.handleContact()}>Contact</button>
        </section>
      );
    } else {
      return <p>Loading ...</p>;
    }
  }
}

export default withAuth(Item);
