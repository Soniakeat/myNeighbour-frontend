import axios from "axios";

class Profiles {
  constructor() {
    this.apiService = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      withCredentials: true
    });
  }

  //GET One User
  getUser(id) {
    return this.apiService
      .get(`/profile/${id}/items`)
      .then(({ data }) => data.user);
  }

  //GET owner items
  getItemsOwner(id) {
    return this.apiService.get(`/profile/${id}/items`).then(({ data }) => data);
  }

  //Edit user profile
  editProfile(id, profileData) {
    return this.apiService
      .put(`/profile/edit/${id}`, profileData)
      .then(({ data }) => data);
  }
}

const profilesAPI = new Profiles();

export default profilesAPI;
