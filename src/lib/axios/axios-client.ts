import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://restoran-backend-srdw.onrender.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use((config) => {
    const authStorage = localStorage.getItem('auth-storage');
    if (authStorage) {
        const { state } = JSON.parse(authStorage);
        if (state.token) {
            config.headers.Authorization = `Bearer ${state.token}`;
        }
    }
    return config;
});