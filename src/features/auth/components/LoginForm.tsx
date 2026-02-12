import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const { login, isLoading, error } = useLogin();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('');
        
        try {
            await login({ email, password });
            setSuccessMessage('Login berhasil!');
            console.log('Login berhasil!');
            
            // Clear form
            setEmail('');
            setPassword('');
        } catch (err) {
            console.error('Login gagal:', err);
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px' }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={isLoading}
                        style={{ 
                            padding: '8px', 
                            fontSize: '14px',
                            border: '1px solid #ccc',
                            borderRadius: '4px'
                        }}
                    />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        disabled={isLoading}
                        style={{ 
                            padding: '8px', 
                            fontSize: '14px',
                            border: '1px solid #ccc',
                            borderRadius: '4px'
                        }}
                    />
                </div>

                {error && (
                    <div style={{ 
                        color: 'white', 
                        backgroundColor: '#ef4444',
                        padding: '10px',
                        borderRadius: '4px',
                        fontSize: '14px'
                    }}>
                        {error}
                    </div>
                )}

                {successMessage && (
                    <div style={{ 
                        color: 'white', 
                        backgroundColor: '#10b981',
                        padding: '10px',
                        borderRadius: '4px',
                        fontSize: '14px'
                    }}>
                        {successMessage}
                    </div>
                )}

                <button 
                    type="submit" 
                    disabled={isLoading}
                    style={{
                        padding: '10px',
                        fontSize: '16px',
                        backgroundColor: isLoading ? '#ccc' : '#3b82f6',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: isLoading ? 'not-allowed' : 'pointer'
                    }}
                >
                    {isLoading ? 'Loading...' : 'Login'}
                </button>
            </form>
        </div>
    );
};
