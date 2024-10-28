# Middlewares

The auth plugin supports customizable middlewares to manage route-specific authorization and validation across your application. Middleware functions are executed in sequence on routes requiring authentication or custom logic.

Middlewares can perform checks, validation, and redirection based on user state, permissions, or any other conditions, and then either allow the navigation to continue or redirect to a different route.

## Configuration

To enable middlewares, add them to the middlewares array in the AuthOptions when initializing the plugin. Each middleware function receives specific parameters to help with navigation and authorization checks.

### AuthOptions Configuration

```ts:line-numbers{4-21}
import { authPlugin } from '@toneflix/vue-auth';
import { router } from './router';

const auth = authPlugin({
  router,
  // Other options...
  middlewares: [
    (to, from, next, { user, token, isAuthenticated }) => {
      // Example middleware function
      if (!isAuthenticated && to.name !== 'login') {
        return next({ name: 'login' });
      }
      next();
    },
    (to, from, next, { user }) => {
      if (user?.role !== 'admin' && to.meta.requiresAdmin) {
        return next({ name: 'not-authorized' });
      }
      next();
    },
  ],
});
```

### Middleware Function Signature

Each middleware function should have the following signature:

```ts
(to, from, next, context) => void
```

- `to` (RouteLocationNormalized): The target route the user is navigating to.
- `from` (RouteLocationNormalized): The route the user is navigating from.
- `next` (NavigationGuardNext): A function that must be called to proceed with navigation. This function accepts optional parameters to control navigation (e.g., redirect to another route).
- `context` (`{ user: U; token?: string; isAuthenticated: boolean }`): Contextual information about the user’s state, including:
  - `user`: The current user object.
  - `token`: The authentication token, if available.
  - `isAuthenticated`: Boolean flag indicating if the user is authenticated.

### Calling `next()`

`next()` is critical for middleware execution. Each middleware must call `next()` to proceed. Failing to call `next()` will prevent navigation and raise an error.

- Allow navigation: `next()`
- Redirect to another route: `next({ name: 'route-name' })`
- Cancel navigation with an error: `next(new Error('Error message'))`

## Example Usage

1. **Basic Authentication Middleware**

```ts:line-numbers
middlewares: [
  (to, from, next, { isAuthenticated }) => {
    if (!isAuthenticated && to.meta.requiresAuth) {
      return next({ name: 'login' })
    }
    next()
  }
]
```

This middleware checks if a route requires authentication (`to.meta.requiresAuth`). If the user is not authenticated, they are redirected to the login page.

2. **Role-Based Authorization**

```ts:line-numbers
middlewares: [
  (to, from, next, { user }) => {
    if (to.meta.requiresAdmin && user?.role !== 'admin') {
      return next({ name: 'not-authorized' });
    }
    next();
  },
]
```

This middleware checks if a route requires an admin role (to.meta.requiresAdmin). If the user does not have the correct role, they are redirected to a not-authorized page.

3. **Multi-Step Middlewares**

Middlewares can be chained to create multi-step validations. For example, requiring a user to be authenticated and to have a specific role:

```ts:line-numbers
middlewares: [
  (to, from, next, { isAuthenticated }) => {
    if (!isAuthenticated) return next({ name: 'login' });
    next();
  },
  (to, from, next, { user }) => {
    if (user?.role !== 'admin' && to.meta.requiresAdmin) {
      return next({ name: 'not-authorized' });
    }
    next();
  },
]
```

## Error Handling

If a middleware does not call `next()`, an error will be raised to alert the developer. This ensures that navigation will not silently fail.

### Additional Notes

- Ordering: Middlewares are executed in the order they are defined. Make sure to arrange them logically.
- Redirects: If a middleware calls `next()` with a redirect parameter, subsequent middlewares are skipped. The navigation will redirect immediately.

## Putting It All Together

Below is a complete example of the auth plugin with middlewares handling various scenarios:

```ts:line-numbers
import { authPlugin } from '@toneflix/vue-auth';
import { router } from './router';

const auth = authPlugin({
    router,
    baseUrl: 'https://example.com/api/v1',
    storageKey: 'my_auth_token',
    endpoints: {
        login: '/login',
        register: '/register',
        logout: '/logout',
    },
    middlewares: [
        // Redirect unauthenticated users to login
        (to, from, next, { isAuthenticated }) => {
            if (!isAuthenticated && to.meta.requiresAuth) {
                return next({ name: 'login' });
            }
            next();
        },
        // Restrict access to admin routes
        (to, from, next, { user }) => {
            if (to.meta.requiresAdmin && user?.role !== 'admin') {
                return next({ name: 'not-authorized' });
            }

            next();
        },
    ],
});
```

This setup provides a robust approach to handling authentication and authorization across your application routes. Middlewares can be easily customized for specific project needs, making them a versatile tool for managing user access and navigation flow.

## Using `loginRouteName` and `defaultAuthRouteName` with Middlewares

When using middlewares, the `loginRouteName` and `defaultAuthRouteName` options can help manage default redirections:

- `loginRouteName`: Redirects unauthenticated users to the login page when they attempt to access protected routes.
- `defaultAuthRouteName`: Redirects authenticated users to a specified default page when they try to access guest-only routes.

Middlewares provide additional flexibility by allowing custom route handling on top of these redirects. For example, you can enforce role-based access or other route restrictions within the middleware functions, while `loginRouteName` and `defaultAuthRouteName` handle standard authentication redirections.

```ts:line-numbers
const auth = authPlugin({
    router,
    loginRouteName: '/auth/login',
    defaultAuthRouteName: '/profile',
    middlewares: [
        (to, from, next, { user }) => {
            if (to.meta.requiresAdmin && user?.role !== 'admin') {
                return next({ name: 'not-authorized' })
            }

            next()
        }
    ]
});
```

In this example, loginRouteName manages the basic redirection for unauthenticated users, while middlewares handle additional custom checks.

## Middleware Presets

The plugin ships with reusable middlewares that can be utilized to streamline route protection based on authentication status or user roles. These preset middlewares are designed to simplify the implementation of common route-guard logic.

### Available Preset Middlewares

#### `authMiddleware`

**Purpose**: Ensures that users are authenticated before accessing certain routes.

**Behavior**:

- Checks if the target route (`to`) requires authentication (`to.meta.requiresAuth`).
- If the user is not authenticated, they will be redirected to the specified `redirectRoute`.

**Usage**:

```ts:line-numbers
import { authMiddleware } from '@toneflix/vue-auth'

middlewares: [
  authMiddleware({ name: 'login' })
]
```

**Parameters**:

- `redirectRoute`: The route to redirect to if the user fails the authentication check. Typically, this would be the login page or another public route.

#### `roleMiddleware`

**Purpose**: Validates user roles to restrict access to specific routes.

**Behavior**:

- Checks if the user has one or more required roles to access a specific route.
- If the user does not possess the necessary roles, they are redirected to the specified `redirectRoute`.

**Usage**:

```ts:line-numbers
import { roleMiddleware } from '@toneflix/vue-auth'

middlewares: [
  roleMiddleware({ name: 'forbidden' }, ['admin', 'editor'], 'userRoles', 'requiresAdmin')
]
```

**Parameters**:

- `redirectRoute`: The route to redirect to if the user does not have the required role(s).
- `roles`: A single role or an array of roles that the user must have to access the route.
- `roleKey` (optional): The key in the user object that holds the user’s roles. Default is `roles`.
- `metaKey` (optional): The meta field in the route (`to.meta`) that specifies routes requiring the specified roles. Default is `requiresAdmin`.

**Example Usage in main.ts**

```ts:line-numbers
import { authMiddleware, roleMiddleware } from '@toneflix/vue-auth'

const auth = authPlugin({
  router,
  middlewares: [
    authMiddleware({ name: 'login' }), // Redirects to login if not authenticated
    roleMiddleware({ name: 'forbidden' }, ['admin']) // Redirects to forbidden if user lacks 'admin' role
  ]
})
```
