import axios from "axios";

class Profiles {
  constructor() {
    this.apiService = axios.create({
      baseURL: "http://localhost:4000",
      withCredentials: true
    });
  }

  //GET One User
  getUser(id) {
    return this.apiService.get(`/auth/users/${id}`).then(({ data }) => data);
  }

  //GET owner items
  getItemsOwner (id) {
    return this.apiService.get(`/profile/${id}/items`).then(({data}) => data);
  }

}

const profilesAPI = new Profiles();

export default profilesAPI;
