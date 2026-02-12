import { useState } from 'react';
import { AxiosError } from 'axios';
import { loginUser } from '../api/login';
import { useAuthStore } from '../store/auth.store';
import type { LoginRequest, LoginResponse } from '../types/auth.types';

interface UseLoginReturn {
    login: (credentials: LoginRequest) => Promise<void>;
    isLoading: boolean;
    error: string | null;
}

export const useLogin = (): UseLoginReturn => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const setAuth = useAuthStore((state) => state.setAuth);

    const login = async (credentials: LoginRequest) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await loginUser(credentials);
            
            if (response.success) {
                setAuth(response.data.user, response.data.token);
            } else {
                setError(response.message || 'Login gagal');
                throw new Error(response.message || 'Login gagal');
            }
        } catch (err) {
            let errorMessage = 'Terjadi kesalahan saat login';
            
            if (err instanceof AxiosError) {
                // Handle axios error
                if (err.response?.data) {
                    const responseData = err.response.data as LoginResponse;
                    errorMessage = responseData.message || err.message;
                } else if (err.message) {
                    errorMessage = err.message;
                }
            } else if (err instanceof Error) {
                errorMessage = err.message;
            }
            
            setError(errorMessage);
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    return { login, isLoading, error };
};
