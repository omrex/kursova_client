import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:3002/api", //къде е сървърът
    headers: {
        "Content-type": "application/json"
    }
});