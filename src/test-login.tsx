import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LoginForm } from './features/auth/components/LoginForm'
import './index.css'

// Simple test page for login
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Test Login Page</h1>
      <LoginForm />
      
      <div style={{ maxWidth: '400px', margin: '20px auto', padding: '20px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
        <h3>Test Credentials:</h3>
        <p><strong>Email:</strong> owner@gmail.com</p>
        <p><strong>Password:</strong> password123</p>
        <p style={{ fontSize: '12px', color: '#666' }}>
          Open browser console (F12) to see detailed logs
        </p>
      </div>
    </div>
  </StrictMode>,
)
