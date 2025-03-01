import { App, Plugin } from 'vue'
import { createPinia, getActivePinia } from 'pinia'

import { AuthOptions } from './src/types'
import { runMiddlewares } from './src/utils/plugins'
import { setAuthConfig } from './src/utils/config'
import { useAuthStore } from './src/stores/vue-auth'

// Define the plugin with the correct signature
export const authPlugin = <U = unknown>(options: AuthOptions<U>) => {
  const { router, loginRouteName, defaultAuthRouteName } = options

  const vueAuth: Plugin<[]> = {
    install: (app: App) => {
      // Store global authentication options
      setAuthConfig<U>(options)

      // Check if Pinia is already installed
      const isPiniaInstalled = !!getActivePinia() || options.storageOptions?.skipInit

      if (!isPiniaInstalled) {
        const pinia = createPinia()
        // Install Pinia if not already installed
        app.use(pinia)
      }

      // Load user from storage
      const store = useAuthStore(options.storageOptions)

      if (router) {
        /**
         * Handle system reset here
         */
        store.$subscribe((_, store) => {
          if (options.resetHandler && store.refreshed) {
            store.refreshed = false
            options.resetHandler(router)
          }
        })

        router.beforeEach((to, from, next) => {
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
              isAuthenticated: store.isAuthenticated
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
