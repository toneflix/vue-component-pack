import './style.css'

import { AuthUser, authMiddleware, authPlugin, roleMiddleware } from '@toneflix/vue-auth'
import { RouterView, createRouter, createWebHistory } from 'vue-router'
import { createApp, h } from 'vue'

import App from './app.vue'
import { createPinia } from 'pinia'
// import { makeServer } from './server/index'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: h(RouterView),
      children: [
        { path: '/', component: () => import('./Pages/otp-input/OtpPage.vue') },
        { path: '/paystack', component: () => import('./Pages/components/PaystackPage.vue') },
        { path: '/forms', component: () => import('./Pages/vue-forms/FormPage.vue') },
        { path: '/viewer', component: () => import('./Pages/data-viewer/ViewerPage.vue') },
        { path: '/trix', component: () => import('./Pages/components/VueTrix.vue') },
        { path: '/csc', component: () => import('./Pages/components/VueCsc.vue') },
        {
          path: '/auth/profile',
          name: 'profile',
          component: () => import('./Pages/vue-auth/UserPage.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/auth/admin',
          name: 'admin',
          component: () => import('./Pages/vue-auth/UserPage.vue'),
          meta: { requiresAdmin: true }
        },
        {
          path: '/auth/login',
          name: 'login',
          meta: { requiresGuest: true },
          component: () => import('./Pages/vue-auth/LoginPage.vue')
        },
        {
          path: '/auth/register',
          name: 'register',
          component: () => import('./Pages/vue-auth/RegisterPage.vue'),
          meta: { requiresGuest: true }
        },
        {
          path: '/auth/forgot',
          name: 'forgot',
          component: () => import('./Pages/vue-auth/ForgotPage.vue'),
          meta: { requiresGuest: true }
        },
        {
          path: '/auth/reset',
          name: 'reset',
          component: () => import('./Pages/vue-auth/ResetPage.vue'),
          meta: { requiresGuest: true }
        }
      ]
    }
  ]
})

// makeServer()

const auth = authPlugin({
  router,
  baseUrl: 'http://example.com/api/v1',
  storageKey: 'my_auth_token',
  disableAutoRefresh: true,
  endpoints: {
    login: '/login',
    register: '/register',
    logout: '/logout',
    profile: '/profile',
    forgot: '/forgot',
    reset: '/reset'
  },
  loginRouteName: '/auth/login',
  resetHandler(router) {
    router.replace({ name: 'login' })
  },
  setAuthHeaders: () => {
    const token = localStorage.getItem('my_auth_token')
    return {
      Authorization: `Bearer ${token}`
    }
  },
  transformResponse(resp: { data: AuthUser; token?: string; timeout?: number; message?: string }) {
    return { user: resp.data, token: resp.token, timeout: resp.timeout, message: resp.message }
  },
  middlewares: [roleMiddleware('/', ['admin'], 'email'), authMiddleware({ name: 'login' })]
})

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(auth)

app.mount('#app')
