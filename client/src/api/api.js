import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' })

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
});

// Auth
export const login = (userData) => API.post('/users/login', userData);
export const signUp = (userData) => API.post('/users/register', userData);

//Notes
export const fetchNotes = () => API.get('/notes');
export const createNote = (newNote) => API.post('/notes', newNote);
export const deleteNote = (id) => API.delete( `/notes/${id}`);
export const updateNote = (id, updatedNote) => API.put(`/notes/${id}`, updatedNote);

//Transactions
export const fetchTransactions = () => API.get('/transactions');
export const createTransaction = (newTrasaction) => API.post('/transactions', newTrasaction);
export const deleteTransaction = (id) => API.delete(`/transactions/${id}`);
