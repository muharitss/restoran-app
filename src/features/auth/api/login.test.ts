import { loginUser } from '@/features/auth';

async function testLogin() {
    try {
        const response = await loginUser({
            email: 'owner@gmail.com',
            password: 'password123'
        });

        console.log('✅ Login successful!');
        console.log('Response:', response);
        console.log('User:', response.data.user);
        console.log('Token:', response.data.token);
        
        const authStorage = localStorage.getItem('auth-storage');
        console.log('Auth Storage:', authStorage);
        
        return response;
    } catch (error) {
        console.error('❌ Login failed:', error);
        throw error;
    }
}

async function testInvalidLogin() {
    try {
        const response = await loginUser({
            email: 'invalid@example.com',
            password: 'wrongpassword'
        });
        console.log('Response:', response);
    } catch (error) {
        console.error('Expected error for invalid credentials:', error);
    }
}

export { testLogin, testInvalidLogin };
