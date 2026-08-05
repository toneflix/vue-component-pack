import { App, Plugin } from 'vue'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { initPinia, runMiddlewares } from './utils/plugins'

import { AuthOptions } from './types'
import { setAuthConfig } from './utils/config'
import { useAuthStore } from './stores/vue-auth'

// Define the plugin with the correct signature
export const authPlugin = <U = unknown>(options: AuthOptions<U>) => {
  const { router, loginRouteName, defaultAuthRouteName } = options

  const vueAuth: Plugin<[]> = {
    install: (app: App) => {
      // Store global authentication options

      setAuthConfig<U>(options)

      // Check and install Pinia if it is not already installed
      initPinia(app, options.storageOptions)

      // Load user from storage
      const store = useAuthStore(options.storageOptions)

      // Restore the token synchronously, before any guard is registered, so the
      // first navigation reads the real `isAuthenticated` instead of racing the
      // async profile refresh below and bouncing a signed-in user to login.
      store.restoreToken(options)

      if (router) {
        /**
         * Handle system reset here.
         *
         * Subscribed once, at install. Subscribing inside the guard added one
         * permanent subscriber per navigation — each closing over a `next` from a
         * navigation that had already finished — so a single session reset fired
         * `resetHandler` once for every route the user had ever visited.
         */
        let activeNavigation: {
          to: RouteLocationNormalized
          from: RouteLocationNormalized
          next: NavigationGuardNext
        } | null = null

        store.$subscribe((_, state) => {
          if (options.resetHandler && state.sessionExpired) {
            state.sessionExpired = false

            const navigation = activeNavigation
            activeNavigation = null

            if (navigation) {
              options.resetHandler(router, navigation.to, navigation.from, navigation.next)
            }
          }
        })

        router.beforeEach((to, from, next) => {
          // vue-router must see exactly one resolution per navigation. The guard
          // below and `resetHandler` can both reach for it, so funnel both through
          // a latch that drops everything after the first call.
          let handled = false
          const guardedNext = ((arg?: never) => {
            if (handled) {
              return
            }
            handled = true
            activeNavigation = null
            next(arg)
          }) as NavigationGuardNext

          activeNavigation = { to, from, next: guardedNext }

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
            return guardedNext({
              name: loginRoute.name,
              query: { redirect: to.fullPath }
            })
          } else if (!!defaultAuthRoute?.name && !!requiresGuest && !!store.isAuthenticated) {
            // Redirect to the default auth page with a query parameter to return after login
            return guardedNext({
              name: defaultAuthRoute.name,
              query: { redirect: to.fullPath }
            })
          }

          /**
           * Run the route middlewares
           */
          if (options.middlewares) {
            runMiddlewares(options.middlewares, to, from, guardedNext, router, {
              user: store.user as never,
              token: store.token,
              isAuthenticated: store.isAuthenticated,
              $subscribe: store.$subscribe,
              $onAction: store.$onAction,
              $router: router,
              $patch: store.$patch
            })
          } else {
            guardedNext()
          }
        })
      }

      // Fire-and-forget profile refresh. The token is already in place above, so
      // this only fills in the user object; failures are handled inside the action.
      void store.loadUserFromStorage(options, undefined, true)

      app.config.globalProperties.$user = store.user as never
      app.config.globalProperties.$isAuthenticated = store.isAuthenticated
    }
  }

  return vueAuth
}

// export default AuthPlugin;

export * from './composables/useInlineAuth'
export * from './composables/useAuth'
export * from './utils/middlewares'
export * from './utils/plugins'
export * from './types'
export { http } from './utils/http'
export { storage } from './utils/storage'
export { useAuthStore } from './stores/vue-auth'
