import axios from 'axios';

 const api = axios.create({
    baseURL : 'https://f3f5-49-207-21-23.ngrok.io'
})

export default api;