import axios from "axios";

const BASE_URL = 'http://localhost:7070/api';

export default axios.create({
    baseURL: BASE_URL,
    method: "POST",
    headers: {
        "Content-type": "application/json"
    }
})