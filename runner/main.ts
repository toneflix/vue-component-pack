import { createRouter, createWebHistory } from 'vue-router'

import App from './app.vue'
import { createApp } from 'vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: () => import('./OtpPage.vue') },
        { path: '/paystack', component: () => import('./PaystackPage.vue') },
    ]
    ,
})
const app = createApp(App)

app.use(router)
app.mount('#app')
