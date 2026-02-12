import { useState } from 'react';
import { loginUser } from '../api/login';
import { useAuthStore } from '../store/auth.store';
import type { LoginRequest } from '../types/auth.types';

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
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Terjadi kesalahan saat login';
            setError(errorMessage);
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    return { login, isLoading, error };
};
