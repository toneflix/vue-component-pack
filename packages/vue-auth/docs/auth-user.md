# Accessing the User Object

Once the authentication is set up, you can access the authenticated user object throughout your application. The user object is available after login and can be used to customize content or verify roles.

## Directly in Components

Import the `useAuth` or the `useInlineAuth` composable to access the user object and authentication state directly in your components.

```vue:line-numbers{2,4,6}
<script setup lang="ts">
import { useAuth } from '@toneflix/vue-auth'
// OR
// import { useInlineAuth } from '@toneflix/vue-auth'

const { user, isAuthenticated } = useAuth() // Or useInlineAuth()

if (isAuthenticated.value) {
  console.log('Authenticated user:', user.value)
}
</script>
```

## Using Middlewares

Within middlewares, the user object and other authentication state data are passed as part of the state parameter. This is helpful for route guards or custom redirection logic.

```ts:line-numbers{2,7}
middlewares: [
  (to, from, next, { user, isAuthenticated }) => {
    if (!isAuthenticated) {
      return next({ name: 'login' })
    }
    // Access user details, e.g., for role-based access control
    if (user?.role !== 'admin' && to.meta.requiresAdmin) {
      return next({ name: 'not-authorized' })
    }
    next()
  }
]
```

## Usage with `loginRouteName` and `defaultAuthRouteName`

Set up `loginRouteName` to redirect unauthenticated users, while `defaultAuthRouteName` redirects authenticated users to a specified page. This simplifies managing user access across routes, while middlewares handle additional role-based or custom checks.
By accessing the user object directly or through middlewares, you can customize the user experience and enforce role-based permissions throughout your app.

## In Templates

In addition to accessing the user object in scripts, you can also access it directly in templates using `$user`. This can be particularly useful for conditionally displaying elements or adjusting content based on the user’s authentication status or properties.

```vue:line-numbers{2,3,4}
<template>
  <div v-if="$isAuthenticated">
    <p>Welcome, {{ $user.name }}!</p>
    <p>Your role: {{ $user.role }}</p>
  </div>
  <div v-else>
    <p>Please log in to access this content.</p>
  </div>
</template>
```

### Typescript Usage

To access `$user` and `$isAuthenticated` in templates using TypeScript, you’ll need to define them explicitly in the component to avoid TypeScript errors. Vue’s `ComponentCustomProperties` interface can be extended to include these properties, enabling TypeScript to recognize them.

```ts
import { AuthUser } from '@toneflix/vue-auth' // You can use your own user interface here

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $user: AuthUser | null
    $isAuthenticated: boolean
  }
}
```
