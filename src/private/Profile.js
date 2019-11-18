import React, { Component } from 'react';
import { withAuth } from '../lib/AuthProvider';
import profilesApi from '../services/profiles-service';
import itemsApi from '../services/items-service';
import { Link } from "react-router-dom";
import  Items from '../private/Items';

class Profile extends Component {
  state = {
    user: null
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const user = await profilesApi.getUser(id);
    this.setState({
      user
    });
  }


  render() {
    const { user } = this.state;
    if (user) {
      return (
        <section>
          <article> 
          <h4>Profile</h4>
            <h4>{user.firstName}</h4>
          </article>
          
          <article>
        <h1>Items</h1>
      

{/*         {listOfItems.map((item, index) => (
          <Link to={`/items/${item._id}`}>
            <div>
              <img key={index} src={item.image} alt="item"></img>
              <p>{item.title}</p>
            </div>
          </Link>
        ))} */}
      </article>

          <article>
           <h4>Interested</h4>
          </article>

         
        </section>
      );
    } else {
      return <p>Loading ...</p>;
    }
  }
}

export default withAuth(Profile);