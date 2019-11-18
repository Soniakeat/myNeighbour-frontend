import React, { Component } from 'react';
import { withAuth } from '../lib/AuthProvider';
import itemsApi from '../services/items'
import { Link } from "react-router-dom";

class Items extends Component {
    constructor() {
        super();
        this.state = {
            listOfItems: []
        };
    }

    async componentDidMount() {
        const listOfItems = await itemsApi.getItems()
        this.setState({ listOfItems })
    }

    render() {
        const { listOfItems } = this.state
        return (
            <div>
                <h1>Items</h1>
                <Link to="/items/add">Add Item</Link>
                {listOfItems.map((item, index) => <div><img key={index} src={item.image}></img><p>{item.title}</p></div>)}
            </div>
        )
    }
}

export default withAuth(Items);