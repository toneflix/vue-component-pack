import { App, Plugin } from 'vue'
import { initPinia, runMiddlewares } from './src/utils/plugins'

import { AuthOptions } from './src/types'
import { setAuthConfig } from './src/utils/config'
import { useAuthStore } from './src/stores/vue-auth'

// Define the plugin with the correct signature
export const authPlugin = <U = unknown>(options: AuthOptions<U>) => {
  const { router, loginRouteName, defaultAuthRouteName } = options

  const vueAuth: Plugin<[]> = {
    install: async (app: App) => {
      // Store global authentication options

      setAuthConfig<U>(options)

      // Check and install Pinia if it is not already installed
      initPinia(app, options.storageOptions)

      // Load user from storage
      const store = useAuthStore(options.storageOptions)

      if (router) {
        router.beforeResolve((to, from, next) => {
          /**
           * Handle system reset here
           */
          store.$subscribe((_, store) => {
            if (options.resetHandler && store.sessionExpired) {
              store.sessionExpired = false
              options.resetHandler(router, to, from, next)
            }
          })
          // })

          // router.beforeEach((to, from, next) => {
          const requiresAuth = to.meta.requiresAuth
          const requiresGuest = to.meta.requiresGuest

          // Resolve the login route
          const loginRoute = loginRouteName ? router.resolve(loginRouteName) : null

          // Resolve the default auth route
          const defaultAuthRoute = defaultAuthRouteName
            ? router.resolve(defaultAuthRouteName)
            : null

          if (!!loginRoute?.name && !!requiresAuth && !store.isAuthenticated) {
            // Redirect to the login page with a query parameter to return after login
            return next({
              name: loginRoute.name,
              query: { redirect: to.fullPath }
            })
          } else if (!!defaultAuthRoute?.name && !!requiresGuest && !!store.isAuthenticated) {
            // Redirect to the default auth page with a query parameter to return after login
            return next({
              name: defaultAuthRoute.name,
              query: { redirect: to.fullPath }
            })
          }

          /**
           * Run the route middlewares
           */
          if (options.middlewares) {
            runMiddlewares(options.middlewares, to, from, next, router, {
              user: store.user as never,
              token: store.token,
              isAuthenticated: store.isAuthenticated,
              $subscribe: store.$subscribe
            })
          } else {
            next()
          }
        })
      }

      store.loadUserFromStorage(options, undefined, true)

      app.config.globalProperties.$user = store.user as never
      app.config.globalProperties.$isAuthenticated = store.isAuthenticated
    }
  }

  return vueAuth
}

// export default AuthPlugin;

export * from './src/composables/useInlineAuth'
export * from './src/composables/useAuth'
export * from './src/utils/middlewares'
export * from './src/utils/plugins'
export * from './src/types'
export { useAuthStore } from './src/stores/vue-auth'
