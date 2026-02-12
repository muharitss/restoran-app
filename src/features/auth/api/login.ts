import { api } from '@/lib/axios/axios-client';
import type { LoginRequest, LoginResponse } from '../types/auth.types';

export const loginUser = async (credentials: LoginRequest): Promise<LoginResponse> => {
    console.log('🔵 Sending login request:', credentials);
    
    try {
        const response = await api.post<LoginResponse>('/api/users/login', credentials);
        console.log('✅ Login response:', response.data);
        return response.data;
    } catch (error) {
        console.error('❌ Login error:', error);
        throw error;
    }
};
