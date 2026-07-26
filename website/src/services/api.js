import axios from "axios";


const api = axios.create({

    baseURL: "https://api.nova-security.com",

    headers:{
        "Content-Type":"application/json"
    }

});


export default api;