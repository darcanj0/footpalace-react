import axios from "axios";

////api running local:
// const api = axios.create({ baseURL: "http://localhost:3001" });

////api on heroku
const api = axios.create({ baseURL: "https://footpalace-api.herokuapp.com/" });

// //api on render
// const api = axios.create({ baseURL: "https://footpalace-api.onrender.com" });

export default api;
