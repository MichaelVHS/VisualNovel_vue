import {createRouter, createWebHistory} from "vue-router";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: () => import('../pages/MainPage.vue') },
        { path: '/game', component: () => import('../pages/GamePage.vue') },
        { path: '/saves', component: () => import('../pages/SavesPage.vue') },
        { path: '/settings', component: () => import('../pages/SettingsPage.vue') }
    ]
})