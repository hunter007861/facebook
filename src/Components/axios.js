import axios from "axios";

const instance = axios.create({
    baseURL:"https://facebook-backend-mern.herokuapp.com"
})

export default instance