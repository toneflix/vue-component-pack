import { App, Plugin } from 'vue';

import { AuthOptions } from './src/types';
import { createPinia } from 'pinia';
import { setAuthConfig } from './src/config';
import { useAuthStore } from './src/stores/auth';

// Define the plugin with the correct signature
export const authPlugin = (options: AuthOptions) => {
  const { router, loginRouteName, defaultAuthRouteName } = options;

  const vueAuth: Plugin<[]> = {
    install: (app: App) => {
      // Load user from storage 
      const store = useAuthStore();

      // Check if Pinia is already installed
      const isPiniaInstalled = Object.keys(app._context.config.globalProperties).includes("$pinia")

      if (!isPiniaInstalled) {
        const pinia = createPinia();
        // Install Pinia if not already installed
        app.use(pinia);
      }

      // Store global authentication options
      setAuthConfig(options);

      if (router) {

        router.beforeEach((to, from, next) => {
          const requiresAuth = to.meta.requiresAuth;
          const requiresGuest = to.meta.requiresGuest;

          // Resolve the login route
          const loginRoute = loginRouteName ? router.resolve(loginRouteName) : null
          // Resolve the default auth route
          const defaultAuthRoute = defaultAuthRouteName ? router.resolve(defaultAuthRouteName) : null

          if (!!loginRoute?.name && !!requiresAuth && !store.isAuthenticated) {
            // Redirect to the login page with a query parameter to return after login
            return next({
              name: loginRoute.name,
              query: { redirect: to.fullPath },
            });
          } else if (!!defaultAuthRoute?.name && !!requiresGuest && !!store.isAuthenticated) {
            // Redirect to the default auth page with a query parameter to return after login
            return next({
              name: defaultAuthRoute.name,
              query: { redirect: to.fullPath },
            });
          }

          next()
        })

      }

      store.loadUserFromStorage(options);
      app.config.globalProperties.$user = store.user;
    }
  };

  return vueAuth
}

// export default AuthPlugin;

export * from './src/composables/useAuth';
export * from './src/types';
