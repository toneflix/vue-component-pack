# API Documentation

The `@toneflix/vue-auth` plugin provides a composable API for handling user authentication in a Vue.js application. This API allows you to manage login, registration, password recovery, and token management via methods that can be directly used in your Vue components. Here’s an overview of the available methods:

## `useAuth`

The `useAuth` composable provides access to authentication-related functions and state in your Vue application. It contains methods for managing user authentication, retrieving user data from storage, and handling user sessions.

Usage Example:

```vue:line-numbers
<script setup>
import { ref } from 'vue'
import { useAuth } from '@toneflix/vue-auth'

const { login, register, logout, forgot, reset, loadUserFromStorage, user, isAuthenticated } = useAuth()

// Example use in a form for login
const loginForm = ref({
  email: '',
  password: ''
})

const handleLogin = async () => {
    const {user, token, error} = await login(loginForm)

    if (error) {
        console.error('Login failed', err)
    } else {
        console.log('User logged in:', user.value)
    }
}
</script>
```

### Methods:

#### `login`

Attempts to log in the user by sending their credentials to the login endpoint.

```ts:line-numbers
login<U = AuthUser, T = LoginCredentials>(
  credentials: T,
  options: AuthOptions<U>
): Promise<{
  user: U
  token?: string;
  error?: undefined;
  message?: string;
}>
```

**Parameters**:

- `credentials` (Required): The login credentials (email and password).
- `options` (Optional): Custom options to override the default authentication configuration.

**Returns**: A Promise that resolves with the authentication response containing the user and token.

**Return Type**:

- `user`: Returns an authenticated user of type `AuthUser` or a custom user type `U`.
- `token`: The authentication token.
- `error`: Indicates if there was an error, can be an object holding error data..
- `message`: An optional message.

#### `register`

Attempts to create a new user account by sending the registration details to the register endpoint.

```ts:line-numbers
register<U = AuthUser, T = RegisterCredentials>(
  credentials: T,
  options?: AuthOptions<U>
): Promise<{
  user: U;
  token?: string;
  error?: undefined;
  message?: string;
}>
```

**Parameters**:

- `credentials` (Required): The registration details (email, password, and other custom fields).
- `options` (Optional): Custom options to override the default authentication configuration.

**Returns**: A Promise that resolves with the registration response containing the user and token.

**Return Type**:

- `user`: The registered user of type AuthUser or custom user type U.
- `token`: The authentication token.
- `error`: Indicates if there was an error, can be an object holding error data..
- `message`: An optional message.

#### `logout`

Logs the user out by clearing their session and optionally sending a request to the logout endpoint.

```ts:line-numbers
logout<T = unknown>(
  options?: AuthOptions,
  credentials?: T
): Promise<{
  error?: undefined;
  message?: string;
} | undefined>
```

**Parameters**:

- `options` (Optional): Custom options to override the default authentication configuration.
- `credentials` (Optional): Optional credentials or additional data to pass with the logout request.

**Returns**: A Promise that resolves when the logout is complete.

**Return Type**:

- `error`: Indicates if there was an error, can be an object holding error data..
- `message`: An optional message indicating the result of the logout.

#### `forgot`

Requests a password reset token by sending the user’s email to the forgot password endpoint.

```ts:line-numbers
forgot<T = unknown>(
  credentials?: T,
  options?: AuthOptions
): Promise<{
  countdown: Ref<number>;
  timeout?: number;
  error?: undefined;
  message?: string;
}>
```

**Parameters**:

- `credentials` (Optional): Data to send with the forgot password request, usually the user’s email.
- `options` (Optional): Custom options to override the default authentication configuration.

**Returns**: A Promise that resolves when the forgot password request is complete.

**Return Type**:

- `countdown`: A reactive countdown timer (`Ref<number>`) until a retry is allowed.
- `timeout`: Optional timeout duration.
- `error`: Indicates if there was an error, can be an object holding error data..
- `message`: An optional message.

#### `reset`

Attempts to reset the user’s password by sending the new password and the reset token to the reset endpoint.

```ts:line-numbers
reset<U = AuthUser, T = unknown>(
  credentials?: T,
  options?: AuthOptions<U>
): Promise<{
  user: U;
  error?: undefined;
  message?: string;
}>
```

**Parameters**:

- `credentials` (Optional): Data to send with the reset password request, including the new password and reset token.
- `options` (Optional): Custom options to override the default authentication configuration.

**Returns**: A Promise that resolves when the password reset is complete.

**Return Type**:

- `user`: The authenticated user with a new password.
- `error`: Indicates if there was an error, can be an object holding error data..
- `message`: An optional message.

#### `loadUserFromStorage`

Retrieves the token from local storage and loads the authenticated user from the API.

```ts:line-numbers
loadUserFromStorage<U = AuthUser, T = unknown>(
  options?: AuthOptions<U>,
  credentials?: T
): Promise<{
  user:  U;
  error?: undefined;
  message?: string;
}>
```

**Parameters**:

- `options` (optional): Overrides the default authentication options.
- `credentials` (optional): Additional data for fetching the user profile.

**Returns**: A Promise that resolves when the user is loaded from storage.

**Return Type**:

- `user`: The user loaded from storage (type `AuthUser` or custom user type `U`).
- `error`: Indicates if there was an error, can be an object holding error data..
- `message`: An optional message.

### Properties:

#### `user`

A reactive reference to the currently authenticated user.

```ts
user: Ref<AU>
```

- **Returns**: A reactive reference to the user object, or null if no user is logged in.

#### `isAuthenticated`

```ts
isAuthenticated: Ref<boolean>
```

- **Returns**: `true` if the user is authenticated, `false` otherwise.

### Example Usage in a Vue Component

```vue:line-numbers
<script setup>
import { ref } from 'vue'
import { useAuth } from '@toneflix/vue-auth'

const { login, user, isAuthenticated } = useAuth()

const form = ref({
  email: '',
  password: ''
})

const errorMessage = ref('')

const handleLogin = async () => {
    const {user, token, error} = await login(form)

    if (error) {
        errorMessage.value = 'Login failed. Please check your credentials.'
    } else {
        console.log('User logged in:', user.value)
    }
}
</script>

<template>
  <div>
    <form @submit.prevent="handleLogin">
      <input v-model="form.email" type="email" placeholder="Email" required />
      <input v-model="form.password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>

    <p v-if="errorMessage">{{ errorMessage }}</p>
    <p v-if="isAuthenticated">Welcome back, {{ user?.email }}</p>
  </div>
</template>
```
