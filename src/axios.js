import axios from "axios";

const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3",
})
export default instance;
//import axios from "axios";
//const BASE_URL = "https://api.themoviedb.org/3";
//const instance = axios.create({ baseURL: BASE_URL });