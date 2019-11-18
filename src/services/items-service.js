import axios from "axios";

class Items {
  constructor() {
    this.apiService = axios.create({
      baseURL: "http://localhost:4000",
      withCredentials: true
    });
  }

  //Get all items
  getItems() {
    return this.apiService.get("/items").then(({ data }) => data);
  }

  //Get one item
  getItem(id) {
    return this.apiService.get(`/items/${id}`).then(({ data }) => data);
  }

  //Add one item
  addItem(item) {
    console.log(item);
    const { title, description } = item;
    return this.apiService
      .post("/items/add", { title, description })
      .then(({ data }) => data);
  }

  //Add contact to item
  addContact(itemId) {
    return this.apiService
      .put(`items/${itemId}/contact/add`)
      .then(({ data }) => data);
  }



}

const itemsAPI = new Items();

export default itemsAPI;
