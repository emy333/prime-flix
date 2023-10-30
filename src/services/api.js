import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;

// BASE DA API : https://www.themoviedb.org/3
