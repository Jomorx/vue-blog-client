// 1.导入
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes:RouteRecordRaw[] = [
    { path: '/', name: '', component: () => import('../pages/Home.vue') },
    { path: '/history', component: () => import('../pages/History.vue') },
    { path: '/project', name: '', component: () => import('../pages/Project.vue') },
    { path: '/log', name: '', component: () => import('../pages/Log.vue') },
    { path: '/about', name: '', component: () => import('../pages/About.vue') },
    { path: '/friendChain', component: () => import('../pages/FriendChain.vue') },
]
const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes
})



export default router
