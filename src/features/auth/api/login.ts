import { api } from '@/lib/axios/axios-client';
import type { LoginRequest, LoginResponse } from '../types/auth.types';

export const loginUser = async (credentials: LoginRequest): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>('/api/users/login', credentials);
    return response.data;
};
