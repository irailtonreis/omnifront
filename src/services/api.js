import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omni-desafio.herokuapp.com/' 
});

export default api;