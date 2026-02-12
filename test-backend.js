// Test script to check if backend is accessible
const backendUrl = 'https://restoran-backend-srdw.onrender.com';

console.log('🔍 Testing backend connection...');
console.log('Backend URL:', backendUrl);

// Test 1: Check if backend is reachable
fetch(`${backendUrl}/api/users/login`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        email: 'owner@gmail.com',
        password: 'password123'
    })
})
.then(response => {
    console.log('✅ Backend is reachable!');
    console.log('Status:', response.status);
    return response.json();
})
.then(data => {
    console.log('✅ Response data:', data);
})
.catch(error => {
    console.error('❌ Backend connection failed:', error);
    console.error('Error details:', {
        message: error.message,
        name: error.name,
        stack: error.stack
    });
});

// Test 2: Simple ping to check if server is up
fetch(backendUrl)
.then(response => {
    console.log('✅ Server is up! Status:', response.status);
})
.catch(error => {
    console.error('❌ Server ping failed:', error.message);
});
