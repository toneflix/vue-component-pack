import "./style.css"

import { AuthUser, authPlugin } from '@toneflix/vue-auth';
import { createRouter, createWebHistory } from 'vue-router'

import App from './app.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { makeServer } from './server/index';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('./Pages/otp-input/OtpPage.vue') },
    { path: '/paystack', component: () => import('./Pages/paystack-inline/PaystackPage.vue') },
    {
      path: '/auth/profile',
      component: () => import('./Pages/vue-auth/UserPage.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/auth/login',
      name: 'login',
      meta: { requiresGuest: true },
      component: () => import('./Pages/vue-auth/LoginPage.vue'),
    },
    {
      path: '/auth/register',
      name: 'profile',
      component: () => import('./Pages/vue-auth/RegisterPage.vue'),
      meta: { requiresGuest: true }
    },
  ]
})

const app = createApp(App)

const pinia = createPinia()

const auth = authPlugin({
  router,
  baseUrl: 'http://example.com/api/v1',
  storageKey: 'my_auth_token',
  endpoints: {
    login: '/login',
    register: '/register',
    logout: '/logout',
    profile: '/profile'
  },
  loginRouteName: '/auth/login',
  defaultAuthRouteName: '/auth/profile',
  getAuthHeaders: () => {
    const token = localStorage.getItem('my_auth_token');
    return {
      Authorization: `Bearer ${token}`
    };
  },
  transformResponse (resp: { data: AuthUser, token?: string }) {
    return { user: resp.data, token: resp.token };
  },
})

app.use(pinia)
app.use(router)
app.use(auth);

makeServer()

app.mount('#app')
