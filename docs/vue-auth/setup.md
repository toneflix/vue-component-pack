# Setting Up @toneflix/vue-auth

The `@toneflix/vue-auth` plugin provides a flexible and highly configurable authentication system for your Vue.js application. This guide walks you through configuring the plugin, explaining the available options and how they interact with each other.

## 1. Router Setup

The `@toneflix/vue-auth` plugin integrates seamlessly with Vue Router to handle route guards for authenticated and guest users.

### `router`

The router option is the Vue Router instance of your app. This is essential because the plugin sets up route guards for protecting authenticated routes and redirecting unauthenticated users.

Example:

```ts:line-numbers{9}
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [...]
})

authPlugin({
  router,
  //...otherOptions
})
```

Checkout the [Route Protection Section](#_6-route-protection) for usage details.

## 2. API Configuration

### `baseUrl`

This is the base URL for all authentication-related API requests. It should point to your server’s authentication endpoints.

Example:

```ts
baseUrl: 'https://example.com/api/v1'
```

### `endpoints`

The endpoints option allows you to configure which API endpoints will be used for login, registration, logout, and profile retrieval. Here’s what each option does:

- `login`: The endpoint where login requests will be sent.
- `logout`: The endpoint to log out a user.
- `profile`: (optional) The endpoint to fetch a user’s profile after authentication.
- `register`: The endpoint for user registration.
- `forgot`: (optional) The endpoint where password reset token requests will be sent.
- `reset`: (optional) The endpoint where password reset requests are handled.
- `refreshToken`: (optional) The endpoint for token refresh.

Example configuration:

Example:

```ts
endpoints: {
  login: '/login',
  logout: '/logout',
  register: '/register',
  profile: '/profile',
  forgot: '/forgot',
  reset: '/reset',
  refreshToken: '/refresh-token'
}
```

These endpoints will be appended to the baseUrl, so make sure the relative paths are correct.

## 3. Storage and Tokens

### `storageKey`

The `storageKey` is the key under which the authentication token will be stored in local storage. By default, the token is saved as a string in localStorage after a successful login. You can provide a custom key to avoid conflicts with other tokens.

Example:

```js
storageKey: 'my_auth_token'
```

### `storageOptions`

This option allows you to pass extra options to the auth store instance when needed. This becomes extremely usefull if you use pinia-plugin-persists or another pinia plugin that requires you to pass options to your stores. E.g. `{ persist: true }`

Example:

```js
storageOptions: { persist: true }
```

### `setAuthHeaders`

This option provides headers for authenticated requests. You can define a function that returns headers, and it’s commonly used to add the Authorization header with the token.

Example:

```ts
setAuthHeaders: () => {
  const token = localStorage.getItem('my_auth_token')
  return {
    Authorization: `Bearer ${token}`
  }
}
```

This function is useful for passing authentication headers when making profile or logout requests.

## 4. Routing Behavior

### `loginRouteName`

The `loginRouteName` defines the name of the login route in your application. This is essential for redirecting unauthenticated users when they try to access protected routes.

Example:

```ts
loginRouteName: '/auth/login'
```

When an unauthenticated user tries to access a route that requires authentication, they will be redirected to this route.

### `defaultAuthRouteName`

The `defaultAuthRouteName` is the route where authenticated users will be redirected if they try to access a route that requires a guest, like the login or registration routes.

Example:

```ts
defaultAuthRouteName: '/auth/profile'
```

### `middlewares`

The `middlewares` is an array of functions that will be called and used to validate user actions across your application's routes.

Example:

```ts
middlewares: [
  (to, from, next, state) => {
    if (!state.isAuthenticated && to.name !== 'login') {
      return next({ name: 'login' })
    }
    next()
  }
]
```

When an authenticated user tries to access a route that requires guest, they will be redirected to this route.

## 5. Transforming Responses

### `transformResponse`

The `transformResponse` function allows you to transform the API response before storing the user and token data. This is useful if your API returns a different structure than the default `AuthUser` interface.

Example:

```ts
transformResponse(resp: {
  data: AuthUser;
  token?: string;
  timeout?: number;
  message?: string
}) {
  return {
    user: resp.data,
    token: resp.token,
    timeout: resp.timeout,
    message: resp.message
  }
}
```

This function gives you control over how user data and tokens are extracted from the API response.

## 6. Route Protection

To manage access to certain routes based on authentication status, the `@toneflix/vue-auth` plugin relies on meta properties in your Vue Router configuration. These meta fields allow you to specify whether a route requires the user to be authenticated or if it should only be accessible to guests (unauthenticated users).

Here’s how you can add these meta properties to your routes.

Example Route Setup

In your Vue Router configuration, you can define routes that either:

1. Require the user to be authenticated (`meta.requiresAuth`), or
2. Restrict access to guests (unauthenticated users) (`meta.requiresGuest`).

### Step 1: Define Routes with `meta.requiresAuth`

For routes that should only be accessible to authenticated users, set the `meta.requiresAuth` property to `true`. This ensures that only users who have logged in can access the route.

```ts:line-numbers{16,22}
import { createRouter, createWebHistory } from 'vue-router'
import Profile from '@/components/Profile.vue'
import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/auth/login',
    name: 'login',
    component: Login,
    meta: { requiresGuest: true } // Only accessible to unauthenticated users
  },
  {
    path: '/auth/profile',
    name: 'profile',
    component: Profile,
    meta: { requiresAuth: true } // Requires authentication to access
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```

### Step 2: Define Routes with `meta.requiresGuest`

For routes that should only be accessible to guests (users who are not logged in), use `meta.requiresGuest`.

For example, you might want to restrict access to the login and registration pages so that authenticated users can’t visit them again once they’re logged in.

```ts:line-numbers{5}
{
  path: '/auth/login',
  name: 'login',
  component: Login,
  meta: { requiresGuest: true } // Only accessible to unauthenticated users
}
```

### How It Works

- `meta.requiresAuth: true`: This ensures that the user must be authenticated (logged in) to access the route. If they are not authenticated, they will be redirected to the login page.
- `meta.requiresGuest: true`: This ensures that the route is only accessible to guests (unauthenticated users). If the user is already authenticated, they will be redirected to the default authenticated page.

Full Example of Protected and Guest Routes

```ts:line-numbers{11,17,23,29}
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/auth/login',
    name: 'login',
    component: Login,
    meta: { requiresGuest: true } // Only accessible to unauthenticated users
  },
  {
    path: '/auth/register',
    name: 'register',
    component: Register,
    meta: { requiresGuest: true } // Only accessible to unauthenticated users
  },
  {
    path: '/auth/profile',
    name: 'profile',
    component: Profile,
    meta: { requiresAuth: true } // Requires authentication to access
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: { requiresAuth: true } // Requires authentication to access
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```

By adding these meta properties, you give `@toneflix/vue-auth` the necessary information to control access to your routes based on the user’s authentication status.

### Summary

- `meta.requiresAuth: true`: Protects routes so only authenticated users can access them.
- `meta.requiresGuest: true`: Restricts routes to only guests (unauthenticated users).

This setup allows you to easily control which users have access to certain parts of your app based on whether they are logged in or not.

## 7. Pinia Integration

The `@toneflix/vue-auth` plugin requires Pinia for state management. When you install the plugin, it automatically checks whether Pinia is already installed in your Vue application.

- **If you’ve already registered Pinia**: The authPlugin will detect this and will not register a new Pinia instance. Instead, it will use the one that is already set up in your application.
- **If Pinia is not set up**: The plugin will install a new Pinia instance for you.

This flexibility ensures that your application’s state management remains simple and efficient, regardless of when or how Pinia is added to your app.

**Example:**

In your app’s main setup file, after you’ve installed Pinia or if you haven’t done so, you can install the authentication plugin:

```ts:line-numbers{2,8,11}
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { authPlugin } from '@toneflix/vue-auth'
import App from './App.vue'
import router from './router'

// If you've already set up Pinia
const pinia = createPinia()

const app = createApp(App)
app.use(pinia) // Use your existing Pinia instance

app.use(authPlugin({
  baseUrl: 'http://example.com/api/v1',
  //...otherOptions
}))

app.use(router)
app.mount('#app')
```

This ensures that the authentication state is globally available in your application. You can use useAuthStore to access the authentication state throughout your app.

## Full Example Setup

Here’s what a complete setup might look like:

```ts:line-numbers{3,13-36,40}
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { authPlugin } from '@toneflix/vue-auth'
import App from './App.vue'

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes: [...]
})

// Install the auth plugin
const auth = authPlugin({
  router,
  baseUrl: 'https://example.com/api/v1',
  storageKey: 'my_auth_token',
  storageOptions: { persist: true },
  endpoints: {
    login: '/login',
    register: '/register',
    logout: '/logout',
    profile: '/profile',
    forgot: '/forgot',
    reset: '/reset',
  },
  loginRouteName: '/auth/login',
  defaultAuthRouteName: '/auth/profile',
  setAuthHeaders: () => {
    const token = localStorage.getItem('my_auth_token')
    return {
      Authorization: `Bearer ${token}`
    }
  },
  transformResponse(resp: { data: AuthUser; token?: string }) {
    return { user: resp.data, token: resp.token }
  }
})

// Create the app and use the plugin
const app = createApp(App)
app.use(auth)
app.use(router)
app.mount('#app')
```

This guide should provide clarity on how to configure @toneflix/vue-auth and how the options work together to provide a seamless authentication experience.
