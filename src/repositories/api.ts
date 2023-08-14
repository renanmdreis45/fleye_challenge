import axios from 'axios';

const client = axios.create({
    baseURL: "https://www.omdbapi.com/?s="
})

export default client;