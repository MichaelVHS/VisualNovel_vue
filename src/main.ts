import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: () => import('./components/Main.vue') },
        { path: '/game', component: () => import('./components/Game.vue') },
        { path: '/saves', component: () => import('./components/Saves.vue') },
        { path: '/settings', component: () => import('./components/Settings.vue') }
    ]
})

createApp(App)
    .use(router)
    .mount('#app')