# Auth Feature - Login Endpoint

## Endpoint

```
POST {{baseurl}}/api/users/login
```

## Request Body

```json
{
  "email": "owner@gmail.com",
  "password": "password123"
}
```

## Response

```json
{
  "success": true,
  "message": "Login berhasil",
  "data": {
    "user": {
      "id": "eec18dab-d135-4122-92fa-9863f9cac8f5",
      "name": "User Testing",
      "email": "owner@gmail.com",
      "role": "OWNER",
      "deletedAt": null,
      "createdAt": "2026-02-07T04:03:13.292Z",
      "updatedAt": "2026-02-07T04:03:13.292Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

## Usage

### 1. Using the API function directly

```typescript
import { loginUser } from "@/features/auth";

const credentials = {
  email: "owner@gmail.com",
  password: "password123",
};

try {
  const response = await loginUser(credentials);
  console.log("Login successful:", response.data);
} catch (error) {
  console.error("Login failed:", error);
}
```

### 2. Using the custom hook (Recommended)

```typescript
import { useLogin } from '@/features/auth';

function MyLoginComponent() {
  const { login, isLoading, error } = useLogin();

  const handleLogin = async () => {
    try {
      await login({
        email: 'owner@gmail.com',
        password: 'password123'
      });
      // Login berhasil - user dan token otomatis tersimpan di auth store
    } catch (err) {
      // Error handling
    }
  };

  return (
    <div>
      <button onClick={handleLogin} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Login'}
      </button>
      {error && <p>{error}</p>}
    </div>
  );
}
```

### 3. Using the LoginForm component

```typescript
import { LoginForm } from '@/features/auth/components/LoginForm';

function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
}
```

## Features

- ✅ Type-safe API calls with TypeScript
- ✅ Automatic token management (stored in localStorage via Zustand)
- ✅ Automatic Authorization header injection for authenticated requests
- ✅ Loading and error state management
- ✅ Integration with auth store

## Files Created

1. **src/features/auth/types/auth.types.ts** - Updated with LoginRequest and LoginResponse types
2. **src/features/auth/api/login.ts** - Login API function
3. **src/features/auth/hooks/useLogin.ts** - Custom React hook for login
4. **src/features/auth/components/LoginForm.tsx** - Example login form component
5. **src/features/auth/index.ts** - Barrel exports for easy imports

## How It Works

1. User submits login credentials (email & password)
2. `loginUser()` sends POST request to `/api/users/login`
3. On success, response contains user data and JWT token
4. `useLogin` hook automatically calls `setAuth()` to store user and token in Zustand store
5. Token is persisted in localStorage as 'auth-storage'
6. Axios interceptor automatically adds token to all subsequent API requests

## Auth Store

The auth store (Zustand) manages:

- `user`: Current user object or null
- `token`: JWT token or null
- `isAuthenticated`: Boolean flag
- `setAuth(user, token)`: Set user and token
- `logout()`: Clear auth state
