import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '@/views/login/Login.vue')
    },
    {
        path: '/',
        name: 'Main',
        component: () => import(/* webpackChunkName: "main" */ '@/layout/MainLayout.vue'),
        children: [
            {
                path: '/home',
                alias: '/',
                name: 'Home',
                component: () => import(/* webpackChunkName: "home" */ '@/views/home/Home.vue')
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router
