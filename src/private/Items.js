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
    if (listOfItems) {
      return (
        <article>
          <div className="titleContainer">
            <h1 className="connect-Neighbour">Items of my NEIGHBOURS</h1>
          </div>
          <div className="itemsContainer">
            <Link to="/items/add">
              <button> Add Item</button>
            </Link>
            {listOfItems.map((item, index) => (
              <div className="itemsCards">
                <Link to={`/items/${item._id}`}>
                  <img
                    width="200"
                    key={index}
                    src={item.image}
                    alt="item"
                  ></img>
                  <p>Title: {item.title}</p>
                </Link>
              </div>
            ))}
          </div>
        </article>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default withAuth(Items);
