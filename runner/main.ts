import './style.css'

import { AuthUser, authMiddleware, authPlugin, roleMiddleware } from '@toneflix/vue-auth'
import { createRouter, createWebHistory } from 'vue-router'

import App from './app.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { makeServer } from './server/index'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('./Pages/otp-input/OtpPage.vue') },
    { path: '/paystack', component: () => import('./Pages/paystack-inline/PaystackPage.vue') },
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
})

const auth = authPlugin({
  router,
  baseUrl: 'http://example.com/api/v1',
  storageKey: 'my_auth_token',
  endpoints: {
    login: '/login',
    register: '/register',
    logout: '/logout',
    // profile: '/profile',
    forgot: '/forgot',
    reset: '/reset'
  },
  // loginRouteName: '/auth/login',
  // defaultAuthRouteName: '/auth/profile',
  getAuthHeaders: () => {
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

makeServer()

app.mount('#app')
