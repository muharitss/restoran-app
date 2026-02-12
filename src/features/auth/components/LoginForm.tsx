import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, isLoading, error } = useLogin();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            await login({ email, password });
            console.log('Login berhasil!');
        } catch (err) {
            console.error('Login gagal:', err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                />
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={isLoading}
                />
            </div>

            {error && <div style={{ color: 'red' }}>{error}</div>}

            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Login'}
            </button>
        </form>
    );
};
