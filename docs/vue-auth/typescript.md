# TypeScript Support

The `@toneflix/vue-auth` package is built with TypeScript in mind, offering a fully typed API that can easily be integrated into your TypeScript projects. This ensures you get full type safety and autocompletion for all authentication-related operations, helping prevent common mistakes during development.

Here’s an overview of the core types used in the useAuth composable and throughout the package.

## Core Types

### `AuthUser`

Represents the structure of an authenticated user. This can be extended to include more fields as needed by your application.

```ts:line-numbers
export interface AuthUser {
  id: string;
  email: string;
  token: string;
}
```

### `AuthResponse<U = unknown>`

Represents the response returned by the authentication endpoints, which includes the user object and a token. The user type can be customized with a generic type U.

```ts:line-numbers
export interface AuthResponse<U = AuthUser> {
  user: U;
  token: string;
  message?: string;
}
```

- `U`: This is a generic type representing the user object in the response. You can provide your own custom user type when using the useAuth composable or working with responses.

### `AuthEndpoints`

This interface defines the API endpoints required for authentication operations. You will need to provide these endpoints when configuring the authentication plugin.

```ts:line-numbers
export interface AuthEndpoints {
  login: string;
  logout: string;
  profile?: string;
  register: string;
  forgot?: string;
  reset?: string;
  refreshToken?: string;
}
```

- `login`: Endpoint for login requests.
- `logout`: Endpoint for logout requests.
- `profile`: (Optional) Endpoint for fetching the user’s profile.
- `register`: Endpoint for creating a new user account.
- `forgot`: (Optional) Endpoint for requesting a password reset token.
- `reset`: (Optional) Endpoint for resetting the password.
- `refreshToken`: (Optional) Endpoint for refreshing the user’s token.

### `CustomAxiosHeaders`

Defines custom headers that can be passed along with axios requests.

```ts:line-numbers
interface CustomHeaders {
  [key: string]: string;
}
export type CustomAxiosHeaders = (RawAxiosRequestHeaders | AxiosHeaders) & CustomHeaders;
```

### `AuthOptions<U = AuthUser>`

Represents the configuration options for the authentication system. It allows you to define endpoints, headers, token storage keys, and route names for redirection.

```ts:line-numbers
export interface AuthOptions<U = AuthUser> {
  router?: Router;
  baseUrl: string;
  endpoints: AuthEndpoints;
  storageKey?: string;
  axiosConfig?: object;
  loginRouteName?: string;
  getAuthHeaders?: () => Promise<CustomAxiosHeaders> | CustomAxiosHeaders;
  transformResponse?: (response: any) => {
    user: U;
    token?: string;
    timeout?: number;
    message?: string;
  }
  defaultAuthRouteName?: string;
}
```

- `U`: A generic type that allows you to define your custom user type for the AuthOptions.

### `LoginCredentials`

Represents the structure of the login credentials, typically an email and password.

```ts:line-numbers
export interface LoginCredentials {
  email: string;
  password: string;
}
```

### `RegisterCredentials`

Represents the structure of the registration credentials, which include email, password, and any other additional fields you may want to include.

```ts:line-numbers
export interface RegisterCredentials {
  email: string;
  password: string;
  [key: string]: unknown;
}
```

### `BaseError`

Represents the structure of an error. This can be extended to include more fields as needed by your application.

```ts:line-numbers
export interface BaseError extends Error {
  status?: string;
  errors?: Record<string, string | string[]>;
  [key: string]: unknown;
}
```

## Generic Types in `useAuth` Composable

The `useAuth` composable leverages TypeScript’s generics to allow flexible typing of the user object. This means you can provide a custom type for the user, making the composable adaptable to different user data structures in various applications.

Here’s a breakdown of how the generics are used in the useAuth composable:

### `login<U = AuthUser, T = LoginCredentials>`

```ts:line-numbers
login<U = AuthUser, T = LoginCredentials>(
  credentials: T,
  options: AuthOptions<U> = getAuthConfig()
): Promise<{
  user: U;
  token?: string;
  error?: BaseError;
  message?: string;
}>
```

- `U`: The type of the user returned from the login operation.
- `T`: The type of the credentials used for logging in (defaults to `LoginCredentials`).

**Return Type**:

- `user`: Returns an authenticated user of type `AuthUser` or a custom user type `U`.
- `token`: The authentication token.
- `error`: Indicates if there was an error, can be an object holding error data..
- `message`: An optional message.

### `register<U = AuthUser, T = RegisterCredentials>`

```ts:line-numbers
register<U = AuthUser, T = RegisterCredentials>(
  credentials: T,
  options: AuthOptions<U> = getAuthConfig()
): Promise<{
  user: AuthUser | U;
  token?: string;
  error?: BaseError;
  message?: string;
}>
```

- `U`: The type of the user returned from the registration operation.
- `T`: The type of the credentials used for registering (defaults to `RegisterCredentials`).

**Return Type**:

- `user`: The registered user of type AuthUser or custom user type U.
- `token`: The authentication token.
- `error`: Indicates if there was an error, can be an object holding error data..
- `message`: An optional message.

### `logout<T = unknown>`

```ts:line-numbers
logout<T = unknown>(
  options: AuthOptions = getAuthConfig(),
  credentials?: T
): Promise<{
  error?: BaseError;
  message?: string;
} | undefined>
```

**Return Type**:

- `error`: Indicates if there was an error, can be an object holding error data..
- `message`: An optional message indicating the result of the logout.

### `forgot<T = unknown>`

```ts:line-numbers
forgot<T = unknown>(
  credentials?: T,
  options: AuthOptions = getAuthConfig()
): Promise<{
  countdown: Ref<number>;
  timeout?: number;
  error?: BaseError;
  message?: string;
}>
```

- `T`: The type of additional credentials that may be passed to the forgot password operation.

**Return Type**:

- `countdown`: A reactive countdown timer (`Ref<number>`) until a retry is allowed.
- `timeout`: Optional timeout duration.
- `error`: Indicates if there was an error, can be an object holding error data..
- `message`: An optional message.

### `reset<U = AuthUser, T = unknown>`

```ts:line-numbers
reset<U = AuthUser, T = unknown> (
  credentials: T,
  options: AuthOptions<U> = getAuthConfig()
): Promise<{
  user: U;
  error?: BaseError;
  message?: string;
}>
```

- `T`: The type of additional credentials that may be passed to the reset password operation.

**Return Type**:

- `user`: The authenticated user with a new password.
- `error`: Indicates if there was an error, can be an object holding error data..
- `message`: An optional message.

### `loadUserFromStorage<U = AuthUser, T = unknown>`

```ts:line-numbers
loadUserFromStorage<U = AuthUser, T = unknown>(
  options: AuthOptions<U> = getAuthConfig(),
  credentials?: T
): Promise<{
  user: U;
  error?: BaseError;
  message?: string;
}>
```

- `U`: The type of the user loaded from storage.
- `T`: The type of the credentials that may be passed to the load operation.

**Return Type**:

- `user`: The user loaded from storage (type `AuthUser` or custom user type `U`).
- `error`: Indicates if there was an error, can be an object holding error data..
- `message`: An optional message.

## Custom User Type

Here are few ways you could use a custom user type by extending `AuthUser` or not:

### Plugin type inheritance

When initializing the plugin, you can pass a custom user type to the plugin instance to avoid errors with middlewares and other config dependencies.

```ts:line-numbers
import { authMiddleware, roleMiddleware, authPlugin } from '@toneflix/vue-auth'

interface CustomUser {
  id: number,
  name: string;
  userRole: string;
}

const auth = authPlugin<CustomUser>({
  router,
  middlewares: [
    authMiddleware({ name: 'login' }), 
    roleMiddleware({ name: 'forbidden' }, ['admin'], 'userRole')  
  ]
})
```

Middlewares can also recieve a custom user type if there is a need for it.

```ts:line-numbers
import { authMiddleware, roleMiddleware, authPlugin } from '@toneflix/vue-auth'

interface CustomUser {
  userRole: string;
}

const auth = authPlugin({
  router,
  middlewares: [
    authMiddleware({ name: 'login' }), 
    roleMiddleware<CustomUser>({ name: 'forbidden' }, ['admin'], 'userRole')  
  ]
})
```

### Composable type inheritance

You can pass a custom user type to the `useAuth` or `useInlineAuth` composables and it will be inherited by all exported methods.

```ts:line-numbers
interface CustomUser extends AuthUser {
  name: string;
  role: string;
}

const { user } = useAuth<CustomUser>()
```

Now, `user` will have the additional name and role properties in addition to the base properties of `AuthUser` (`id`, `email`, and `token`).

### Method type inheritance

You can also pass a custom user type to any of the exported methods if they require a different type alltogether.

```ts:line-numbers
interface CustomUser {
  id: string;
  name: string;
  role: string;
  token: string;
}

const { login } = useAuth()

const handleLogin = async () => {
  const { user } = await login<CustomUser>(form)

  if (!data.value.error) router.replace('/auth/profile')
}
```

This time, `user` is of a completely new interface that does not extend the base `AuthUser` interface.

With these types and generics, the `@toneflix/vue-auth` package provides a flexible, fully-typed authentication system that can be adapted to your project’s specific needs while offering strong TypeScript support.
