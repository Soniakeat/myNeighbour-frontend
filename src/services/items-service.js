import axios from "axios";

class Items {
  constructor() {
    this.apiService = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      withCredentials: true
    });
  }

  //Get all items
  getItems() {
    return this.apiService.get("/items").then(({ data }) => data);
  }

  //Get contacts item
  getContacts(id) {
    return this.apiService.get(`/items/${id}`).then(({ data }) => data);
  }

  //Add One Item
  addItem(item) {
    console.log(item);
    const { title, description } = item;
    return this.apiService
      .post("/items/add", { title, description })
      .then(({ data }) => data);
  }

  //Edit One Item
  editItem(item) {
    console.log(item);
    const { id, title, description } = item;
    return this.apiService
      .patch("/items/edit/" + id, { title, description })
      .then(({ data }) => data);
  }

  //Delete Item
  deleteItem(itemId) {
    return this.apiService.delete(`items/${itemId}/`).then(({ data }) => data);
  }

  //Add Contact to Item
  addContact(itemId) {
    return this.apiService
      .put(`items/${itemId}/contact/add`)
      .then(({ data }) => data);
  }
}

const itemsAPI = new Items();

export default itemsAPI;
