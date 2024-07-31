// api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://nls-companion.onrender.com/api/',
    timeout: 1000,
});

export default api;
