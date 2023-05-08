import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/homeView.vue')
    },
    {
        path: '/blog',
        name: 'blog',
        component: () => import('@/views/BlogView.vue'),
    },
    {
        path: '/blog/:id',
        name: 'post',
        component: () => import('@/views/postView.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
