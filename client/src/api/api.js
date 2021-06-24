import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' })

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
});

export const login = (userData) => API.post('/users/login', userData);
export const signUp = (userData) => API.post('/users/register', userData);

export const fetchNotes = () => API.get('/notes');