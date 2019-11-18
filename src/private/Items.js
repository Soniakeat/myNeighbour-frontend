import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import itemsApi from "../services/items-service";
import { Link } from "react-router-dom";

class Items extends Component {
  constructor() {
    super();
    this.state = {
      listOfItems: []
    };
  }

  async componentDidMount() {
    const listOfItems = await itemsApi.getItems();
    this.setState({ listOfItems });
  }

  render() {
    const { listOfItems } = this.state;
    return (
      <article>
        <h1>Items</h1>
        <Link to="/items/add">Add Item</Link>
        {listOfItems.map((item, index) => (
          <Link to={`/items/${item._id}`}>
            <div>
              <img key={index} src={item.image} alt="item"></img>
              <p>{item.title}</p>
            </div>
          </Link>
        ))}
      </article>
    );
  }
}

export default withAuth(Items);
