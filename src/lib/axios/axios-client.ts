import axios from 'axios'

const baseURL = import.meta.env.VITE_API_BASE_URL || 'https://restoran-backend-srdw.onrender.com';

console.log('🌐 API Base URL:', baseURL);

export const api = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 30000, // 30 seconds timeout
});

// Request interceptor - Add auth token
api.interceptors.request.use(
    (config) => {
        console.log(`📤 API Request: ${config.method?.toUpperCase()} ${config.url}`);
        
        const authStorage = localStorage.getItem('auth-storage');
        if (authStorage) {
            try {
                const { state } = JSON.parse(authStorage);
                if (state.token) {
                    config.headers.Authorization = `Bearer ${state.token}`;
                }
            } catch (error) {
                console.error('Error parsing auth storage:', error);
            }
        }
        return config;
    },
    (error) => {
        console.error('📤 Request Error:', error);
        return Promise.reject(error);
    }
);

// Response interceptor - Handle errors
api.interceptors.response.use(
    (response) => {
        console.log(`📥 API Response: ${response.config.method?.toUpperCase()} ${response.config.url}`, response.data);
        return response;
    },
    (error) => {
        console.error('📥 Response Error:', error);
        
        if (error.code === 'ECONNABORTED') {
            console.error('⏱️ Request timeout - Server took too long to respond');
        } else if (error.code === 'ERR_NETWORK') {
            console.error('🌐 Network Error - Cannot reach server');
            console.error('Check if backend is running at:', baseURL);
        } else if (error.response) {
            console.error('❌ Server Error:', error.response.status, error.response.data);
        }
        
        return Promise.reject(error);
    }
);