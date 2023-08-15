import axios from 'axios';

const client = axios.create({
    baseURL: "http://www.omdbapi.com"
})

export default client;