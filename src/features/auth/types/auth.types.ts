import type { User } from "@/types";

export interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
}

export interface AuthActions {
    setAuth: (user: User, token: string) => void;
    logout: () => void;
}

export type AuthStore = AuthState & AuthActions;

export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponseData {
    user: User;
    token: string;
}

export interface LoginResponse {
    success: boolean;
    message: string;
    data: LoginResponseData;
}