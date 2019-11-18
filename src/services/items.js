import axios from "axios";
class Items {
    constructor() {
        this.auth = axios.create({
            baseURL: "http://localhost:4000",
            withCredentials: true
        });
    }

    getItems() {
        return this.auth.get('/items')
            .then(({ data }) => data)

    }

    addItem(item) {
        console.log(item)
        const { title, description } = item
        return this.auth.post('/items/add', { title, description }
        )
            .then(({ data }) => data)

    }
    /* 
        signupnext(user) {
            const { firstName, lastName, phoneNumber, postalCode } = user;
            return this.auth
                .post("/auth/signup/next", { firstName, lastName, phoneNumber, postalCode })
                .then(({ data }) => data);
        }
    
        login(user) {
            const { email, password } = user;
            return this.auth
                .post("/auth/login", { email, password })
                .then(({ data }) => data);
        }
    
        logout() {
            return this.auth.post("/auth/logout", {}).then((response) => response.data);
        }
    
        me() {
            return this.auth.get("/auth/me").then((response) => response.data);
        } */
}

const itemsAPI = new Items();

export default itemsAPI;